# Really Simple Server
 
## What is is really?
> Well, It is a simple Node.JS server running off of express. 
> It is fast and light

## Features
- Comes with a built in rate limiter
- Fast & Lightweight
- Easy to Deploy and Use
- Can have loading times with less than .1 (one-tenth) of a second
- Updated constantly
- Open source

## Download
[https://github.com/aboutDavid/really-simple-server/releases](https://github.com/aboutDavid/really-simple-server/releases)

## Issues/Suggestions
Click [here](https://github.com/aboutDavid/really-simple-server/issues) to make a issuse or make a suggestion. 

## Speeds
> Speeds for Google<br>
![Google: Speeds](https://i.imgur.com/OZflcQr.png)

> Speeds for Really Simple Server<br>
![Really Simple Server: Speeds](https://i.imgur.com/K9yY87v.png)

## Self Hosted Installation
> Install Node.js and add it to `$PATH`[here](https://nodejs.org/en/download/)
> Download the latest version of the server [here](https://github.com/aboutDavid/really-simple-server/releases) or with git: `git clone https://github.com/aboutDavid/really-simple-server.git`
> UnZip the package enter it.
> Open a Command Prompt or Termanal in that folder and type `npm install` . You only have to do this once.
> If your on windows, open `package.json` in Notepad and change `plugins.sh` to `plugins.bat` . Then type `npm start `

## Configuration
> Open the `.env` file in notepad. You may change the varaibles in there. Here are the varaibles that are in here
 
```
# Remeber, do NOT leave any spaces between what you type in and between the equal sign. (=)
# EX: PORT=80

# Users on glitch set "PORT" to 3000. Default "3000"
# Users on Heroku.com, Zeit.co set "PORT" to Anything, default "80".
PORT=3000

# MAINDIR is the first the first thing you see. Example: "src".
# This is the first thing: example.com/
# Default "src"
MAINDIR=src

# API url. EX: example.com/api -> 200 OK
# Default = "api"
API=api

# Status - It can be set to "online" or "offline"
STATUS=online

# RateLimiter - Makes sure your server isnt overloaded. 
# Think of it like this: If Request = 100 and MS=60000, A person can only visit your server 100 times every minute.
# The "MS" means Miliseconds. 
# Quick Math: 
# 100ms = .1 second
# 1000ms = 1 secind
# 60000 = 1 minute
# 60000 * 60 = 1h= hour
# 600000 * 60 * 12 = 1 day
RATELIMITENABLED=true
REQUEST=100
MS=60000
```
 




## Deployment
> Don't wanna host it yourself or do you need to email you email your server manager? Well, Here are some easy instructions.
> 1. Fork this project by clicking here [here](https://github.com/aboutDavid/really-simple-server/fork)
> 2. Use one of these links to deploy (release) your code. Replace {{username}} with your username. `Heroku` and `Zeit` are reccomended. 
```
Heroku: https://heroku.com/deploy?template=https://github.com/{{username}}/really-simple-server
Netlify: https://app.netlify.com/start/deploy?repository=https://github.com/{{username}}/really-simple-server
Zeit: https://zeit.co/import/project?template=https://github.com/{{username}}/really-simple-server
```
Email your server manager with this premade template [here](mailto:example@example.com?subject=Install%20a%20Node.js%20Server&body=Hello%20IT%20departement%3A%0D%0A%0D%0ACan%20you%20please%20install%20%5Bthis%5D(https%3A%2F%2Fgithub.com%2FaboutDavid%2Freally-simple-server)%20server%20for%20my%20website%3F%20Thanks!%0D%0A%0D%0A-%20(Replace%20me%20with%20your%20name)
> Or, you could use glitch to host it.

<a href="https://glitch.com/edit/?utm_content=project_reallysimpleserver&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/reallysimpleserver">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix this" height="33">
</a>

## To do:

- Add PHP support
- Make it faster and more lightweight
- Add Markdown support
- Make custom plugins for it
