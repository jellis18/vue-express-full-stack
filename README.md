# Vue/Express/MongoDB full stack application

Example full-stack app using a [Vue](https://vuejs.org/) front-end with
[Express](https://expressjs.com/) backend leveraging
[MongoDB](https://www.mongodb.com/2) and [mongoose](https://mongoosejs.com/).

This model is deployed with [Heroku](https://devcenter.heroku.com/).

Slightly modified from Traversy Media Tutorial
[here](https://www.youtube.com/watch?v=j55fHUJqtyw&t=204s&ab_channel=TraversyMedia).

## Usage

For this to run, you will need to modify the `config/config.env` file and add
your own `MONGO_URI`.

Once you have that setup you should be able to run

```zsh
npm run dev
```

to start the backend server and then

```zsh
cd client
npm run serve
```

and navigate to `localhost:8080` to see the app.

## Still To Do

1. Add docker build
