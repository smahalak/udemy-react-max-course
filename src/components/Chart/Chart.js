import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //this just takes the dataPoints objects from ExpenseChart.js into numbers
    const totalMaximum = Math.max(...dataPointValues);
    //.max needs arguments that are numbers 1, 2, 3 so then it returns the biggest number 

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label} //label will be for the months
                />
            ))}
        </div>
    );
};

export default Chart;