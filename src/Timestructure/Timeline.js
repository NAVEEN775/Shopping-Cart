import React, { useState } from 'react'
import Data from '../Timestructure/Data.js'
import Times from '../Timestructure/Times.js'
import '../Timestructure/Timeline.css'
const Timeline =()=>{
    const [lis, setLis]= useState(Data)
    const [update, setUpdate]=useState(-1)
    return (
    <div className="timeline-container">
        {lis.map((item ,idx)=>(
              update === item.id ? <Edddd item={item} lis={lis} setLis={setLis}/>:
            <Times item={item}  key={idx}/>
        ))}
    </div>
    )
}
export default Timeline;
function Edddd({item,lis,setLis}){
    const hadlei =(e)=>{
        const newlist = lis.map(li =>(
            li.id === item.id ? {
                ...li, [e.target.name] : e.target.value} : li
        ))
        setLis(newlist)
    }

      return (
    <div className="textcontainer">
    <input type="text" name="name"  value={item.name}/>
    <button type="submit">Save</button>
    </div>
    )
}