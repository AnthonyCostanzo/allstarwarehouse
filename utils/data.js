import bcrypt from "bcryptjs";
export const data = {
  users: [
    {
      name: "mike",
      email: "mike@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: false,
    },
    {
      name: "anthony",
      email: "anthony@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: true,
    },
    {
      name: "joe",
      email: "joe@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: false,
    },
    {
      name: "sally",
      email: "sally@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Shelf set",
      price: 100,
      image: "https://m.media-amazon.com/images/I/81wGtHVnQEL.jpg",
      inStock: 50,
      slug: "shelf-set",
      brand: "Amazon",
      description:
        "There’s so much more to these shelves than meets the eye. What begins as a set of three simple shelves can turn into a dramatic, full-wall bookcase that puts the finest libraries to shame",
    },
    {
      name: "Air Jordan 4",
      slug: "airjordan-4",
      price: 750,
      image:
        "https://images.solecollector.com/complex/images/c_crop,h_1125,w_2000,x_0,y_507/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/vv3slidkvmbq6gwfbq88/off-white-air-jordan-4-sail-release-date-cv9388-100-pair",
      inStock: 25,
      brand: "Nike",

      description:
        "Jordan Brand and Virgil Abloh teamed up once again to release the third silhouette in their collaborative history with the women's Jordan 4 Retro Off-White Sail (W)",
    },
    {
      name: "Lamps",
      slug: "lamps",
      price: 20,
      image: "https://m.media-amazon.com/images/I/41F4JPk2FaL._AC_.jpg",
      inStock: 40,
      brand: "Amazon",
      description:
        "Invite soothing, warm style into your home with the Medium Faux-Wood Table Lamp from Threshold™ designed with Studio McGee. This decorative freestanding table lamp has a beige wood-finish globular base paired with a white conical fabric shade to add depth and texture to your home decor.",
    },
    {
      name: "Bedroom Set",
      slug: "bedroom-set",
      price: 2000,
      image:
        "https://m.media-amazon.com/images/I/91n7iNPvzUL._AC_UF894,1000_QL80_.jpg",
      inStock: 10,
      brand: "Amazon",
      description:
        "The set includes bed, dresser, mirror, and two nightstands. The bed and dresser feature muted silver accents, fancy fluted pilasters, and sturdy French bracket foot bases",
    },
    {
      name: "Book shelves",
      slug: "book-shelves",
      price: 300,
      image: "https://m.media-amazon.com/images/I/51d7ApUvR2L._AC_SY580_.jpg",
      inStock: 30,
      brand: "Amazon",
      description:
        "The rustic tree shaped shelves for an old-time classic, with an attractive vintage appearance and functional design. Beautiful platforms that is perfect for displaying your books, magazines, decorations, novels, speakers etc.",
    },
    {
      name: "Amazon Fire TV",
      slug: "fire-tv",
      price: 375,
      image: "https://m.media-amazon.com/images/I/41jHBu01k7L._AC_SY780_.jpg",
      inStock: 25,
      brand: "Amazon",
      description:
        "Brilliant 4K entertainment - Bring movies and shows to life with support for vivid 4K Ultra HD, HDR 10, HLG, and Dolby Digital Plus, and control the TV hands-free with Alexa.",
    },
    {
      name: "Coffee mugs",
      slug: "coffee-mugs",
      price: 20,
      image: "https://m.media-amazon.com/images/I/51FusFX2lLL._AC_.jpg",
      inStock: 25,
      brand: "Amazon",
      description:
        "Holding a full 15 ounces(without filling it to the very top).This large coffee mug perfect for cappuccinos/latte, cereal, soup, ice cream, snacks, salads, rice dishes.The ultimate mug and bowl in one!",
    },
    {
      name: "Apple Watch",
      slug: "apple-watch",
      price: 200,
      image: "https://m.media-amazon.com/images/I/41+THM8wYIL._AC_SY1000_.jpg",
      inStock: 25,
      brand: "Amazon",
      description:
        "WHY APPLE WATCH SE — It has essential features to keep you connected, active, and healthy. SE is 2x faster and has a 30% larger display than Series 3.",
    },
  ],
};
