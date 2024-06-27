import { GiFrayedArrow } from "react-icons/gi";
import { FaExclamationCircle } from "react-icons/fa";


const CardSix = (props) => {
    
    return ( 
        <div style={{backgroundColor:props.color}} className=" flex  w-[350px] h-[200px] justify-around items-center rounded-2xl shadow-xl">
         
            <div>
            <h2 className="text-slate-50 font-bold">Pay - per - Click</h2>
            
            <p className="text-slate-50 font-semibold mb-20">Advertising</p>
            <div className="flex items-center ">
            <p className="text-slate-50 mr-2"><FaExclamationCircle/></p>
            <p className="text-slate-50">Unlokingdigital</p>
            </div>
           
            </div>

            <div>
            <p className="text-slate-50"><GiFrayedArrow size={90}/></p>
            </div>
           
        </div>
     );
}
 
export default CardSix;