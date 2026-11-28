# Word Analytics

A text analyzer built with React + Vite. Type or paste text and see live statistics: word count, character count and how many characters remain for Twitter / X and Instagram / Facebook. The project started as an exercise from the [bytegrad.com](https://bytegrad.com/) course, but the code has been rewritten and extended with my own solutions — it is not a copy of the original.

## Features

- Live word and character count
- Remaining characters for Twitter / X (280) and Instagram / Facebook (2200)
- Counter turns into a "limit" style when the value goes below zero
- Input validation: `<script>` tags, HTML tags, `@` symbols and links are stripped from the text, with an inline warning explaining what was removed
- Styling based on CSS Modules

## What I changed compared to the course

- Rule-based input validation — a `RULES` array of `{ pattern, message }` instead of a chain of `if` statements, so adding a new rule is a one-line change
- Several warnings can show up at once when the text breaks more than one rule
- Stats computed inline in `Container` and spread into `Stats` as props
- Reusable `Stat` component with a modifier class for negative values
- Character limits extracted to `lib/constants.js`
- Merged Instagram and Facebook into one stat, since both share the same limit
- Component structure (`App`, `Container`, `Textarea`, `Stats`, `Warning`, `Header`, `Footer`, `BackgroundImage`) based on my own analysis of responsibility separation

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS Modules
- ESLint

## Running locally

```bash
npm install
npm run dev
```

Available scripts:

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | starts the development server |
| `npm run build`   | builds the production version |
| `npm run preview` | previews the production build |
| `npm run lint`    | runs ESLint                   |

## Note

This project is for educational purposes — it was built while learning React through a course from [bytegrad.com](https://bytegrad.com/), and the code was independently modified and analyzed to reinforce that knowledge.
