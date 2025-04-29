import React from "react";
import "./HowItWork.css";
import { asssts } from "../../assets/assets";
const HowItWork = () => {
  const datas = [
    {
      heading: "BUILDING CUSTOMER PERSONA",
      icon: asssts.diversity,
      par: "Building a customer persona is crucial for our sales team to offer tailored PC solutions. It’s a detailed profile of our ideal customer based on real data and insights from direct interactions. This helps us understand customer needs, preferences, and pain points, enabling us to provide more personalized solutions.",
    },
    {
        heading:"DEEP TECHNICAL CONSULTING",
        icon:asssts.sync,
        par:"Our expert engineers ensure you're prepared before your new PC arrives. We're committed to educating customers, providing comprehensive support so you have the skills and knowledge for optimal PC use from day one."
    },
    {
        heading:"PAN INDIA FREE DELIVERY",
        icon:asssts.box,
        par:"We provide complimentary delivery and shipping services, ensuring a seamless experience for our customers To guarantee the safety and security of your purchase, we employ premium packing materials."
    },
    {
        heading:"ULTRA-DURABLE PACKING ",
        icon:asssts.sync,
        par:"Our innovative three-layer protection ensures your items stay safe during transit. The first layer absorbs shocks, the second reinforces the package, and the third shields against moisture, dust, and temperature changes, guaranteeing your items arrive in perfect condition."
    }
  ];
  return (
    <div className="main" id="about">
      <center>
        <h1>How is it working? </h1>
      </center>
      <div className="deil_card">
        {datas.map((e,index)=>(
           <div className="hover_cart" key={index}>
            <p>{e.heading}</p>
            <img src={e.icon} alt="icon" className="icons" />
            <p className="pre">{e.par}</p>
           </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
