import { useState, useEffect } from "react";
import { weatherService } from "@/services/weatherService";
import { WeatherResponse } from "@/types/weather";

export const useWeather = (city: string) => {
    const [data, setData] = useState<WeatherResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setLoading(true);
        try {
            const result = await weatherService.getCurrentWeather(city);
            setData(result);
        } catch (err) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather();
        console.log(data);
    }, [city]);

    return { data, loading, error, fetchWeather };
};
