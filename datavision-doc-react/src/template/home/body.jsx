
import barChartImage from "../../assets/bar-chart.png";
import stackedChartImage from "../../assets/stacked-chart.png";

import lineChartImage from "../../assets/line-chart.png";
import mixedChartImage from "../../assets/mixed-chart.png";
import pieChartImage from "../../assets/pie-chart.png";

import scatterPlotImage from "../../assets/scatter-plot.png";
import bubbleChartImage from "../../assets/bubble-chart.png";


import doughnutChartImage from "../../assets/doughnut-chart.png";



const ChartCard = ({href, name, imgSrc}) => {

    return (
        <a href={href} className="chart-card">
            <img src={imgSrc} alt={name} />
            <div className="container">
                <h4>{name}</h4>
            </div>
        </a>
    );
};

const Body = () => {

    return (
        <div className="site-body">
            <section className="body-section">
                <div className="section-title">
                    <span>Charts</span>
                </div>

                <div className="chart-container">
                    <ChartCard href="/docs/bar" name="Bar Chart" imgSrc={barChartImage} />
                    <ChartCard href="/docs/bar" name="Stacked Chart" imgSrc={stackedChartImage} />
                    <ChartCard href="/docs/line" name="Line Chart" imgSrc={lineChartImage} />
                    <ChartCard href="/docs/pie" name="Pie Chart" imgSrc={pieChartImage} />
                    <ChartCard href="/docs/pie" name="Doughnut Chart" imgSrc={doughnutChartImage} />
                    <ChartCard href="/docs/scatter" name="Scatter Plot" imgSrc={scatterPlotImage} />
                    <ChartCard href="/docs/scatter" name="Bubble Chart" imgSrc={bubbleChartImage} />
                    <ChartCard href="/docs/mixed" name="Mixed Chart" imgSrc={mixedChartImage} />

                </div>
            </section>

            <section className="body-section">
                <div className="home-footer">DATAVISION.JS is free to use under the <a href="">MIT License</a></div>
            </section>
        </div>
    );
};
    
export default Body;