import React from 'react';
import im1 from "../assets/burgers/whopper"
import { MenuItems } from './MenuItems';

export default function MenuBody() {
  const cards = [
    {
      id: 1,
      Image:im1,
      name: "Whopper",
      Link: ""
    }
  ];

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>{/* Render card content here */}</div>
      ))}
    </div>
  );
}