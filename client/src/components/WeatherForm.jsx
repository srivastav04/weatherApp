// client/src/components/WeatherForm.jsx
import { useState } from 'react';

export default function WeatherForm({ onSearch }) {
    const [city, setCity] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (!city) return;
        onSearch(city);
        setCity('');
    };
    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="Enter city"
                className="flex-grow p-2 border rounded"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Search
            </button>
        </form>
    );
}
