import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {}

  // subcategory data .

  subCategorisFilterData = [
    { id: 1, categories: 'vitamin', subcategories: 'vitamin' },
    { id: 2, categories: 'vitamin', subcategories: 'smart tv' },
    { id: 3, categories: 'vitamin', subcategories: 'air cooler' },
    { id: 4, categories: 'vitamin', subcategories: 'refrigerator' },
    { id: 5, categories: 'fashion', subcategories: 'tshirt' },
    { id: 6, categories: 'fashion', subcategories: 'jeans' },
    { id: 7, categories: 'homeandfurniture', subcategories: 'sofa' },
    { id: 8, categories: 'homeandfurniture', subcategories: 'table' },
    { id: 9, categories: 'homeandfurniture', subcategories: 'cover' },
    { id: 10, categories: 'toys', subcategories: 'puzzle' },
    { id: 11, categories: 'toys', subcategories: 'cars' },
    { id: 12, categories: 'toys', subcategories: 'toys' }
  ];



  // category data 
  categoriesData = [
    {
      id: 1,
      name: 'Vitamins and Supplements',
      img: '../../assets/images/categoriesimg/vitamins_supplements.jpg',
      code: 'vitamin',
    },
    {
      id: 2,
      name: 'Medicine',
      img: '../../assets/images/categoriesimg/medicines.jpg',
      code: 'medicine',
    },
    {
      id: 3,
      name: 'Personal care',
      img: '../../assets/images/categoriesimg/personal_care.jpg',
      code: 'personalcare',
    },
    {
      id: 4,
      name: 'Wellness',
      img: '../../assets/images/categoriesimg/wellness.jpg',
      code: 'wellness',
    },
  ];

  // product details 

  productData = [
    {
      pdId: 8565,
      pdName: "A.Vogel Sinuforce Formula 30ml",
      pdDesc: "A homeopathic medicine for the supportive treatment of nasal congestion (blocked nose) and catarrh (phlegm). Ingredients address symptoms associated with congestion of the nasal passages, such as headache, postnasal drip, runny nose and mucous build-up.",
      pdPrice: 149.99,
      pdCategory: "vitamin",
      pdSubCategory: "vitamin",
      pdImg: "../../assets/images/productimg/sinuforce.webp"
    },
    {
      pdId: 8566,
      pdName: "Biogen Vitamin C 1000mg 60 Capsules",
      pdDesc: "Vitamin C Is A Powerful Antioxidant And Has Been Shown To Reduce The Duration Of The Common Cold, And To Reduce The Risk Of Developing A Cold When In Extreme Conditions E.G. Endurance Athletes, Subarctic Soldiers, Etc. It Furthermore Contributes To Maintain The Normal Function Of The Immune System During And After Intense Physical Exercise. Vitamin C Also Supports Energy-Yielding Metabolism.",
      pdPrice: 131.99,
      pdCategory: "vitamin",
      pdSubCategory: "vitamin",
      pdImg: "../../assets/images/productimg/vitaminc.webp"
    },
    {
      pdId: 8567,
      pdName: "Biogen Collagen 180s Value Pack",
      pdDesc: "Therapeutic Indications: Assists in connective tissue formation and joint health or joint inflammation. Posology: Adults and children 6 years and older should take three capsules daily. Contraindications: Not for individuals allergic to any of the ingredients or with hypersensitivity to the excipients. ",
      pdPrice: 74000,
      pdCategory: "appliances",
      pdSubCategory: "smart tv",
      pdImg: "../../assets/images/productimg/collagen.webp"
    },
    {
      pdId: 8569,
      pdName: "Dulcolax 30 Tablets",
      pdDesc: "Dulcolax Laxative Tablets (5mg) is a mild laxative that provides overnight relief of occasional constipation.",
      pdPrice: 118.95,
      pdCategory: "appliances",
      pdSubCategory: "refrigerator",
      pdImg: "../../assets/images/productimg/dulcolex.webp"
    },
    {
      pdId: 8570,
      pdName: "Flexor Joint Support Tabs 60's",
      pdDesc: "Supports healthy joint function",
      pdPrice: 265.99,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/flexor.jpg"
    },
    {
      pdId: 8571,
      pdName: "Panado Tablets 24's",
      pdDesc: "Panado Tablets are indicated for the symptomatic relief of mild to moderate pain and fever. ",
      pdPrice: 34.95,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/images/productimg/panado.webp",
      
    },
    {
      pdId: 8572,
      pdName: "Med-lemon Sachets 18's",
      pdDesc: "Med-Lemon the flavourful cold and flu fighter – now's a good time to feel better. Hot medication with Vitamin C.",
      pdPrice: 149.95,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/images/productimg/medlemon.webp",

    },
    {
      pdId: 8573,
      pdName: "Calpol Paediatric Suspension 50ml Strawberry",
      pdDesc: "Calpol Strawberry Paediatric Suspension 50ml is used for the relief of pain and fever related to teething, toothache or sore throats.",
      pdPrice: 49.95,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/images/productimg/calpol.webp",
    },
    {
      pdId: 8574,
      pdName: "Mayogel Susp 200ml",
      pdDesc: "Adco Mayogel Suspension Antacid 200ml is scientifically formulated to help with the relief of indigestion and heartburn. Contains no sugar.",
      pdPrice: 51.95,
      pdCategory: "fashion",
      pdSubCategory: "jeans",
      pdImg: "../../assets/images/productimg/mayogel.webp",
      
    },
    {
      pdId: 8575,
      pdName: "Doktor Mom Herbal Cough 20's Lozenges",
      pdDesc: "Doktor Mom Herbal Cough Lozenges are specially developed to help your body's natural defence against infections, relieve coughs and soothe the throat. Formulated with a combination of herbal extracts, Doktor Mom Herbal Cough Lozenges are great for providing cough relief when you are on the go. ",
      pdPrice: 32.95,
      pdCategory: "fashion",
      pdSubCategory: "jeans",
      pdImg: "../../assets/images/productimg/doktor.webp",
    },
    {
      pdId: 8576,
      pdName: "Cortina Polyester Striped Sofa Cover  (Brown / Drak Brown Pack of 1)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 1500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/images/productimg/hnf-cover-1.webp",
    },
    {
      pdId: 8577,
      pdName: "Cortina Cotton Curtain for , Boho Curtain with Stainless Steel Rings Curtain Fabric  (Brown, 153 m)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 2500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/images/productimg/hnf-curtain-2.webp",
    },
    {
      pdId: 8578,
      pdName: "Decorum 204 TC Microfiber Double Floral Flat Bedsheet  (Pack of 1, Green)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 2500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/images/productimg/hnf-cover-2.webp",
    },
    {
      pdId: 8579,
      pdName: "Seventh Heaven Milan 3 Seater Sofa",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 15000,
      pdCategory: "homeandfurniture",
      pdSubCategory: "sofa",
      pdImg: "../../assets/images/productimg/hnf-sofa-1.webp",
    },
    {
      pdId: 8580,
      pdName: "Allie Wood Solid Wood Study Table",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 10000,
      pdCategory: "homeandfurniture",
      pdSubCategory: "table",
      pdImg: "../../assets/images/productimg/hnf-table-1.webp",
    },
    {
      pdId: 8581,
      pdName: "spincart Mini Monster",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 300,
      pdCategory: "toys",
      pdSubCategory: "cars",
      pdImg: "../../assets/images/productimg/toy-1.webp",
    },
    {
      pdId: 8582,
      pdName: "PP INFINITY Ford 12V Electric Ride On Car For Kids With Remote Control, Music Light 1-6 Yrs Car Battery Operated Ride On  (Black)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 25000,
      pdCategory: "toys",
      pdSubCategory: "cars",
      pdImg: "../../assets/images/productimg/toy-2.webp",
    },
    {
      pdId: 8583,
      pdName: "BOZICA Wooden Educational Creative learning A To Z English Alphabets Board Puzzle  (27 Pieces)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 700,
      pdCategory: "toys",
      pdSubCategory: "puzzle",
      pdImg: "../../assets/images/productimg/toy-3.webp",
    },
    {
      pdId: 8584,
      pdName: "Aapaga Action Figure Super Heros Toy Set",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 500,
      pdCategory: "toys",
      pdSubCategory: "toys",
      pdImg: "../../assets/images/productimg/toy-4.webp",
    },
  ];


}
