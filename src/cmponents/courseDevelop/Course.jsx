import {
    motion,
    AnimatePresence,
    useCycle,
    useTransform,
    useMotionValue,
  } from "framer-motion";
  import { useState } from "react";
  import { FaArrowAltCircleRight, FaLess } from "react-icons/fa";
  
  const steps = [
    "Html5",
    "Css3",
    "JavaScript",
    "BootStrap",
    "React js",
    "Tailwind Css"
  ];
  
  const Course = () => {
    const [currentStep, setCurrentStep] = useState(null);
  
    return (
      <>
        <h1 className="mb-24 text-4xl font-bold text-orange-500">
          Front developer Path
        </h1>
        <div className="flex text-3xl text-gray-200 justify-around w-[80vw] items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.h2
                whileHover={{ scale: 1.2, color: "yellow", originX: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                className={`shadow-xl cursor-pointer ${
                  currentStep === index ? "font-semibold text-5xl " : ""
                }`}
                style={{
                    color: currentStep === index ? "#eded86" : "inherit"
                  }}
                onClick={() => setCurrentStep(index)}
              >
                {step}
              </motion.h2>
              {index < steps.length -1 && (
                <FaArrowAltCircleRight size={25} className="ml-6" />
              )}
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Course;
  