fetch('data_v1.csv')
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
        zoomType: 'xy'
      },

      title: {
        text: 'Bubble Chart from CSV'
      },

      xAxis: {
        title: { text: 'X Axis' }
      },

      yAxis: {
        title: { text: 'Y Axis' }
      },

      tooltip: {
        pointFormat: '<b>{point.name}</b><br>X: {point.x}, Y: {point.y}, Size: {point.z}'
      },

      series: series
    });
  });
