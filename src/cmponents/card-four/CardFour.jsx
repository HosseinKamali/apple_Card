import { Fa1,Fa2,Fa3,Fa4,FaCheck   } from "react-icons/fa6";
import style from "./card.module.css"
const CardFour = () => {
    return ( 
        <div className="w-[650px] h-[200px] bg-slate-100 rounded-lg">
   <div className="flex items-center mt-2 mb-3">
          <h2 className="font-semibold text-xl">processing...</h2>
            <h3 className="font-semibold ml-5 text-xl">50%</h3>
          </div>
           
        
           <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between items-center">
          <div className=" bg-slate-200 rounded-full text-center p-6 border-4 border-cyan-600 text-cyan-600"><FaCheck  /></div>
           
          </div>

            <hr className="bg-cyan-600 w-[15%] h-1"/>

            <div className="flex flex-col justify-between items-center">
            <div className="bg-slate-200 rounded-full text-center p-6 border-4 border-cyan-600 text-cyan-600"><FaCheck/></div>
            
            </div>
          
            <hr className="bg-cyan-600 w-[15%] h-1"/>

            <div className="flex flex-col justify-between items-center" >
            <div className="bg-slate-200 rounded-full text-center p-6"><Fa3/></div>
            
            </div>
            
            <hr className="bg-slate-200 w-[15%] h-1"/>

            <div className="flex flex-col justify-between items-center">
            <div className="bg-slate-200 rounded-full text-center p-6"><Fa4/></div>
           
            </div>
            
           </div>
           <div className="flex justify-between items-center mt-2 ml-1">
           <p>Uploding</p>
           <p>Verification</p>
           <p>Converting</p>
           <p>Download</p>
           </div>
            </div> 
        

        
     );
}
 
export default CardFour;