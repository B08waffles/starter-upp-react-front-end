
# STARTERUPP 

> This is the front-end designed for use with the [starter-upp-django-back-end repository](https://github.com/B08waffles/starter-upp-django-back-end)

~~~~~~
About the application: Starter-Upp is a capitalisation system. Instead of manually using spreadsheets to keep track of things like company ownership and individual contributions, this app intends to automate some of the work here by allowing users to create companies, transactions and for this data to be presented to the end-user in the form of both cards and graphs/charts. 
~~~~~~

## Instructions for setup
* Download the files and extract in a new folder
* Open the folder in your IDE of choice and open a terminal
* `cd starterupp-react-front-end-main` cd into the app's folder 
* `npm install` run this command to install all dependencies
* Now you can test the applicaition with `npm start`
    - For the full experience, you'll need to download [starter-upp-django-back-end repository](https://github.com/B08waffles/starter-upp-django-back-end). Follow the steps outlined in _**README.md**_ to run the back-end. 
* To build this application to fully test this, you need to:
    - run `npm run clean` to clear out the _"/dist"_ folder if neccesary
    - Open _**workbox-config.ts**_, you need to comment out `swSrc: 'service-worker-src.js',` we will need this later
    - Now run `npm run build`
    - After that, go back to _**workbox-config.ts**_ and uncomment out `swSrc: 'service-worker-src.js',`
    - Now we're ready to run `npm run workbox2` which will override the default service-worker and inject the build with our own
    - Finally, run `npm run serve` to start the application in production mode
* In either development or production mode, you'll need to direct yourself to _"/signup"_ and create a new account, provided that you're running the back-end simultanously
* After signing up, the back-end will give you an auth token that will be saved to local storage in the front-end, now you have full access to the application, happy testing! 

> This application was built with react & react-dom v17.0.2, react-router-dom v6.3.0, TypeScript, Parcel & Parcel Bundler and Workbox v3.
  

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Built in Code-OSS on Manjaro Linux
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~