import { useEffect, useState } from "react";
import '../css/weather.css'
import WeatherButton from "../ui/WeatherButton";
import WeatherBox from "../ui/WeatherBox"
import KakaoMap from "../ui/KakaoMap"

const key = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherPage = () => {
    // [카카오지도용 한글명, OpenWeather용 영문명, 국가코드]
    const cities = [
        ["서울", "Seoul", "KR"],
        ["부산", "Busan", "KR"],
        ["대전", "Daejeon", "KR"],
        ["인천", "Incheon", "KR"],
        ["파리", "Paris", "FR"],
        ["뉴욕", "New York", "US"]
    ];
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const cityHandler = (e, city) => {
        const [krName, enName, country] = city;

        // OpenWeather API용 ("Seoul, KR")
        setCity(`${enName}, ${country}`);

        // 카카오 지도 주소 검색용 ("서울")
        getCoordsByCity(krName);
    };


    ////////////////////////// 도시버튼 이벤트 발생 시
    // city update 호출되는 Effect 

    ///https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    useEffect(() => {
        console.log(`debug >>>> cityHandler city ${city}`);
        if (city != '') {
            getCityWeather();
        }
    }, [city])

    const getCityWeather = async () => {
        let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        let response = await fetch(endPoint);

        await fetch(endPoint)
            .then(response => {
                console.log(`debug >>>> getCity fetch response`, response);
                return response.json();
            })
            .then(data => {
                console.log(`debug >>>> getCity fetch response data`, data);
                if (data.main) {
                    // 섭씨로 가공
                    data.main.temp = (data.main.temp - 273.15).toFixed(1);
                }
                setWeather(data)
            })
            .catch(error => {
                console.log(`debug >>>> getCity fetch error`, error)
            })
    };


    ////////////////////////// 마운트 시 
    const getCurrentLocatio = () => {
        navigator.geolocation.getCurrentPosition((position) => {

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            getCurrentWeather(lat, lon);
        });
    };


    useEffect(() => {
        getCurrentLocatio()
    }, [])


    /*
    Q)
    Fetch api - get(QueryString)
    endpoint - https://api.openweathermap.org/data/2.0/onecall/current?lat={lat}&lon={lon}&appid={API key}
    이거 사용 : endpoirt - https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
     */
    const getCurrentWeather = async (lat, lon) => {
        console.log(`debug >>>> lat=${lat}, lon=${lon}`);
        let endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        let response = await fetch(endPoint);

        await fetch(endPoint)
            .then(response => {
                console.log(`debug >>>> fetch response`, response);
                return response.json();
            })
            .then(data => {
                console.log(`debug >>>> fetch response data`, data);
                if (data.main) {
                    data.main.temp = (data.main.temp - 273.15).toFixed(1);
                }
                setWeather(data)
            })
            .catch(error => {
                console.log(`debug >>>> fetch error`, error)
            })

    };

    ///// 도시 클릭 시 좌표 얻기 (kakao gecoder)
    const [moveTo, setMoveTo] = useState(null);

    const getWeatherByCoords = async (lat, lng) => {
        console.log(`debug >>>> getWeatherByCoords lat, lon : ${lat}, ${lng} `);
        let endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`;
        await fetch(endPoint)
            .then(response => {
                console.log(`debug >>>> fetch response `, response);
                return response.json();
            })
            .then(data => {
                console.log(`debug >>>> fetch response data `, data);
                if (data.main) {
                    data.main.temp = (data.main.temp - 273.15).toFixed(1);
                }
                setWeather(data);
            })
            .catch(error => {
                console.log(`debug >>>> fetch error `, error);
            });
    };

    // 좌표 변환 함수
    const getCoordsByCity = (cityName) => {
        const geocooder = new window.kakao.maps.services.Geocoder();
        geocooder.addressSearch(cityName, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const lat = parseFloat(result[0].y)
                const lng = parseFloat(result[0].x)
                console.log(`debug >>>> city coords result `, result);
                console.log(`debug >>>> city coords `, result[0].y, result[0].x)
                setMoveTo({ lat: lat, lng: lng, time: Date.now() });
                getWeatherByCoords(lat, lng);
            }
            else {
                console.log(`debug city coords result : error ${status}`)
            }
        });
    }

    // UI Template
    return (
        <div className="container">
            {/* kakao map version add : coords (좌표 -위도(lat) / 경도 lot) */}
            <KakaoMap setWeatherByCoords={getWeatherByCoords}
                moveTo={moveTo} />


            {/* api.openweathermap.org  */}
            <WeatherBox weather={weather} />


            <WeatherButton
                cities={cities}
                city={city}
                handler={cityHandler}
            />
        </div>
    );

}

export default WeatherPage;