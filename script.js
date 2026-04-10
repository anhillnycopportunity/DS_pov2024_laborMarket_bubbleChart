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
        data: [
            { x: .412, y: 69.6, z: 225832, name: 'Extraction/Construction'},
            { x: .345, y: 100.8, z: 125344, name: 'Manufacturing'},
            { x: .256, y: 103.2, z: 67055, name: 'Wholesalers'},
            { x: .733, y: 58, z: 385460, name: 'Retailers'},
            { x: .398, y: 65.7, z: 284100, name: 'Transportation & Utilities'},
            { x: .347, y: 159.3, z: 174313, name: 'Information'},
            { x: .188, y: 221.1, z: 372692, name: 'Financial'},
            { x: .319, y: 142.5, z: 718395, name: 'Professional'},
            { x: .508, y: 79.6, z: 1191410, name: 'Education/Health/Human Svcs'},
            { x: .795, y: 55.5, z: 444722, name: 'Entertainment Svcs'},
            { x: .663, y: 57.4, z: 219673, name: 'Other Svcs'},
            { x: .168, y: 99.9, z: 167825, name: 'International Affairs'}
        ],
        colorByPoint: true
    }]

});
