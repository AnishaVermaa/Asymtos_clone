import React, { useEffect, useState } from "react";
import '../style.css';

const RotatingText = () => {
  const [texts, setTexts] = useState([
    {
      heading: "Platform for AI Accelerated Hardware",
      description:
        "Run AI centric applications close to data source Computer Vision and GenAI for smart decisions.",
    },
    {
      heading: "Monitor the Devices",
      description: "Simplified Install for system metrics and monitoring",
    },
    {
      heading: "Unified Orchestration to run Cloud Native Applications",
      description:
        "We provide efficient, secure and streamlined management of cloud resources that are distributed across multiple locations and providers.",
    },
    {
      heading: "Asymtos Enabled Distributed and Decentralized Cloud",
      description: "Security First and Ease of Use",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div id="home" className="bg">
      <h2 id="heading">{texts[currentIndex].heading}</h2>
      <p id="description">{texts[currentIndex].description}</p>
    </div>
  );
};

export default RotatingText;
