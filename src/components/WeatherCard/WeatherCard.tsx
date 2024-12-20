import DropIcon from "@/assets/icons/Drop";
import SunIcon from "@/assets/icons/Sun";
import WindIcon from "@/assets/icons/Wind";
import CloudIcon from "@/assets/icons/Cloud";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useWeather } from "@/hooks/useWeather";
import { useState } from "react";
import Form from "../Form/Form";

const WeatherCard = () => {
    const [inputValue, setInputValue] = useState("");
    const [city, setCity] = useState("London");
    const { data, loading } = useWeather(city);

    if (loading) {
        return <Card className="p-6">Loading...</Card>;
    }

    if (!data || !data.current) {
        return <Card className="p-6">Ошибка загрузки данных о погоде</Card>;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCity(inputValue);
        setInputValue("");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <Card className="max-w-md mx-auto">
            <CardHeader className="font-bold text-3xl text-center">
                {data?.current.temp_c}°C
                <Form
                    handleSubmit={handleSubmit}
                    handleChange={handleInputChange}
                    inputValue={inputValue}
                />
            </CardHeader>

            <CardContent className="flex justify-center">
                <SunIcon size={90} />
            </CardContent>

            <CardTitle className="flex justify-around items-center p-4">
                <WindIcon className="w-6 h-6 text-gray-500" />
                <DropIcon className="w-6 h-6 text-gray-500" />
                <SunIcon className="w-6 h-6 text-gray-500" />
                <CloudIcon className="w-6 h-6 text-gray-500" />
            </CardTitle>

            <CardTitle className="flex justify-around p-4 text-2xl">
                <div>{data?.current.wind_kph} km/h</div>
                <div>{data?.current.humidity}%</div>
                <div>{data?.current.feelslike_c}°</div>
            </CardTitle>

            <div className="p-4 text-center text-gray-500">
                {data?.current.condition.text}
            </div>
        </Card>
    );
};

export default WeatherCard;
