export default function WeatherListCard({ city, temp, sky, icon }) {
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    console.log(icon);

    return (
        <div className="p-6 bg-white rounded-xl shadow-md space-y-2 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold mb-2">{city}</h2>
                <p className="text-4xl">{Math.round(temp)}°C</p>
                <p className="capitalize">{sky}</p>
            </div>
            <div>
                <img src={iconUrl} alt={sky} className="w-auto h-full" />
            </div>
        </div>
    );
}
