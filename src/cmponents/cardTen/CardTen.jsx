import { motion , useAnimation  } from "framer-motion";
import { useEffect } from "react";



const CardTen = () => {
    const data = [
        {
            id:1,
            number : "First",
            color:"red",
        },
        {
            id:2,
            number : "First",
            color:"blue",
        },
        {
            id:3,
            number : "First",
            color:"yellow",
        },  {
            id:4,
            number : "First",
            color:"pink",
        },
    ]
    
    return ( 
        <motion.div
        className="w-64 h-40 bg-orange-600 rounded-xl text-slate-100 py-3 px-4 absolute"
        whileHover={{scale:1.2}}
        initial={{ x: "-100vw", y:"20vh" , rotate: 0}}
        animate={controls}
    >
        <h1 className="text-2xl font-bold">First</h1>
        <div className="flex justify-between items-center">
            <p>speack about somthing</p>
            <FaApple size={60} color="white" />
        </div>
        <p>fourtonatly</p>
    </motion.div>
     );
}
 
export default CardTen;