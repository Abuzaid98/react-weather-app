import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useLocation } from 'react-router-dom';

const RecentCity = () => {
    const { state } = useLocation();
    // console.log(state)
    const [val, setVal] = useState({ city: "", email: state.email })
    const [data, setData] = useState([])
    const [ref, setRef] = useState(0)

    function searchCity() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val.city}&appid=6637ac61cd710c6d04d79e055c9e877a&units=metric`)
            .then(res => {
                setVal({ ...val, city: val.city, email: state.email });
                if (res.status === 200) {
                    axios.post('https://64b55ac7f3dbab5a95c7323b.mockapi.io/Students', val)
                        .then(res => {
                            setRef(ref + 1)
                        })
                    setVal({ ...val, city: "" })
                }
                else {
                    setVal({ ...val, cityNotFound: "Enter Correct City Name" })
                    console.log("checking...")
                }
            })
    }

    const EnterClick = (event) => {
        if (event.key === "Enter" && val.city.length > 0) {
            searchCity();
        }
    }
    const handleClick = () => {
        searchCity();
    }

    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`https://64b55ac7f3dbab5a95c7323b.mockapi.io/Students/${id}`)
            .then(res => {
                setRef(ref + 1)
            })

    }
    


    useEffect(() => {
        axios.get('https://64b55ac7f3dbab5a95c7323b.mockapi.io/Students')
            .then(response => {
                // console.log(response.data)
                let filter = response.data.filter(item => item.email === state.email)
                // console.log(filter)

                const promise = filter.reverse().map(name => {
                    return (
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name.city}&appid=6637ac61cd710c6d04d79e055c9e877a&units=metric`)
                    )
                })
                Promise.all(promise)
                    .then(res => {
                        // console.log(res)

                        const newMockcity = res.map((res, index) => {
                            return { data: res.data, id: filter[index].id }
                        })
                        // console.log(newMockcity)
                        setData(newMockcity)
                        // console.log(newMockcity)
                    })
            })
    }, [ref])

    return (
        <>
            <Header username={state.username} userimage={state.url} signOut={state.signOut} />
            <div className="weatherDetail">
                <div className='container m-auto'>
                    <div className='searchCity'>
                        <div className="row g-3 mt-2">
                            <div className="col-8">
                                <input type="text" className="form-control" value={val.city}
                                    onChange={(e) => { setVal({ ...val, city: e.target.value }) }}
                                    placeholder="Enter City" onKeyUp={EnterClick} />
                            </div>
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary mb-3 addBtn" onClick={handleClick}>Add</button>
                            </div>
                            <div className="text-center">
                                {val.cityNotFound}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.length > 0 ?
                                (data.map((dt, i) => {
                                    const photo = `https://openweathermap.org/img/wn/${dt.data.weather[0].icon}@2x.png`
                                    return (
                                        <div key={i} className="col-xl-3 col-md-4 col-12">
                                            <div className="box">

                                                <img src={photo} alt={dt.data.weather[0].main} />
                                                <h4>{dt.data.weather[0].main}</h4>
                                                <h1>{dt.data.main.temp} °C</h1>
                                                <h2>{dt.data.name}</h2>
                                                <h3>{dt.data.wind.speed} km/h</h3>
                                                <button onClick={() => handleDelete(dt.id)} className='btn btn-danger'>X</button>
                                            </div>
                                        </div>
                                    )
                                })) :
                                (<div className='text-center'>
                                    <img src="./buffering.gif" alt="" width={90} />
                                </div>)
                        }
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default RecentCity;
