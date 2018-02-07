
# Bookshelf
## React/redux books

### Contents

- [Install/Run](#installrun)
- [Notes](#notes)

### Install/Run

##### Node via n (requires node > v8.x)

```sh
npm install -g n && n lts
```

##### Install dependencies

```sh
npm install
```

##### Run Tests

```sh
npm test
```

##### Run Linter

```sh
npm run lint
```

##### Run (Development mode)

```sh
npm start
```

Once the server has started, navigate to http://localhost:8181.

#### Notes

- So, I chose koa for the server because it is nice a simple for most tasks.  I could have broken up the server a bit more but ran out of time.
- The SSR just uses a template string.  This could always be swapped out for a view engine, but I kept it simple.
- Most of the code is has test coverage, but not all.  Again, I was trying to be pragmatic with the time I had.
- The design is pretty dreadful.  Might work on it a bit more.
- Uses a skeleton ITCSS type style setup with sass
- Needs a way to make a production build
- Needs bundle optimization (making polyfill, react, react-dom external etc)

#### Syntax support

The project uses `babel` to transpile ES6+, targeting `stage-0`.
