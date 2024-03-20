# Short links

An API that:
- Shortens links and then uses a keyword provided by the user to access the link again.
- Redirects you to the link based on that keyword.
- Returns the ID of the most accessed keywords.

**How to run locally:**

You'll need a PostgreSQL database and a Redis database, then provide the access URL in the `postgres.ts` and `redis.ts` files.

Run `npm i` to install dependencies.

Run `npm run setup` to connect the database, then run `npm run dev` to start the application.

**Using the API**

Now you can use a REST client to make requests.

To shorten a link, you can make a POST request providing a code and the URL in the request body. For example:
```
POST http://localhost:3333/api/links

{
    "code": "github",
    "url": "https://github.com/wthallys"
}
```
Now if you access `http://localhost:3333/github`, you'll be redirected to my GitHub profile.

A frontend application will come soon ;)