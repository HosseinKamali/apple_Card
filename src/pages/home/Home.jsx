import { useState } from "react";
import { motion  } from "framer-motion";
import CardSix from "../../cmponents/card-six/CardSix";
import ListOne from "../../cmponents/listOne/ListOne";
import CardFive from "../../cmponents/card-five/CardFive";
import Course from "../../cmponents/courseDevelop/Course";
import CardSeven from "../../cmponents/card-seven/CardSeven";
import CardEight from "../../cmponents/Cardeight/CardEight";
import CardNine from "../../cmponents/cardNine/CardNine";
import Menu from "../../cmponents/menu/Menu";
import MenuDown from "../../cmponents/menuDown/MenuDown";

const Home = () => {
  const data = [
    {
      id: 1,
      number: "First",
      background: "linear-gradient(to right, #CD5C5C, #FFA500)",
      x:"-30vw",
      y:"-20vh",
      duration:1,
      delay:0.3
    },
    {
      id: 2,
      number: "second",
      background: "linear-gradient(to right, #DA70D6, #483D8B)",
       x:"-20vw",
       y:"-20vh",
      duration:2,
      delay:0.4
    },
    {
      id: 3,
      number: "thirth",
      background: "linear-gradient(to right, #00BFFF, 	#000080)",
        x:"-10vw",
      y:"-20vh",
      duration:3,
      delay:0.5
    },
    {
      id: 4,
      number: "fifth",
      background: "linear-gradient(to right, 	#00FA9A, #006400)",
       x:"0",
       y:"-20vh",
      duration:4,
      delay:0.6
    },
    {
      id: 5,
      number: "sixth",
      background: "linear-gradient(to right, #FF4500, #FF6347)",
       x:"10vw",
      y:"-20vh",
      duration:5,
      delay:0.7
    }
  ];

  return (
    <div className="bg-slate-400 h-screen w-screen relative flex justify-center items-center flex-col overflow-hidden" >
      <Menu/>
<motion.div className="bg-slate-100  h-[600px] w-[70%] absolute"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:2}}>

</motion.div>
  

      {data.map((item) => (
        <div key={item.id}>
          <CardSeven title={item.number} x={item.x} y={item.y} background={item.background} duration={item.duration} delay={item.delay}/>
        </div>
      ))}

      <motion.h1 className="text-2xl absolute bottom-[28%] left-[20%]"
      initial={{y:"-20px", opacity:0}}
      animate={{y:0 , opacity: 1}}
      transition={{type: "spring", duration: 2, delay:3, stiffness: 80}}
      >EMPOWERING GROWTH</motion.h1>
      <motion.h2 className="text-2xl font-bold absolute bottom-[24%] left-[20%]"
      initial={{y:"-20px", opacity:0}}
      animate={{y:0 , opacity: 1}}
      transition={{type: "spring", duration: 2, delay:3, stiffness: 80}}>UNLOKING DIGITAL SOLUSTION</motion.h2>
      <div className="text-2xl font-bold absolute bottom-[12%] left-[20%]">
      <MenuDown/>
      </div>
      
    </div>
  );
};

export default Home;
