import { motion, AnimatePresence, useCycle, useTransform ,useMotionValue} from "framer-motion"
import { FaBug } from "react-icons/fa6";

const items = [0, 1, 2, 3, 4];
const height = 70;
const padding = 10;
const size = 150;

 const CardFive = () => {
    const scrollY = useMotionValue(0);

    const width = useTransform(
        scrollY,
        [0, -getHeight(items) + size],
        ["calc(0% - 0px)", "calc(100% - 40px)"]
    );

    return (
        <>
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    overflow: "hidden",
                    position: "relative",
                    transform: "translateZ(0)",
                }}
            >
                <motion.div
                    style={{
                        width: 50,
                        height: getHeight(items),
                        y: scrollY
                    }}
                    drag="y"
                    dragConstraints={{
                        top: -getHeight(items) + size,
                        bottom: 0
                    }}
                >
                    {items.map((index) => {
                        return (
                            <motion.div
                                style={{
                                    width: 50,
                                    height: height,
                                    borderRadius: 20,
                                    backgroundColor: "#fff",
                                    position: "absolute",
                                    top: (height + padding) * index
                                }}
                                key={index}
                            />
                        );
                    })}
                </motion.div>
            </motion.div>
            <motion.div
                style={{
                    width,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "#fff",
                    position: "absolute",
                    bottom: 20,
                    left: 20
                }}
            />
        </>
    );
}

function getHeight(items) {
    const totalHeight = items.length * height;
    const totalPadding = (items.length - 1) * padding;
    const totalScroll = totalHeight + totalPadding;
    return totalScroll;
} 
 
 
 
 
 
 
 

     
     
     
     
    
  
      
  
   
   
   
   
   
   
   
   
  
      
      
  
   
   
   
   
  
  


export default CardFive;
