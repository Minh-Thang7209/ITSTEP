import type IGroup from "../model/IGroup";
import type IGroupProduct from "../model/IGroupProduct";

const groups: Array<IGroup> = [
    {
        id: "1",
        name: "Shop gaming",
        description: "Get your game on",
        slug: "game",
        imageUrl: "/img/group1.jpg"
    },
    {
        id: "2",
        name: "Jeans",
        description: "Shop Fashion for less",
        slug: "jeans",
        imageUrl: "/img/group2.jpg"
    },
    {
        id: "3",
        name: "Watches",
        description: "Wireless Tech",
        slug: "watches",
        imageUrl: "/img/group3.jpg"
    },
    {
        id: "4",
        name: "Smartphones",
        description: "Wireless Tech",
        slug: "smartphones",
        imageUrl: "/img/group4.jpg"
    },
    {
        id: "5",
        name: "Tablets",
        description: "Wireless Tech",
        slug: "tablets",
        imageUrl: "/img/group5.jpg"
    },
    {
        id: "6",
        name: "Headphones",
        description: "Wireless Tech",
        slug: "headphones",
        imageUrl: "/img/group6.jpg"
    },
    {
        id: "7",
        name: "PC",
        description: "Deals on top categories",
        slug: "pc",
        imageUrl: "/img/group7.jpg"
    },
    {
        id: "8",
        name: "Men",
        description: "Most-loved watches",
        slug: "men-watches",
        imageUrl: "/img/group8.jpg"
    },
    {
        id: "9",
        name: "Laptops",
        description: "Level up your PC here",
        slug: "laptops",
        imageUrl: "/img/group9.jpg"
    },
    {
        id: "10",
        name: "Equipment",
        description: "Gear up to get fit",
        slug: "equipment",
        imageUrl: "/img/group10.jpg"
    },
    {
        id: "11",
        name: "Kitchen & dining",
        description: "New home arrivals under $50",
        slug: "kitchen_dining",
        imageUrl: "/img/group11.jpg"
    }
];

const groupProducts: Record<string, IGroupProduct> = {
    "game": {
        group: groups[0],
        products: [
            {
                id: "1-1",
                name: "Fortnite",
                description: "Fortnite, Battale Royale",
                price: 1.0,
                imageUrl: "/img/Gemini_Generated_Image_Fortnite.png",
                stock: -1,
            },
            {
                id: "1-2",
                name: "Goat Simulator",
                price: 49.99,
                imageUrl: "/img/Gemini_Generated_Image_Goat_Simulator_3.png",
                stock: -1
            },
            {
                id: "1-3",
                name: "GTA VI",
                price: 49.99,
                imageUrl: "/img/Gemini_Generated_Image_GTA_6.png",
                stock: -1
            },
            {
                id: "1-4",
                name: "Hollow knight",
                price: 49.99,
                imageUrl: "/img/Gemini_Generated_Image_Hollow_knight.png",
                stock: -1
            },
            {
                id: "1-5",
                name: "Hollow Knight: Silksong",
                price: 69.99,
                imageUrl: "/img/Gemini_Generated_Image_Hollow_Knight_Silksong.png",
                stock: -1
            },
            {
                id: "1-6",
                name: "It Takes Two",
                price: 39.99,
                imageUrl: "/img/Gemini_Generated_Image_It_Takes_Two.png",
                stock: -1
            },
            {
                id: "1-7",
                name: "Mario",
                price: 49.99,
                imageUrl: "/img/Gemini_Generated_Image_Mario.png",
                stock: -1
            },
            {
                id: "1-8",
                name: "Ratchet & Clank: Rift Apart",
                price: 69.99,
                imageUrl: "/img/Gemini_Generated_Image_Ratchet_clank_Rift_Apart.png",
                stock: -1
            },
            {
                id: "1-9",
                name: "Sonic Frontiers",
                price: 169.99,
                imageUrl: "/img/Gemini_Generated_Image_Sonic_Frontiers.png",
                stock: -1
            },
            {
                id: "1-10",
                name: "Stray",
                price: 29.99,
                imageUrl: "/img/Gemini_Generated_Image_Stray.png",
                stock: -1
            },
        ]
    },
    "jeans": {
        group: groups[1],
        products: [
            {
                id: "2-1",
                name: "Levi's Men's 505 Regular Fit Jeans (Also Available in Big & Tall)",
                description: "Levi's Men's 505 Regular Fit Jeans (Also Available in Big & Tall)",
                price: 26.99,
                imageUrl: "/img/61+wfQgf7UL._AC_UL480_QL65_.jpg",
                stock: -1
            },
            {
                id: "2-2",
                name: "Rustler Men's Classic Relaxed Fit",
                description: "Relaxed fit thru seat and thigh 5 pocket stylingvStraight leg Heavy weight durable denim",
                price: 14.98,
                imageUrl: "/img/71HVSFd9fyL._AC_SY445_SX342_QL70_ML2_.jpg",
                stock: -1
            },
            {
                id: "2-3",
                name: "WranglerMen's 13mwz Cowboy Cut Original Fit Jean",
                price: 29.99,
                imageUrl: "/img/71FZIR5acuL._AC_UL480_QL65_.jpg",
                stock: -1
            },
            {
                id: "2-4",
                name: "Levi's Men's 501 Original Fit Jeans (Also Available in Big & Tall)",
                price: 29.99,
                imageUrl: "/img/41NgDv59BaL._AC_UL480_QL65_.jpg",
                stock: -1
            },
            {
                id: "2-5",
                name: "Levi's Men's 550 Relaxed Fit Jeans",
                price: 42.72,
                imageUrl: "/img/81CXiyO0oOL._AC_UL480_QL65_.jpg",
                stock: -1
            },
            {
                id: "2-6",
                name: "Wrangler Authentics Men's Relaxed Fit Boot Cut Jean",
                price: 30.43,
                imageUrl: "/img/71QYYQ-tPRL._AC_UL480_QL65_.jpg",
                stock: -1
            },
            {
                id: "2-7",
                name: "Levi Strauss Signature Gold Men's Slim Fit Jeans",
                price: 29.99,
                imageUrl: "/img/51jsgA+Y1ML._AC_UL480_QL65_.jpg",
                stock: -1
            },
            {
                id: "2-8",
                name: "Levi's Men's 550 Relaxed Fit Jeans (Also Available in Big & Tall), Medium Stonewash, 42W x 32L",
                price: 29.99,
                imageUrl: "/img/81sBIM6RjAL._AC_UL480_QL65_.jpg",
                stock: -1
            },
            {
                id: "2-9",
                name: "Wrangler Authentics Men's Comfort Flex Waist Relaxed Fit Jean",
                price: 33.02,
                imageUrl: "/img/61GqCa589gL._AC_UL480_QL65_.jpg",
                stock: -1
            },
            {
                id: "2-10",
                name: "Wrangler Men's Retro Relaxed Fit Boot Cut Jean",
                price: 39.99,
                imageUrl: "/img/71AMReqNcpL._AC_UL480_QL65_.jpg",
                stock: -1
            },
        ]
    },
    "watches": {
        group: groups[2],
        products: [
            {
                id: "3-1",
                name: "Smart Watches for Women",
                description: '1.91" HD Fitness Tracker (Answer/Make Calls), IP68 Waterproof, 120+ Sport Modes with Heart Rate and Sleep Monitor, Fitness Watch for iPhone/Android',
                price: 129.99,
                imageUrl: "/img/81al6p-pKuL._AC_UY218_.jpg",
            },
            {
                id: "3-2",
                name: "SAMSUNG Galaxy FIT 3 [2024]",
                description: '1.6" AMOLED Display | 14 Days Battery Life | 100+ Watchfaces | 100+ Exercise Modes | International Model - (Gray)',
                price: 45,
                imageUrl: "/img/41KyLKvro-L._AC_UY218_.jpg",
            },
            {
                id: "3-3",
                name: "Samsung Galaxy Watch 8 (2025)",
                description: '40mm Bluetooth Smartwatch, Cushion Design, Fitness Tracker, Sleep Coaching, Running Coach, Energy Score, Heart Rate Tracking, Graphite [US Version, 2 Yr Warranty]',
                price: 223.01,
                imageUrl: "/img/61IpkAmVjwL._AC_UY218_.jpg",
            },
            {
                id: "3-4",
                name: "Garmin vívoactive 5",
                description: 'Health and Fitness GPS Smartwatch, AMOLED Display, Up to 11 Days of Battery, Ivory',
                price: 169.95,
                imageUrl: "/img/610Jl4dUB7L._AC_UY218_.jpg",
            },
            {
                id: "3-5",
                name: "Smart Watch for Men Women",
                description: '1.91"Smartwatch with Answer/Make Call, Fitness Tracker with 100+ Sport Modes, Watches IP68 Waterproof/Heart Rate/Sleep Monitor/Pedometer, Activity Tracker for Android iOS',
                price: 13.99,
                imageUrl: "/img/71y74-RugbL._AC_UY218_.jpg",
            },
            {
                id: "3-6",
                name: "OLEVS Watches Men Waterproof Luxury Big Face Mens Watch Stainless Steel Quartz Analog Dress Watches for Men Luminous Multifunction Man Watch Relojes De Hombre",
                description: 'Features a classic big dial and quartz movement with stable quality. High hardness coated glass mirror is wear-resistant, scratch-proof, Butterfly double buckle ensures comfortable wear',
                price: 42.77,
                imageUrl: "/img/71gWoIH59oL._AC_SY535_.jpg",
            },
            {
                id: "3-7",
                name: "Breitling Bentley Flying B Neptune Dial Mens Watch A2836212-C722SS",
                price: 179.86,
                imageUrl: "/img/41TGyLp6gOL._AC_SY695_.jpg",
            },
            {
                id: "3-8",
                name: "LN LENQIN Mens Watches Unisex Military Sport Nylon Strap Stylish Luminous Fashion Analog Quartz Watch for Men Waterproof Army Tactical Casual Wristwatch ",
                description: 'MENS WATCHES ANALOG: Mens military watches made with shock-resistant stainless steel case and anti-scratch mineral window, exquisitely crafted and durable',
                price: 8.79,
                imageUrl: "/img/71UUjbESoFL._AC_SY300_SX300_QL70_ML2_.jpg",
            },
            {
                id: "3-9",
                name: "Casio A158WA Series | Unisex Digital Watch | Vintage | WR | 100 SEC Stop Watch | Daily Alarm | Regular Time Keeping: Hour, Minute, Second, PM, Date, Day | Led Light | 7 Yr Battery ",
                description: 'Luminous rectangular dial with alarm and stopwatch 33 mm caseQuartz movement with digital displayThree-link bracelet with fold-over clasp closure. LED lightWater resistant. Withstands splashes or brief immersion in water, but not suitable for swimming.',
                price: 23.59,
                imageUrl: "/img/611typKnTvL._AC_SY300_SX300_QL70_ML2_.jpg",
            },
            {
                id: "3-10",
                name: "GOLDEN HOUR Waterproof Sport Women's Digital Chronograph Silicone Strap Watch ",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 17.99,
                imageUrl: "/img/51okFuOgFRL._AC_SX522_.jpg",
            },
        ]
    },
    "smartphones": {
        group: groups[3],
        products: [
            {
                id: "4-1",
                name: "Apple iPhone 16 Pro Max, 512GB, Black Titanium - Unlocked (Renewed)",
                description: ' STUNNING TITANIUM DESIGN—iPhone 16 Pro Max has a strong and light titanium design with a larger 6.9-inch Super Retina XDR display. It’s remarkably durable with the latest-generation Ceramic Shield material that’s 2x tougher than any smartphone glass. BUILT FOR APPLE INTELLIGENCE—Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data. TAKE TOTAL CAMERA CONTROL—Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time',
                price: 844.97,
                imageUrl: "/img/51vYwEbmqPL._AC_SL1200_.jpg",
            },
            {
                id: "4-2",
                name: "Motorola Moto G Play LTE | Unlocked | Made for US 4/64GB | 50MP Camera | Sapphire Blue",
                description: ' Blazing-fast Qualcomm performance. Get the speed you need for great entertainment with a Snapdragon 680 processor and 4GB**** of RAM. Fluid display + immersive stereo sound. Bring your entertainment to life with an ultrawide 6.5" 90Hz* HD+ display plus stereo speakers, Dolby Atmos, and Hi-Res Audio**. 50MP*** Quad Pixel camera. Capture sharper, more vibrant photos day or night with 4x the light sensitivity. ',
                price: 104.88,
                imageUrl: "/img/61xk4XNRktL._AC_SL1500_.jpg",
            },
            {
                id: "4-3",
                name: "Samsung Galaxy A37 5G (2026), Unlocked Android Smartphone, 128GB, AMOLED Display, Triple Camera, IP68, Slim Phone, 5000mAh Battery, US Version, US 1 Yr Warranty, Awesome Charcoal",
                description: ' AWESOME SCREEN. ENDLESS POSSIBILITIES: Elevate your content no matter where you are with the 6.7" Super AMOLED display¹ of the Galaxy A37 5G. Enjoy massive detail and stunning clarity on the go LONG-LASTING BATTERY: Whether it’s family moments or important calls, stay powered without the wait with Galaxy A37 5G. Super Fast Charging 2.0² ensures you’re back up and running quickly NEVER MISS THE SHOT, EVEN IN LOW LIGHT: With effortless Nightography, you can capture clear high-quality photos and videos on your phone automatically without adjusting manual settings ',
                price: 100.00,
                imageUrl: "/img/5172k5P8aOL._AC_SL1500_.jpg",
            },
            {
                id: "4-4",
                name: "Moto G Power 5G | 2024 | Unlocked | Made for US 8/128GB | 50MP Camera | Midnight Blue",
                description: 'Functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 117.39,
                imageUrl: "/img/61c9OZyq2yL._AC_SL1500_.jpg",
            },
            {
                id: "4-5",
                name: "Samsung Galaxy S24 Ultra 5G, US Version, 512GB, Titanium Black - Unlocked (Renewed)",
                description: 'inment with an incredibly sharp, fluid display backed by multidimensional stereo sound. 50MP camera system with OIS. Capture sharper low-light photos with an unshakable camera system featuring Optical Image Stabilization.***** Unbelievable battery life and fast recharging. Work and play nonstop with a long-lasting 5000mAh battery, then fuel up with 30W TurboPower charging.*** ',
                price: 592.00,
                imageUrl: "/img/71WcjsOVOmL._AC_SL1500_.jpg",
            },
            {
                id: "4-6",
                name: "Moto G - 2025 | Unlocked | Made for US 4/128GB | 50MP Camera | Forest Gray",
                description: '',
                price: 99.00,
                imageUrl: "/img/8160OiLlJEL._AC_SL1500_.jpg",
            },
            {
                id: "4-7",
                name: "Motorola Moto G Stylus 5G | 2024 | Unlocked | Made for US 8/128GB | 50MP Camera | ",
                description: 'onvenient for your daily life.',
                price: 154.46,
                imageUrl: "/img/61LE9-6KxdL._AC_SL1500_.jpg",
            },
            {
                id: "4-8",
                name: "Samsung Galaxy S25 FE Cell Phone (2025), 256GB AI Smartphone, Unlocked Android, Large Display, 4900mAh Battery, High Res-Camera, AI Photo Edits, Durable, US 1 Yr Warranty, Navy",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 749.99,
                imageUrl: "/img/61PhnlzlYdL._AC_SL1500_.jpg",
            },
            {
                id: "4-9",
                name: "Apple iPhone 14, 128GB, Midnight - Unlocked (Renewed)",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 532.99,
                imageUrl: "/img/61WUSYIQdKL._AC_SL1500_.jpg",
            },
            {
                id: "4-10",
                name: "XIAOMI Poco X8 PRO 5G Ai (Compatible with Tmobile Mint Tello & Global) (256GB + 8GB) 6.59",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 345.80,
                imageUrl: "/img/619J9ccIDEL._AC_SL1353_.jpg",
            },
        ]
    },
    "tablets": {
        group: groups[4],
        products: [
            {
                id: "5-1",
                name: "Samsung Galaxy Tab A11+ 6GB RAM, 128GB Storage, Optimized Performance, Long Lasting Battery, Expandable Storage, Large Display, Dolby Atmos Speakers, AI Assist, Slim, Light, 2 Year Warranty, Gray ",
                description: ' STUNNING TITANIUM DESIGN—iPhone 16 Pro Max has a strong and light titanium design with a larger 6.9-inch Super Retina XDR display. It’s remarkably durable with the latest-generation Ceramic Shield material that’s 2x tougher than any smartphone glass. BUILT FOR APPLE INTELLIGENCE—Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data. TAKE TOTAL CAMERA CONTROL—Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time',
                price: 844.97,
                imageUrl: "/img/61NlIpbonCL._AC_SL1500_.jpg",
            },
            {
                id: "5-2",
                name: "Samsung Galaxy Tab S10 Lite, 6GB RAM, 128GB, 2TB Expand, Long Battery Life, 10.9” LCD, S Pen for Note-Taking, Exynos 1380, Circle to Search, AI Tools, Gray",
                description: ' Blazing-fast Qualcomm performance. Get the speed you need for great entertainment with a Snapdragon 680 processor and 4GB**** of RAM. Fluid display + immersive stereo sound. Bring your entertainment to life with an ultrawide 6.5" 90Hz* HD+ display plus stereo speakers, Dolby Atmos, and Hi-Res Audio**. 50MP*** Quad Pixel camera. Capture sharper, more vibrant photos day or night with 4x the light sensitivity. ',
                price: 249.99,
                imageUrl: "/img/61jwusQUP2L._AC_SL1500_.jpg",
            },
            {
                id: "5-3",
                name: "Lenovo Tab One - Lightweight Tablet - up to 12.5 Hours of YouTube Streaming - 8.7 HD Display - 4 GB Memory - 64 GB Storage - MediaTek Helio G85 - Includes Folio Case ",
                description: ' AWESOME SCREEN. ENDLESS POSSIBILITIES: Elevate your content no matter where you are with the 6.7" Super AMOLED display¹ of the Galaxy A37 5G. Enjoy massive detail and stunning clarity on the go LONG-LASTING BATTERY: Whether it’s family moments or important calls, stay powered without the wait with Galaxy A37 5G. Super Fast Charging 2.0² ensures you’re back up and running quickly NEVER MISS THE SHOT, EVEN IN LOW LIGHT: With effortless Nightography, you can capture clear high-quality photos and videos on your phone automatically without adjusting manual settings ',
                price: 119.97,
                imageUrl: "/img/713r2sAaC+L._AC_SL1500_.jpg",
            },
            {
                id: "5-4",
                name: "Long Battery Life, Quad Speakers, Multi Window Display, US Version, 2026, Gray, SM-X238UZAAXAA",
                description: 'Functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 189.99,
                imageUrl: "/img/61NlIpbonCL._AC_SL1500_.jpg",
            },
            {
                id: "5-5",
                name: "Samsung Galaxy Tab S10 FE+ 13.1” 128GB WiFi Android Tablet, Large Display, Long Battery Life, Exynos 1580 Processor, IP68, Water-Resistant, 90 Hz Refresh, S Pen for Note-Taking, US Version, Silver",
                description: 'inment with an incredibly sharp, fluid display backed by multidimensional stereo sound. 50MP camera system with OIS. Capture sharper low-light photos with an unshakable camera system featuring Optical Image Stabilization.***** Unbelievable battery life and fast recharging. Work and play nonstop with a long-lasting 5000mAh battery, then fuel up with 30W TurboPower charging.*** ',
                price: 386.99,
                imageUrl: "/img/610KaHKjEcL._AC_SL1500_.jpg",
            },
            {
                id: "5-6",
                name: "Samsung Galaxy Tab S10+ 5G 12.4” 256GB, Android Tablet, (AT&T Network), Circle to Search, Long Battery Life, Big Screen, S Pen Included, Durable, US Version, 2024, Moonstone Gray, SM-X828UZAAATT",
                description: '',
                price: 883.30,
                imageUrl: "/img/51LHmhoU-cL._AC_SL1500_.jpg",
            },
            {
                id: "5-7",
                name: "Samsung Galaxy Tab S10 FE 10.9”128 GB Android Tablet,(T-Mobile Network),IP68 Water & Dust-Resistant,Long Battery Life,Powerful Processor,S Pen, 13MP Camera,Lightweight Design,US Version, 2025, Gray",
                description: 'onvenient for your daily life.',
                price: 351.85,
                imageUrl: "/img/61jwusQUP2L._AC_SL1500_.jpg",
            },
            {
                id: "5-8",
                name: "Samsung Galaxy TabActive4 Pro 10.1” 128GB Wi-Fi Android Work Tablet, LTE Unlocked, 6GB RAM, Rugged Design, Sensitive Touchscreen, Long-Battery Life-for Workers, SM-T630NZKEN20, Black",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 549.99,
                imageUrl: "/img/81tVtJijo0L._AC_SL1500_.jpg",
            },
            {
                id: "5-9",
                name: "Lenovo Idea Tab - College Tablet - 11″ 2.5K IPS Touchscreen Display - 90Hz - MediaTek Dimensity 6300-8 GB Memory - 256 GB Storage - Integrated Arm Mali-G57 MC2 - Tab Pen and Folio Case",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 532.99,
                imageUrl: "/img/714VRmqcVmL._AC_SL1500_.jpg",
            },
            {
                id: "5-10",
                name: "Samsung Galaxy Tab A11 WiFi Model (International Version), 8.7 inches, 64GB + 4GB with model number SM-X133",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 117.70,
                imageUrl: "/img/41MHuArXrLL._AC_.jpg",
            },
        ]
    },
    "headphones": {
        group: groups[5],
        products: [
            {
                id: "6-1",
                name: "Bose QuietComfort Headphones - Wireless Bluetooth Headphones, Active Over Ear Noise Cancelling and Mic, USB-C Charging, Deep Bass, Up to 24 Hours of Playtime, White Smoke",
                description: ' STUNNING TITANIUM DESIGN—iPhone 16 Pro Max has a strong and light titanium design with a larger 6.9-inch Super Retina XDR display. It’s remarkably durable with the latest-generation Ceramic Shield material that’s 2x tougher than any smartphone glass. BUILT FOR APPLE INTELLIGENCE—Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data. TAKE TOTAL CAMERA CONTROL—Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time',
                price: 179.00,
                imageUrl: "/img/51K77J9rCjL._AC_SL1500_.jpg",
            },
            {
                id: "6-2",
                name: "Bose QuietComfort Headphones - Wireless Bluetooth Headphones, Active Over Ear Noise Cancelling and Mic, USB-C Charging, Deep Bass, Up to 24 Hours of Playtime, Moonlight Grey - Limited Edition Color",
                description: ' Blazing-fast Qualcomm performance. Get the speed you need for great entertainment with a Snapdragon 680 processor and 4GB**** of RAM. Fluid display + immersive stereo sound. Bring your entertainment to life with an ultrawide 6.5" 90Hz* HD+ display plus stereo speakers, Dolby Atmos, and Hi-Res Audio**. 50MP*** Quad Pixel camera. Capture sharper, more vibrant photos day or night with 4x the light sensitivity. ',
                price: 179.00,
                imageUrl: "/img/51NQwrNkWvL._AC_SL1500_.jpg",
            },
            {
                id: "6-3",
                name: "Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Built-in, Black New",
                description: ' AWESOME SCREEN. ENDLESS POSSIBILITIES: Elevate your content no matter where you are with the 6.7" Super AMOLED display¹ of the Galaxy A37 5G. Enjoy massive detail and stunning clarity on the go LONG-LASTING BATTERY: Whether it’s family moments or important calls, stay powered without the wait with Galaxy A37 5G. Super Fast Charging 2.0² ensures you’re back up and running quickly NEVER MISS THE SHOT, EVEN IN LOW LIGHT: With effortless Nightography, you can capture clear high-quality photos and videos on your phone automatically without adjusting manual settings ',
                price: 77.85,
                imageUrl: "/img/51rpbVmi9XL._AC_SL1200_.jpg",
            },
            {
                id: "6-4",
                name: "Sony WH-CH520 Wireless Headphones Bluetooth On-Ear Headset with Microphone and up to 50 Hours Battery Life with Quick Charging, Black",
                description: 'Functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 28.99,
                imageUrl: "/img/41lArSiD5hL._AC_SL1200_.jpg",
            },
            {
                id: "6-5",
                name: "Sony WH-CH520 Wireless Headphones Bluetooth On-Ear Headset with Microphone and up to 50 Hours Battery Life with Quick Charging, Blue",
                description: 'inment with an incredibly sharp, fluid display backed by multidimensional stereo sound. 50MP camera system with OIS. Capture sharper low-light photos with an unshakable camera system featuring Optical Image Stabilization.***** Unbelievable battery life and fast recharging. Work and play nonstop with a long-lasting 5000mAh battery, then fuel up with 30W TurboPower charging.*** ',
                price: 31.35,
                imageUrl: "/img/41JACWT-wWL._AC_SL1200_.jpg",
            },
            {
                id: "6-6",
                name: "Sony WH-1000XM5 Premium Noise Canceling Headphones, Auto NC Optimizer, 30-Hour Battery, Alexa Voice Control, Midnight Blue ",
                description: '',
                price: 180.18,
                imageUrl: "/img/61oUbsHuWuL._AC_SL1500_.jpg",
            },
            {
                id: "6-7",
                name: "Skullcandy Crusher Evo Wireless Bluetooth Headphones with Multi-Sensory Bass, Noise Isolating Over-Ear Fit, Up to 40 Hours Battery, Microphone for iPhone Android - True Black",
                description: 'onvenient for your daily life.',
                price: 155.23,
                imageUrl: "/img/61TuQdBSgsL._AC_SL1500_.jpg",
            },
            {
                id: "6-8",
                name: "HyperX Cloud II Gaming Headset - 7.1 Surround Sound - Memory Foam Ear Pads - Durable Aluminum Frame - Multi Platform Headset - Works with PC, PS4, PS4 PRO, Xbox One, Xbox One S - Red (KHX-HSCP-RD)",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 33.86,
                imageUrl: "/img/71ltsViEA8L._AC_SL1500_.jpg",
            },
            {
                id: "6-9",
                name: "Soundcore by Anker Q20i Hybrid Active Noise Cancelling Headphones, Wireless Over-Ear Bluetooth, 40H Long ANC Playtime, Hi-Res Audio, Big Bass, Customize via an App, Transparency Mode (Black)",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 532.99,
                imageUrl: "/img/51CnDMbXZzL._AC_SL1200_.jpg",
            },
            {
                id: "6-10",
                name: "Bose QuietComfort Ultra Bluetooth Headphones (2nd Gen), Wireless Headphones with Spatial Audio, Over Ear Noise Cancelling with Mic, Up to 30 Hours of Play time, Driftwood Sand - Limited Edition",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 379.00,
                imageUrl: "/img/61ZdqSyNpwL._AC_SL1500_.jpg",
            },
        ]
    },
    "pc": {
        group: groups[6],
        products: [
            {
                id: "7-1",
                name: "msi Codex Z2 Gaming Desktop: AMD R7-8700F, GeForce RTX 5070, 32GB DDR5, 2TB m.2 NVMe SSD, USB Type-C, VR-Ready, Windows 11 Home : A8NVP-436US",
                description: ' STUNNING TITANIUM DESIGN—iPhone 16 Pro Max has a strong and light titanium design with a larger 6.9-inch Super Retina XDR display. It’s remarkably durable with the latest-generation Ceramic Shield material that’s 2x tougher than any smartphone glass. BUILT FOR APPLE INTELLIGENCE—Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data. TAKE TOTAL CAMERA CONTROL—Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time',
                price: 1860.21,
                imageUrl: "/img/71Z1Bk+8Z4L._AC_SL1500_.jpg",
            },
            {
                id: "7-2",
                name: "Skytech Gaming Azure 3 Desktop PC, Ryzen 7 7700X 4.5 GHz (5.4GHz), NVIDIA RTX 5070 12GB, 1TB Gen4 NVMe SSD, 32GB DDR5 RAM 6000 RGB, 850W Gold ATX 3 PSU, 360mm ARGB AIO, Wi-Fi, Win 11",
                description: ' Blazing-fast Qualcomm performance. Get the speed you need for great entertainment with a Snapdragon 680 processor and 4GB**** of RAM. Fluid display + immersive stereo sound. Bring your entertainment to life with an ultrawide 6.5" 90Hz* HD+ display plus stereo speakers, Dolby Atmos, and Hi-Res Audio**. 50MP*** Quad Pixel camera. Capture sharper, more vibrant photos day or night with 4x the light sensitivity. ',
                price: 1799.99,
                imageUrl: "/img/71gtoidr0kL._AC_SL1200_.jpg",
            },
            {
                id: "7-3",
                name: "iBUYPOWER Element Gaming PC Desktop Computer AMD Ryzen 9 7900X CPU, NVIDIA GeForce RTX 5070 12GB GPU, 32GB DDR5 RGB 5200MHz RAM, 1TB NVMe SSD, Windows 11 Home, Gamer Keyboard and Mouse - EWA9N5702",
                description: ' AWESOME SCREEN. ENDLESS POSSIBILITIES: Elevate your content no matter where you are with the 6.7" Super AMOLED display¹ of the Galaxy A37 5G. Enjoy massive detail and stunning clarity on the go LONG-LASTING BATTERY: Whether it’s family moments or important calls, stay powered without the wait with Galaxy A37 5G. Super Fast Charging 2.0² ensures you’re back up and running quickly NEVER MISS THE SHOT, EVEN IN LOW LIGHT: With effortless Nightography, you can capture clear high-quality photos and videos on your phone automatically without adjusting manual settings ',
                price: 2299.99,
                imageUrl: "/img/81OqTC4iBPL._AC_SL1500_.jpg",
            },
            {
                id: "7-4",
                name: "Skytech Gaming Azure 3 Gaming PC, AMD Ryzen 7 9850X3D 4.7GHz, AMD RX 9070XT 16GB VRAM, 2TB Gen4 NVMe SSD, 32GB DDR5 RAM 5600, 850W Gold ATX 3 PSU, 360 ARGB AIO, WI-FI 5, Windows 11, Desktop",
                description: 'Functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 2899.99,
                imageUrl: "/img/71nQB0wEe9L._AC_SL1200_.jpg",
            },
            {
                id: "7-5",
                name: "Skytech Gaming Rampage Gaming PC, Intel Ultra 7 265F 5.2GHz, NVIDIA RTX 5060 Ti, 1TB Gen4 NVMe SSD, 32GB DDR5 RAM 6000, 850W Gold ATX 3 PSU, 360 ARGB AIO, Wi-Fi, Win 11, Desktop",
                description: 'inment with an incredibly sharp, fluid display backed by multidimensional stereo sound. 50MP camera system with OIS. Capture sharper low-light photos with an unshakable camera system featuring Optical Image Stabilization.***** Unbelievable battery life and fast recharging. Work and play nonstop with a long-lasting 5000mAh battery, then fuel up with 30W TurboPower charging.*** ',
                price: 1649.99,
                imageUrl: "/img/71pRjeTY6IL._AC_SL1200_.jpg",
            },
            {
                id: "7-6",
                name: "Skytech Gaming Rampage Desktop PC, Ryzen 7 9700X 3.8 GHz (5.5GHz), NVIDIA RTX 5070 Ti 16GB, 1TB Gen4 NVMe SSD, 32GB DDR5 RAM 5600 RGB, 850W Gold ATX 3 PSU, 360mm ARGB AIO, Wi-Fi, Win 11",
                description: '',
                price: 2399.99,
                imageUrl: "/img/81lg7uzIq2L._AC_SL1500_.jpg",
            },
            {
                id: "7-7",
                name: "HP Mini Desktop PC Computer for Office Work, Ultra-Compact Silent, Intel i7-12700T (16GB RAM, 512GB SSD), 3X 4K Display Support, Wired Keyboard & Mouse & Stand, Windows 11 Pro",
                description: 'onvenient for your daily life.',
                price: 1399.00,
                imageUrl: "/img/61-qbQeFGuL._AC_SL1500_.jpg",
            },
            {
                id: "7-8",
                name: "HP Desktop Computer Tower PC, Intel i5-10400F, (16GB DDR4 RAM, 512GB PCIe SSD), WiFi Adapter, Keyboard & Mouse Included, Slience Design for Home use& Student Daily Study, Windows 11 Pro, Jet Black",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 1249.00,
                imageUrl: "/img/71DdPTmaWvL._AC_SL1500_.jpg",
            },
            {
                id: "7-9",
                name: "Corsair Vengeance i7500 Gaming PC – Liquid Cooled Intel Core i9-14900KF CPU – NVIDIA GeForce RTX 5080 GPU – 32GB Vengeance RGB DDR5 Memory – 2TB M.2 SSD – Black",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 4999.00,
                imageUrl: "/img/718wSaTw2YL._AC_SL1500_.jpg",
            },
            {
                id: "7-10",
                name: "ASUS ROG G700 (2025) Gaming Desktop PC, Intel® Core™ Ultra 7 265F Processor, NVIDIA® GeForce RTX™ 5070, 1TB M.2 NVMe™ PCIe® 4 SSD, 32GB DDR5 RAM, Windows 11 Home, G700TF-AS776",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 2999.00,
                imageUrl: "/img/51OSnFKPa4L._AC_SL1280_.jpg",
            },]
    },
    "men-watches": {
        group: groups[7],
        products: [
            {
                id: "8-1",
                name: "Smart Watches for Women",
                description: '1.91" HD Fitness Tracker (Answer/Make Calls), IP68 Waterproof, 120+ Sport Modes with Heart Rate and Sleep Monitor, Fitness Watch for iPhone/Android',
                price: 129.99,
                imageUrl: "/img/81al6p-pKuL._AC_UY218_.jpg",
            },
            {
                id: "8-2",
                name: "SAMSUNG Galaxy FIT 3 [2024]",
                description: '1.6" AMOLED Display | 14 Days Battery Life | 100+ Watchfaces | 100+ Exercise Modes | International Model - (Gray)',
                price: 45,
                imageUrl: "/img/41KyLKvro-L._AC_UY218_.jpg",
            },
            {
                id: "8-3",
                name: "Samsung Galaxy Watch 8 (2025)",
                description: '40mm Bluetooth Smartwatch, Cushion Design, Fitness Tracker, Sleep Coaching, Running Coach, Energy Score, Heart Rate Tracking, Graphite [US Version, 2 Yr Warranty]',
                price: 223.01,
                imageUrl: "/img/61IpkAmVjwL._AC_UY218_.jpg",
            },
            {
                id: "8-4",
                name: "Garmin vívoactive 5",
                description: 'Health and Fitness GPS Smartwatch, AMOLED Display, Up to 11 Days of Battery, Ivory',
                price: 169.95,
                imageUrl: "/img/610Jl4dUB7L._AC_UY218_.jpg",
            },
            {
                id: "8-5",
                name: "Smart Watch for Men Women",
                description: '1.91"Smartwatch with Answer/Make Call, Fitness Tracker with 100+ Sport Modes, Watches IP68 Waterproof/Heart Rate/Sleep Monitor/Pedometer, Activity Tracker for Android iOS',
                price: 13.99,
                imageUrl: "/img/71y74-RugbL._AC_UY218_.jpg",
            },
            {
                id: "8-6",
                name: "OLEVS Watches Men Waterproof Luxury Big Face Mens Watch Stainless Steel Quartz Analog Dress Watches for Men Luminous Multifunction Man Watch Relojes De Hombre",
                description: 'Features a classic big dial and quartz movement with stable quality. High hardness coated glass mirror is wear-resistant, scratch-proof, Butterfly double buckle ensures comfortable wear',
                price: 42.77,
                imageUrl: "/img/71gWoIH59oL._AC_SY535_.jpg",
            },
            {
                id: "8-7",
                name: "Breitling Bentley Flying B Neptune Dial Mens Watch A2836212-C722SS",
                price: 179.86,
                imageUrl: "/img/41TGyLp6gOL._AC_SY695_.jpg",
            },
            {
                id: "8-8",
                name: "LN LENQIN Mens Watches Unisex Military Sport Nylon Strap Stylish Luminous Fashion Analog Quartz Watch for Men Waterproof Army Tactical Casual Wristwatch ",
                description: 'MENS WATCHES ANALOG: Mens military watches made with shock-resistant stainless steel case and anti-scratch mineral window, exquisitely crafted and durable',
                price: 8.79,
                imageUrl: "/img/71UUjbESoFL._AC_SY300_SX300_QL70_ML2_.jpg",
            },
            {
                id: "8-9",
                name: "Casio A158WA Series | Unisex Digital Watch | Vintage | WR | 100 SEC Stop Watch | Daily Alarm | Regular Time Keeping: Hour, Minute, Second, PM, Date, Day | Led Light | 7 Yr Battery ",
                description: 'Luminous rectangular dial with alarm and stopwatch 33 mm caseQuartz movement with digital displayThree-link bracelet with fold-over clasp closure. LED lightWater resistant. Withstands splashes or brief immersion in water, but not suitable for swimming.',
                price: 23.59,
                imageUrl: "/img/611typKnTvL._AC_SY300_SX300_QL70_ML2_.jpg",
            },
            {
                id: "8-10",
                name: "GOLDEN HOUR Waterproof Sport Women's Digital Chronograph Silicone Strap Watch ",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 17.99,
                imageUrl: "/img/51okFuOgFRL._AC_SX522_.jpg",
            },
        ]
    },
    "laptops": {
        group: groups[8],
        products: [
            {
                id: "9-1",
                name: "ASUS ROG Strix G16 (2025) Gaming Laptop, 16” FHD+ 16:10 165Hz/3ms, NVIDIA® GeForce RTX™ 5060, Intel® Core™ i7 Processor 14650HX, 16GB DDR5, 1TB Gen 4 SSD, Wi-Fi 7, Windows 11 Home, G615JMR-AS74",
                description: '1.91" HD Fitness Tracker (Answer/Make Calls), IP68 Waterproof, 120+ Sport Modes with Heart Rate and Sleep Monitor, Fitness Watch for iPhone/Android',
                price: 1245.56,
                imageUrl: "/img/81n1T4CYfmL._AC_SL1500_.jpg",
            },
            {
                id: "9-2",
                name: "Samsung 14 Galaxy Chromebook Go Laptop PC Computer, Intel Celeron N4500 Processor, 4GB RAM, 64GB Storage, ChromeOS, XE340XDA-KA2US, Student Laptop, Silver",
                description: '1.6" AMOLED Display | 14 Days Battery Life | 100+ Watchfaces | 100+ Exercise Modes | International Model - (Gray)',
                price: 158.39,
                imageUrl: "/img/51Lko54--JL._AC_SL1080_.jpg",
            },
            {
                id: "9-3",
                name: "HP 17 Inch Laptop Computer, 17.3 FHD IPS Display, 20 GB RAM, 1 TB SSD, AMD Ryzen 5 7430U (Up to 4.3GHz), Wi-Fi 6, Bluetooth 5.4, Copilot AI Key, Business & Students, Windows 11 Pro, W/Accessories",
                description: '40mm Bluetooth Smartwatch, Cushion Design, Fitness Tracker, Sleep Coaching, Running Coach, Energy Score, Heart Rate Tracking, Graphite [US Version, 2 Yr Warranty]',
                price: 223.01,
                imageUrl: "/img/71JP1YHTEwL._AC_SL1483_.jpg",
            },
            {
                id: "9-4",
                name: "Lenovo IdeaPad Slim • 15.6 FHD Touchscreen Laptop • Intel Core i5-1335U (10 Cores) • 16GB DDR4RAM • 1TB SSD • Windows 11",
                description: 'Health and Fitness GPS Smartwatch, AMOLED Display, Up to 11 Days of Battery, Ivory',
                price: 599.99,
                imageUrl: "/img/71olj8T+-fL._AC_SL1500_.jpg",
            },
            {
                id: "9-5",
                name: "Lenovo Business Laptop with Copilot AI • 2026 Edition • Intel 13th Gen i5-13420H • 16GB DDR5 • 512GB SSD • 16 FHD+ • Microsoft 365 • WiFi 6 • Windows 11",
                description: '1.91"Smartwatch with Answer/Make Call, Fitness Tracker with 100+ Sport Modes, Watches IP68 Waterproof/Heart Rate/Sleep Monitor/Pedometer, Activity Tracker for Android iOS',
                price: 1129.00,
                imageUrl: "/img/71-DAgUbvHL._AC_SL1500_.jpg",
            },
            {
                id: "9-6",
                name: "HP 17.3 Touchscreen Laptop w/Microsoft 365, 8GB RAM, 128GB SSD, Webcam w/Shutter, Fingerprint Reader, Backlit Keyboard, Microsoft Copilot Key, Intel Quad-Core CPU, Win11, Lavender",
                description: 'Features a classic big dial and quartz movement with stable quality. High hardness coated glass mirror is wear-resistant, scratch-proof, Butterfly double buckle ensures comfortable wear',
                price: 450.00,
                imageUrl: "/img/71dC5cHxmDL._AC_SL1500_.jpg",
            },
            {
                id: "9-7",
                name: "Lenovo IdeaPad Slim 3i • 15.6 FHD Laptop with Microsoft 365 • Intel 4 Cores • 8GB DDR5RAM • 128GB SSD • 2026 Edition • Windows 11",
                price: 179.86,
                imageUrl: "/img/71RHodXdIWL._AC_SL1500_.jpg",
            },
            {
                id: "9-8",
                name: "HP 15.6 FHD Laptop 2026 Edition with Copilot AI, 16GB RAM, 1TB SSD, Intel Processor, Long Battery Life, Lightweight 3.64 lbs, Microsoft 365, Windows 11 for Students & Office",
                description: 'MENS WATCHES ANALOG: Mens military watches made with shock-resistant stainless steel case and anti-scratch mineral window, exquisitely crafted and durable',
                price: 1099.00,
                imageUrl: "/img/71agXAvSukL._AC_SL1500_.jpg",
            },
            {
                id: "9-9",
                name: "Lenovo 2026 Premium Laptop, Intel Core i5-13420H (Beats i7-1355U), 24GB DDR5, 1TB SSD, 16 FHD+ Copilot AI PC, Windows 11 – for Power Business Multitasker",
                description: 'Luminous rectangular dial with alarm and stopwatch 33 mm caseQuartz movement with digital displayThree-link bracelet with fold-over clasp closure. LED lightWater resistant. Withstands splashes or brief immersion in water, but not suitable for swimming.',
                price: 2300.59,
                imageUrl: "/img/71s6NGud6bL._AC_SL1500_.jpg",
            },
            {
                id: "9-10",
                name: "HP New Slim Everyday 256GB SSD + 64GB eMMC Laptop • 2026 Edition • Microsoft Office 365 Included • Intel Core • Thin & Portable • Fast Response • Long Battery Life • Windows 11",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 1759.99,
                imageUrl: "/img/613yrWjAXXL._AC_SL1500_.jpg",
            },
        ]
    },
    "equipment": {
        group: groups[9],
        products: [
            {
                id: "10-1",
                name: "NICEPEOPLE Adjustable Weight Bench for Home Gym, 660LBS Capacity Workout Bench with 8 Backrests for Chest Shoulders Arms, Compact and Foldable Strength Bench for Small Space Apartment Room ",
                description: '1.91" HD Fitness Tracker (Answer/Make Calls), IP68 Waterproof, 120+ Sport Modes with Heart Rate and Sleep Monitor, Fitness Watch for iPhone/Android',
                price: 99.99,
                imageUrl: "/img/719zG2ZrQzL._AC_SL1500_.jpg",
            },
            {
                id: "10-2",
                name: "MQRW Push Up Board,Home Gym,Portable Exercise Equipment,Pilates Bar and 20 Fitness Accessories with Resistance Bands and Ab Roller Wheel,Full Body Workout at Home",
                description: '1.6" AMOLED Display | 14 Days Battery Life | 100+ Watchfaces | 100+ Exercise Modes | International Model - (Gray)',
                price: 39.19,
                imageUrl: "/img/71jbvJKvSgL._AC_SX679_.jpg",
            },
            {
                id: "10-3",
                name: "Twister Arm Trainer, 3 in 1 Hydraulic Power Chest Workout Equipment with Ab Roller Wheels and Hooks, Adjustable 22-440lbs Arm Trainer for Men Women, Home Gym Equipment for Full Body Strength Training",
                description: '40mm Bluetooth Smartwatch, Cushion Design, Fitness Tracker, Sleep Coaching, Running Coach, Energy Score, Heart Rate Tracking, Graphite [US Version, 2 Yr Warranty]',
                price: 39.99,
                imageUrl: "/img/71dpYf4-69L._AC_SL1500_.jpg",
            },
            {
                id: "10-4",
                name: "VINSGUIR Ab Roller Wheel, Abs & Core Workout Equipment for Home Gym with Knee Pad Accessories, Abdominal Wheel for Full-body Strength Training",
                description: 'Health and Fitness GPS Smartwatch, AMOLED Display, Up to 11 Days of Battery, Ivory',
                price: 20.35,
                imageUrl: "/img/71WYhvuQfbL._AC_SL1497_.jpg",
            },
            {
                id: "10-5",
                name: "Etekcity Smart Scale for Body Weight, FSA&HSA Eligible, Bathroom Digital Weighing Scale with BMI, Body Fat, Muscle Mass, Accurate Bluetooth Home User Health Equipment Sync Apps, LED, Tempered glass",
                description: '1.91"Smartwatch with Answer/Make Call, Fitness Tracker with 100+ Sport Modes, Watches IP68 Waterproof/Heart Rate/Sleep Monitor/Pedometer, Activity Tracker for Android iOS',
                price: 17.77,
                imageUrl: "/img/71XIV9FM8HL._SL1500_.jpg",
            },
            {
                id: "10-6",
                name: "Zeerun Weighted Vest, 6lb/8lb/10lb/12lb/15lb/18lb/20lb/24lb/30lb for Men Women, Reflective Stripe Adjustable Buckle, Comfortable Durable Rucking Vest for Walking Running Strength Training",
                description: 'Features a classic big dial and quartz movement with stable quality. High hardness coated glass mirror is wear-resistant, scratch-proof, Butterfly double buckle ensures comfortable wear',
                price: 17.99,
                imageUrl: "/img/81zh-RIi18L._AC_SL1500_.jpg",
            },
            {
                id: "10-7",
                name: "FitBeast Grip Strengthener Forearm Strengthener Hand Grips Strengthener Kit - 5 Pack Adjustable Resistance",
                price: 16.99,
                imageUrl: "/img/718tBdzFF6L._AC_SL1500_.jpg",
            },
            {
                id: "10-8",
                name: "Jump Rope, Tangle-Free Rapid Speed Jumping Rope Cable with Ball Bearings for Women, Men & Kids, Adjustable Steel Jump Rope with Foam Handles for Home Gym Exercise Fitness Workout Equipment & Slim Body",
                description: 'MENS WATCHES ANALOG: Mens military watches made with shock-resistant stainless steel case and anti-scratch mineral window, exquisitely crafted and durable',
                price: 8.99,
                imageUrl: "/img/71wm42EtoNL._AC_SL1500_.jpg",
            },
            {
                id: "10-9",
                name: "Adjustable Dumbbells,20/30/40/60/80lbs Free Weight Set with Connector, 4 in1 Dumbbells Set Used as Barbell/Kettlebells/Push up Stand, Fitness Workout Equipment for Home Gym for Youth,Women/Men",
                description: 'Luminous rectangular dial with alarm and stopwatch 33 mm caseQuartz movement with digital displayThree-link bracelet with fold-over clasp closure. LED lightWater resistant. Withstands splashes or brief immersion in water, but not suitable for swimming.',
                price: 53.60,
                imageUrl: "/img/71zsiVv4owL._AC_SL1500_.jpg",
            },
            {
                id: "10-10",
                name: "FITPLAM Adjustable dumbbell set,20/35/45/55/70/90lbs Free Weights set with upgraded nut, 5 in 1 Weight Set Used as Kettlebells, Barbell, Push up Stand, Fitness Exercise for Home Gym Suitable Men/Women",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 79.99,
                imageUrl: "/img/71GkVlCHO9L._AC_SL1500_.jpg",
            },
        ]
    },
    "kitchen_dining": {
        group: groups[9],
        products: [
            {
                id: "10-1",
                name: "Stanley Quencher H2.0 Tumbler with Handle and Straw 30 oz | Flowstate 3-Position Lid | Cup Holder Compatible for Travel | Insulated Stainless Steel Cup | BPA-Free | Hot Coral",
                description: '1.91" HD Fitness Tracker (Answer/Make Calls), IP68 Waterproof, 120+ Sport Modes with Heart Rate and Sleep Monitor, Fitness Watch for iPhone/Android',
                price: 30.25,
                imageUrl: "/img/51SEaiREDTL._AC_SL1500_.jpg",
            },
            {
                id: "10-2",
                name: "Owala FreeSip Insulated Stainless Steel Water Bottle with Straw, BPA-Free Sports Water Bottle, Great for Travel, 24 Oz, Summer Sweetness",
                description: '1.6" AMOLED Display | 14 Days Battery Life | 100+ Watchfaces | 100+ Exercise Modes | International Model - (Gray)',
                price: 23.99,
                imageUrl: "/img/41FY3GlTX9L._AC_SX679_.jpg",
            },
            {
                id: "10-3",
                name: "HydroJug Traveler - 40 oz Water Bottle with Handle & Flip Straw - Fits in Cup Holder, Leak Resistant Tumbler-Reusable Insulated Stainless Steel & Rubber Base - Gifts for Women & Men, Marigold",
                description: '40mm Bluetooth Smartwatch, Cushion Design, Fitness Tracker, Sleep Coaching, Running Coach, Energy Score, Heart Rate Tracking, Graphite [US Version, 2 Yr Warranty]',
                price: 39.12,
                imageUrl: "/img/41Wh+fo0RNL._AC_SX679_.jpg",
            },
            {
                id: "10-4",
                name: "KITCHENAID Ribbed Soft Silicone Oven Mitt 2-Pack Set, 7.5 x13, Milkshake",
                description: 'Health and Fitness GPS Smartwatch, AMOLED Display, Up to 11 Days of Battery, Ivory',
                price: 20.35,
                imageUrl: "/img/617z6N3l59L._AC_SL1500_.jpg",
            },
            {
                id: "10-5",
                name: "STANLEY Quencher ProTour Flip Straw Tumbler with Leakproof Lid 30 oz | Built-in Straw and Handle | Cup Holder Compatible for Travel | insulated Stainless Steel Cup | BPA-Free | Violet Blossom",
                description: '1.91"Smartwatch with Answer/Make Call, Fitness Tracker with 100+ Sport Modes, Watches IP68 Waterproof/Heart Rate/Sleep Monitor/Pedometer, Activity Tracker for Android iOS',
                price: 17.97,
                imageUrl: "/img/51fyKEXIv5L._AC_SL1500_.jpg",
            },
            {
                id: "10-6",
                name: "Ninja SLUSHi Frozen Drink & Slushie Machine with RapidChill Technology | 88 oz. Easy Fill Vessel | 5 Preset Programs | Make Margaritas, Frappés, & More | With Dishwasher Safe Parts | Black | FS301",
                description: 'Features a classic big dial and quartz movement with stable quality. High hardness coated glass mirror is wear-resistant, scratch-proof, Butterfly double buckle ensures comfortable wear',
                price: 298.00,
                imageUrl: "/img/81i7-o7KpOL._AC_SL1500_.jpg",
            },
            {
                id: "10-7",
                name: "Instant Pot 6QT VORTEX Plus Air Fryer, 6-in-1, Air Fry, Broil, Dehydrate, Crisp, Roast, Reheat, Bake, Dishwasher-Safe Airfryer basket, from the Makers of Instant Pot, Stainless Steel",
                price: 139.99,
                imageUrl: "/img/71GPWtT61gL._AC_SL1500_.jpg",
            },
            {
                id: "10-8",
                name: "Instant Pot Duo Plus 9-in-1 Multicooker, Pressure Cooker, Slow Cook, Rice Maker, Steamer, Sauté, Yogurt, Warmer & Sterilizer, Includes App with Over 800 Recipes, Stainless Steel, 6 Quarts",
                description: 'MENS WATCHES ANALOG: Mens military watches made with shock-resistant stainless steel case and anti-scratch mineral window, exquisitely crafted and durable',
                price: 129.99,
                imageUrl: "/img/71nx65qZq6L._AC_SL1500_.jpg",
            },
            {
                id: "10-9",
                name: "STANLEY IceFlow Flip Straw Tumbler with Handle 30 oz | Twist On Lid and Flip Up Straw | Leak Resistant Water Bottle | Insulated Stainless Steel |BPA-Free | Rose Quartz 1.0",
                description: 'Luminous rectangular dial with alarm and stopwatch 33 mm caseQuartz movement with digital displayThree-link bracelet with fold-over clasp closure. LED lightWater resistant. Withstands splashes or brief immersion in water, but not suitable for swimming.',
                price: 23.61,
                imageUrl: "/img/41Ai-GLQzQL._AC_SY300_SX300_QL70_ML2_.jpg",
            },
            {
                id: "10-10",
                name: "Ninja Kitchen System | All-in-One Food Processor & Blender for Smoothies | Includes Pitcher, (2) 16 oz. To-Go Cups & 8-Cup Bowl | Makes Salsa, Dough, Shakes, & Frozen Drinks | 1500W | Black | BL770 ",
                description: 'Shock-resistant and durable: The watch is made of high-quality materials and has a strong shock-resistant structure, making it suitable for various outdoor sports and daily wear. Multiple functions: The watch has multiple functions such as stopwatch, calendar, backlight, alarm clock, etc., making it more convenient for your daily life.',
                price: 199.99,
                imageUrl: "/img/81ME5sqz5TL._AC_SL1500_.jpg",
            },
        ]
    }
}

export default class GroupApi {

    static allGroups(): Promise<Array<IGroup>> {
        return new Promise<Array<IGroup>>((resolve, reject) => {
            setTimeout(
                () => resolve(groups),
                500
            )
        });
    }

    static groupDetails(slug: string): Promise<IGroupProduct> {
        return new Promise<IGroupProduct>((resolve, reject) => {
            setTimeout(
                () => {
                    let group = groups.find(g => g.slug == slug);
                    if (group) {
                        resolve({
                            group,
                            products: typeof groupProducts[slug] == "undefined" ? []
                                : groupProducts[slug].products,
                        });
                    }
                    else {
                        reject("Not Found");
                    }
                },
                500
            )
        });
    }

}
