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
  story: {
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
  };
  specifications: {
    material: string;
    powerSource: string;
    dimensions: string;
    origin: string;
    era: string;
    forceAlignment: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Lightsaber - Luke Skywalker",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Lightsabers",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    description: "Authentic replica of Luke Skywalker's lightsaber with sound effects and LED lighting.",
    story: {
      paragraphs: [
        "This legendary lightsaber once belonged to Anakin Skywalker, crafted by the young Jedi himself during the Clone Wars. After his fall to the dark side, it became a symbol of hope when his son Luke discovered it in Obi-Wan Kenobi's hut on Tatooine.",
        "The blue plasma blade has witnessed countless battles, from the destruction of the Death Star to the final confrontation on the second Death Star. Its kyber crystal resonates with the Force, calling to those strong in the light side."
      ],
      quote: "This is the weapon of a Jedi Knight. Not as clumsy or random as a blaster.",
      quoteAuthor: "Obi-Wan Kenobi"
    },
    specifications: {
      material: "Durasteel & Kyber Crystal",
      powerSource: "Kyber Crystal",
      dimensions: '28" x 1.5" x 1.5"',
      origin: "Tatooine",
      era: "Galactic Civil War",
      forceAlignment: "Light Side"
    }
  },
  {
    id: "2",
    name: "Darth Vader Helmet",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Collectibles",
    rating: 4.9,
    reviews: 156,
    inStock: true,
    description: "Premium Darth Vader helmet with voice changer and breathing sound effects.",
    story: {
      paragraphs: [
        "The imposing helmet of Darth Vader, forged from the ashes of Anakin Skywalker's fall. This dark armor became the symbol of the Empire's might and the fear it instilled across the galaxy.",
        "Beneath this mask lies the tragedy of a fallen hero, transformed by the dark side into the galaxy's most feared enforcer. The distinctive breathing apparatus and voice modulation system made Vader's presence unmistakable."
      ],
      quote: "I find your lack of faith disturbing.",
      quoteAuthor: "Darth Vader"
    },
    specifications: {
      material: "High-grade Polymer",
      powerSource: "N/A",
      dimensions: '12" x 10" x 8"',
      origin: "Mustafar",
      era: "Galactic Civil War",
      forceAlignment: "Dark Side"
    }
  },
  {
    id: "3",
    name: "Millennium Falcon Model",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Starships",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    description: "Detailed 1:144 scale Millennium Falcon with authentic movie details.",
    story: {
      paragraphs: [
        "The Millennium Falcon, the fastest hunk of junk in the galaxy. This legendary ship has made the Kessel Run in less than twelve parsecs and has been the home of smugglers, rebels, and heroes.",
        "Piloted by Han Solo and Chewbacca, this Corellian freighter has outrun Imperial starships and played a crucial role in the destruction of both Death Stars. Its modifications make it one of the most recognizable ships in the galaxy."
      ],
      quote: "She may not look like much, but she's got it where it counts, kid.",
      quoteAuthor: "Han Solo"
    },
    specifications: {
      material: "ABS Plastic & Metal",
      powerSource: "N/A",
      dimensions: '24" x 16" x 6"',
      origin: "Corellia",
      era: "Clone Wars",
      forceAlignment: "Neutral"
    }
  },
  {
    id: "4",
    name: "Baby Yoda Plush",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Plush Toys",
    rating: 4.9,
    reviews: 412,
    inStock: true,
    description: "Adorable Baby Yoda plush toy, soft and cuddly with authentic details.",
    story: {
      paragraphs: [
        "The Child, known affectionately as Baby Yoda, is a mysterious being with incredible Force abilities. This adorable creature has captured hearts across the galaxy with its curious nature and powerful connection to the Force.",
        "Despite its small size and innocent appearance, this little one possesses ancient wisdom and abilities that even the most experienced Jedi would envy. Its species remains one of the greatest mysteries in the galaxy."
      ],
      quote: "This is the way.",
      quoteAuthor: "The Mandalorian"
    },
    specifications: {
      material: "Premium Soft Fabric",
      powerSource: "N/A",
      dimensions: '8" x 6" x 4"',
      origin: "Unknown Regions",
      era: "Age of the Empire",
      forceAlignment: "Light Side"
    }
  },
  {
    id: "5",
    name: "Stormtrooper Action Figure",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Action Figures",
    rating: 4.6,
    reviews: 78,
    inStock: false,
    description: "Highly detailed 6-inch Stormtrooper figure with multiple points of articulation.",
    story: {
      paragraphs: [
        "The elite soldiers of the Galactic Empire, Stormtroopers are the backbone of Imperial military might. Clad in their distinctive white armor, they serve as the Empire's enforcers across the galaxy.",
        "Despite their reputation for poor aim, these soldiers are highly trained and loyal to the Empire. Their armor provides protection and intimidation, making them a symbol of Imperial authority."
      ],
      quote: "These aren't the droids you're looking for.",
      quoteAuthor: "Obi-Wan Kenobi"
    },
    specifications: {
      material: "PVC & ABS Plastic",
      powerSource: "N/A",
      dimensions: '6" x 2" x 1"',
      origin: "Kamino",
      era: "Galactic Civil War",
      forceAlignment: "Dark Side"
    }
  },
  {
    id: "6",
    name: "Death Star Building Set",
    price: 459.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Building Sets",
    rating: 4.8,
    reviews: 145,
    inStock: true,
    description: "Ultimate Death Star building set with 4,016 pieces and 23 minifigures.",
    story: {
      paragraphs: [
        "The Death Star, the Empire's ultimate weapon of terror. This massive space station was designed to instill fear across the galaxy with its planet-destroying superlaser.",
        "Despite its immense power, the Death Star had a fatal flaw that would lead to its destruction at the hands of the Rebel Alliance. Its construction represents the Empire's willingness to sacrifice everything for control."
      ],
      quote: "That's no moon. It's a space station.",
      quoteAuthor: "Obi-Wan Kenobi"
    },
    specifications: {
      material: "ABS Plastic",
      powerSource: "N/A",
      dimensions: '19" x 19" x 6"',
      origin: "Deep Space",
      era: "Galactic Civil War",
      forceAlignment: "Dark Side"
    }
  },
  {
    id: "7",
    name: "R2-D2 Interactive Droid",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Droids",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    description: "App-controlled R2-D2 with authentic sounds, lights, and movements.",
    story: {
      paragraphs: [
        "R2-D2, the most reliable astromech droid in the galaxy. This brave little droid has been at the center of some of the most important events in galactic history.",
        "From carrying the Death Star plans to helping destroy both Death Stars, R2-D2 has proven that droids can be heroes too. Its beeps and whistles have saved the galaxy more times than anyone can count."
      ],
      quote: "Beep boop beep!",
      quoteAuthor: "R2-D2"
    },
    specifications: {
      material: "Metal & Electronic Components",
      powerSource: "Rechargeable Battery",
      dimensions: '7" x 5" x 4"',
      origin: "Naboo",
      era: "Clone Wars",
      forceAlignment: "Light Side"
    }
  },
  {
    id: "8",
    name: "Jedi Training Remote",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    category: "Training",
    rating: 4.5,
    reviews: 67,
    inStock: true,
    description: "Interactive Jedi training remote with motion sensors and sound effects.",
    story: {
      paragraphs: [
        "The Jedi training remote, a crucial tool in the development of young Jedi. This small floating device was used to teach lightsaber combat and Force awareness to Padawans.",
        "Luke Skywalker first encountered one of these remotes aboard the Millennium Falcon, where Obi-Wan taught him the basics of lightsaber combat. It represents the beginning of every Jedi's journey."
      ],
      quote: "Your eyes can deceive you. Don't trust them.",
      quoteAuthor: "Obi-Wan Kenobi"
    },
    specifications: {
      material: "Advanced Materials",
      powerSource: "Motion Sensors",
      dimensions: '3" x 3" x 1"',
      origin: "Jedi Temple",
      era: "Age of the Empire",
      forceAlignment: "Light Side"
    }
  }
];