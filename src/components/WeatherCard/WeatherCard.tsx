import DropIcon from "@/assets/icons/Drop";
import SunIcon from "@/assets/icons/Sun";
import WindIcon from "@/assets/icons/Wind";
import CloudIcon from "@/assets/icons/Cloud";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useWeather } from "@/hooks/useWeather";
import { useState } from "react";
import Form from "../Form/Form";
import { convertWindSpeed } from "@/lib/utils";
import BarIcon from "@/assets/icons/Bar";

const WeatherCard = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [city, setCity] = useState<string>("London");
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
            {/* <Form
                    handleSubmit={handleSubmit}
                    handleChange={handleInputChange}
                    inputValue={inputValue}
                /> */}

            <CardHeader>
                <div>
                    {data?.current.temp_c}°C
                    <p className="text-base pt-2">
                        Ощущается как {data?.current.feelslike_c}°C
                    </p>
                </div>
                <div>
                    <SunIcon size={130} className="text-yellow-400" />
                </div>
            </CardHeader>

            <CardTitle>
                <span className="text-gray-200 flex gap-4">
                    <DropIcon className="w-6 h-6 text-gray-500" />
                    {data?.current.humidity}
                </span>

                <span className="text-gray-200 flex gap-4">
                    <CloudIcon className="w-6 h-6 text-gray-500" />
                    {data?.current.cloud} %
                </span>

                <span className="text-gray-200 flex gap-4">
                    <WindIcon className="w-6 h-6 text-gray-500" />
                    {convertWindSpeed(data?.current.wind_kph)} м/с
                </span>

                <span className="text-gray-200 flex gap-4">
                    <BarIcon className="w-6 h-6 text-gray-500" />
                    {data?.current.pressure_mb} мм
                </span>
            </CardTitle>

            <div className="p-4 text-center text-gray-500">
                {data?.current.condition.text}
            </div>
        </Card>
    );
};

export default WeatherCard;
