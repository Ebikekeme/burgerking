import React from 'react'
import image2 from "../assets/whopper.jpeg"
import image1 from "../assets/bkjob.jpeg"
import image3 from  "../assets/345.png"
import { NewsCard } from "./NewsCard";




export default function OrderNews() {
   

   
      const cards = [
        {
          id: 1,
          image: image1,
          alt: "image saying join the bk team",
          title: "JOIN THE BK TEAM",
          link: "https://order.burger-king.ng/news/4/",
        },
        {
          id: 2,
          image: image2,
          alt: "A picture saying new alert",
          title: "THE WHOPPER HAS A NEW HOME",
          link: "https://order.burger-king.ng/news/2/",
        },
        {
          id: 3,
          image: image3,
          alt: "A picture of burger saying budgeat",
          title: "The 3k,4k,5k NAIRA MENU",
          link: "https://order.burger-king.ng/news/25/",
        },
      ];
    
      return (
        <>
          <div className="news-container">
            <div className="news-title">
              
              <h2 className="News"> News</h2>
    
              <div className="card">
                {cards.map((card, index) => {
                  return (
                    <NewsCard
                      image={card.image}
                      title={card.title}
                      content={card.content}
                      link={card.link}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </>
      );
    };
    

