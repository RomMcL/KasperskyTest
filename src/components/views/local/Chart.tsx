import { FC } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { configForPieCart } from '../../../utils/charts-config';

import { IData_TrafficItem } from '../../../types/news';


interface ComponentProps {
    news: string;
    traffic: IData_TrafficItem[];
}    


const Chart: FC<ComponentProps> = (props) => {

    const {  news, traffic } = props;

    const creatingDataTopTrafficPie = (traffic: IData_TrafficItem[]) => {
        const data: {name: string; y: number}[] = [];
        let sumTopTraffic: number = 0;

        traffic.forEach((item) => {
            const newItem: {
                name: string; 
                y: number;
                value?: string; 
                count?: number;
            } = { ...item, name: item.value, y: item.count };
            
            delete newItem.value;
            delete newItem.count;
            newItem.y *= 100;
            data.push(newItem);
            sumTopTraffic += newItem.y;
        });

        const otherItem: {name: string; y: number} = {
            name: 'Other', 
            y: 100 - sumTopTraffic
        };
        data.push(otherItem);

        return data;
    }

  return (
    <>
        <HighchartsReact 
            highcharts={Highcharts} 
            options={configForPieCart(
                'Top Traffic', 
                news, 
                'Traffic', 
                creatingDataTopTrafficPie(traffic)
            )}
        />
    </>
  )
}

export default Chart;
