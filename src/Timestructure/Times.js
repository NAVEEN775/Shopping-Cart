import { useState } from "react"
import { format } from 'date-fns'
import '../Timestructure/Timeline.css';
const Times=({item})=>{
    const lisst=[{
    
        id:1,
        na:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    
    
}]
    const [list, setList]=useState(lisst)
    const [update, setUpdate]=useState(-1)
    const edit =(id)=>{
        setUpdate(id)
    }
    const sub=(e)=>{
        e.preventDefault();
        setUpdate(-1)
    }
    return (
    <div className="timeline-item">
        <div className="timelint-content">
           <div className="dedd">
            <h1>{item.name}</h1>
            <time>{format(item.date, 'dd/mm/yyyy')}</time>
            </div> 
        <form onSubmit={sub}>   
            {
                list.map((it)=>(
                    update === it.id ? <Edddd it={it} list={list} setList={setList}/>:
                    <div className="edi">
                        <p>{it.na}</p>
                    
                    <img src="edit.png" alt="edit logo" onClick={()=>edit(it.id)}/>
                    
                    </div>
                ))
            }
        </form>
            <span className="circlesss"/>
        </div>
    </div>
    )
}
export default Times;

function Edddd({it,list,setList}){
    const hadlei =(e)=>{
        const newlist = list.map(li =>(
            li.id === it.id ? {
                ...li, [e.target.name] : e.target.value} : li
        ))
        setList(newlist)
    }

      return (
    <div className="textcontainer">
    <textarea onChange={hadlei} name="na" value={it.na}/>
    <button type="submit">Save</button>
    </div>
    )
}