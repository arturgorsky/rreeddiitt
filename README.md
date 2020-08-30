## rreeddiitt
Redit like clone build with React, GraphQL and TypeScript
The purpose of this app is not to offer 100% complete Reddit funcitonality, but rather to be example project setup of technologies i want to use and build upon

Tools and technologies used:
* NPM
* GIT
* Typescript
* Yarn

## WHAT YOU NEED TO RUN PROJECT
* NODE
* NPM
* YARN (propably)
* PostgreSQL Database Setup
## How to run
1) Use npm install to install dependencies
2) Make sure that confing under `src/mikro-orm.confing.ts` has correct values for your db setup (dbname, host, user, password etc.)
3) I used `yarn watch` to compile .ts files into .js files. It creates dist folder with compiled javascript
4) Open second terminal and use `yarn dev` that runs node under dist/index.js using nodemon
### INFO: There are two programs running in ternimal yarn -watch compiles TS and yarn dev runs constantly watching for changes
