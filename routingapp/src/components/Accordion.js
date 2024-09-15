import {useState} from 'react';
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

function Accordion({items}){
    const [expandedIndex,setExpandedIndex] = useState(-1);
    
    const renderedItems = items.map((item,index)=>{
        const isExpanded = index === expandedIndex;
        const icon = <span  className='text-2xl'>
            {isExpanded ? <FaChevronDown/> :<FaChevronUp/>}
        </span>
        const handleClick = (nextIndex) => {
            if(nextIndex === expandedIndex){
                setExpandedIndex(-1);
            }else{
                setExpandedIndex(nextIndex);
            }
        }
        return (
            <div key={item.id} >
                <div  onClick={()=>handleClick(index)} className='flex p-3 bg-blue-100 border-b items-center justify-between cursor-pointer'>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    })
    return <div border-z border-t rounded>{renderedItems}</div>
}
export default Accordion;