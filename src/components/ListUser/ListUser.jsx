import { useState, useEffect } from "react"
import "./ListUser.css"
import axios from "axios"

const ListUser = () => {
    const [chars, setChars] = useState([]);

    useEffect(()=>{
        axios("http://www.omdbapi.com/?t=apikey=57e42fa3&")
        .then((res)=>console.log(res.data))
    })
  return (
    <div className="Cards-Lists">ListUser</div>
  )
}

export default ListUser