import React, {useEffect, useState} from 'react'
import MemeCard from '../card'
import { getAllMemes } from '../api/meme'

function HomePage() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        getAllMemes().then((memes) =>{
            setData(memes.data.memes)
        })
    },[])
  return (
    <div className='row'>
        {
            data.map((el) => {return <MemeCard image={el.url} title={el.name}/>})
        }
    </div>
  )
}

export default HomePage