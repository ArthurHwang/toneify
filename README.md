# toneify

https://toneify-arthurhwang.herokuapp.com/  -- Please allow up to 10 seconds for the link to load.  Heroku hosting is extremely slow sometimes.

A full-stack Javascript application to help guitarists create pedalboard configurations dynamically with an interactive builder.

## Technologies Used
- React
- Redux
- Redux-Thunk
- Redux-Persist
- React-Router
- Express
- Node
- MongoDB
- Mongoose
- PassportJS
- CookieSession
- Google OAuth
- Facebook OAuth
- Stripe API
- Semantic UI React
- MomentJS

## Key Features

- ### Users can pick and choose pedals to add to their pedalboard configuration
<img src="https://user-images.githubusercontent.com/18460401/44750914-9afaa280-aacb-11e8-81ed-e3185bb50bcd.gif" alt="Oops...cant display">

- ### Users can drag and drop pedals
<img src="https://user-images.githubusercontent.com/18460401/44747752-c3ca6a00-aac2-11e8-8ef8-adbb42bc01e4.gif" alt="Oops...cant display">

- ### Users can rotate pedals to have a more realistic experience
<img src="https://user-images.githubusercontent.com/18460401/44752189-29bcee80-aacf-11e8-8855-5a8b2829f1e0.gif" alt="Oops...cant display">

- ### Users can delete pedals from their build
<img src="https://user-images.githubusercontent.com/18460401/44752186-29245800-aacf-11e8-8bc8-460d73c5aa4a.gif" alt="Oops...cant display">

- ### Users can reset their build
<img src="https://user-images.githubusercontent.com/18460401/44752188-29bcee80-aacf-11e8-8fbf-3db6aa3930df.gif" alt="Oops...cant display">

- ### Users can save their build, whilst retaining all pedal rotation values and positioning coordinates
<img src="https://user-images.githubusercontent.com/18460401/44752190-29bcee80-aacf-11e8-99a8-b6678056fb51.gif" alt="Oops...cant display">

- ### Users can load their build from a build history.  Previously saved rotation and position values of each pedal will persist on load.
<img src="https://user-images.githubusercontent.com/18460401/44752187-29245800-aacf-11e8-98fb-31b6abdfde3e.gif" alt="Oops...cant display">

- ### Users can update their build history
<img src="https://user-images.githubusercontent.com/18460401/44752404-be275100-aacf-11e8-9321-bb3fa4cfae5b.gif" alt="Oops...cant display">

- ### Users can double-click a pedal to hear what it sounds like
<img src="https://user-images.githubusercontent.com/18460401/44752831-1f035900-aad1-11e8-8e39-2968c27f274a.gif" alt="Oops...cant display">

- ### Users can sign-in using Google OAuth / Facebook OAuth
<img src="https://user-images.githubusercontent.com/18460401/44611942-4bf5fa00-a7b9-11e8-9176-fde00f0a0319.gif" alt="Oops...cant display">

- ### Users can checkout with Stripe API
<img src="https://user-images.githubusercontent.com/18460401/44752580-49a0e200-aad0-11e8-8e1d-16684cf4bc28.gif" alt="Oops...cant display">

## Development

### System Requirements
- Node.js v10
- NPM v6
- MongoDB v4

### Getting Started

Clone the repository.
```
git clone https://github.com/ArthurHwang/toneify.git
```

Install dependencies.
```
cd toneify/
npm install
```

Create a `.env` file in the project root.  Example:
```
MONGODB_URI=mongodb://localhost:27017/toneify
PORT=3000
```

### Automatically run/restart server with nodemon and live reload page on update with browser-sync
```
npm run watch
```

### Run without nodemon and browser-sync
```
npm run build
npm run start
```
