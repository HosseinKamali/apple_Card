import { useState } from "react";



const CardThree = () => {
const[showImageIndex,setShowImageIndex]=useState(0)

const images=[
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e116bc0-4df2-48a0-9d72-827e2554e713/pro-indy-plunge-orta-destekli-dolgulu-spor-s%C3%BCtyeni-FsrdvD.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/504e636d-383d-452c-aeb4-d3be3ae10399/pro-indy-plunge-orta-destekli-dolgulu-spor-sütyeni-FsrdvD.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a031b707-d880-44bb-a3a6-e762dc80be9f/pro-indy-plunge-orta-destekli-dolgulu-spor-s%C3%BCtyeni-FsrdvD.png"
]
const handelImage=(index)=>{
    setShowImageIndex(index)
}
    return ( 
        <div className="bg-slate-400 w-[24%] h-[450px]">
            <img src={images[showImageIndex]} alt="" className="cursor-pointer"/>
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
            <p>120$</p>
            </div>
         
        </div>
     );
}
 
export default CardThree;