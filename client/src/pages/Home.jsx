// client/src/pages/Home.jsx
import { useState } from 'react';
import axios from 'axios';
import WeatherForm from '../components/WeatherForm';
import WeatherCard from '../components/WeatherCard';
import WeatherListCard from '../components/WeatherListCard';
import FutureWeatherCards from '../components/FutureCard';

export default function Home() {
    const [weather, setWeather] = useState(null);
    const [history, setHistory] = useState([]);
    const [future, setFuture] = useState([]);
    const [error, setError] = useState('');



    const fetchWeather = async city => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/weather`, {
                params: { city }
            });
            console.log(data);

            setWeather(data.weather);
            setHistory(data.history);
            setFuture(data.future);
        } catch (err) {
            alert(err.response?.data?.error || 'Unable to fetch weather')
            // setError(err.response?.data?.error || 'Unable to fetch weather');
            // setWeather(null);
        }
    };


    return (
        <div className="max-w-3xl mx-auto mt-10 p-4">
            <WeatherForm onSearch={fetchWeather} />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <WeatherCard data={weather} />
            {future.length > 0 && (
                <div className='mt-8'>
                    <h1 className='text-3xl font-bold text-center'>Forecast (Every 3hrs)</h1>
                    <div className='grid grid-cols-2 gap-4 mt-4 '>
                        {future.map((item, index) => (

                            <FutureWeatherCards key={index} index={index} forecasts={item} />
                        ))}
                    </div>



                </div>
            )}
            {history.length > 0 && (
                <div className='mt-8'>
                    <h1 className='text-3xl font-bold text-center'>History</h1>
                    <div className='grid grid-cols-2 gap-4 mt-4 '>
                        {history.map((item, index) => (
                            <WeatherListCard key={index} city={item.city} temp={item.temp} sky={item.sky} icon={item.icon} />
                        ))}
                    </div>



                </div>
            )}

        </div>
    );
}