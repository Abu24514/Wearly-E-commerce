import p_img1 from "./bags/bag-h-4.jpg";
import p_img_2_1 from "./bags/bag-h-1.jpg";
import p_img_2_2 from "./bags/bag-h-1.2.jpg";
import p_img_2_3 from "./bags/bag-h-1.3.jpg";
import p_img_3_1 from "./bags/bag-h-2.jpg";
import p_img_3_2 from "./bags/bag-h-2.1.jpg";
import p_img_4_1 from "./bags/bag-h-3.png";
import p_img_4_2 from "./bags/bag-h-3.1.png";
import p_img5 from "./bags/bag-b-2.jpg";
import p_img6 from "./bags/bag-b-1.jpg";
import p_img7 from "./bags/bag-b-3.jpg";
import p_img8 from "./bags/bag-t-1.jpg";
import p_img9 from "./bags/bag-t-2.jpg";
import p_img10 from "./bags/bag-t-3.jpg";
// =====  women ====
import p_img11_1 from "./women/w-1.png";
import p_img11_2 from "./women/w-2.png";
import p_img12_1 from "./women/w-3.png";
import p_img12_2 from "./women/w-4.png";
import p_img12_3 from "./women/w-5.png";
import p_img13 from "./women/w-6.png";
import p_img14 from "./women/w-7.png";
import p_img15 from "./women/w-8.png";
import p_img16 from "./women/w-9.png";
import p_img17 from "./women/w-10.png";
import p_img18 from "./women/w-11.png";
import p_img19 from "./women/w-12.png";
import p_img20 from "./women/w-13.png";
import p_img21 from "./women/w-14.png";
import p_img22 from "./women/w-15.png";
import p_img23 from "./women/w-16.png";
import p_img24 from "./women/w-17.png";
import p_img25 from "./women/w-18.png";
// ===== men ========
import p_img26 from "./men/m-1.png";
import p_img27 from "./men/m-2.png";
import p_img28 from "./men/m-3.png";
import p_img29 from "./men/m-4.png";
import p_img30 from "./men/m-5.png";
import p_img31_1 from "./men/m-6.png";
import p_img31_2 from "./men/m-6_2.png";
import p_img31_3 from "./men/m-6_3.png";
import p_img31_4 from "./men/m-6_4.png";
import p_img32_1 from "./men/m-7.png";
import p_img32_2 from "./men/m-7_2.png";
import p_img33_1 from "./men/m-8.png";
import p_img33_2 from "./men/m-8_2.png";
import p_img34_1 from "./men/m-10.png";
import p_img34_2 from "./men/m-10_2.png";
import p_img34_3 from "./men/m-10_3.png";
// ===== kids ========
import p_img35_1 from "./kid/kid-1.png";
import p_img35_2 from "./kid/kid-1_2.png";
import p_img35_3 from "./kid/kid-1_3.png";
import p_img35_4 from "./kid/kid-1_4.png";
import p_img36_1 from "./kid/kid-2.png";
import p_img36_2 from "./kid/kid-2_2.png";
import p_img36_3 from "./kid/kid-2_3.png";
import p_img37 from "./kid/kid-3.png";
import p_img38 from "./kid/kid-4.png";
import p_img39 from "./kid/kid-5.png";
import p_img40 from "./kid/kid-6.png";
import p_img41 from "./kid/kid-7.png";
import p_img42 from "./kid/kid-8.png";
import p_img43 from "./kid/kid-9.png";
import p_img44 from "./kid/kid-10.png";
import p_img45 from "./kid/kid-11.png";

// ============= assets ============
import exchange_icon from "./exchange_icon.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";

export const assets = {
  razorpay_logo,
  stripe_logo,
  star_dull_icon,
  star_icon,
  exchange_icon,
};

export const products = [
  // ================= BAGS (10) =================

  {
    _id: "b001",
    name: "Classic Leather Handbag",
    description: "Elegant leather handbag suitable for daily use.",
    price: 999,
    image: [p_img1],
    category: "Bags",
    subCategory: "Handbag",
    sizes: ["Small", "Medium", "Large"],
    date: 1716639845448,
    bestseller: true,
  },

  {
    _id: "b002",
    name: "Women's Tote Handbag",
    description: "Spacious tote handbag with modern design.",
    price: 1199,
    image: [p_img_2_1, p_img_2_2, p_img_2_3],
    category: "Bags",
    subCategory: "Handbag",
    sizes: ["Small", "Medium", "Large"],
    date: 1716639845448,
    bestseller: false,
  },

  {
    _id: "b003",
    name: "Premium Shoulder Handbag",
    description: "Stylish shoulder handbag for casual outings.",
    price: 1299,
    image: [p_img_3_1, p_img_3_2],
    category: "Bags",
    subCategory: "Handbag",
    sizes: ["Small", "Medium", "Large"],
    date: 1716639845448,
    bestseller: true,
  },

  {
    _id: "b004",
    name: "Luxury Fashion Handbag",
    description: "Trendy fashion handbag with premium finish.",
    price: 1499,
    image: [p_img_4_1, p_img_4_2],
    category: "Bags",
    subCategory: "Handbag",
    sizes: ["Small", "Medium", "Large"],
    date: 1716639845448,
    bestseller: false,
  },

  {
    _id: "b005",
    name: "Urban Travel Backpack",
    description: "Comfortable backpack for daily commuting and college use.",
    price: 1399,
    image: [p_img5],
    category: "Bags",
    subCategory: "Backpack",
    sizes: ["20L", "30L", "40L"],
    date: 1716639845448,
    bestseller: true,
  },

  {
    _id: "b006",
    name: "Waterproof Laptop Backpack",
    description: "Durable waterproof backpack with laptop compartment.",
    price: 1699,
    image: [p_img6],
    category: "Bags",
    subCategory: "Backpack",
    sizes: ["20L", "30L", "40L"],
    date: 1716639845448,
    bestseller: true,
  },

  {
    _id: "b007",
    name: "Adventure Hiking Backpack",
    description: "Lightweight backpack designed for outdoor adventures.",
    price: 1899,
    image: [p_img7],
    category: "Bags",
    subCategory: "Backpack",
    sizes: ["20L", "30L", "40L"],
    date: 1716639845448,
    bestseller: false,
  },

  {
    _id: "b008",
    name: "Compact Travel Bag",
    description: "Perfect travel bag for short business and weekend trips.",
    price: 1599,
    image: [p_img8],
    category: "Bags",
    subCategory: "Travelbag",
    sizes: ["40L", "60L", "80L"],
    date: 1716639845448,
    bestseller: false,
  },

  {
    _id: "b009",
    name: "Weekend Travel Duffel Bag",
    description: "Spacious duffel bag ideal for weekend travel.",
    price: 1999,
    image: [p_img9],
    category: "Bags",
    subCategory: "Travelbag",
    sizes: ["40L", "60L", "80L"],
    date: 1716639845448,
    bestseller: true,
  },

  {
    _id: "b010",
    name: "Large Capacity Travel Bag",
    description: "Heavy-duty travel bag with multiple storage compartments.",
    price: 2299,
    image: [p_img10],
    category: "Bags",
    subCategory: "Travelbag",
    sizes: ["40L", "60L", "80L"],
    date: 1716639845448,
    bestseller: true,
  },

  // ======================= Women ===================

  {
    _id: "w001",
    name: "Women Beige Satin Top",
    description:
      "Elegant beige satin camisole top, perfect for evening wear or casual outings.",
    price: 899,
    image: [p_img11_1, p_img11_2],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845448,
    bestseller: true,
  },
  {
    _id: "w002",
    name: "Women Black Turtleneck",
    description:
      "Classic black turtleneck sweater made with a cozy, stretchable knit fabric.",
    price: 1299,
    image: [p_img12_1, p_img12_2, p_img12_3],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845449,
    bestseller: true,
  },
  {
    _id: "w003",
    name: "Women Beige Oversized Blazer",
    description:
      "Chic oversized tailored blazer in a neutral beige tone for formal or semi-formal looks.",
    price: 2499,
    image: [p_img13],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845450,
    bestseller: false,
  },
  {
    _id: "w004",
    name: "Women Beige Wide-Leg Trousers",
    description: "Comfortable and stylish wide-leg pleated trousers in beige.",
    price: 1499,
    image: [p_img14],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845451,
    bestseller: false,
  },
  {
    _id: "w005",
    name: "Women Brown Wool Coat",
    description:
      "Premium brown tailored wool coat for stylish winter layering.",
    price: 3999,
    image: [p_img15],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845452,
    bestseller: true,
  },
  {
    _id: "w006",
    name: "Women Pink Printed Sweatpants",
    description: "Cozy pink sweatpants featuring a tonal all-over text print.",
    price: 899,
    image: [p_img16],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845453,
    bestseller: false,
  },
  {
    _id: "w007",
    name: "Women Pink Bomber Jacket",
    description: "Trendy satin-finish pink bomber jacket with zip detailing.",
    price: 1899,
    image: [p_img17],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845454,
    bestseller: true,
  },
  {
    _id: "w008",
    name: "Women Burgundy Fleece Jacket",
    description:
      "Warm and comfortable zip-up fleece jacket in a rich burgundy color.",
    price: 1199,
    image: [p_img18],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845455,
    bestseller: false,
  },
  {
    _id: "w009",
    name: "Women Cropped Denim Jacket",
    description:
      "Light wash cropped denim jacket with button closures and raw hem details.",
    price: 1599,
    image: [p_img19],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845456,
    bestseller: true,
  },
  {
    _id: "w010",
    name: "Women Floral Off-Shoulder Top",
    description:
      "Stylish floral printed off-the-shoulder top with puffed sleeves.",
    price: 699,
    image: [p_img20],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845457,
    bestseller: true,
  },
  {
    _id: "w011",
    name: "Women Light Blue V-Neck Top",
    description:
      "Casual light blue short-sleeve v-neck blouse, perfect for a relaxed everyday look.",
    price: 799,
    image: [p_img21],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845458,
    bestseller: false,
  },
  {
    _id: "w012",
    name: "Women Black Heart Print Leggings",
    description:
      "Comfortable black stretch leggings featuring an all-over metallic heart print.",
    price: 599,
    image: [p_img22],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845459,
    bestseller: true,
  },
  {
    _id: "w013",
    name: "Women Green Crinkle Culottes",
    description:
      "Breezy light green wide-leg pants in a textured crinkle fabric with a matching tie waist belt.",
    price: 899,
    image: [p_img23],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845460,
    bestseller: false,
  },
  {
    _id: "w014",
    name: "Women Abstract Print Palazzo Pants",
    description:
      "Flowy wide-leg palazzo pants with a striking black, white, and grey abstract print.",
    price: 1099,
    image: [p_img24],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845461,
    bestseller: true,
  },
  {
    _id: "w015",
    name: "Women Teal Wide-Leg Trousers",
    description:
      "Classic dark teal solid wide-leg trousers, versatile for both office and casual settings.",
    price: 999,
    image: [p_img25],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845462,
    bestseller: false,
  },
  // ======================= Men ===================
  {
    _id: "m001",
    name: "Men Colorblock Long Sleeve Polo",
    description:
      "Casual long sleeve polo shirt featuring a cream base with a wide green chest stripe and logo detail.",
    price: 1299,
    image: [p_img26],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845463,
    bestseller: true,
  },
  {
    _id: "m002",
    name: "Men Black Hooded Vest",
    description:
      "Versatile black sleeveless zip-up jacket with an attached hood, perfect for layering.",
    price: 1499,
    image: [p_img27],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845464,
    bestseller: false,
  },
  {
    _id: "m003",
    name: "Men Navy Blue Graphic T-Shirt",
    description:
      "Comfortable navy blue crew neck t-shirt with an abstract line art graphic on the side.",
    price: 699,
    image: [p_img28],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845465,
    bestseller: true,
  },
  {
    _id: "m004",
    name: "Men Navy Suede Jacket",
    description:
      "Stylish navy blue faux-suede jacket featuring zipper pockets and a stand collar.",
    price: 2999,
    image: [p_img29],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845466,
    bestseller: false,
  },
  {
    _id: "m005",
    name: "Men White Printed Casual Shirt",
    description:
      "Crisp white long-sleeve button-down shirt with a subtle all-over dark micro-print.",
    price: 1199,
    image: [p_img30],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845467,
    bestseller: true,
  },
  {
    _id: "m006",
    name: "Men Pink Oversized Polo Shirt",
    description:
      "Trendy oversized short-sleeve polo shirt in a soft pink shade with a contrasting white collar.",
    price: 899,
    image: [p_img31_1, p_img31_2, p_img31_3, p_img31_4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845468,
    bestseller: false,
  },
  {
    _id: "m007",
    name: "Men Navy Blue Chinos",
    description:
      "Classic straight-fit navy blue chino trousers suitable for smart-casual wear.",
    price: 1399,
    image: [p_img32_1, p_img32_2],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: 1716639845469,
    bestseller: true,
  },
  {
    _id: "m008",
    name: "Men Beige Pleated Trousers",
    description:
      "Relaxed-fit beige trousers with front pleats, combining comfort and sophisticated style.",
    price: 1599,
    image: [p_img33_1, p_img33_2],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: 1716639845470,
    bestseller: false,
  },
  {
    _id: "m010",
    name: "Men Black Oversized Graphic Tee",
    description:
      "Edgy black oversized v-neck t-shirt featuring a bold 'CORE STAY IN ZONE' typography graphic.",
    price: 799,
    image: [p_img34_1, p_img34_2, p_img34_3],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845471,
    bestseller: true,
  },
  // ======================= kids ===================
  {
    _id: "k001",
    name: "Boys Brown Ribbed Sweater",
    description:
      "Warm and cozy brown ribbed knit sweater, perfect for chilly days.",
    price: 899,
    image: [p_img35_1, p_img35_2, p_img35_3 ,p_img35_4],
    category: "Kids",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845472,
    bestseller: true,
  },
  {
    _id: "k002",
    name: "Boys Beige Textured Co-ord Set",
    description:
      "Comfortable two-piece set featuring a beige short-sleeve button-up shirt and matching shorts.",
    price: 1099,
    image: [p_img36_1, p_img36_2, p_img36_3],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845473,
    bestseller: false,
  },
  {
    _id: "k003",
    name: "Girls Pink Crinkle Top",
    description:
      "Cute pink short-sleeve top with a textured crinkle fabric and lettuce-edge hem.",
    price: 599,
    image: [p_img37],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845474,
    bestseller: true,
  },
  {
    _id: "k004",
    name: "Boys Colorblock Fleece Jacket",
    description:
      "Ultra-soft and warm zip-up fleece jacket featuring a brown, tan, and white colorblock design.",
    price: 1299,
    image: [p_img38],
    category: "Kids",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845475,
    bestseller: true,
  },
  {
    _id: "k005",
    name: "Girls White Ribbed Bow Top",
    description:
      "Sweet and simple white ribbed short-sleeve top accented with a delicate blue bow.",
    price: 499,
    image: [p_img39],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845476,
    bestseller: false,
  },
  {
    _id: "k006",
    name: "Kids Beige Cargo Pants",
    description:
      "Durable beige cargo pants equipped with multiple utility flap pockets and a comfortable elastic waistband.",
    price: 899,
    image: [p_img40],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845477,
    bestseller: true,
  },
  {
    _id: "k007",
    name: "Boys Pikachu Pinstripe Jersey",
    description:
      "Fun white and black pinstripe baseball jersey featuring a bright Pikachu character graphic.",
    price: 799,
    image: [p_img41],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845478,
    bestseller: false,
  },
  {
    _id: "k008",
    name: "Girls Pink Dance Graphic Tee",
    description:
      "Trendy pink short-sleeve boxy tee with 'Life is Better When You Dance' text printed on the front.",
    price: 699,
    image: [p_img42],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845479,
    bestseller: true,
  },
  {
    _id: "k009",
    name: "Boys Black Essential T-Shirt",
    description:
      "Basic and comfortable solid black short-sleeve t-shirt for versatile everyday wear.",
    price: 499,
    image: [p_img43],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845480,
    bestseller: false,
  },
  {
    _id: "k010",
    name: "Kids Brown Cargo Sweatpants",
    description:
      "Relaxed-fit brown cargo sweatpants featuring an elasticated drawstring waist and side flap pockets.",
    price: 799,
    image: [p_img44],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845481,
    bestseller: true,
  },
  {
    _id: "k011",
    name: "Kids Striped Bear Polo Sweatshirt",
    description:
      "Cute striped collared long-sleeve sweatshirt with button details and an adorable teddy bear patch.",
    price: 999,
    image: [p_img45],
    category: "Kids",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845482,
    bestseller: false,
  },
];
