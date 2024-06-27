import { motion, spring } from "framer-motion";

const ListOne = () => {
  const menus = [
    {
      id:0,
      item : "Home"
    },
    {
      id:0,
      item : "Work"
    }, 
   
    {
      id:0,
      item : "About us"
    },
    {
      id:0,
      item : "Product"
    },
  ];

  return (
    <div className="felx justify-between items-center flex-col">
      <h2 className="font-bold text-3xl">Menu</h2>
      <motion.ul 
  initial={{x:"-100vw"}}
  animate={{x:0}}
  transition={{ type: "spring" ,delay:0.3 , duration:1 , stiffness:70 }}
      className="flex  flex-col items-start text-white text-2xl">
        {menus &&
          menus.map((menu) => (
            <motion.li
            key={menu.id}
              className="cursor-pointer my-2"
              whileHover={{ scale: 1.3, color: "yellow", originX: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {menu.item}
            </motion.li>
          ))}
      </motion.ul>

      <motion.button
     initial={{x:"100vw"}}
     animate={{x:0}}
     
whileHover={{
  boxShadow: " -1px -1px 15px 3px #cacacb",
  textShadow: " -1px -1px 10px 1px #cacacb"

}}
transition={{type:"spring" ,delay:0.1 , duration : 0.5 ,stiffness:70}}
       className="border-2 border-slate-200 py-4 px-4 rounded-2xl mt-3 text-slate-200 text-xl">come on Baby</motion.button>
    </div>
  );
};

export default ListOne;
