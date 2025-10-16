export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Lightsaber - Luke Skywalker",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://placehold.co/400x400/1a1a1a/FFE81F?text=Lightsaber",
    category: "Lightsabers",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    description: "Authentic replica of Luke Skywalker's lightsaber with sound effects and LED lighting."
  },
  {
    id: "2",
    name: "Darth Vader Helmet",
    price: 89.99,
    image: "https://placehold.co/400x400/1a1a1a/FFE81F?text=Vader+Helmet",
    category: "Collectibles",
    rating: 4.9,
    reviews: 156,
    inStock: true,
    description: "Premium Darth Vader helmet with voice changer and breathing sound effects."
  },
  {
    id: "3",
    name: "Millennium Falcon Model",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://placehold.co/400x400/1a1a1a/FFE81F?text=Millennium+Falcon",
    category: "Starships",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    description: "Detailed 1:144 scale Millennium Falcon with authentic movie details."
  },
  {
    id: "4",
    name: "Baby Yoda Plush",
    price: 34.99,
    image: "https://placehold.co/400x400/1a1a1a/FFE81F?text=Baby+Yoda",
    category: "Plush Toys",
    rating: 4.9,
    reviews: 412,
    inStock: true,
    description: "Adorable Baby Yoda plush toy, soft and cuddly with authentic details."
  },
  {
    id: "5",
    name: "Stormtrooper Action Figure",
    price: 24.99,
    image: "https://placehold.co/400x400/1a1a1a/FFE81F?text=Stormtrooper",
    category: "Action Figures",
    rating: 4.6,
    reviews: 78,
    inStock: false,
    description: "Highly detailed 6-inch Stormtrooper figure with multiple points of articulation."
  },
  {
    id: "6",
    name: "Death Star Building Set",
    price: 459.99,
    originalPrice: 499.99,
    image: "https://placehold.co/400x400/1a1a1a/FFE81F?text=Death+Star",
    category: "Building Sets",
    rating: 4.8,
    reviews: 145,
    inStock: true,
    description: "Ultimate Death Star building set with 4,016 pieces and 23 minifigures."
  },
  {
    id: "7",
    name: "R2-D2 Interactive Droid",
    price: 199.99,
    image: "https://placehold.co/400x400/1a1a1a/FFE81F?text=R2-D2",
    category: "Droids",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    description: "App-controlled R2-D2 with authentic sounds, lights, and movements."
  },
  {
    id: "8",
    name: "Jedi Training Remote",
    price: 59.99,
    image: "https://placehold.co/400x400/1a1a1a/FFE81F?text=Jedi+Remote",
    category: "Training",
    rating: 4.5,
    reviews: 67,
    inStock: true,
    description: "Interactive Jedi training remote with motion sensors and sound effects."
  }
];