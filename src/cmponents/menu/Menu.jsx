import { motion,useAnimation } from "framer-motion";
const Menu = () => {

    return ( 
        <motion.div
        initial={{y:-50 , opacity:0}}
        animate={{y:0 , opacity:1}}
        transition={{delay:2, duration:3}}
         className="absolute flex justify-between items-center z-10 top-20 w-[60%]">
            <p>Delay</p>
            <ul className="flex items-center justify-around w-[50%]">
                <li>About</li>
                <li>Service</li>
                <li>Use Come</li>
                <li>Proping</li>
                <li>Bs</li>
            </ul>
            <p>priveace</p>
        </motion.div>
     );
}
 
export default Menu;