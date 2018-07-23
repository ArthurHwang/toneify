const uuid = require('uuid/v1')

const seedData = [
  {
    id: uuid(),
    brand: 'Voodoo Lab',
    model: 'Dingbat',
    price: 299.99,
    image: 'https://media.sweetwater.com/api/i/q-82__ha-ef52e1f2e54bea5e__hmac-d5f625f3e64a2f7fc274098b47e3dc5d7a9f6687/images/items/750/DingBatMMon-large.jpg',
    description: 'The Voodoo Lab Dingbat Medium Pedalboard is a convenient solution for players that need a high-quality pedalboard that can easily be transported. Coming to you from the same company that created the popular Pedal Power pedalboard power supplies, the Dingbat pedalboard ships with a Pedal Power 2 Plus already mounted onboard. The pedalboard is crafted from aircraft aluminum, which is lightweight and very durable. And the Voodoo Lab Dingbat Medium Pedalboard Power Package even includes its own padded gig bag.'
  },
  {
    id: uuid(),
    brand: 'Boss',
    model: 'BCB-60',
    price: 169.99,
    image: 'https://media.sweetwater.com/api/i/q-82__ha-9eab6e2635087263__hmac-be016dc3a34f115f2f11cffb15a296ec6f8ce8a0/images/items/750/BCB60-large.jpg',
    description: 'The BOSS BCB-60 Pedal Case makes setup, breakdown and storage simple. Its padded interior protects and holds your effects pedals in place. The BCB-60 holds a wide range of gear including Boss compact and Twin pedals and select stompbox models from other manufacturers. A convenient AC adapter supplies power for up to 7 devices.'
  },
  {
    id: uuid(),
    brand: 'Pedaltrain',
    model: 'Novo',
    price: 129.99,
    image: 'https://media.sweetwater.com/api/i/q-82__ha-9d77d6be07e80dbb__hmac-cb3acda1292a71eae11f0d169359ffff3f8fc4af/images/items/750/PTN18SC-large.jpg',
    description: 'A fresh take on Pedaltrains timeless pedalboard designs, the Novo series offers you the stability and accessibility you need to take your guitar effects pedals on the road. '
  },
  {
    id: uuid(),
    brand: 'Behringer ',
    model: 'PB1000',
    price: 129.99,
    image: 'https://media.sweetwater.com/api/i/q-82__ha-d30b3b4090cd0058__hmac-8843e5205a6a1829b236d7b0bde135a75b47f30f/images/items/750/PB1000-large.jpg',
    description: 'A smart solution for your guitar pedals! The Behringer Pedal Board PB1000 protects your pedals during transport, it provides power to them, and helps prevents your pedal from wandering off after your gigs. Guitarists at Sweetwater know how convenient it is to keep your guitar pedals on a pedalboard, and the Pedal Board PB1000 gives you space for up to twelve 2.5" x 4.5" guitar pedals. Got bigger pedals? You can easily cut the snug foam padding to custom-fit your effects. Its easy to set up your guitar and pedal rig when youve got the Behringer Pedal Board PB1000!'
  },
  {
    id: uuid(),
    brand: 'MONO',
    model: 'Aluminum Pedalboard',
    price: 219.99,
    image: 'http://static.keymusic.com/products/262967/XL/mono-pedalboard-medium-black.jpg',
    description: 'The MONO Pedalboard Medium sits between the Large and Small models in terms of space and features. Its compact, but with greater space and more cutouts (including two in front and one down the center) for more pedal and cabling options. The Pedalboard Medium is cut from a single piece of anodized aluminum for superior strength, light weight, and an elegant textured surface. Cutouts along the surface hide pedal jumpers and power cables for a streamlined, professional look. Rubber feet on the bottom absorb shock and prevent the Pedalboard Medium from sliding across hard surfaces as you stomp. Unique to MONO pedalboards is the included 3M Dual Lock tape, which uses interlocking mushroom-shaped teeth to grip pedals to the board with 5x the strength of hook-and-loop systems.'
  },
  {
    id: uuid(),
    brand: 'T-REX',
    model: 'ToneTrunk Road Case Major',
    price: 299.99,
    image: 'https://media.sweetwater.com/api/i/q-82__ha-6b2201b7d73b1191__hmac-34fae740db01b7489e9ad8644af5d62888839b11/images/items/750/ToneTrunkRCMJ-large.jpg',
    description: 'The ToneTrunk Major pedalboard is made of lightweight aluminum with a brushed black finish for great stage looks and road-ready durability. Sweetwater guitarists appreciate the ToneTrunks wooden road case with aluminum sides and foam interior, which helps keep pedals safe in transit. Additional features include a leather handle for carrying comfort, rubber feet to prevent sliding and scratching, and routed patch cord and power cord channels for maintaining a clean board layout and a safe stage environment.'
  },
  {
    id: uuid(),
    brand: 'Pedaltrain',
    model: 'Metro 20 TC',
    price: 169.99,
    image: 'https://www.thomann.de/pics/bdb/365471/9983026_800.jpg',
    description: 'Pedaltrains Metro 20 TC works perfectly for players with smaller pedal configurations. Now you dont have to lug around a big, cumbersome board just to have quick connectivity to your signal chain. The Metro 20 TC is the ideal pedalboard for transporting and using a few of your go-to stompboxes. Its elegantly simple aluminum construction, light weight, and included hook-and-loop material give you an incredibly versatile platform for whatever youre putting at your feet onstage. A heavy-duty tour-grade case is included.'
  },
  {
    id: uuid(),
    brand: 'Friedman',
    model: 'Tour Pro 1530',
    price: 479.99,
    image: 'https://guitarworks.ca/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/e/h/ehmbuwu4nj1duomcqa2e.jpg',
    description: 'Amp guru Dave Friedman put 27 years of pedalboard-building experience into the Friedman Tour Pro 1530 Gold Pack pedalboard. This rugged two-tier pedalboard features a flat surface on the bottom tier and a slanted surface for the second tier, and guitarists at Sweetwater really like how this arrangement feels. Plenty of holes are available for routing patch cables and power supply lines. Best of all, the Tour Pro 1530 Gold Pack includes Friedmans Buffer Bay 6, a transparent-sounding buffer that maintains your core tone through long cable runs. Factor in the included padded carrying case, and the Friedman Tour Pro 1530 Gold Pack pedalboard is ready to rock.'
  },
  {
    id: uuid(),
    brand: 'Gator',
    model: 'Large Aluminum',
    price: 149.99,
    image: 'https://images.reverb.com/image/upload/s--5vlFAUKK--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1474921942/i4jtgpy392ind2yxkhwq.jpg',
    description: 'The Gator GPB-BAK-GR pedalboard is built from durable, yet supremely lightweight, aluminum. This pedalboard includes a universal mounting bracket to accommodate your favorite stompboxes and power supplies, and is angled for easy access. Routing your cables is a piece of cake, thanks to cable routing perforations. Rubber feet keep the GPB-BAK-GR from sliding around. Includes adhesive hook-and-loop strips for keeping your pedals in their place. Complete with a deluxe polyethylene-reinforced carry bag and removable shoulder strap, the Gator GPB-BAK-GR is a top-notch pedalboard.'
  }
]

module.exports = seedData
