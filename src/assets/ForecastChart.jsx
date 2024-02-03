import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ForecastChart = () => {
    const chartRef = useRef();
    
    useEffect(() => {
        // Antes de crear una nueva instancia, destruir la existente si existe
        if (chartRef.current) {
            const chartInstance = chartRef.current.chart;
            if (chartInstance) {
                chartInstance.destroy();
            }
        }

        const ctx = chartRef.current.getContext('2d');
        const newChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
                datasets: [{
                    label: "Pronóstico del día",
                    data: [8, 11, 17, 19, 22, 21, 20, 18, 14, 12],
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
        

        // Guardar la instancia del gráfico en el ref para su posterior destrucción
        chartRef.current.chart = newChartInstance;

        // Limpiar la instancia del gráfico al desmontar el componente
        return () => {
            newChartInstance.destroy();
        };
    }, []);

    return (
        <canvas ref={chartRef} />
    );
}


export default ForecastChart;
