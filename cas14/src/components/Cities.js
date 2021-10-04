import React,{useState,useEffect} from 'react';
import "./../css/Cities.css";
import {api} from './../constants/ApiConstants';

export function Cities(){

    const [city,setCity] = useState("");
    const [weather,setWeather] = useState(undefined);
    const [loading,setLoading] = useState(false);

    function searchWeather(){
        if(city !==undefined && city.trim() !== ""){
        setLoading(true);
        fetch(`${api.root}/weather?q=${city}&units=metric&APPID=${api.key}`)
            .then(res=> res.json())
            .then(json=>{
                setWeather(json);
                setCity('');
                setLoading(false);
            })
            .catch(err=>{
                setLoading(false);
                alert(err);
            })
        }
        else{
            alert("Please enter a value in the input field")
        }
    }

    function dateFormatter(datum){
        let months=["January","February","March","April","May","June","July","August",'September',"October","November","December"];
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        let day = days[datum.getDay()];
        let date = datum.getDate();
        let month = months[datum.getMonth()];
        let year = datum.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    useEffect(()=>{
        console.log(weather);
    },[weather])

    return(
        <div className={weather ? (weather.main.temp > 15) ? 'cities warm' : 'cities cold' : 'cities'}>
           <div className="search-box">
                <input 
                    type="text"
                    placeholder="Search Cities"
                    className="search-bar"
                    value={city}
                    onChange={e=>{setCity(e.target.value)}}
                />
                <button onClick={searchWeather} className="search-button">
                    Search
                </button>
           </div>
           {weather && <div className="location-container">
                <div className="location-box">
                    <div className="location">
                        {weather.name}, {weather.sys.country}
                    </div>
                    <div className="date">
                        {dateFormatter(new Date())}
                    </div>
                </div>
                <div className="weather-box">
                    <div className="temp">
                        {Math.round(weather.main.temp)} &#8451;
                    </div>
                    <div className="weather">
                       {weather.weather[0].main}     
                    </div>
                </div>
           </div>}
           {loading && <div className="loader"></div>}
        </div>
    )
}