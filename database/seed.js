const uuid = require('uuid/v1')
const seedData = [
  {
    id: uuid(),
    brand: 'Boss',
    model: 'BCB-30',
    price: 51.99,
    description: 'The BCB-30 pedal board is a convenient way for guitarists and bass players to transport and use their BOSS compact effects pedals. Made of high-quality molded resin, this case is perfect for small pedal board setups. Includes power daisy-chain cable for powering three pedals (with optional PSA-120) and audio cables for connecting pedals.',
    image: './img/download (2).png'
  },
  {
    id: uuid(),
    brand: 'Pedaltrain',
    model: 'terra',
    price: 269.99,
    description: 'Terra takes the best of Pedaltrain patented design and pushes it to new levels. It is the largest pedal board Pedaltrain makes, and is the perfect size for true pedal junkies and permanent studio installations.',
    image: './img/download (1).png'
  },
  {
    id: uuid(),
    brand: 'Boss',
    model: 'BCB-60',
    price: 169.99,
    description: 'The BOSS BCB-60 Pedal Case makes setup, breakdown and storage simple. Its padded interior protects and holds your effects pedals in place. The BCB-60 holds a wide range of gear including Boss compact and Twin pedals and select stompbox models from other manufacturers. A convenient AC adapter supplies power for up to 7 devices.'
    image: './img/download (4).png'
  },
  {
    id: uuid(),
    brand: 'Gator',
    model: 'Aluminum XL',
    price: 199.99,
    description: 'Large format pedal board with smart design. Black Extra Large aluminum pedal board with carry bag and bottom mounting power supply bracket. Padded nylon handle with zipper latches.'
    image: './img/gatorXL.png'
  },
  {
    id: uuid(),
    brand: 'Ultimate Support',
    model: 'GSP-500',
    price: 175.99
    description: 'The Ultimate Support GSP-500 Genesis Series pedalboard was designed by guitarists who wanted a one-stop solution for a number of common problems. The engineers used a traditional, slat-oriented system for mounting the pedals. But the added features are where this pedalboard truly stands above the rest. Ultimate Support designed a universal power-supply mounting system that uses strong, dependable clamps to fit a wide variety of power supplies underneath the board. Never take a drill to your pedalboard again. ',
    image: './img/GSP-500.png'
  }
]

module.exports = seedData
