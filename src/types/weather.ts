export interface WeatherResponse {
  current: {
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    pressure_mb: number;
    humidity: number;
    feelslike_c: number;
    uv: number;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
}

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    daily_chance_of_rain: number;
  };
}
