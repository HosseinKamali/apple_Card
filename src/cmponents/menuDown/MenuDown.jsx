import { motion } from "framer-motion";
import { BsAlarm } from "react-icons/bs";
import { BsCalendar2Check } from "react-icons/bs";
import { FaAirbnb } from "react-icons/fa6";

const MenuDown = () => {
    return ( 
        <motion.div
        initial={{y:"20px", opacity:0}}
        animate={{y:0 , opacity:1}}
        transition={{duration:1.3, delay:2.8 }}
         className="flex w-[910px] items-center justify-between">
            <ul className="flex justify-between items-center ">
                <li className="border-neutral-400 border-2 p-4 rounded-full flex items-center"><BsAlarm size={20}/></li>
                <li className="border-neutral-400 border-2 p-3 rounded-full font-normal text-lg"><p>content</p></li>
                <li className="border-neutral-400 border-2 p-4 rounded-full flex items-center"><BsCalendar2Check size={20}/></li>
                 <li className="border-neutral-400 border-2 p-3 rounded-full font-normal text-lg"><p>tellmeSomthings</p></li>
                <li className="border-neutral-400 border-2 p-4 rounded-full flex items-center"><FaAirbnb size={20}/></li>
            </ul>
            <div className="overflow-hidden  border-2 border-neutral-400 rounded-full py-2">
            <motion.ul 
            className="flex justify-between items-center font-normal text-lg w-[370px] "
            animate={{ x: [0, -60, 60] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        >
            <li>hello</li>
            <li>Iadoreyou</li>
            <li>Idareyou</li>
            <li>Isickyou</li>
            <li>Iadoreyou</li>
            
        </motion.ul>
        
            </div>
            <motion.button
            whileHover={{backgroundColor:"gray"}}
             className="border-2 border-neutral-500 rounded-full text-center font-medium text-lg py-2 px-2">Credit Card</motion.button>
          

        </motion.div>
     );
}
 
export default MenuDown;