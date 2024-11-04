# Entry 1
##### 11/4/24

### Choosing our Tool
Me and my partner [Caleb Garcia](https://github.com/calebg4205) have decided to use Node.js with Express in order to build an application which automatically translates the content on its webpage according to the location of the user. The website itself would be a fake, semi-useful immigration guide designed to set a model for future resources of the such, which seldom provide translation when people from various different regions may need access to that resource. I had the idea initially to build from scratch a self-translating app that could be simulated with a VPN or Tor browser, and easily gave users the option to translate the content to their desired language. Caleb had the idea to make the website about immigration giving the project a hook and premise that would make it sell better.

He also decided to study React to integrate into the frontend and make the webpage load faster, but I don't know if we will end up using it as well in the final product. Right now my goal is to keep learning Express JS and Node and learn other aspects of JavaScript until I can catch up to learning more in depth routing with Express applications. Throughout much of the early stages of the project I am just going to be focusing on making the bare-bones IP-address and region detection web API. From there we will go on to integrating that API into the DOM and expanding it to apply translation to the frontend according to the user's detected region.

### Tinkering
At first I wanted to set up Node and Express on my desktop, but then I found it would be easier to install Express in my web IDE, since cs50 already had Node and npm installed.

I set up a new folder, tool-tinker2, which is my individual folder with my own Express application set up separate from the folder I cloned from my partner's repo and that I would push to if I wanted Caleb to integrate any changes.

Within that folder I ran the ```npm init``` command to initiate a package.json file in that directory. I installed Express in my new app directory by running ```npm install express```. I went on to follow the "hello world" documentation to set up a simple app with Express in my index.js file, changing "hello world" to "tool tinker" and the console.log message to "Tool tinker app".

I ran the app with ```node index.js```, which returns the message ```Tool tinker app 3000``` since it is referring to port 3000 and the console.log message was changed to "Tool tinker app" instead of "hello world"

### Engineering Design Process
Right now, I am  beginning to learn my tool, where I will go on to experiment with building increasingly complex web APIs with Express and start focusing in on attaining the user's IP address and building more and more of the final product backend. We have finalized the tool, and established the problem at hand that our application aims to address, which is that immigrants and non-native speaking citizens lack access to sufficiently translated resources. On Thursdays afterschool in coding club, our friend Shi Jun has started catching us up with personal lessons on everything we need to learn and fully understand in JavaScript to sufficiently work with Express. Later this will transform into more in-depth tips into working with Express and also, later, React if Caleb is still making progress with that tool.

### Skills
A skill that I strengthened since I started working on the Freedom Project is my *ability to communicate*. I approached Caleb with my idea asking if he wanted to work on the project with me this year and if he could give it a more presentable premise. Caleb went above and beyond my expectations and reinvented it with the idea of an immigration app which gives the project a lot more purpose and a general, more easily explainable function at the surface level beyond the technical backend routing which most people won't understand, making the project more likely to win the showcase.

Subsequently, I learned to better apply *consideration* to the products that I am creating and will make in the future, thinking intuitively about how what we make affects people throughout various industries and aspects of their lives.


[Next](entry02.md)

[Home](../README.md)


