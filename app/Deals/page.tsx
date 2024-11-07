import React from "react";
import Image from "next/image";
import card1 from "../public/image/aa.jpg";
import card2 from "../public/image/ab.jpg";
import card3 from "../public/image/ac.jpg";
import card4 from "../public/image/ad.jpg";
import card5 from "../public/image/ae.jpg";
import card6 from "../public/image/af.jpg";

export default function Deals() {
  return (
    <div className="container">
      <h1 className="text-center">Best Deals</h1>
      <div className="grid-container">
        <div className="grid-item">
          <Image src={card1} alt="aa.jpg" width={328} height={292} />
        </div>
        <div className="grid-item">
          <Image src={card2} alt="ab.jpg" width={328} height={292} />
        </div>
        <div className="grid-item">
          <Image src={card3} alt="ac.jpg" width={328} height={292} />
        </div>
        <div className="grid-item">
          <Image src={card4} alt="ad.jpg" width={328} height={292} />
        </div>
        <div className="grid-item">
          <Image src={card5} alt="ae.jpg" width={328} height={292} />
        </div>
        <div className="grid-item">
          <Image src={card6} alt="af.jpg" width={328} height={292} />
        </div>
       
      </div>
    </div>
  );
}
