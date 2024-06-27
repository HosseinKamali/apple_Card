import { FaApple } from "react-icons/fa6";
import { motion, transform, useAnimation } from "framer-motion";
import { useEffect } from "react";

const CardSeven = (props) => {

    const controls = useAnimation();

    useEffect(() => {
        
        const sequence = async () => {
           
            await controls.start({ x: 0, transition: { type: "spring", duration: 1, delay:0.7, stiffness: 130 } });

          
            
            await controls.start({ rotate: -60,rotateY:360, y:props.y,x: props.x, transition: { type: "spring", duration: props.duration, delay:props.delay , stiffness: 70 } });

            
        };

        sequence();
    }, [controls, props.delay, props.duration, props.x, props.y]);

    return (
        <motion.div
        style={{background:props.background}}
            className="w-64 h-40 rounded-xl text-slate-100 py-3 px-4 absolute"
            initial={{ x: "-100vw", y:"-16vh" , rotate: 0}}
            animate={controls}
            whileHover={{ translateY:-21 }}
        >
            <h1 className="text-2xl font-bold">{props.title}</h1>
            <div className="flex justify-between items-center">
                <p>speack about somthing</p>
                <FaApple size={60} color="white" />
            </div>
            <p>fourtonatly</p>
        </motion.div>
    );
};

export default CardSeven;
