export const configForPieCart = (
    title: string, 
    forNews: string, 
    elementsName: string, 
    data: {name: string; y: number}[]) => {

    return {
        chart: {
            type: 'pie'
        },
        title: {
            text: title
        },
        subtitle: {
            text: `For news: "${forNews}"`,
            options: {
                align: 'left'
            }
            
        },
    
        accessibility: {
            enabled: false,
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },
    
        plotOptions: {
            pie: {
                borderRadius: 5,
                dataLabels: [{
                    enabled: true,
                    distance: 15,
                    format: '{point.name}'
                }, {
                    enabled: true,
                    distance: '-30%',
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 5
                    },
                    format: '{point.y:.1f}%',
                    style: {
                        fontSize: '0.9em',
                        textOutline: 'none'
                    }
                }]
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
                '<b>{point.y:.2f}%</b> of total<br/>'
        },
    
        series: [
            {
                name: elementsName,
                colorByPoint: true,
                data: data
            }
        ],
    }

}