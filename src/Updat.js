import { useState } from "react"
// import '../Timestructure/Timeline.css'
export default function Updat(){
    const lists=[{
        id:1,
        name:"lkaljkalsllslsllslsllsl"
    }]
    const [list, setList]=useState(lists)
    const [update, setUpdate]=useState(-1)
    const edit =(id)=>{
        setUpdate(id)
    }
    const sub=(e)=>{
        e.preventDefault();
        setUpdate(-1)
    }
    return (
        <div>
        <form onSubmit={sub}>
            {list.map((item)=>(
                update === item.id ? <Edddd item={item} list={list} setList={setList}/>:
                <div key={item.id}>
                {item.name}
                    <button onClick={()=>edit(item.id)}>edit</button>
                    </div>
            ))}
            </form>
        </div>
    )
}
function Edddd({item,list,setList}){
    const hadlei =(e)=>{
        const newlist = list.map(li =>(
            li.id === it.id ? {
                ...li, [e.target.name] : e.target.value} : li
        ))
        setList(newlist)
    }

      return (
    <div className="textcontainer">
    <input type="text" name="name" onChange={hadlei} value={item.name}/>
    <button type="submit">Save</button>
    </div>
    )
}