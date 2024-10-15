# Pokedex, Part 2: Thunks

In today's project you will complete your Pokedex application by configuring an
existing frontend application to use thunk actions.

## Phase 0: Getting started

You'll want to have your Pokedex backend from Part 1 up and running. (You can
download the Part 1 solution [here].) Unzip the solution, `cd` into the root
directory, and run the following commands to boot it up:

* `bundle install`
* `rails db:create db:migrate db:seed`
* `rails s`

The backend API is also documented in the solution's __Pokedex-API.md__ file.

Once you have the backend up and running, clone the frontend starter from the
`Download` link at the bottom of this page.

Run `npm install` and `npm run dev` in the frontend starter repo to start your
frontend development server.

[here]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/modular-curriculum-practices/YWEtcmVhY3QtcG9rZWRleC1yYWlscy1iYWNrZW5kLWNo.zip

### Explore the reference application

The current application comprises the following components:

* `App`: Does the browser routing
* `PokemonBrowser`: The browser that draws the list on the left and has a route
  to the `PokemonDetail` when the route matches "/pokemon/:pokemonId"
* `PokemonDetail`: Makes a fetch to the API on mount and update to load the
  details of the selected Pokemon
* `Fab`: The "+" button that prompts the `CreatePokemonForm` to show
* `CreatePokemonForm`: Create Pokemon form rendered on `PokemonBrowser`
* `EditPokemonForm`: Edit Pokemon form rendered on the `PokemonDetail` component
  only if the Pokemon is captured
* `PokemonItems`: Renders the list of items on the `PokemonDetail` component
* `ItemForm`: Item form rendered on the `PokemonDetail` component when
  editing an item
* `ErrorMessage`: Displays an error message for a labeled form input

Take time to review the components to see how the component tree is structured
(i.e., the parent-child relationships and where each component is being used).

### Proxy

In this project, you will run two servers using these addresses:

* `http://localhost:5173` for your frontend
* `http://localhost:5000` for your backend

In the __vite.config.js__ file on your frontend, notice the `proxy` key inside
the `server` object:

```js
server: {
  proxy: {
    "/api": "http://localhost:5000",
    "/images": "http://localhost:5000"
  }
}
```

These lines tell the development server to proxy any requests beginning with
`/api` or `/images` to your backend server port.

You will make api calls from your frontend to your backend server. When making
api calls to your backend, don't write out your base URL for every call.
Instead, write your fetch calls like this: `fetch('/api/pokemon')`.

## Phase 1: Dispatch thunk actions in `PokemonBrowser`

As you're connecting your application's components, you'll most likely hit bugs
and break your application. While you're connecting each component, make sure
to test that your connected code is working before moving on to connect the
next component.

There is a thunk action creator already made for you in the
__src/store/pokemon.js__ file called `getPokemon`. The thunk action it returns
fetches all the Pokemon as a list from the `GET /api/pokemon` backend API
route. Then it dispatches the action returned from the `load` action creator in
the same file. The reducer normalizes the Pokemon data.

Dispatch the thunk action returned from the `getPokemon` thunk action creator
after the `PokemonBrowser` component first renders.

If done correctly, you should see the list of all the Pokemon in the side of the
browser.
