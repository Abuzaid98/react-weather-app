import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
const CurrentWeather = () => {
    const [latlon, setLatlon] = useState({ lat: "", lon: "" })
    const [data, setData] = useState([])

    const ApiKey = "6637ac61cd710c6d04d79e055c9e877a"

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatlon({ lat: position.coords.latitude, lon: position.coords.longitude })
            // console.log("lat=>", position.coords.latitude)
            // console.log("lon=>", position.coords.longitude)
        })
    }, [])

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${ApiKey}&units=metric`)
            .then(res => {
                console.log(res.data)
                const rcd = [...data]
                rcd.push(res.data)
                setData(rcd)
            })
    }, [latlon])

    return (
        <div>
            <Header />
            <div className="cWeather">
                <div className="container">
                    <div className=' row'>
                        {
                            data?.map((dt, i) => {
                                const photo = `https://openweathermap.org/img/wn/${dt.weather[0].icon}@2x.png`
                                return (

                                    <div key={i} className="col-xl-3 col-md-4 col-12">
                                        <div className="box">

                                            <img src={photo} alt={dt.weather[0].main} />
                                            <h4>{dt.weather[0].main}</h4>
                                            <h1>{dt.main.temp} °C</h1>
                                            <h2>{dt.name}</h2>
                                            <h3>{dt.wind.speed} km/h</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />

        </div >
    )
}

export default CurrentWeather;
