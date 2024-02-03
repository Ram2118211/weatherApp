import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ForecastChart2 = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'],
        datasets: [{
          label: "Pronostico del dia",
          data: [25, 24, 27, 22, 22, 21, 20, 18, 20, 25],
          borderColor: 'rgb(75,192,192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Destruir la instancia del gráfico anterior antes de crear uno nuevo
    return () => {
      newChartInstance.destroy();
    };
  }, []);

  return (
    <canvas ref={chartRef} />
  );
}

export default ForecastChart2       ;













