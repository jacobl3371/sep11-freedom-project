import express from "express"
import i18next from "i18next"
import middleware from "i18next-http-middleware"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const localesDir = path.join(__dirname, "locales")

const app = express()

const languages = ["en", "es", "de"]

const resources = {}
languages.forEach((lang) => {
    const filePath = path.join(localesDir, `${lang}.json`)
    const content = fs.readFileSync(filePath, "utf8")
    resources[lang] = JSON.parse(content)
})

i18next.use(middleware.LanguageDetector).init({
    preload: ["en", "es", "de"],
    fallbackLng: "en",
    resources,
})

app.use(
    middleware.handle(i18next, {
        removeLngFromUrl: false,
    })
)

app.use(async (req, res, next) => {
    try {
        const ip = "45.14.233.209"

        if (ip === "127.0.0.1" || ip === "::1") {
            return next()
        }

        const apiUrl = `https://freeipapi.com/api/json/${ip}`
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`API responded with status ${response.status}`)
        }
        const data = await response.json()
        
        const countryToLanguage = {
            US: "en",
            ES: "es",
            DE: "de",
        }

        if (data.countryCode && countryToLanguage[data.countryCode]) {
            req.language = countryToLanguage[data.countryCode]
            req.i18n.changeLanguage(req.language)
        }
        next()
    } catch (error) {
        console.error("Error detecting location:", error.message)
        next()
    }
})

app.get("/", (req, res) => {
    const welcomeMessage = req.t("hello")
    res.send(`
        <html>
            <head>
                <title>Immigration App</title>
            </head>
            <body>
                <h1>${welcomeMessage}</h1>
                <p>Detected language: ${req.language || "Not detected"}</p>
            </body>
        </html>            
    `)
})

app.listen(5000)