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

    series: [{
      name: 'Extraction/Construction',
      data: [
        [.412, 69.6, 225832]
        ],
    }, {
      name: 'Manufacturing',
      data: [
        [.345, 100.8, 125344]
        ],
    }, {
      name: 'Wholesalers',
      data: [
        [.256, 103.2, 67055]
        ],
    }, {
      name: 'Retailers',
      data: [
        [.733, 58, 385460]
        ],
    }, {
      name: 'Transportation & Utilities',
      data: [
        [.398, 65.7, 284100]
        ],
    }, {
      name: 'Information',
      data: [
        [.347, 159.3, 174313]
        ],
    }, {
      name: 'Financial',
      data: [
        [.188, 221.1, 372692]
        ],
    }, {
      name: 'Professional',
      data: [
        [.319, 142.5, 718395]
        ],
    }, {
      name: 'Education/Health/Human Svcs',
      data: [
        [.508, 79.6, 1191410]
        ],
    }, {
      name: 'Entertainment Svcs',
      data: [
        [.795, 55.5, 444722]
        ],
    }, {
      name: 'Other Svcs',
      data: [
        [.663, 57.4, 219673]
        ],
    }, {
      name: 'International Affairs',
      data: [
        [.168, 99.9, 167825]
        ],
    }
    ]

});
