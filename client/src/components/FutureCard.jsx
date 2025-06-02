// FutureWeatherCards.jsx
import React from 'react';

const FutureWeatherCards = ({ index, forecasts }) => {

    const {
        dt,
        dt_txt,
        main: { temp, humidity },
        weather,
        wind: { speed: windSpeed },
        clouds: { all: cloudiness }
    } = forecasts;

    // Sometimes weather is nested; we'll just grab the first one:
    const description = weather[0]?.description || 'N/A';

    return (
        <div
            key={dt}
            className="bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-200"
        >
            <img
                src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                alt={description}
                className="w-12 h-12"
            />

            {/* Date / Time */}
            <p className="text-sm text-gray-500 mb-2">{dt_txt}</p>

            {/* Temperature */}
            <div className="flex items-baseline">
                <p className="text-4xl font-extrabold">
                    {Math.round(temp)}&deg;C
                </p>
                <span className="ml-2 text-gray-400">/ {Math.round(temp)}&deg;C</span>
            </div>

            {/* Description */}
            <p className="capitalize text-gray-700 mb-4">{description}</p>

            <div className="flex justify-between text-sm text-gray-600">
                {/* Humidity */}
                <div className="flex items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3C8.134 3 5 7.134 5 11a7 7 0 0014 0c0-3.866-3.134-8-7-8z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 13v4m0-4l-1 1m1-1l1 1"
                        />
                    </svg>
                    <span>{humidity}%</span>
                </div>

                {/* Wind Speed */}
                <div className="flex items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 12h18M3 16h12M3 8h12"
                        />
                    </svg>
                    <span>{windSpeed} m/s</span>
                </div>

                {/* Cloudiness */}
                <div className="flex items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 15a4 4 0 014-4h1a6 6 0 0112 0h.5a3.5 3.5 0 010 7H7a4 4 0 01-4-4z"
                        />
                    </svg>
                    <span>{cloudiness}%</span>
                </div>
            </div>
        </div>
    );


};

export default FutureWeatherCards;
