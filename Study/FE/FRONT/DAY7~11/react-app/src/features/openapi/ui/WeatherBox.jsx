import '../css//weather.css'

/*
    Q)
    props로 전달되는 weather 는 openweather 서버와 통신을 통한 해당 도시의 날씨정보

    weather - 현재 위치, 섭씨(C), , 날씨 요약정보 
    섭씨(C) : (kelven - 273.15).toFixed(1)

*/
const WeatherBox = ({ weather }) => {

    // tempC 계산 부분 page에서 처리하도록 나중에 수정하자!

    return (
        <div className='weather-box'>
            <div className='weather-city'>
                {weather?.name}
            </div>
            <div className='weather-temp'>
                {weather?.main?.temp ? `${weather.main.temp}°C` : ''}
            </div>
            <div className='weather-desc'>
                {weather?.weather?.[0]?.description}
            </div>
        </div>
    );
}

export default WeatherBox;