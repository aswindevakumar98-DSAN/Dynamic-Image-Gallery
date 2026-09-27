import React from 'react';
import ImageCard from "./ImageCard";
import './gallery.css';

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    title: "Mountain Lake",
    description: "Beautiful mountains reflected in a peaceful lake."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    title: "Sunset Beach",
    description: "A stunning sunset over the ocean."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600",
    title: "Forest Waterfall",
    description: "A peaceful waterfall surrounded by greenery."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600",
    title: "City Skyline",
    description: "A beautiful view of a modern city."
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600",
    title: "Green Forest",
    description: "Explore the beauty of a lush green forest."
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
    title: "Paris",
    description: "Discover the iconic sights of Paris."
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600",
    title: "Tropical Island",
    description: "Enjoy crystal-clear water and sandy beaches."
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600",
    title: "Spring Flowers",
    description: "Colorful flowers blooming in spring."
  }
];

function App() {
  return (
    <>
      <header className="hero">
        <h1>React Image Gallery</h1>
        <p>
          Explore beautiful places around the world.
        </p>
      </header>

      <main className="gallery">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
          />
        ))}
      </main>
    </>
  );
}

export default App;