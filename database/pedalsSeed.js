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
      "Sometimes it's best to keep it simple. Which is why, in a world of dizzying often over-complex technology, the durable, dependable, and simple stomp box continues to be the most widely used and effective means to expand, color, distort, mutate, sustain, and twist tone. The TS9B is equipped with controls to allow bassists to produce the sound they want while still maintaining the feel of the Tube screamer. Experimenting with the mix and tone controls allows for creation of a limitless number of sounds. "
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
    brand: 'Caroline ',
    model: 'Parabola',
    type: 'distortion',
    price: 199.99,
    image: './img/pedals/Caroline Parabola.png',
    description:
      'Parabola™ is our new solid state tremolo effect pedal, slated for a limited advance release for the 2017 holidays, and a full wide release after the 2018 Winter NAMM show. It is the “gentle dip into modulation” that Philippe spoke of during the Reddit AMA in October. While what we’re doing with this is a pretty niche product, it’s one we think sounds really fantastic, and it’s something we think our customers would really enjoy.'
  },
  {
    id: uuid(),
    brand: 'Jim Dunlop',
    model: 'MXR Distortion+',
    type: 'distortion',
    price: 79.99,
    image: './img/pedals/Ibanez TS9B.png',
    description:
      "The MXR Distortion + pedal gives you magical classic distortion tones from a road-tough, pedalboard-friendly unit! The Distortion + bridges the realm between overdrive and over-the-top fuzz tones, making it an essential element of your tonal toolkit. It's amazingly easy to dial in your favorite tones; simply tweak the Distortion knob to get the amount of crunch you desire, and use the Output knob to get the volume level you want. Add tasty character to your amp tones or push out serious retro pedal crunch, with the Distortion + pedal!"
  },
  {
    id: uuid(),
    brand: 'Ibanez',
    model: 'TS9DX',
    type: 'overdrive',
    price: 119.99,
    image: './img/pedals/Ibanez TS9DX.png',
    description:
      'The Ibanez TS9DX Turbo Tube Screamer Effects Pedal features the slightly warmer overdrive of the old TS808 Tube Screamers and also offers 3 new settings for increased low end crunch: +, Hot, and Turbo.'
  },
  {
    id: uuid(),
    brand: 'Neunaber',
    model: 'Digiverb',
    type: 'reverb',
    price: 279.99,
    image: './img/pedals/Neunaber Slate v2.png',
    description:
      "Bringing together features like stereo and mono inputs/outputs, buffered trails bypass with soft switching, and selectable footswitch behavior regardless of the effect in use, the Neunaber Stereo Slate V2 is the perfect accompaniment to an arsenal of the company's pedals. Built on a all-analog dry signal path, the Slate makes no coloring whatsoever on your tone and simply acts to expand the functionality of effects like the Seraphim or Mono."
  },
  {
    id: uuid(),
    brand: 'Electro-Harmonix',
    model: 'Superego+',
    type: 'synth',
    price: 249.99,
    image:
      'http://cdn.shopify.com/s/files/1/0810/2125/products/electro-harmonix-superego-synth-engine-832097386515_1200x1200.jpg?v=1522480649',
    description:
      'Building on the synthesis platform of the award-winning Superego, the Electro-Harmonix Superego+ raises the bar when it comes to creating synth effects, sound layers, glissandos, infinite sustain and more. Plus, the designers added a complete effects section featuring 11 effects types, an EXP input for effect parameter control and an EXT jack for a 3-button controller.'
  },
  {
    id: uuid(),
    brand: 'Fulltone',
    model: 'OCD',
    type: 'overdrive',
    price: 127.99,
    image: './img/pedals/fulltone OCD v2.png',
    description:
      "Since its introduction in 2004, the Fulltone OCD Obsessive Compulsive Drive pedal has been the go-to dirt box for countless guitarists around the globe. Over a decade after its debut, the OCD has received its first major update — meet the OCD v2. With a redesigned output buffer for maximum signal integrity, a Class A input section with better dynamic response, and switchable Enhanced Bypass or True Bypass modes, this player-favorite overdrive pedal is better than ever. For a modern classic overdrive pedal that's been redesigned for maximum fidelity and performance, check out the Fulltone OCD v2."
  },
  {
    id: uuid(),
    brand: 'Ibanez',
    model: 'FL-9',
    type: 'flanger',
    price: 40.99,
    image: './img/pedals/Ibanez FL-9.png',
    description:
      'The Ibanez FL9 Flanger provides classic flanger tones with a variety of controls. It features knobs for Speed, Regen, Width, and Delay Time.'
  },
  {
    id: uuid(),
    brand: 'Wampler',
    model: 'Velvet Fuzz',
    type: 'reverb',
    price: 199.99,
    image: './img/pedals/Wampler Velvet Fuzz.png',
    description:
      'With two completely different clipping options (not just the basic silicon or germanium option like most) you can achieve those classic fuzz big tones that compresses massively across the bottom or you can tighten them up and have it respond more like a distortion. With this you get all of the tone with none of the side effects. Some people say it sounds like a fuzz but feels like a distortion, so yes, you CAN have the best of both worlds'
  },
  {
    id: uuid(),
    brand: 'Old Blood Noise Endeavors',
    model: 'Mondegreen',
    type: 'delay',
    price: 199.99,
    image: './img/pedals/Old Blood Noise Mondegreen.png',
    description:
      "The Old Blood Noise Endeavors Mondegreen pedal is a digital delay bent on giving you something different than what you put in. It's delay. Into modulation. And it's weird. A three-way toggle switch selects between three modes of modulated delay. STUTTER: A delay with a percussive tremolo on the trails. WHIRL: A modulated delay adding chorus on the wet signal. SHEER: A delay with increasing octaves on the repeats. Perhaps it'll be strange enough in your hands. Perhaps they're underestimating your adventurous nature. You sly dog. Precocious Pup. Get out of here. Go get weird."
  },
  {
    id: uuid(),
    brand: 'Wampler',
    model: 'Reflection',
    type: 'reverb',
    price: 199.99,
    image: './img/pedals/Ibanez TS9B.png',
    description:
      'Brian Wampler’s attention to detail and commitment to designing the best and most player-friendly products out there are second to none. Those qualities are on full display within the Reflection reverb. From its convenient top-mounted jacks to its top-tier components, the Reflection reverb pedal is every bit a Wampler. - See more at: https://www.wamplerpedals.com/reflection#sthash.8XO5k3YU.dpuf'
  },
  {
    id: uuid(),
    brand: 'JHS',
    model: 'VCR',
    type: 'multi',
    price: 269.99,
    image:
      'https://media.musiciansfriend.com/is/image/MMGS7/The-VCR-Ryan-Adams-Signature-Pedal/J50975000000000-00-500x500.jpg',
    description:
      'Who said bass guitar didn’t need distortion? We believe it definitely does - and there’s a growing number of bass players who agree with us. Alas, there are still few dedicated bass distortion pedals; for the most part, bass players have had to use either guitar stompboxes or no distortion pedals at all.  Here at Shift Line, we take bass distortion seriously - most of us are bass players, after all. As soon as we released our Olympic MkII bass preamp, we started working on our brand new distortion pedal for bass: the A+ BUZZ.'
  },
  {
    id: uuid(),
    brand: 'Ditto',
    model: 'X2 Looper',
    type: 'looper',
    price: 77.99,
    image:
      'https://media63.music-group.com/media/PLM/data/images/products/P0CKP/1800Wx1800H/DITTO-X2-LOOPER_P0CKP_Front_L.png',
    description:
      'The original Ditto Looper rocked guitarists with a lust for looping like nothing else. Finally something that was simple, made for guitarists and sounded great. What would possibly be better? Well, how about all of that, plus new, next level looping features forged from pure awesome?'
  }
]

module.exports = pedals
