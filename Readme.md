
npm: node package manager -> 
- Think of npm like a supermarket for JavaScript tools.
- It installs packages (tools/libraries) that your project needs.
- It also keeps track of versions, dependencies, and updates.

npx: node package executor -> 
- npx is like a rental service. You don’t need to install a package to use it.
- You just run it directly, and it handles everything behind the scenes.
- Useful when you want to run a package just once or try something quickly.

- npm handles package installation, versioning, and dependency resolution.
- npx is part of npm (since npm v5.2+).
- npx is perfect for running CLI tools without global installs.


`package.json` file : `npm init -y`

For dependencies:
`npm install express`

For development dependencies: 
`npm install -D nodemon`
`npm install -D @types/express`
`npm install -D @types/node`
`npm install -D ts-node`
`npm install -D typescript`

`tsconfig.json` file : `npx tsc --init`