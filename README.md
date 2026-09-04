# Random Joke Generator

This repository contains a tiny static web page that fetches and shows a random joke from an external API.

How to use

- Open `index.html` in a browser (no build step required).
- Click "Get a joke" to fetch a random joke.
- Optionally enable "Auto-fetch every 10s" to poll for new jokes.

External API

This project uses the Official Joke API:
https://official-joke-api.appspot.com/

Notes

- The page is purely client-side and relies on the external API being reachable and allowing CORS.
- If you prefer a different API (for example `icanhazdadjoke` which requires an Accept header), update `js/app.js` accordingly.
