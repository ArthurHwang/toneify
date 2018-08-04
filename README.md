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
<img src="https://user-images.githubusercontent.com/18460401/43680812-a8a5543e-97f7-11e8-877f-52707c765ae2.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can view a list of pedals
<img src="https://user-images.githubusercontent.com/18460401/43680824-db9b7846-97f7-11e8-9b9c-988c3d743e70.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can view details of a pedalboard
<img src="https://user-images.githubusercontent.com/18460401/43680830-1178c7d4-97f8-11e8-8a70-ec56bfa74891.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can view details of a pedal
<img src="https://user-images.githubusercontent.com/18460401/43680803-62c4fd66-97f7-11e8-8bf4-7bcfc21dc409.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can pick and choose a pedalboard to build on
<img src="https://user-images.githubusercontent.com/18460401/43681101-1f3e6f0c-97ff-11e8-8660-b6fe42802c4a.gif" alt="Oops...cant display" width="674" height="433">


- ### Users can pick and choose pedals to add to their pedalboard configuration
<img src="https://user-images.githubusercontent.com/18460401/43680914-7bc51690-97fa-11e8-8dce-0ff8cdde40f5.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can drag and drop pedals
<img src="https://user-images.githubusercontent.com/18460401/43680938-17972c52-97fb-11e8-8f26-3e44533e755e.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can rotate pedals to have a more realistic experience
<img src="https://user-images.githubusercontent.com/18460401/43680937-1781c6be-97fb-11e8-968c-afce1bc530b1.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can delete pedals from their build
<img src="https://user-images.githubusercontent.com/18460401/43680995-7bf6d782-97fc-11e8-8672-77c5e30c07e2.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can reset their build
<img src="https://user-images.githubusercontent.com/18460401/43680996-7cb1290c-97fc-11e8-87c9-a45f070ede7f.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can save their build, whilst retaining all pedal rotation values and positioning coordinates
<img src="https://user-images.githubusercontent.com/18460401/43681034-7078a498-97fd-11e8-80d7-7e2b5e9a1d28.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can load their build from a build history.  Previously saved rotation and position values of each pedal will persist on load.
<img src="https://user-images.githubusercontent.com/18460401/43681035-715468c0-97fd-11e8-9cc3-5e531fa65089.gif" alt="Oops...cant display" width="674" height="433">

- ### Users can update their build history
<img src="https://user-images.githubusercontent.com/18460401/43681088-9821f214-97fe-11e8-946f-68d25309139f.gif" alt="Oops...cant display" width="674" height="433">

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

### Run without `nodemon` and `browser-sync`
```
npm run build
npm run start
```
