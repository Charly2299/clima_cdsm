import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Card from './Card'
import Loader from './Loader'


function App() {
  const [count, setCount] = useState(0)

  const [coords,setCoords]=useState()
  const [weather,setWeather]=useState()
  const[isLoading,setIsLoading]=useState(true)
  const [degrees,setDegrees] = useState(true)

useEffect(()=>{

const success=(pos)=>{
console.log(pos);
const lat = pos.coords.latitude
const lon = pos.coords.longitude

setCoords({lat,lon})

}


navigator.geolocation.getCurrentPosition(success)
},[])



useEffect(()=>{


  if (coords !== undefined){
  const API_KEY='d9c256c92af9117f3aad141f3d2709c5'
const URL=`https://api.openweathermap.org/data/2.5/
weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`



axios.get(URL) 
.then(res => {
  setWeather(res.data)
setIsLoading(false)


})
.catch(e => console.log(e))





  }


  }
 ,[coords])
 const buttonOnclick=()=>{
  degrees?setDegrees(false):setDegrees(true)
  
  }
  
console.log(weather)

  return (
    <div className="App">

{
  isLoading?
<Loader/>
:
<Card  buttonOnclick={buttonOnclick}
degrees={degrees}
weather={weather}

/>

}








    </div>
  )
}

export default App
