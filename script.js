fetch('data.csv')
  .then(response => response.text())
  .then(csv => {
    const lines = csv.split('\n').slice(1); // skip header

    const seriesMap = {};

    lines.forEach(line => {
      if (!line.trim()) return;

      const [series, name, x, y, z] = line.split(',');

      if (!seriesMap[series]) {
        seriesMap[series] = [];
      }

      seriesMap[series].push({
        name: name,
        x: parseFloat(x),
        y: parseFloat(y),
        z: parseFloat(z)
      });
    });

    const series = Object.keys(seriesMap).map(key => ({
      name: key,
      data: seriesMap[key]
    }));

    Highcharts.chart('container', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zooming: {
            type: 'xy'
        }
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Test: Representation, industry, wages, job quality...'
    },

    subtitle: {
        text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
    },

    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.name}, Ratio PT/FT: {point.x}, ' +
                'Percent CW Median Income: {point.y}%, Count Workers: {point.z}%.'
        }
    },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Ratio of Part-Time to Full-Time Workers'
        },
        labels: {
            format: '{value}'
        },
        plotLines: [{
            dashStyle: 'dot',
            width: 2,
            value: .5,
            label: {
                rotation: 0,
                y: 50,
                style: {
                    fontStyle: 'italic'
                },
                text: 'Ratio Part-time Full-time'
            },
            zIndex: 3
        }],
        accessibility: {
            rangeDescription: 'Range: tbd.'
        }
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Percent Industry Median to Citywide Median Wage'
        },
        labels: {
            format: '{value}%'
        },
        maxPadding: .1,
        plotLines: [{
            dashStyle: 'dot',
            width: 2,
            value: 100,
            label: {
                align: 'right',
                style: {
                    fontStyle: 'italic'
                },
                text: 'Equal to Citywide Median Wage',
                x: 0.5
            },
            zIndex: 3
        }],
        accessibility: {
            rangeDescription: 'Range: tbd.'
        }
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
            '<tr><th>Ratio PT/FT:</th><td>{point.x}</td></tr>' +
            '<tr><th>Percent CW:</th><td>{point.y}%</td></tr>' +
            '<tr><th>Workers (Count):</th><td>{point.z}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: false,
                format: '{point.name}'
            }
        }
    },

    series: series

});
