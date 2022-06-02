
# STARTER UPP 
![GitHub top language](https://img.shields.io/github/languages/top/B08waffles/starter-upp-react-front-end)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/B08waffles/starter-upp-react-front-end)
![GitHub language count](https://img.shields.io/github/languages/count/B08waffles/starter-upp-react-front-end)
![Lines of code](https://img.shields.io/tokei/lines/github/b08waffles/starter-upp-react-front-end)
![GitHub repo size](https://img.shields.io/github/repo-size/B08waffles/starter-upp-react-front-end)
[![GitHub license](https://img.shields.io/github/license/B08waffles/starter-upp-react-front-end)](https://github.com/B08waffles/starter-upp-react-front-end/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/B08waffles/starter-upp-react-front-end)](https://github.com/B08waffles/starter-upp-react-front-end/issues)
![GitHub package.json version](https://img.shields.io/github/package-json/v/b08waffles/starter-upp-react-front-end)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/b08waffles/starter-upp-react-front-end/react)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/b08waffles/starter-upp-react-front-end/react-router-dom)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/b08waffles/starter-upp-react-front-end/react-bootstrap)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/b08waffles/starter-upp-react-front-end/workbox-cli)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/b08waffles/starter-upp-react-front-end/@fortawesome/react-fontawesome)
> This is the front-end designed for use with the 
----
> About Starter-Upp: Starter-Upp is a capitalisation system. Instead of having one or a few people manually inputting data into spreadsheets to keep track of company worth, company ownership and individual contributions, this app intends to automate the process by allowing all to create companies, transactions and for this data to be presented to the end-user in the form of cards, tables, graphs and charts. 
---
The technologies that were used for this application are as follows:
```yaml
"eslint": "^8.14.0",
"parcel": "^2.6.0",
"process": "^0.11.10",
"serve": "^13.0.2",
"typescript": "^4.6.3"
"axios": "^0.26.1",
"bootstrap": "^5.1.3",
"lighthouse": "^9.5.0",
"moment": "^2.29.3",
"node-sass": "^7.0.1",
"react": "^17.0.2",
"react-bootstrap": "^2.2.3",
"react-dom": "^17.0.2",
"react-router-bootstrap": "^0.26.1",
"react-router-dom": "^6.3.0",
"victory": "^36.3.2",
"workbox": "^0.0.0",
"workbox-cli": "^6.5.3"
"@parcel/packager-raw-url": "^2.6.0",
"@parcel/packager-ts": "^2.6.0",
"@parcel/transformer-sass": "^2.6.0",
"@parcel/transformer-typescript-types": "^2.5.0",
"@parcel/transformer-webmanifest": "^2.6.0",
"@types/bootstrap": "^5.1.9",
"@types/node": "^17.0.29",
"@types/react": "^17.0.44",
"@types/react-dom": "^17.0.15",
"@fortawesome/fontawesome-svg-core": "^6.1.1",
"@fortawesome/free-solid-svg-icons": "^6.1.1",
"@fortawesome/react-fontawesome": "^0.1.18",
"@parcel/runtime-browser-hmr": "^2.6.0",
"@parcel/service-worker": "^2.5.0",
"@parcel/transformer-js": "^2.6.0",
"@types/axios": "^0.14.0",
"@types/react-router-bootstrap": "^0.24.5",
"@types/react-router-dom": "^5.3.3","bundler": "^0.8.0",
```
---
_"This guide assumes that you have an IDE such as Visual Studio Code or similiar and Node/node.js installed on your machine. These instructions should work on most common Operating Systems."_

---

> **DISCLAIMER** This application in its current form is configured to make contact with the production version of the starter-upp-django-react-backend system, its important to change the axios/fetch URL addresses if you want this to work in localhost when running it with a locally hosted backend. You can adjust the URLs in each of the four files located in "starter-upp/src/services/".

## Instructions for setup

> _This application should work on both Linux and Windows_

* Download the files and extract in a new folder
* Open the folder in your IDE of choice and open a terminal
* `cd starterupp-react-front-end-main` cd into the app's folder 
* `npm install` run this command to install all dependencies
* Now you can test the applicaition with `npm start`
    - For the full experience, you'll need to download [starter-upp-django-back-end repository](https://github.com/B08waffles/starter-upp-django-back-end). Follow the steps outlined in _**README.md**_ to run the back-end. 
* To build this application for production, you have two choices:
    - __One command way:__
        - Type into the console `npm run fresh-start`, this will remove the previous _"/dist"_ folder, generate a new clean build and serve it live at http://localhost:3000 
    - __Manual way:__
        - Run `npm run clean` to clear out the _"/dist"_ folder if there is an old one present already
        - Now run `npm run build`
        - Finally, run `npm run serve` to start the application in production mode at http://localhost:3000 
* In either development or production mode, you'll need to direct yourself to _"/signup"_ and create a new account, provided that you're running the back-end simultanously
* After signing up, the back-end will give you an auth token that will be saved to local storage in the front-end, now you have full access to the application, happy testing! 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Built in Code-OSS on Manjaro Linux
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
---
Brandon Kane
---