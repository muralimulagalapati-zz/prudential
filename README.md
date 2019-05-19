## Bookstore react app

Clone and run `npm install` to install dependencies.

Run `npm run build` to build the application.

Run `npm start` to start serving.

Run `npm test` to execute test cases.

You can replace `npm` with `yarn` in the above commands.

### What could be done with more time
1. Erros could be handled in a better way.
2. A state management library (redux, mobx) could be introduced. I didn't follow the recommended architecture.
3. Good styling can be done, with better loaders.
4. Snapshot tests and integration tests could be writtened.

I couldn't connect to Goodreads API due to CORS error, so I had hosted a web service in heroku that would talk to Goodreads API. I took that opportunity to process and filter data and send a refined structure. Backend service code is at [prudential-helper](https://github.com/muralimulagalapati/prudential-helper/). I doesn't have any tests associated.
