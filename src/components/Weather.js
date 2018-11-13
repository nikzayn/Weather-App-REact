import React from 'react';

const Weather = props => (
    <div className="weather__info">
      {
        props.city && props.country && <p className="weather__key">Location:
          <span className="weather__value"> { props.city }, { props.country }</span>
        </p>
      }
      {
        props.temperature && <p className="weather__key">Temperature:
         <span className="weather__value"> { props.temperature } °C</span>
        </p>
      }
      {
        props.pressure && <p className="weather__key">Pressure:
         <span className="weather__value"> { props.pressure } hPA</span>
        </p>
      }
      {
        props.humidity && <p className="weather__key">Humidity:
         <span className="weather__value"> { props.humidity } %</span>
        </p>
      }
      {
        props.description && <p className="weather__key">Conditions:
         <span className="weather__value"> { props.description }</span>
        </p>
      }
      {
        props.speed && <p className="weather__key">Wind Speed:
         <span className="weather__value"> { props.speed } km/h</span>
        </p>
      }
      {
        props.lat && <p className="weather__key">Latitude:
         <span className="weather__value"> { props.lat} N</span>
        </p>
      }
      {
        props.lon && <p className="weather__key">Longitude:
         <span className="weather__value"> { props.lon} E</span>
        </p>
      }
      {
        props.error && <p className="weather__key">
         <span>{ props.error }</span>
        </p>
      }
    </div>
  );

export default Weather;
