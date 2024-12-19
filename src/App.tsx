import "./App.css";
import { Button } from "./components/ui/button";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
    return (
        <>
            <div className="App">
                <WeatherCard />
            </div>
        </>
    );
}

export default App;
