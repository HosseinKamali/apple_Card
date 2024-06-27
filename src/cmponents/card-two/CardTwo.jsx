import { useState } from "react";
import { Link } from "react-router-dom";



const CardTwo = () => {
const[showImageIndex,setShowImageIndex]=useState(0)

const images=[
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a983aa17-1356-475f-94bf-eda8d34e042a/windrunner-repel-ko%C5%9Fu-ceketi-g3srcQ.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/55395caf-4f9b-444d-a662-96760bc73ad0/windrunner-repel-ko%C5%9Fu-ceketi-g3srcQ.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86c9e7d7-f590-4996-bb3a-a9c7c705926f/windrunner-repel-ko%C5%9Fu-ceketi-g3srcQ.png"
]
const handelImage=(index)=>{
    setShowImageIndex(index)
}
    return ( 
        <div className="bg-slate-400 w-[24%] h-[450px]">
           <Link to="/"> <img src={images[showImageIndex]} alt="" className="cursor-pointer"/></Link>
            <div className="mx-2">
            <div className=" w-[50%] h-[50px] flex justify-between items-center my-2">
               {images.map((image,index)=>(
                 <img 
                 className="w-[30%] h-full cursor-pointer"
                 key={index}
                 src={image}
                  onMouseEnter={()=>handelImage(index)}
                  alt="" />
               )
               
            )}
            </div>
            <h2>Nike</h2>
            <p>100$</p>
            </div>
         
        </div>
     );
}
 
export default CardTwo;