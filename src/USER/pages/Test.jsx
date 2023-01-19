import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Test = () => {
    const [country, setCountry] = useState([])

    useEffect(()=>{
        const getCountry= async ()=>{
            const res = await axios.get('http://192.168.1.16:3303/api/countries')
            setCountry(res.data.rows.map(item => item.name))
        }
        getCountry()
    }, [])
    console.log(country);
    return (
    <div>
        <h1>hello</h1>
    </div>
  )
}

export default Test