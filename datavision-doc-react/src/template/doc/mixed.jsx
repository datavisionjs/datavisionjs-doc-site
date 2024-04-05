import ChartDisplaySection from "./chart-display-section";

const MixedPage = () => {

    const dates = ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05"];
    const stockPrices = [45, 70, 110, 70, 60]; // Stock prices for each corresponding date

    
    //variable for line chart
    const mixedChartData = [
        {
            values: stockPrices,
            labels: dates,
            type: "bar"
        },{
            values: stockPrices,
            labels: dates,
            type: "line"
        }
    ];
    const mixedChartLayout = {title: "Datavision.js Mixed Chart"};
  
    return (
        <>
            <h1>Mixed Charts in Datavsion.js</h1>

            <p className="doc-description">How to make mixed charts in Datavision.js? Examples of mixed bar and line charts. </p>
           
            <div>
                <ChartDisplaySection
                    id="mixed-chart"
                    title="Mixed Chart"
                    penValue="oNOpxYo"
                    data={mixedChartData}
                    layout={mixedChartLayout}
                    editorValue={`
                    const dates = ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05"];
                    const stockPrices = [45, 70, 110, 70, 60]; // Stock prices for each corresponding date


                    // Define Data
                    const data = [
                    {
                        values: stockPrices,
                        labels: dates,
                        type: "bar"
                    },{
                        values: stockPrices,
                        labels: dates,
                        type: "line"
                        }
                    ]; 

                    //Define Layout
                    const layout = {title: "-"};

                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);

                    `}
                    
                />

            </div>
        </>
    );
};
    
export default MixedPage;