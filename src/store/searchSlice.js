import { createSlice } from "@reduxjs/toolkit";
const mobiles = [
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
    images: [
      "https://m.media-amazon.com/images/I/810KHyQ4WcL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81kiCyL7CFL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71xDSH5Sc+L._SX679_.jpg",
    ],
    price: "6999",
    mrp: "8499",
    ram: [2, 4],
    storage: [32],
    network: "4G",
    brand: "Redmi",
    os: "MIUI",
    model: "Redmi 9A",
    description: `Processor: MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed
    Camera: 13 MP Rear camera with AI portrait| 5 MP front camera
    Display: 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio
    Battery: 5000 mAH large battery with 10W wired charger in-box
    Memory, Storage & SIM: 2GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot`,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
    images: [
      "https://m.media-amazon.com/images/I/71kfaDSxHzL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/710nxlkN5TL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Gx3kmB67L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/711WOiIH9cL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71kfaDSxHzL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71cz4pacl2L._SX679_.jpg",
    ],
    price: "12999",
    mrp: "15999",
    ram: [6],
    storage: [128],
    network: "4G",
    brand: "OPPO",
    os: "color os",
    model: "OPPO A31",
    description: `
        12+2+2MP triple rear camera (12MP main camera+2MP macro lens+2MP depth camera) with Portrait bokeh, macro lens, dazzle color mode, AI beautification | 8MP front camera. OTG : Supported NFC : No
        16.5 centimeters (6.5-inch) waterdrop multi touch screen with an 89% screen to body ratio | 1600 x 720 pixels resolution, 269 ppi pixel density
        Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G)
        Android Pie v9.0 based on ColorOS 6.1 operating system with 2.3GHz Mediatek 6765 octa core processor, IMG GE8320
        4230mAH lithium-polymer battery providing talk-time of 45 hours and standby time of 450 hours
        1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase
        Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones
        `,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate",
    images: [
      "https://m.media-amazon.com/images/I/71Y8rH2cJiL._SX466_.jpg",
      "https://m.media-amazon.com/images/I/51jOXIfpjGS._SX569_.jpg",
      "https://m.media-amazon.com/images/I/712WxtyV5bL._SY606_.jpg",
      "https://m.media-amazon.com/images/I/71Z50nWleFL._SY606_.jpg",
      "https://m.media-amazon.com/images/I/71Vb4InxeWL._SY606_.jpg",
      "https://m.media-amazon.com/images/I/7123zDntI-L._SY606_.jpg",
    ],
    price: "11499",
    mrp: "12999",
    ram: [4, 6],
    storage: [64, 128],
    network: "5G",
    os: "Android",
    model: "Samsung Galaxy M12",
    brand: "Samsung",
    description: `48MP+5MP+2MP+2MP Quad camera setup- True 48MP (F 2.0) main camera + 5MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 8MP (F2.2) front came
    6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase
    Android 11, v11.0 operating system,One UI 3.1, with 8nm Power Efficient Exynos850 (Octa Core 2.0GH
    16.55 centimeters (6.5-inch) HD+ TFT LCD - infinity v-cut display,90Hz screen refresh rate, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color`,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)",
    images: [],
    price: "24999",
    mrp: "24999",
    ram: [6, 8],
    storage: [128],
    network: "5G",
    brand: "One Plus",
    os: "oxyges OS",
    model: "OnePlus Nord CE 2 5G",
    description: `
    65W SUPERVOOC – Accelerated charge velocity shall rocket the 4500mAh battery to a day's power in 15 minutes. Certified by TÜV Rheinland, one shall “Charge & Play” with absolute peace of mind.
    Mediatek Dimensity 900 – Powered by a 5G enabled, octa-core monster of a chipset that’s tad more powerful than previous CE, consider this the “Best in class” daily driver for entertainment with its “dragon-slaying” power efficiency, thermal control and support for Wi-Fi 6.
    6.43 inch, 90Hz FHD+ AMOLED Display – Shielded by Corning Gorilla Glass 5, scroll, swipe, and enjoy all your entertainment effortlessly on this HDR10+ certified, OnePlus-worthy display.
    AI-infused Triple Camera – This amazing camera setup comprises of a 64MP main sensor, 119° wide-angle and a 16MP selfie shooter. Powered by inhouse algorithm, imaging in badly or unevenly lit environments shall become so much easier
    All Flexible – The OnePlus Nord CE 2 is equipped with triple card slots, meaning you have the flexibility to go dual SIM, with an additional micro SD that allows for up to 1TB extendable storage. Also, this phone has a 3.5mm headphone jack
    Designed by OnePlus – Coming in at 7.8mm thick, weighing 173g, this is THE slimmest OnePlus phone yet, since the 6T.
    OnePlus Quality – Powered by the most stable version of OxygenOS 11, based on Android 11, this device is easily futureproof, boasting 2 Years of Android version updates and 3 years of worth of security patches via OTA`,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "Redmi 9 Activ (Metallic Purple, 4GB RAM, 64GB Storage)",
    images: [
      "https://m.media-amazon.com/images/I/919IyPIfczL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/81lU49YZj+L._SX569_.jpg",
      "https://m.media-amazon.com/images/I/81Qbs7NqicL._SX569_.jpg",
    ],
    price: "9499",
    mrp: "10999",
    ram: [4, 6],
    storage: [64, 128],
    network: "4G",
    brand: "Redmi",
    os: "MIUI",
    model: "Redmi 9",
    description: `Processor: Octa-core Helio G35 and upto 2.3GHz clock speed
    Camera: 13+2 MP Dual Rear camera with AI portrait| 5 MP front camera
    Display: 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio
    Battery: 5000 mAH large battery with 10W wired charger in-box
    Memory, Storage & SIM: 4GB RAM | 64GB storage | Dual SIM (nano+nano) + Dedicated SD card slot`,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "realme narzo 50i (Carbon Black, 2GB RAM+32GB Storage) - with No Cost EMI/Additional Exchange Offers",
    images: [
      "https://m.media-amazon.com/images/I/71djAn3nxoL._SY606_.jpg",
      "https://m.media-amazon.com/images/I/61IKxY6occL._SY606_.jpg",
      "https://m.media-amazon.com/images/I/71mHwDN3SGL._SY606_.jpg",
    ],
    price: "7499",
    mrp: "7999",
    ram: [2],
    storage: [32],
    network: "4G",
    brand: "Realme",
    os: "MIUI",
    model: "Realme narzo 50i",
    description: `2 GB RAM | 32 GB ROM | Expandable Upto 256 GB
    16.51 cm (6.5 inch) HD+ Display
    8MP Primary Camera | 5MP Front Camera
    5000 mAh Battery
    Octa-core Processor`,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "Vivo Y21 (Diamond Glow, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
    images: [
      "https://m.media-amazon.com/images/I/61Xkiho1qaL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/61hTRNRYtSL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/61-OhgSikTL._SX569_.jpg",
    ],
    price: "13999",
    mrp: "17999",
    ram: [3, 4, 6, 8],
    storage: [32, 64, 128, 256],
    network: "5G",
    brand: "Vivo",
    os: "Funtouch OS",
    model: "Vivo Y21",
    description: `
    13MP+2MP Rear Camera | 8MP Selfie Camera
    16.55cm (6.51") HD+ Display with 1600 x 720 pixels resolution.
    Memory & SIM: 4GB RAM | 64GB internal memory | Dual SIM (nano+nano) dual-standby (4G).
    Funtouch OS 11.1 operating system based on Android 11 with Mediatek Helio P35 Octa core processor.
    18W fast charging with 5000mAh battery (Type-C).`,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "Blackberry 9790 Unlocked Mobile",
    images: [
      "https://m.media-amazon.com/images/I/31KJGPeLBhL.jpg",
      "https://m.media-amazon.com/images/I/41hlH07f4jL.jpg",
    ],
    price: "8500",
    mrp: "11500",
    ram: [],
    storage: [],
    network: "3G",
    brand: "Blackberry",
    os: "Blackberry",
    model: "Blackberry 9790",
    description: "Engineered to perfection",
  },
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "Apple iPhone 13 (128GB) - (Product) RED",
    images: [
      "https://m.media-amazon.com/images/I/71gm8v4uPBL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61Yc75iMUWL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71Uqzn6rqJL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/614hWvi65iL._SX522_.jpg",
    ],
    price: "79990",
    mrp: "79999",
    ram: [2, 4],
    storage: [128, 256, 512],
    network: "5G",
    brand: "Apple",
    os: "IOS",
    model: "Apple iphone 13",
    description: `15 cm (6.1-inch) Super Retina XDR display
    Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
    Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
    A15 Bionic chip for lightning-fast performance
    Up to 19 hours of video playback
    Durable design with Ceramic Shield`,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "Apple iPhone SE (64 GB) - Starlight (3rd Generation)",
    images: [
      "https://m.media-amazon.com/images/I/61-MT8AQAPL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/51Pn96PRolL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71KVDqFbdHL._SX522_.jpg",
    ],
    price: "43000",
    mrp: "43000",
    ram: [2, 3, 4],
    storage: [64, 128, 256],
    network: "4G",
    brand: "Apple",
    os: "IOS",
    Model: "Apple iphone SE",
    description: `11.94 cm (4.7-inch) Retina HD display
    Advanced single-camera system with 12MP Wide camera; Smart HDR 4, Photographic Styles, Portrait mode, and 4K video up to 60 fps
    7MP FaceTime HD camera with Smart HDR 4, Photographic Styles, Portrait mode, and 1080p video recording
    A15 Bionic chip for lightning-fast performance
    Up to 15 hours of video playback
    Durable design and IP67 water resistance
    Home button with Touch ID for secure authentication
    iOS 15 packs new features to do more with iPhone than ever before`,
  },
  {
    id: Math.random().toString().replace("0.", ""),
    category: "Mobile",
    name: "Apple iPhone 11 (64GB) - Purple",
    images: [
      "https://m.media-amazon.com/images/I/71vstD76l7L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81TpFcp71JL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71ZUHRExe3L._SX522_.jpg",
    ],
    price: "47990",
    mrp: "49900",
    ram: [2, 3, 4],
    storage: [64, 128],
    network: "4G",
    brand: "Apple",
    os: "IOS",
    Model: "Apple iphone 11",
    description: `6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display
    Water and dust resistant (2 meters for up to 30 minutes, IP68)
    Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps
    12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo
    Face ID for secure authentication
    A13 Bionic chip with third-generation Neural Engine
    Fast-charge capable`,
  },
];

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchInput: "",
    data: mobiles,
    searchData: [],
    filter:{},
    requiredBrands:[],
    requiredCatogeries:[],
    requiredPrice:0,
    requiredDiscount:0,
    requiredOs:[],
    requiredNetwork:[],
    requiredRam:[],
    requiredStorage:[],
    requiredPopularity:[],

  },
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    setSearchData(state, action) {
      state.searchData = action.payload;
    },
    setData(state, action) {
      state.data = [...mobiles,...action.payload];
    },
    setFilter(state,action){
      state.filter=action.payload
    },
    addBrand(state,action){
      state.requiredBrands=[...state.requiredBrands,action.payload];
    },
    removeBrand(state,action){
      state.requiredBrands=state.requiredBrands.filter(brand=>brand!=action.payload);
    },
    addCatogeries(state,action){
      state.requiredCatogeries=[...state.requiredCatogeries,action.payload];
    },
    removeCatogeries(state,action){
      state.requiredCatogeries=state.requiredCatogeries.filter(category=>category!=action.payload);
    },
    addPrice(state,action){
      state.requiredPrice=action.payload;
    },
    addDiscount(state,action){
      state.requiredDiscount=action.payload;
    },
    addOs(state,action){
      state.requiredOs=[...state.requiredOs,action.payload];
    },
    removeOs(state,action){
      state.requiredOs=state.requiredOs.filter(os=>os!==action.payload);
    },
    addNetwork(state,action){
      state.requiredNetwork=[...state.requiredNetwork,action.payload]
    },
    removeNetwork(state,action){
      state.requiredNetwork=state.requiredNetwork.filter(network=>network!==action.payload);
    },
    addRam(state,action){
      state.requiredRam=[...state.requiredRam,action.payload];
    },
    removeRam(state,action){
      state.requiredRam=state.requiredRam.filter(ram=>ram!==action.payload);
    },
    addStorage(state,action){
      state.requiredStorage=[...state.requiredStorage,action.payload];
    },
    removeStorage(state,action){
      state.requiredStorage=state.requiredStorage.filter(ram=>ram!==action.payload);
    },
    addPopularity(state,action){
      state.requiredPopularity=[...state.requiredPopularity,action.payload];
    },
    removePopularity(state,action){
      state.requiredPopularity=state.requiredPopularity.filter(popularity=>popularity!==action.payload);
    }
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
