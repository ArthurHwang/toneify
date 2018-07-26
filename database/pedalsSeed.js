const uuid = require('uuid/v1')

const pedals = [
  {
    id: uuid(),
    brand: 'Boss',
    model: 'DS-1-4A',
    type: 'distortion',
    price: 56.99,
    image: './img/pedals/Boss DS-1-4A.png',
    description:
      "Sporting the same legendary circuit that's been electrifying rock rigs for four decades in a limited-release chassis, the Boss DS-1-4A Distortion 40th Anniversary Edition commemorates a pedalboard staple. The same three controls for distortion, level, and tone afford the full landscape of light snap to full-on saturated snarl in a black-and-gold chassis available only in a limited run. An affordable collectible for any metalhead."
  },
  {
    id: uuid(),
    brand: 'Ibanez',
    model: 'TS9B',
    type: 'overdrive',
    price: 119.99,
    image: './img/pedals/Ibanez TS9B.png',
    description:
      "Sometimes it's best to keep it simple. Which is why, in a world of dizzying often over-complex technology, the durable, dependable, and simple stomp box continues to be the most widely used and effective means to expand, color, distort, mutate, sustain, and twist tone. The TS9B is equipped with controls to allow bassists to produce the sound they want while still maintaining the feel of the Tube screamer. Experimenting with the mix and tone controls allows for creation of a limitless number of sounds. Players can get a tight, fuzzy sound with mix control or a mid-scooped, funky sound with 2-band control. Features: Level, Gain, Treble, Bass, Mix Controls Input impedance 500K ohms Output impedance 10K ohms Maximum Output Level 0 dBm Maximum Gain + 30 dB Equivalent Input Noise ?100 dBm (IHF-A) Power Supply One 9 Volt Battery or external AC adaptor (9V) Size 4.9(D) × 3(W) × 2(H)inch Weight 1.3 lbs."
  },
  {
    id: uuid(),
    brand: 'A+',
    model: 'Buzz Bass Drive',
    type: 'overdrive',
    price: 155.99,
    image: './img/pedals/A+ Buzz Bass Drive.png',
    description:
      'Who said bass guitar didn’t need distortion? We believe it definitely does - and there’s a growing number of bass players who agree with us. Alas, there are still few dedicated bass distortion pedals; for the most part, bass players have had to use either guitar stompboxes or no distortion pedals at all.  Here at Shift Line, we take bass distortion seriously - most of us are bass players, after all. As soon as we released our Olympic MkII bass preamp, we started working on our brand new distortion pedal for bass: the A+ BUZZ.'
  },
  {
    id: uuid(),
    brand: 'Digitech',
    model: 'Digiverb',
    type: 'reverb',
    price: 77.99,
    image: './img/pedals/Digitech Digiverb.png',
    description:
      "Once you start using the DigiTech DigiVerb Digital Reverb Pedal you won't want to stop. The spring reverb is so real you can almost hear the spring rattling in the box. Different plate reverbs put excitement in your snare or vocals, and various halls breathe warm space into any instrument sound. Level, EQ, Decay, and Type controls let you tailor your 'verb any way you like. Left/mono and right outputs. DigiTech DigiVerb includes 9V battery."
  },
  {
    id: uuid(),
    brand: 'Boss',
    model: 'DS-1-4A',
    type: 'distortion',
    price: 56.99,
    image: './img/pedals/Boss DS-1-4A.png',
    description:
      "Sporting the same legendary circuit that's been electrifying rock rigs for four decades in a limited-release chassis, the Boss DS-1-4A Distortion 40th Anniversary Edition commemorates a pedalboard staple. The same three controls for distortion, level, and tone afford the full landscape of light snap to full-on saturated snarl in a black-and-gold chassis available only in a limited run. An affordable collectible for any metalhead."
  },
  {
    id: uuid(),
    brand: 'Ibanez',
    model: 'TS9B',
    type: 'overdrive',
    price: 119.99,
    image: './img/pedals/Ibanez TS9B.png',
    description:
      "Sometimes it's best to keep it simple. Which is why, in a world of dizzying often over-complex technology, the durable, dependable, and simple stomp box continues to be the most widely used and effective means to expand, color, distort, mutate, sustain, and twist tone. The TS9B is equipped with controls to allow bassists to produce the sound they want while still maintaining the feel of the Tube screamer. Experimenting with the mix and tone controls allows for creation of a limitless number of sounds. Players can get a tight, fuzzy sound with mix control or a mid-scooped, funky sound with 2-band control. Features: Level, Gain, Treble, Bass, Mix Controls Input impedance 500K ohms Output impedance 10K ohms Maximum Output Level 0 dBm Maximum Gain + 30 dB Equivalent Input Noise ?100 dBm (IHF-A) Power Supply One 9 Volt Battery or external AC adaptor (9V) Size 4.9(D) × 3(W) × 2(H)inch Weight 1.3 lbs."
  },
  {
    id: uuid(),
    brand: 'A+',
    model: 'Buzz Bass Drive',
    type: 'overdrive',
    price: 155.99,
    image: './img/pedals/A+ Buzz Bass Drive.png',
    description:
      'Who said bass guitar didn’t need distortion? We believe it definitely does - and there’s a growing number of bass players who agree with us. Alas, there are still few dedicated bass distortion pedals; for the most part, bass players have had to use either guitar stompboxes or no distortion pedals at all.  Here at Shift Line, we take bass distortion seriously - most of us are bass players, after all. As soon as we released our Olympic MkII bass preamp, we started working on our brand new distortion pedal for bass: the A+ BUZZ.'
  },
  {
    id: uuid(),
    brand: 'Digitech',
    model: 'Digiverb',
    type: 'reverb',
    price: 77.99,
    image: './img/pedals/Digitech Digiverb.png',
    description:
      "Once you start using the DigiTech DigiVerb Digital Reverb Pedal you won't want to stop. The spring reverb is so real you can almost hear the spring rattling in the box. Different plate reverbs put excitement in your snare or vocals, and various halls breathe warm space into any instrument sound. Level, EQ, Decay, and Type controls let you tailor your 'verb any way you like. Left/mono and right outputs. DigiTech DigiVerb includes 9V battery."
  },
  {
    id: uuid(),
    brand: 'Boss',
    model: 'DS-1-4A',
    type: 'distortion',
    price: 56.99,
    image: './img/pedals/Boss DS-1-4A.png',
    description:
      "Sporting the same legendary circuit that's been electrifying rock rigs for four decades in a limited-release chassis, the Boss DS-1-4A Distortion 40th Anniversary Edition commemorates a pedalboard staple. The same three controls for distortion, level, and tone afford the full landscape of light snap to full-on saturated snarl in a black-and-gold chassis available only in a limited run. An affordable collectible for any metalhead."
  },
  {
    id: uuid(),
    brand: 'Ibanez',
    model: 'TS9B',
    type: 'overdrive',
    price: 119.99,
    image: './img/pedals/Ibanez TS9B.png',
    description:
      "Sometimes it's best to keep it simple. Which is why, in a world of dizzying often over-complex technology, the durable, dependable, and simple stomp box continues to be the most widely used and effective means to expand, color, distort, mutate, sustain, and twist tone. The TS9B is equipped with controls to allow bassists to produce the sound they want while still maintaining the feel of the Tube screamer. Experimenting with the mix and tone controls allows for creation of a limitless number of sounds. Players can get a tight, fuzzy sound with mix control or a mid-scooped, funky sound with 2-band control. Features: Level, Gain, Treble, Bass, Mix Controls Input impedance 500K ohms Output impedance 10K ohms Maximum Output Level 0 dBm Maximum Gain + 30 dB Equivalent Input Noise ?100 dBm (IHF-A) Power Supply One 9 Volt Battery or external AC adaptor (9V) Size 4.9(D) × 3(W) × 2(H)inch Weight 1.3 lbs."
  },
  {
    id: uuid(),
    brand: 'A+',
    model: 'Buzz Bass Drive',
    type: 'overdrive',
    price: 155.99,
    image: './img/pedals/A+ Buzz Bass Drive.png',
    description:
      'Who said bass guitar didn’t need distortion? We believe it definitely does - and there’s a growing number of bass players who agree with us. Alas, there are still few dedicated bass distortion pedals; for the most part, bass players have had to use either guitar stompboxes or no distortion pedals at all.  Here at Shift Line, we take bass distortion seriously - most of us are bass players, after all. As soon as we released our Olympic MkII bass preamp, we started working on our brand new distortion pedal for bass: the A+ BUZZ.'
  },
  {
    id: uuid(),
    brand: 'Digitech',
    model: 'Digiverb',
    type: 'reverb',
    price: 77.99,
    image: './img/pedals/Digitech Digiverb.png',
    description:
      "Once you start using the DigiTech DigiVerb Digital Reverb Pedal you won't want to stop. The spring reverb is so real you can almost hear the spring rattling in the box. Different plate reverbs put excitement in your snare or vocals, and various halls breathe warm space into any instrument sound. Level, EQ, Decay, and Type controls let you tailor your 'verb any way you like. Left/mono and right outputs. DigiTech DigiVerb includes 9V battery."
  }
]

module.exports = pedals
