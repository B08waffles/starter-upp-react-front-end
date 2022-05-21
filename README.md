
# STARTERUPP 

> This is the front-end designed for use with the [starter-upp-django-back-end repository](https://github.com/B08waffles/starter-upp-django-back-end)
----
> About Starter-Upp: Starter-Upp is a capitalisation system. Instead of having one or a few people manually inputting data into spreadsheets to keep track of company worth, company ownership and individual contributions, this app intends to automate the process by allowing all to create companies, transactions and for this data to be presented to the end-user in the form of cards, tables, graphs and charts. 
---
_"This guide assumes that you have an IDE such as Visual Studio Code or similiar and Node/node.js installed on your machine. These instructions should work on most common Operating Systems."_

---
## Instructions for setup
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

> This application was built with react & react-dom v17.0.2, react-router-dom v6.3.0, TypeScript, SCSS and Parcel.
  

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Built in Code-OSS on Manjaro Linux
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~