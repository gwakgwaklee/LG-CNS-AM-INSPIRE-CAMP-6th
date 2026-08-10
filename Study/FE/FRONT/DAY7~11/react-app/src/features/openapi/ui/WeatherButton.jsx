import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, city, handler }) => {
    return (
        <div className="button-group">
            {cities && cities.map((item, idx) => {
                return (
                    <Button
                        key={idx}
                        className={`btn ${city === item ? 'active' : ''}`}
                        onClick={(e) => handler(e, item)}
                    >
                        {item[0]}
                    </Button>
                );
            })}
        </div>
    );
};

export default WeatherButton;