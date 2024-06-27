import { motion , useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaApple } from "react-icons/fa6";

const CardNine = () => {
    const controls = useAnimation();

    useEffect(() => {
        
        const sequence = async () => {
            
            await controls.start({ x: 0, transition: { type: "spring", duration: 2, stiffness: 70 } });
           
            await controls.start({ rotate: 90, x:"-6vw", y:"-20vh", transition: { type: "spring", duration: 2, stiffness: 70 , delay: 0.8 } });

            
        };

        sequence();
    }, [controls]);

    return ( 
        <motion.div
        className="w-64 h-40 bg-rose-500 rounded-xl text-slate-100 py-3 px-4 absolute "
        whileHover={{scale:1.2}}
        initial={{ x: "-100vw", y:"10vh" , rotate: 0 }}
        animate={controls}
    >
        <h1 className="text-2xl font-bold">Third</h1>
        <div className="flex justify-between items-center">
            <p>speack about somthing</p>
            <FaApple size={60} color="white" />
        </div>
        <p>fourtonatly</p>
    </motion.div>

     );
}
 
export default CardNine;