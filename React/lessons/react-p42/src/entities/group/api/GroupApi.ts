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
    "Smartphones": {
        group: groups[3],
        products: [
            {}
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
