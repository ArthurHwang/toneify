const express = require('express')

const router = express.Router()

router.get('/test', (req, res) => res.json({ msg: 'pedalboards words' }))

// To whom it may concern,
//
// I came across your website and got the impression that jubjub is a modern and dynamic company that enjoys taking on challenges.  Therefore, I would like to express my interest for a junior position at your web design firm.
//
// I wanted to take a chance and see if you are looking for a junior full stack developer to come in and deliver features.
//
// I have experience in React.js and JavaScript(es6) and am also familiar with Redux, React-Router, jQuery, Bootstrap, Semantic-UI, Material-UI, CSS3, HTML, NodeJS, Express, MongoDB, and REST APIs.
//
// I am actively learning React-Native for mobile development.
//
// Included at the bottom of this letter are links to my resume, linkedin, and github profile.
//
// I hope to have the opportunity to speak with you about being employed by your wonderful web design firm.
//
// Sincerely,
//
// Arthur H. Hwang
//
// resume - https://docs.google.com/document/d/1tjohD0ekGNxeyggFvMr4YnC8NT6StK58LebItE687AY/edit?usp=sharing
//
// linkedin - https://www.linkedin.com/in/arthur-hwang/
//
// github - https://github.com/ArthurHwang
