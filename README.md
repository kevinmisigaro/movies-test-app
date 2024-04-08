# Assesment: Movies App

This app is built with:
- React (with Create-React-App starter template)
- Typescript
- Tailwind CSS for styling
- Daisy-UI for custom Tailwind components

The demo is hosted on Vercel via this [url](https://movies-test-app-lyart.vercel.app/)


## Usage

First you have to clone the repository, then navigate to it via your terminal.

Once inside the repository run the blow command to install node modules

```bash
npm i
```
This app uses an open Movie database API (https://search.imdbot.workers.dev/)

So you need to add the Enviroment variables for the app to get the URLs

```bash
REACT_APP_API_URL=https://search.imdbot.workers.dev/?q
REACT_APP_API_DETAILS_URL=https://search.imdbot.workers.dev/?tt
```

Finally, run the blow command to start the app

```bash
npm start
```

## Things to note

- Assesment said we should use React Navigation, but isn't that better used on React Native instead? I used React Router version 5 instead.
- Project seemed to insist we use React JS, so decided to use CRA; but if it was a hobby project I would have used Next JS version 14 since it has navigation, state management (with Context API) handled, as well as clean project structure.

## TO DO
- Did not have alot of time, so did not add State management. The state management tool I would have used is [Jotai](https://jotai.org/)

## Credit

Made by: Kevin Misigaro