import React from 'react'
import image from '../src/assets/img/nube.png'

const Card = ({buttonOnclick,degrees,weather}) => {

    const celsius= Math.round((weather?.main.temp) - 273.15)
    const farenheit=Math.round( 1.8*(celsius)+32)
    
    return (
        <div className='card__container'>
            <div className='card-tittles'>
                <h1>Wether App</h1>
                <h2>Location:{weather?.name} {weather?.sys.country} </h2>
            </div>

            <div className='card-content__container'>

                <div className='card-img'>
                    <img src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                    <p>{degrees?celsius:farenheit} {degrees?'C':'F'}</p>
                </div>

                <div className='card-text'>

                    <ul>
                        <li>Wind speed:{weather?.wind.speed}m/s</li>
                        <li>Cloud:{weather?.clouds.all}%</li>
                        <li>Pressure:{weather?.main.pressure} mb</li>
                    </ul>
                </div>

               

            </div>

            <div className='card-btn'>
                    <button onClick={buttonOnclick}>Degrees {degrees?'F':'C'}</button>
                </div>



        </div>
    )
}

export default Card