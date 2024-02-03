import React, { useEffect } from 'react';
import { useState } from 'react';
import ForecastChart from './assets/ForecastChart';
import ForecastChart2 from './assets/ForecastChart2';

//mport { getCountries } from './services/getCountries';
//import { ajax } from './services/ajax';

function App() {
  const [ciudad, setCiudad] = useState('Puebla');
  const [lat, setLat] = useState(0);//Variable de estado
  const [lon, setLon] = useState(0);//Variable de estado
  const [weather, setWeather] = useState(0);
  const apiKey = 'f57169e1b98ac6e009d7dd1df6b3d3e0';

  const getGeocodingData = async (ciudad, pais, limite) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&limit=5&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCiudad(data[0].name);
      setLat(data[0].lat);
      setLon(data[0].lon);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeatherData = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data.main); // Establece los datos del clima en el estado weather
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(async() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://restcountries.com/v3.1/all"
  //   };
  //   (async () => {
  //     const countries = await ajax(options)
  //   })();

  // }, []);

  // const [countries, setCountries] = useState([])
  // useEffect(() => {
  //   (async () => {
  //     setCountries(await getCountries());
  //   })
  // }, []);
  // console.log(countries)

  useEffect(() => {
    getGeocodingData('Puebla', 'MX', 2);
    getWeatherData(lat, lon);

    //return () =>{
    // second
    //}
    // Especifica las dependencias correctamente o elimínalas si no son necesarias
  }, []);

  return (
    <>
      <div className='row'>

        <div className='col-xs-12 col-md-12 col-lg-12'>
          <div className="card card-widget widget-user">
            <div className="widget-user-header bg-info">
              <h3 className="widget-user-username">Ubicación: {ciudad}</h3>
              <h5 className="widget-user-desc">PRONÓSTICO</h5>
            </div>
            <div className="widget-user-image">
              <img className="img-circle img-fluid p-3 elevation-2" src="./public/dist/img/Estaciones/Nubosidad.png" alt="Nubosidad" />
            </div>
            <div className="card-footer">
              <div className='row'>
                <div className='col-sm-3 border-right'>
                  <div className='description-block'>
                    <h3 className='description-header'>Jueves</h3>
                    <span className='description-text'>Nublado</span>
                  </div>
                </div>
                <div className='col-sm-3 border-right'>
                  <div className='description-block'>
                    <h1 className='description-header align-text-center'>{weather.temp}°K</h1>
                    <span className='description-text'>Despejado</span>
                    <p className='description'>Sensacion real: {weather.temp_min}</p>
                  </div>
                </div>
                <div className='col-sm-3 border-right'>
                  <div className='description-block'>
                    <h3 className='description-header'>ECA</h3>
                    <span className='description-text'>22</span>
                    <p className='description-text'>Humedad: {weather.humidity}%</p>
                  </div>
                </div>
                <div className='col-sm-3 border-right'>
                  <div className='description-block'>
                    <h3 className='description-header'>ECA</h3>
                    <span className='description-text'>22</span>
                    <p className='description-text'>Viento: {weather.speed}km/h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center' >
          <div className='col-xs-12 col-md-5 mb-3 '>
            <div className="card card-primary justify-content-center">
              <div className="card-header">
                <h3 className="card-title">Pronóstico del día</h3>
              </div>
              <div className="card-body">
                <div className="chart">
                  <ForecastChart />
                  <canvas id="areaChart1" style={{ minHeight: '250px', height: '250px', maxWidth: '100%', display: 'block', width: '100%' }}></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-md-5 mb-3 '>
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Pronóstico de la Semana</h3>
              </div>
              <div className="card-body">
                <div className="chart">
                  <ForecastChart2 />
                  <canvas id="areaChart2" style={{ minHeight: '250px', height: '230px', maxWidth: '100%', display: 'block', width: '100%' }}></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="card-body">
            <div className='card-header-title'>Noticias:</div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="image-container">
                    <img class="d-block w-100" src="https://www.debate.com.mx/__export/1706914438488/sites/debate/img/2024/02/02/clima_tijuaba_y_bc_5.jpg_172596871.jpg" sizes='(max-width: 1024px) 100vw, 1024px' style={{width: '800px', height: 'auto'}} alt="Frente frio en Tijuana" />
                    <div class="overlay"></div>
                    <div class="carousel-caption">
                      <h3>Frente frio en Tijuana</h3>
                      <p>Conoce el pronostico del clima de este FIN DE SEMANA para Tijuana, Mexicali, Rosarito, Tecate y otras localidades de Baja California</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="image-container">
                    <img class="d-block w-100" src="https://cdn.unotv.com/images/2023/12/frio-clima-mexico-211242-1024x576.jpg" alt="Clima de hoy" />
                    <div class="overlay"></div>
                    <div class="carousel-caption">
                      <h3>Clima Mexico</h3>
                      <p>Quinta tormenta invernal y frente frío 32 dejarán lluvias fuertes, heladas y caída de nieve en estos estados.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="image-container">
                    <img class="d-block w-100" src="https://www.elsoldehidalgo.com.mx/local/db4dvb-afectaran-a-hidalgo-lla-quinta-tormenta-invernal-y-el-frente-frio-32-clima-para-el-finde/alternates/LANDSCAPE_768/%C2%BFAfectar%C3%A1n%20a%20Hidalgo%20lla%20quinta%20tormenta%20invernal%20y%20el%20frente%20fr%C3%ADo%2032-%20Clima%20para%20el%20finde" alt="Third slide" />
                    <div class="overlay"></div>
                    <div class="carousel-caption">
                      <h3>Frio para Hidalgo</h3>
                      <p>¿Afectarán a Hidalgo la quinta tormenta invernal y el frente frío 32? Clima para el finde .</p>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-custom-icon" aria-hidden="true">
                  <i class="fas fa-chevron-left"></i>
                </span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-custom-icon" aria-hidden="true">
                  <i class="fas fa-chevron-right"></i>
                </span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;