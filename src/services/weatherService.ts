import { WeatherResponse } from "@/types/weather"


const API_KEY = '7a0b0db7efa544dba86190742241812'
const BASE_URL = 'http://api.weatherapi.com/v1'


export const weatherService = {
  getCurrentWeather: async (city: string): Promise<WeatherResponse> => {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3`
    )
    return response.json()
  }
}