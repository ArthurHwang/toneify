# toneify

https://toneify-arthurhwang.herokuapp.com/

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
<img src="https://user-images.githubusercontent.com/18460401/44747534-443c9b00-aac2-11e8-8f53-fe642d8a382f.gif" alt="Oops...cant display">

- ### Users can drag and drop pedals
<img src="https://user-images.githubusercontent.com/18460401/44747752-c3ca6a00-aac2-11e8-8ef8-adbb42bc01e4.gif" alt="Oops...cant display">

- ### Users can rotate pedals to have a more realistic experience
<img src="https://user-images.githubusercontent.com/18460401/43680937-1781c6be-97fb-11e8-968c-afce1bc530b1.gif" alt="Oops...cant display">

- ### Users can delete pedals from their build
<img src="https://user-images.githubusercontent.com/18460401/43680995-7bf6d782-97fc-11e8-8672-77c5e30c07e2.gif" alt="Oops...cant display">

- ### Users can reset their build
<img src="https://user-images.githubusercontent.com/18460401/43680996-7cb1290c-97fc-11e8-87c9-a45f070ede7f.gif" alt="Oops...cant display">

- ### Users can save their build, whilst retaining all pedal rotation values and positioning coordinates
<img src="https://user-images.githubusercontent.com/18460401/43681034-7078a498-97fd-11e8-80d7-7e2b5e9a1d28.gif" alt="Oops...cant display">

- ### Users can load their build from a build history.  Previously saved rotation and position values of each pedal will persist on load.
<img src="https://user-images.githubusercontent.com/18460401/43681035-715468c0-97fd-11e8-9cc3-5e531fa65089.gif" alt="Oops...cant display">

- ### Users can update their build history
<img src="https://user-images.githubusercontent.com/18460401/43681088-9821f214-97fe-11e8-946f-68d25309139f.gif" alt="Oops...cant display">

- ### Users can double-click a pedal to hear what it sounds like
<img src="https://user-images.githubusercontent.com/18460401/43878521-7daecc8c-9b54-11e8-8dd0-76561de5dc3a.gif" alt="Oops...cant display">

- ### Users can sign-in using Google OAuth / Facebook OAuth
<img src="https://user-images.githubusercontent.com/18460401/44611942-4bf5fa00-a7b9-11e8-9176-fde00f0a0319.gif" alt="Oops...cant display">

- ### Users can checkout with Stripe API
<img src="https://user-images.githubusercontent.com/18460401/44689097-311ac400-aa0b-11e8-8a42-c859c32df58e.gif" alt="Oops...cant display">

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
