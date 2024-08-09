import { useState, useEffect } from "react"
import { Cards } from "../../component/card";

const Home = () => {
    const [data, SetData] = useState([]);
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
            let res =  await fetch('http://127.0.0.1:8000/product/')
            let datas = await res.json();
            SetData(datas)
            }catch(e){
                console.log(e.message)
            }
        }
        fetchdata()
    },[])
  return (
    <div>
        {
            data.map(items =>(
                 <div key={items.id}>
                    <Cards {...items}/>
                 </div>
            ))
        }
    </div>
  )
}

export default Home