# toneify

https://toneify-arthurhwang.herokuapp.com/

A full-stack Javascript application to help guitarists create pedalboard configurations dynamically with an interactive builder.

## Technologies Used
- React
- React Router
- Express
- Node
- MongoDB
- Semantic UI React
- MomentJS

## Key Features

- ### Users can view a list of pedalboards

- ### Users can view a list of pedals

- ### Users can view details of a pedalboard

- ### Users can view details of a pedal

- ### Users can pick and choose a pedalboard to build on

- ### Users can pick and choose pedals to add to their pedalboard configuration

- ### Users can drag and drop pedals

- ### Users can rotate pedals to have a more realistic experience

- ### Users can delete pedals from their build

- ### Users can reset their build

- ### Users can save their build, whilst retaining all pedal rotation values and positioning coordinates

- ### Users can load their build from a build history.  Pedals' rotation and position will persist on load.

- ### Users can update their build history

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

### Automatically run/restart server with `nodemon` and live reload page on update with `browser-sync`
```
npm run watch
```

### ARun without `nodemon` and `browser-sync`
```
npm run build
npm run start
```
