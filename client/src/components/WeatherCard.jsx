// client/src/components/WeatherCard.jsx
export default function WeatherCard({ data }) {
    if (!data) return null;
    const { name, main, weather } = data

    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return (
        <div className="p-6 bg-white rounded-lg shadow-md flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <p className="text-4xl">{Math.round(main.temp)}°C</p>
                <p className="capitalize">{weather[0].description}</p>
            </div>
            <div>
                <img src={iconUrl} alt={weather[0].description} className="w-auto h-full" />
            </div>
        </div>
    );
}
