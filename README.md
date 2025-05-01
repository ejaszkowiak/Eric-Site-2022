# Eric-Site-2.0

[![Netlify Status](https://api.netlify.com/api/v1/badges/5539f237-7fa6-4ebe-ba15-2bb7461b5a09/deploy-status)](https://app.netlify.com/sites/ericjaszkowiak/deploys)

Eric's [new site](https://ericjaszkowiak.netlify.app)

To get started, make sure you have [Node](https://nodejs.org/en/), clone the repo and `cd` into the repo.

If you run `which node` and get `node not found` then you need to [install node here](https://nodejs.org/en). 

`npm install` to install dependencies

`npm run start` to start dev server at localhost:3000

`npm run dev:css` to compile scss into css and get some fancy styles

And then you're off at the races 🐎

Make lots of changes, fix lots of bugs

## Notes for Eric
The only files that matter are the `assets`, `scss` and `src` which are the images, styles and structure/fun things respectively.

```
.
├── README.md
├── assets              <-- Images
├── build
├── netlify.toml
├── node_modules
├── package-lock.json
├── package.json
├── public
├── scss                <-- Styles
├── src                 <-- Main Code
│   ├── App.js
│   ├── assets
│   ├── components
│   ├── index.js
│   ├── projectRoutes
│   ├── reportWebVitals.js
│   └── styles          <-- Ignore this
└── zombie_code.scss
```