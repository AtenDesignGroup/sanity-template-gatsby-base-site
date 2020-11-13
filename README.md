# sanity-template-gatsby-base-site

[![Build Status](https://travis-ci.com/brentrobbins/sanity-template-gatsby-base-site.svg?branch=master)](https://travis-ci.com/brentrobbins/sanity-template-gatsby-base-site)

_Fully customizable blog template with a React.js front-end._

This template repo is used by Sanity.io to easily create deployed and configured projects through a web interface. You can test it by [creating this project](https://www.sanity.io/create?template=brentrobbins%2Fsanity-template-gatsby-base-site).

The template contains both a Sanity.io Sanity Studio and a front-end in Gatsby. Both are deployed on Netlify.


![The Sanity and Gatsby powered website](https://github.com/brentrobbins/sanity-template-gatsby-base-site/blob/master/assets/frontend.jpg?raw=true)

## Local development

You develop the templates in `/template`, and review your changes in `/build`.

1. Run `nvm use` to switch to the project's version of Node.

2. **Install dependencies with `npm install` in the root folder.** This will install the template development tool that watches changes in the `/template` folder and output the template to `/build`.

3. **Run `npm run dev` in root folder.** This will build the template files to `/build`. This is how the code will look for those who install the project later.

4. **Run `npm install` in `./build/web` and `sanity install && sanity graphql deploy` in `/build/studio`** This will install the necessary dependencies for the Gatsby frontend and the Studio.

5. **Run `npm run dev` in `./build/web` and `sanity start` in `/build/studio`**. This will start the development servers for the Gatsby frontend and Sanity Studio.

## Notes

When developing ProjectId and dataset name can be changed in `template-values-development.json`
