  // --- 1 + 2: Parse CSV and build series ---
  function csvToSeries(csv) {
    const [headerLine, ...lines] = csv.trim().split('\n');
    const headers = headerLine.split(',').map(h => h.trim());

    const grouped = {};

    lines.forEach(line => {
      if (!line.trim()) return;

      const values = line.split(',');
      const row = {};

      headers.forEach((h, i) => {
        row[h] = values[i]?.trim();
      });

      const seriesName = row.series;

      if (!grouped[seriesName]) {
        grouped[seriesName] = [];
      }

      grouped[seriesName].push({
        x: Number(row.x),
        y: Number(row.y),
        z: Number(row.z),
        color: row.color,
        note: row.note
      });
    });

    return Object.keys(grouped).map(name => ({
      name,
      data: grouped[name]
    }));
  }

  // --- 3: Load CSV from file ---
  fetch('data.csv')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load data.csv');
      }
      return response.text();
    })
    .then(csv => {
      const series = csvToSeries(csv);

// --- 4: Create chart ---
        
Highcharts.chart('container', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zooming: {
            type: 'xy'
        }
    },

    legend: {
        enabled: true
    },

    title: {
        text: 'Test: Representation, industry, wages, job quality...'
    },

    subtitle: {
        text: 'Source: Census Bureau 2024 American Community Survey Public Use Microdata, as Modified by NYC Opportunity'
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
        pointFormat: '<tr><th colspan="2"><h3>{series.name}</h3></th></tr>' +
            '<tr><th>Ratio PT/FT:</th><td>{point.x}</td></tr>' +
            '<tr><th>Percent CW:</th><td>{point.y}%</td></tr>' +
            '<tr><th>Workers (Count):</th><td>{point.z}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: series
    },

});
