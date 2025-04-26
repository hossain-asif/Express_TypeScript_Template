# Steps to Setup the Starter Template

1. **Clone the project**

   ```bash
   git clone https://github.com/hossain-asif/Express_TypeScript_Template.git <ProjectName>
   ```

2. **Move into the project directory**


    ```bash
    cd <ProjectName>
    ```

3. **Install npm dependencies**
    ```bash
    npm i
    ```

4. **Create a new .env file in the root directory and add the PORT environment variable**

    ```bash
    echo PORT=3000 >> .env
    ```

5. **Start the Express server**

    ```bash
    npm run dev
    ```








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