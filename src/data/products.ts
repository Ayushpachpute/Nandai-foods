export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: "laddu" | "chikki" | "mukhwas" | "healthy-snacks";
  image: string;
  images: string[];
  description: string;
  features: string[];
  rating: number;
  reviewCount: number;
  weight: string;
  badge?: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: "1",
    slug: "rajgira-laddu",
    name: "Rajgira Laddu",
    price: 249,
    originalPrice: 299,
    category: "laddu",
    image: "/images/rajgira-laddu.png",
    images: ["/images/rajgira-laddu.png", "/images/dryfruit-laddu.png"],
    description:
      "Made from roasted amaranth (rajgira) seeds and natural jaggery, our Rajgira Laddus are a powerhouse of nutrition. Handcrafted in small batches using age-old recipes passed down through generations. Perfect as a healthy snack or festive treat.",
    features: ["High Protein", "Gluten Free", "Energy Snack", "No Preservatives"],
    rating: 4.8,
    reviewCount: 324,
    weight: "250g",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "2",
    slug: "peanut-chikki",
    name: "Peanut Chikki",
    price: 149,
    originalPrice: 179,
    category: "chikki",
    image: "/images/peanut-chikki.png",
    images: ["/images/peanut-chikki.png"],
    description:
      "Crunchy, golden peanut chikki made with the finest groundnuts and pure jaggery. Our traditional recipe ensures the perfect balance of sweetness and crunch in every bite.",
    features: ["Natural Jaggery", "No Added Sugar", "Rich in Protein", "Crispy Texture"],
    rating: 4.7,
    reviewCount: 198,
    weight: "200g",
    inStock: true,
  },
  {
    id: "3",
    slug: "mukhwas-mix",
    name: "Mukhwas Mix",
    price: 129,
    category: "mukhwas",
    image: "/images/mukhwas-mix.png",
    images: ["/images/mukhwas-mix.png"],
    description:
      "A delightful blend of fennel seeds, sesame, dried herbs, and colorful sugar-coated seeds. Our signature mukhwas mix is the perfect mouth freshener after any meal, crafted with authentic spices.",
    features: ["Digestive Aid", "Natural Herbs", "No Artificial Colors", "Refreshing"],
    rating: 4.6,
    reviewCount: 145,
    weight: "150g",
    badge: "New",
    inStock: true,
  },
  {
    id: "4",
    slug: "til-laddu",
    name: "Til Laddu",
    price: 199,
    originalPrice: 229,
    category: "laddu",
    image: "/images/til-laddu.png",
    images: ["/images/til-laddu.png"],
    description:
      "Rich in calcium and healthy fats, our Til Laddus are made from roasted sesame seeds bound with pure jaggery. A traditional winter delicacy loved across generations.",
    features: ["Rich in Calcium", "Natural Jaggery", "Handmade", "Vegan"],
    rating: 4.9,
    reviewCount: 267,
    weight: "250g",
    badge: "Fan Favourite",
    inStock: true,
  },
  {
    id: "5",
    slug: "dryfruit-laddu",
    name: "Dry Fruit Laddu",
    price: 349,
    originalPrice: 399,
    category: "laddu",
    image: "/images/dryfruit-laddu.png",
    images: ["/images/dryfruit-laddu.png"],
    description:
      "A luxurious blend of cashews, almonds, pistachios, and dates pressed into rich laddus. No added sugar — just the natural sweetness of premium dry fruits.",
    features: ["No Added Sugar", "Premium Dry Fruits", "High Nutrition", "Diabetic Friendly"],
    rating: 4.9,
    reviewCount: 412,
    weight: "200g",
    badge: "Premium",
    inStock: true,
  },
  {
    id: "6",
    slug: "mix-makhana",
    name: "Mix Makhana",
    price: 179,
    category: "healthy-snacks",
    image: "/images/rajgira-laddu.png",
    images: ["/images/rajgira-laddu.png"],
    description:
      "Roasted fox nuts (makhana) lightly seasoned with natural spices. A guilt-free, protein-rich snack that satisfies cravings without the calories.",
    features: ["Low Calorie", "High Protein", "Roasted", "Seasoned"],
    rating: 4.5,
    reviewCount: 89,
    weight: "100g",
    inStock: true,
  },
];

export default products;

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: string) =>
  category === "all" ? products : products.filter((p) => p.category === category);
