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

4. Install the latest version of the Sanity CLI by running `npm install -g @sanity/cli`

5. **Run `npm install` in `./build/web` and `sanity install && npm install && yarn && sanity graphql deploy` in `/build/studio`** This will install the necessary dependencies for the Gatsby frontend and the Studio. If you see a **401 error** after running `sanity graphql deploy`, try running `sanity logout` and then `sanity login` to make sure your CLI is logged into your Sanity.io account.

6. **Run `npm run dev` in `./build/web` and `sanity start` in `/build/studio`**. This will start the development servers for the Gatsby frontend and Sanity Studio.

7. In the `./build/web`, you will need to duplicate the `.env.development.template` file and rename it `.env.development` and add the missing values.

### Development URLs

- Sanity Studio: http://localhost:3333
- Sanity GraphQL: https://<sanity.projectId>.api.sanity.io/v1/graphql/production/default
- Gatsby Website: http://localhost:8000
- Gatsby GraphQL: http://localhost:8000/___graphql

## Notes

When developing ProjectId and dataset name can be changed in `template-values-development.json`
