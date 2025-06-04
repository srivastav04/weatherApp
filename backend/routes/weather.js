const express = require("express");
const axios = require("axios");
const router = express.Router();
const SearchHistory = require("../models/SearchHistory");
const { WEATHER_API_KEY } = process.env;

router.get("/", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    // 1) fetch weather
    const url = `https://api.openweathermap.org/data/2.5/weather`;
    const { data } = await axios.get(url, {
      params: { q: city, appid: WEATHER_API_KEY, units: "metric" },
    });
    console.log(data);

    // 2) record the search with city, temp, and sky
    await SearchHistory.create({
      city,
      temp: data.main.temp,
      sky: data.weather[0].description,
      icon: data.weather[0].icon,
    });

    // 3) fetch last 5 searches
    const history = await SearchHistory.find()
      .sort({ searchedAt: -1 })
      .limit(5)
      .select("city temp sky icon searchedAt -_id");

    const futuredata = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: { q: city, appid: WEATHER_API_KEY, units: "metric" },
      }
    );

    res.json({
      weather: data,
      history,
      future: futuredata.data.list.slice(0, 5),
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res
      .status(500)
      .json({ error: err.response?.data?.message || "Server error" });
  }
});

module.exports = router;
