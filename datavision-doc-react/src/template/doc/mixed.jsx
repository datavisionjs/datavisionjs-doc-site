import ChartDisplaySection from "./chart-display-section";

const MixedPage = () => {

    const months = ["January", "February", "March", "April", "May", "June"];
    const sales = [100, 120, 150, 180, 200, 220]; // Sales Revenue
    const orders = [40, 60, 85, 100, 110, 120]; //Number of orders


    
    //variable for line chart
    const mixedChartData = [
        {
            values: orders,
            labels: months,
            type: "bar",
            name: "Orders"
        },{
            values: sales,
            labels: months,
            type: "line",
            mode: "scatter",
            name: "Sales"
        }
    ];
    const mixedChartLayout = {
        title: "Datavision.js Mixed Chart",
        xAxis: {title: "Months"},
    };
  
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
                    const months = ["January", "February", "March", "April", "May", "June"];
                    const sales = [100, 120, 150, 180, 200, 220]; // Sales Revenue
                    const orders = [40, 60, 85, 100, 110, 120]; //Number of orders


                    // Define Data
                    const data = [
                    {
                        values: orders,
                        labels: months,
                        type: "bar",
                        name: "Orders"
                    },{
                        values: sales,
                        labels: months,
                        type: "line",
                        mode: "scatter",
                        name: "Sales"
                        }
                    ]; 

                    //Define Layout
                    const layout = {
                        title: "-",
                        xAxis: {title: "Months"}
                    };

                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);

                    `}
                    
                />

            </div>
        </>
    );
};
    
export default MixedPage;