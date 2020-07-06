import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { setColor, hexToRGB } from '../../FunctionLibrary';

export default function StatisticDiagram({ events }) {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});
  const [finances, setFinances] = useState(events);

  useEffect(() => {
    setFinances(events.filter(fin => fin.method === 'outcome'))
    let options = {
      maintainAspectRation: true,
      legend: {
        display: true,
        position: "bottom",
        align: "start",
        labels: {
          boxWidth: 20,
          usePointStyle: true
        }
      },
    }
    setOptions(options);
  }, [events])

  useEffect(() => {
    let totalOutcomeSum = 0;
    let dataChart = {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1
      }]
    };

    let reducedArr = finances.reduce((prev, curr) => {
      totalOutcomeSum += +curr.sum;
      let count = prev.get(curr.tag) || 0;
      prev.set(curr.tag, +curr.sum + +count);
      return prev;
    }, new Map());

    if (reducedArr.size === 0) {
      return setData({
        labels: ['No data'],
        datasets: [{
          data: [100],
          backgroundColor: [hexToRGB('#686868', 0.4)],
          borderColor: [hexToRGB('#686868', 1)],
          borderWidth: 1
        }]
      })
    }

    [...reducedArr].map(([tag, sum]) => {
      let background = setColor(tag);

      dataChart.labels.push(`${tag} ${sum.toFixed(0)}₽`);
      dataChart.datasets[0].backgroundColor.push(hexToRGB(background, 0.4));
      dataChart.datasets[0].borderColor.push(hexToRGB(background, 1));
      dataChart.datasets[0].data.push(percented(+sum, totalOutcomeSum))

      return { tag, sum, background };
    });

    setData(dataChart);
  }, [finances])

  const percented = (sum, totalSum) => {
    return (sum * 100 / totalSum).toFixed(2)
  }

  return (
    <div className="card">
      <Doughnut height={300} data={data} options={options} />
    </div>
  )
}
