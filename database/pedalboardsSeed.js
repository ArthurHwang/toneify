const uuid = require("uuid/v1");

const pedalBoards = [
  {
    id: uuid(),
    brand: "Voodoo Lab",
    model: "Dingbat",
    size: "medium",
    price: 299.99,
    image: "https://www.americanmusical.com/Galleria/2/VOO%20DBLM-Large.jpg",
    topView: "/img/pedalboards/Voodoo Dingbat Medium.png",
    specs: {
      length: '22"',
      depth: '13.5"',
      height: '2.88"',
      weight: "4.4 lbs",
      powered: "Yes",
      material: "Lightweight American 6061-T6 Aluminum chassis",
      sku: "DBM"
    },
    description:
      "The Voodoo Lab Dingbat Medium Pedalboard is a convenient solution for players that need a high-quality pedalboard that can easily be transported. Coming to you from the same company that created the popular Pedal Power pedalboard power supplies, the Dingbat pedalboard ships with a Pedal Power 2 Plus already mounted onboard. The pedalboard is crafted from aircraft aluminum, which is lightweight and very durable. And the Voodoo Lab Dingbat Medium Pedalboard Power Package even includes its own padded gig bag."
  },
  {
    id: uuid(),
    brand: "Boss",
    model: "BCB-60",
    size: "large",
    price: 169.99,
    image:
      "https://media.sweetwater.com/api/i/q-82__ha-9eab6e2635087263__hmac-be016dc3a34f115f2f11cffb15a296ec6f8ce8a0/images/items/750/BCB60-large.jpg",
    topView: "/img/pedalboards/BCB60.png",
    specs: {
      length: '22.44"',
      depth: '14.636"',
      height: '3.93"',
      weight: "8.44 lbs",
      powered: "Yes",
      material: "Lightweight Durable PBT Plastic",
      sku: "BCB60"
    },
    description:
      "The BOSS BCB-60 Pedal Case makes setup, breakdown and storage simple. Its padded interior protects and holds your effects pedals in place. The BCB-60 holds a wide range of gear including Boss compact and Twin pedals and select stompbox models from other manufacturers. A convenient AC adapter supplies power for up to 7 devices."
  },
  {
    id: uuid(),
    brand: "Voodoo Lab",
    model: "PX-8 PLUS",
    size: "large",
    price: 169.99,
    image:
      "https://www.americanmusical.com/Galleria/4/VOO%20DBMPXS_M3-Large.jpg",
    topView: "/img/pedalboards/PX-8 PLUS.PNG",
    specs: {
      length: '27.44"',
      depth: '8.636"',
      height: '4.93"',
      weight: "10.44 lbs",
      powered: "9V DC power supply(sold separately)",
      material: "Lightweight Durable PBT Plastic",
      sku: "PX8B"
    },
    description:
      "Voodoo Lab PX-8 PLUS is a true bypass programmable pedal switcher that transforms any pedalboard into a powerful yet easy to use tool for organizing and optimizing the performance of your effects and MIDI devices. Equipped with 8 audio loops and 8 premium quality silent-operation footswitches, the PX-8 PLUS allows independent switching for effect pedals and other audio devices without touching your pedals. The PX-8 PLUS features 36 user-created preset audio loop combinations that can be accessed at the touch of a button, converting your pedalboard into a virtual multi-effects system."
  },
  {
    id: uuid(),
    brand: "MONO",
    model: "Large Aluminum Pedalboard",
    size: "large",

    price: 219.99,
    image:
      "https://www.premierguitar.com/ext/resources/images/content/2017_01/LNU2/Jan17_LNU_MONO_Pedalboard_WEB.jpg",
    topView: "/img/pedalboards/Mono Large.PNG",
    specs: {
      length: '32"',
      depth: '16"',
      height: '3.7"',
      weight: "5.62 lbs",
      powered: "No",
      material: "Lightweight anodized aluminum board with rubber feet",
      sku: "PFX-PB-L-BLK"
    },
    description:
      "This is it — the granddaddy of Pedalboard series. The MONO Pedalboard Large is a pro-sized and -featured pedal solution that wont weigh you down in size or cost. The Pedalboard Large is cut from a single piece of anodized aluminum for superior strength, light weight, and an elegant textured surface. Cutouts along the surface hide pedal jumpers and power cables for a streamlined, professional look. Rubber feet on the bottom absorb shock and prevent the Pedalboard Large from sliding across hard surfaces as you stomp. Unique to MONO pedalboards is the included 3M Dual Lock tape, which uses interlocking mushroom-shaped teeth to grip pedals to the board with 5x the strength of hook-and-loop systems."
  },
  {
    id: uuid(),
    brand: "MONO",
    model: "Medium Aluminum Pedalboard",
    price: 189.99,
    size: "medium",
    image:
      "http://static.keymusic.com/products/262967/XL/mono-pedalboard-medium-black.jpg",
    topView: "/img/pedalboards/Mono Medium.PNG",
    specs: {
      length: '24"',
      depth: '14.5"',
      height: '3.7"',
      weight: "3.97 lbs",
      powered: "No",
      material: "Lightweight anodized aluminum board",
      sku: "P16D"
    },
    description:
      "The MONO Pedalboard Medium sits between the Large and Small models in terms of space and features. Its compact, but with greater space and more cutouts (including two in front and one down the center) for more pedal and cabling options. The Pedalboard Medium is cut from a single piece of anodized aluminum for superior strength, light weight, and an elegant textured surface. Cutouts along the surface hide pedal jumpers and power cables for a streamlined, professional look. Rubber feet on the bottom absorb shock and prevent the Pedalboard Medium from sliding across hard surfaces as you stomp. Unique to MONO pedalboards is the included 3M Dual Lock tape, which uses interlocking mushroom-shaped teeth to grip pedals to the board with 5x the strength of hook-and-loop systems."
  },
  {
    id: uuid(),
    brand: "MONO",
    model: "Small Aluminum Pedalboard",
    price: 169.99,
    size: "small",

    image: "https://www.thomann.de/pics/bdb/428335/12826677_800.jpg",
    topView: "/img/pedalboards/Mono Small.png",
    specs: {
      length: '18"',
      depth: '12.3"',
      height: '3.7"',
      weight: "2.75 lbs",
      powered: "No",
      material: "Lightweight anodized aluminum board",
      sku: "PFX-PB-S-BLK"
    },
    description:
      "The MONO Pedalboard Medium sits between the Large and Small models in terms of space and features. Its compact, but with greater space and more cutouts (including two in front and one down the center) for more pedal and cabling options. The Pedalboard Medium is cut from a single piece of anodized aluminum for superior strength, light weight, and an elegant textured surface. Cutouts along the surface hide pedal jumpers and power cables for a streamlined, professional look. Rubber feet on the bottom absorb shock and prevent the Pedalboard Medium from sliding across hard surfaces as you stomp. Unique to MONO pedalboards is the included 3M Dual Lock tape, which uses interlocking mushroom-shaped teeth to grip pedals to the board with 5x the strength of hook-and-loop systems."
  },
  {
    id: uuid(),
    brand: "Pedaltrain",
    model: "Metro 20 TC",
    size: "small",
    price: 169.99,
    image: "https://www.thomann.de/pics/bdb/365471/9983026_800.jpg",
    topView: "/img/pedalboards/Pedaltrain metro 20.png",
    specs: {
      length: '20"',
      depth: '8"',
      height: '1.4"',
      weight: "1.12 lbs",
      powered: "No",
      material: "Featherweight, aircraft grade aluminum board",
      sku: "PT-M20-TC"
    },
    description:
      "Pedaltrains Metro 20 TC works perfectly for players with smaller pedal configurations. Now you dont have to lug around a big, cumbersome board just to have quick connectivity to your signal chain. The Metro 20 TC is the ideal pedalboard for transporting and using a few of your go-to stompboxes. Its elegantly simple aluminum construction, light weight, and included hook-and-loop material give you an incredibly versatile platform for whatever youre putting at your feet onstage. A heavy-duty tour-grade case is included."
  },
  {
    id: uuid(),
    brand: "Pedaltrain",
    model: "Metro 24",
    size: "medium",
    price: 99.99,
    image:
      "https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/dga-3107364e469ef5e5378990bcd0384264.jpg",
    topView: "/img/pedalboards/Pedaltrain Metro24.png",
    specs: {
      length: '24"',
      depth: '8"',
      height: '1.4"',
      weight: "2 lbs",
      powered: "No",
      material: "Featherweight, aircraft grade aluminum board",
      sku: "PT-M24-SC"
    },
    description:
      'This revolutionary new pedalboard is constructed of ultra-tough and lightweight aluminum alloy. Each Pedaltrain pedalboard frame weighs less than 3/4" plywood of similar size, plus, there are no moving parts to loosen or wear out. Take it from the Sweetwater crew - with its durable construction and powder-coat finish, the Pedaltrain Metro 24 pedalboard last a lifetime.'
  },
  {
    id: uuid(),
    brand: "Temple Audio Design",
    model: "Trio 28 Red",
    price: 129.99,
    size: "large",
    specs: {
      length: '29"',
      depth: '16.5"',
      height: '4"',
      weight: "9.9 lbs",
      powered: "No",
      material: "316L Stainless Steel",
      sku: "4334196797"
    },
    image: "https://www.thomann.de/pics/bdb/368330/10331999_800.jpg",
    topView: "/img/pedalboards/Temple trio 28.png",
    description:
      'The Temple TRIO 28 is a killer choice for those with a growing collection of large boutique pedals. The TRIO (16.5") depth leaves plenty of room for mounting bypass loopers and midi controllers. All TRIO series pedalboards feature one (1) micro module slot and three (3) mini module slots per side. Comes with the Temple Soft Case which provides an economical way to protect and transport your pedals. The durable yet lightweight design allows you to get your effects from gig to gig with peace of mind that your gear is well covered*. Each size come with a detachable shoulder strap and a deep front pouch for extra cable and accessory storage.'
  },
  {
    id: uuid(),
    brand: "Friedman",
    model: "Tour Pro 1530",
    price: 479.99,
    size: "large",
    image:
      "https://mthumbs.static-thomann.de/thumb/padthumb600x360/pics/bdb/413519/12593391_800.jpg",
    topView: "/img/pedalboards/friedman tour pro top down.PNG",
    specs: {
      length: '30"',
      depth: '15"',
      height: '4"',
      weight: "7 lbs",
      powered: "No",
      material: "Aluminum with black finish",
      sku: "TOUR PRO 1530"
    },
    description:
      "Amp guru Dave Friedman put 27 years of pedalboard-building experience into the Friedman Tour Pro 1530 Gold Pack pedalboard. This rugged two-tier pedalboard features a flat surface on the bottom tier and a slanted surface for the second tier, and guitarists at Sweetwater really like how this arrangement feels. Plenty of holes are available for routing patch cables and power supply lines. Best of all, the Tour Pro 1530 Gold Pack includes Friedmans Buffer Bay 6, a transparent-sounding buffer that maintains your core tone through long cable runs. Factor in the included padded carrying case, and the Friedman Tour Pro 1530 Gold Pack pedalboard is ready to rock."
  },
  {
    id: uuid(),
    brand: "Gator",
    model: "Large Aluminum",
    price: 149.99,
    size: "large",
    image:
      "https://images.reverb.com/image/upload/s--5vlFAUKK--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1474921942/i4jtgpy392ind2yxkhwq.jpg",
    topView: "/img/pedalboards/Gator Aluminum Large.png",
    specs: {
      length: '23.75"',
      depth: '10.66"',
      height: '2.98"',
      weight: "9 lbs",
      powered: "No",
      material: "Aluminum with black finish",
      sku: "GPB-BAK-GR"
    },
    description:
      "The Gator GPB-BAK-GR pedalboard is built from durable, yet supremely lightweight, aluminum. This pedalboard includes a universal mounting bracket to accommodate your favorite stompboxes and power supplies, and is angled for easy access. Routing your cables is a piece of cake, thanks to cable routing perforations. Rubber feet keep the GPB-BAK-GR from sliding around. Includes adhesive hook-and-loop strips for keeping your pedals in their place. Complete with a deluxe polyethylene-reinforced carry bag and removable shoulder strap, the Gator GPB-BAK-GR is a top-notch pedalboard."
  },

  {
    id: uuid(),
    brand: "Pedaltrain",
    model: "Classic Jr SC 18",
    price: 119.99,
    size: "small",
    image:
      "https://mthumbs.static-thomann.de/thumb/padthumb600x360/pics/bdb/413519/12593391_800.jpg",
    topView: "/img/pedalboards/Pedaltrain Classic JR.PNG",
    specs: {
      length: '18"',
      depth: '12.5"',
      height: '3.5"',
      weight: "3 lbs",
      powered: "No",
      material: "Featherweight, aircraft grade aluminum",
      sku: "PT-CLJ-SC"
    },
    description:
      "Protect your vintage and premium pedals around the clock - from the practice room to the van to the stage - with the T-Rex ToneTrunk 70 pedalboard and road case. Gigging with the ToneTrunk is as easy as it gets: remove the lid, plug in your power supply, and start rocking - no need to remove the board from the case! The ToneTrunks multi-tiered design lets you access pedals in the front or back of the board without straining, and with low risk of messing up another pedals settings. This ToneTrunk includes hook-and-loop fastening tape to secure pedals to the aluminum chassis and zip ties for pre-drilled holes when youre ready to lock in your stage setup."
  },
  {
    id: uuid(),
    brand: "Temple Audio Design",
    model: "Solo 18",
    size: "small",
    price: 89.99,
    image:
      "https://cdn.shopify.com/s/files/1/0747/1009/products/SOLO_18_White_Side_1024x1024.JPG?v=1421706141",
    topView: "/img/pedalboards/Templeboards Solo 18.png",
    specs: {
      length: '18"',
      depth: '8.5"',
      height: '3.5"',
      weight: "1.8 lbs",
      powered: "No",
      material: "Gunmetal Aluminum",
      sku: "SOLO18GM"
    },
    description:
      "The Temple SOLO 18 is our most compact pedalboard, but dont let the size fool you! Our unique perforated top surface and strategically placed cable management holes allow you to “Tetris” in a lot more pedals than you might think (as well as mount power supply/pedals underneath!). This is a great board for acoustic guitarists, minimalist gurus, or those wanting a secondary board to load up just the essentials for smaller gigs."
  },
  {
    id: uuid(),
    brand: "Pedaltrain",
    model: "Classic 1",
    size: "medium",
    price: 199.99,
    image:
      "http://images.equipboard.com/uploads/item/image/10396/pedaltrain-1-l.jpg?v=1532162453",
    topView: "/img/pedalboards/Pedaltrain Classic 1.PNG",
    specs: {
      length: '22"',
      depth: '12.5"',
      height: '3.5"',
      weight: "2.5 lbs",
      powered: "No",
      material: "Aircraft grade aluminum",
      sku: "PT-CL1-SC"
    },
    description:
      "The Classic 1 should be familiar to you.  Based on the original PT-1, the model that started it all, the Classic 1 features Pedaltrain’s original four-rail design and traditional rail spacing.  However, the Classic 1 has been updated with an open front design (portholes are history) making power supply mounting more flexible and convenient. The elevation has been raised by approximately 1 inch to clear a wider variety of power supplies and switching systems. Classic 1 is available for purchase with either Pedaltrain’s fitted soft case (featuring a heavy-duty metal zipper and reinforced stress points) or, for the first time ever, Pedaltrain’s professional-grade tour case."
  },
  {
    id: uuid(),
    brand: "Pedaltrain",
    model: "Classic 2",
    price: 229.99,
    size: "large",
    image: "https://www.rainbowguitars.com/imagesproduct/pt/ptcl2sc-xl.jpg",
    topView: "/img/pedalboards/Pedaltrain Classic 2.PNG",
    specs: {
      length: '24"',
      depth: '12.5"',
      height: '3.5"',
      weight: "3.4 lbs",
      powered: "No",
      material: "Featherweight, aircraft grade aluminum",
      sku: "PT-CL2-SC"
    },
    description:
      "The Classic 2 should be familiar to you.  Based on the original PT-2, the Classic 2 features Pedaltrain’s original four-rail design and traditional rail spacing.  However, the Classic 2 has been updated with an open front design (portholes are history) making power supply mounting more flexible and convenient. The elevation has been raised by approximately 1 inch to clear a wider variety of power supplies and switching systems. Classic 2 is available for purchase with either Pedaltrain’s fitted soft case (featuring a heavy-duty metal zipper and reinforced stress points) or Pedaltrain’s professional-grade tour case."
  },
  {
    id: uuid(),
    brand: "Pedaltrain",
    model: "Classic Pro",
    price: 189.99,
    size: "medium",
    image: "https://www.rainbowguitars.com/imagesproduct/pt/ptclprotc-xl.jpg",
    topView: "/img/pedalboards/Pedaltrain Classic Pro.PNG",
    specs: {
      length: '32"',
      depth: '16"',
      height: '3.5"',
      weight: "6 lbs",
      powered: "No",
      material: "Featherweight, aircraft grade aluminum",
      sku: "PT-CL2-SC"
    },
    description:
      "The Classic PRO should be familiar to you.  Based on the original PT-PRO, the Classic PRO features Pedaltrain’s original five-rail “pro” design with traditional rail spacing. The Classic PRO continues Pedaltrain’s trend toward an open front design making power supply and switching system mounting flexible and convenient. Classic PRO is available for purchase with Pedaltrain’s fitted soft case (featuring a heavy-duty metal zipper and reinforced stress points) or our newly redesigned tour case with wheels, engineered to be up to 35% lighter than previous models. "
  },
  {
    id: uuid(),
    brand: "Behringer",
    model: "PB600",
    price: 99.99,
    size: "medium",
    image:
      "https://media.sweetwater.com/api/i/f-webp__q-82__ha-4ac4d89785b19fb6__hmac-8413415f1c8fecb5cc16c0ef9dc11a86d54fcb3a/images/items/750/PB600-large.jpg.auto.webp",
    topView:
      "https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/PB600_P0A0A_Top1_XXL_clipped-56d7fb002618798ca705b0171d0a48ea.jpg",
    specs: {
      length: '26.125"',
      depth: '19.875"',
      height: '4.5"',
      weight: "8.4 lbs",
      powered: "Yes",
      material: "Durable PBT Plastic Shell",
      sku: "PB600"
    },
    description:
      "A smart solution for your guitar pedals! The Behringer Pedal Board PB600 protects your pedals during transport, it provides power to them, and helps prevents your pedal from wandering off after your gigs. Guitarists at Sweetwater know how convenient it is to keep your guitar pedals on a pedalboard, and the Pedal Board PB600 gives you space for up to six 2.5' x 4.5' guitar pedals. Got bigger pedals? You can easily cut the snug foam padding to custom-fit your effects. It's easy to set up your guitar and pedal rig when you've got the Behringer Pedal Board PB600!"
  },
  {
    id: uuid(),
    brand: "Behringer",
    model: "PB1000",
    price: 129.99,
    size: "large",
    image:
      "https://media.sweetwater.com/api/i/f-webp__q-82__ha-d30b3b4090cd0058__hmac-e80f441b369f045762788fed5d8e300bbe1c56e4/images/items/750/PB1000-large.jpg.auto.webp",
    topView: "/img/pedalboards/Behringer PB1000.png",
    specs: {
      length: '26.125"',
      depth: '19.85"',
      height: '4.5"',
      weight: "11.8 lbs",
      powered: "Yes",
      material: "Durable PBT Plastic Shell",
      sku: "PB1000"
    },
    description:
      "The Behringer PB1000 pedal board offers you the utmost in flexibility, allowing you to add and group effects pedals to your heart's content. Get your effects pedals wired up and ready to play at all times in thie protective, roadworthy Behringer PB1000. The PB1000 is an ultra-compact and rugged pedal board for musicians who want to pre-arrange and carry up to 12 effects pedals in a heavy-duty, yet lightweight, case designed to withstand heavy impact. The Behringer PB1000 features a generous 1.7 A power adapter and includes all cabling to power multiple stomp boxes simultaneously."
  },
  {
    id: uuid(),
    brand: "Pedaltrain",
    model: "Novo 32 SC",
    price: 199.99,
    size: "large",
    image:
      "https://cosmomusic.ca/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/F/A/FAPBPEDPTN32SC_3_3.jpg",
    topView: "/img/pedalboards/Pedaltraina Novo 32.png",
    specs: {
      length: '32"',
      depth: '14.5"',
      height: '3.5"',
      weight: "6 lbs",
      powered: "No",
      material: "Featherweight, aircraft grade aluminum",
      sku: "PT-N32-SC"
    },
    description:
      "A fresh take on Pedaltrain's timeless pedalboard designs, the Novo series offers you the stability and accessibility you need to take your guitar effects pedals on the road. Featuring a redesigned open-front configuration, Sweetwater guitarists really appreciate the extra space the Novo 32 provides for loop switchers and bigger pedals, while uncluttered format makes it easy to install power supplies and cabling. The Novo 32 even comes with a package of zip ties and hook-and-loop fasteners to get you started. What's more, this Novo 32 package comes with a fitted soft case, providing lightweight grab-and-go convenience when it's time to hit the road."
  },
  {
    id: uuid(),
    brand: "Pedaltrain",
    model: "Novo18",
    size: "medium",
    price: 129.99,
    image: "/img/pedalboards/Pedaltrain  novo18 gallery.PNG",
    topView: "/img/pedalboards/pedaltrain novoo18.PNG",
    specs: {
      length: '17"',
      depth: '14.5"',
      height: '3.5"',
      weight: "4 lbs",
      powered: "No",
      material: "Featherweight, aircraft grade aluminum",
      sku: "PT-N18-SC"
    },
    description:
      "The Novo series is Pedaltrain’s new five-rail pedal board system. Novo means “a new beginning” in Latin. Pedaltrain’s new Novo Series is exactly that, a fresh redesign of their market-leading pedal board design. Thanks to Pedaltrain’s new modified rail system and open front design, mounting pedals and power supplies is easier than ever.  Even the smallest pedals make an incredibly strong bond with this new rail system. Novo 18’s five-rail design is perfect."
  }
];

module.exports = pedalBoards;
