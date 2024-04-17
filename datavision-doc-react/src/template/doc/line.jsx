import ChartDisplaySection from "./chart-display-section";

const LinePage = () => {

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const temperatureLondon = [12, 13, 14, 15, 16, 17, 14]; // Temperatures in Celsius

    const temperatureNewYork = [10, 11, 12, 13, 14, 15, 13]; // Temperatures in Celsius

    const temperatureTokyo = [15, 16, 17, 18, 19, 20, 19]; // Temperatures in Celsius

    //variable for line chart
    const lineChartData = [
        {
            values: temperatureLondon,
            labels: daysOfWeek,
            type: "line"
        }
    ];
    const lineChartLayout = {
        title: "Datavision.js Line Chart",
        xAxis: {title: "Days"},
        yAxis: {title: "Temperature"},
    };

    //variable for line and scatter plot
    const lineScatterPlotData = [
        {
            values: temperatureLondon,
            labels: daysOfWeek,
            type: "line",
            mode: "scatter"
        }
    ];
    const lineScatterPlotLayout = {
        title: "Datavision.js Line and Scatter Plot",
        xAxis: {title: "Days"},
        yAxis: {title: "Temperature"},
    };

    //varibale for multi line chart 
    const multiLineChartData = [
        {
            values: temperatureLondon,
            labels: daysOfWeek,
            type: "line",
            name: "London"
        },{
            values: temperatureNewYork,
            labels: daysOfWeek,
            type: "line",
            name: "New York"
        },{
            values: temperatureTokyo,
            labels: daysOfWeek,
            type: "line",
            name: "Tokyo"
        }
    ];
    const multiLineChartLayout = {
        title: "Datavision.js Multi Line Chart",
        xAxis: {title: "Days"},
        yAxis: {title: "Temperature"},

    };
  
    return (
        <>
            <h1>Line Charts in Datavsion.js</h1>

            <p className="doc-description">How to make line charts in Datavision.js? Examples of sigle, scatter and multi line  charts. </p>
           
            <div>
                <ChartDisplaySection
                    id="line-chart"
                    title="Line Chart"
                    penValue="ZEZvbVj"
                    data={lineChartData}
                    layout={lineChartLayout}
                    editorValue={`
                    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    const temperatureLondon = [12, 13, 14, 15, 16, 17, 14]; // Temperatures in Celsius

                    // Define Data
                    const data = [
                    {
                        values: temperatureLondon, 
                        labels: daysOfWeek, 
                        type: "line",
                    }
                    ]; 

                    //Define Layout
                    const layout = {
                        title: "-",
                        xAxis: {title: "Days"},
                        yAxis: {title: "Temperature"},
                    };

                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);
                    `}
                    
                />

                <ChartDisplaySection
                    id="line-scatter-chart"
                    title="Line and Scatter Plot"
                    penValue="ExJeOLx"
                    data={lineScatterPlotData}
                    layout={lineScatterPlotLayout}
                    editorValue={`
                    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    const temperatureLondon = [12, 13, 14, 15, 16, 17, 14]; // Temperatures in Celsius

                    // Define Data
                    const data = [
                    {
                        values: temperatureLondon, 
                        labels: daysOfWeek, 
                        type: "line",
                        mode: "scatter"
                    }
                    ]; 

                    //Define Layout
                    const layout = {
                        title: "-",
                        xAxis: {title: "Days"},
                        yAxis: {title: "Temperature"},
                    };

                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);
                    `}
                    
                />

                <ChartDisplaySection
                    id="multi-line-chart"
                    title="Multi Line Chart"
                    penValue="dyLJGyY"
                    data={multiLineChartData}
                    layout={multiLineChartLayout}
                    editorValue={`
                    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

                    const temperatureLondon = [12, 13, 14, 15, 16, 17, 14]; // Temperatures in Celsius

                    const temperatureNewYork = [10, 11, 12, 13, 14, 15, 13]; // Temperatures in Celsius

                    const temperatureTokyo = [15, 16, 17, 18, 19, 20, 19]; // Temperatures in Celsius

                    // Define Data
                    const data = [
                        {
                            values: temperatureLondon,
                            labels: daysOfWeek,
                            type: "line",
                            name: "London"
                        },{
                            values: temperatureNewYork,
                            labels: daysOfWeek,
                            type: "line",
                            name: "New York"
                        },{
                            values: temperatureTokyo,
                            labels: daysOfWeek,
                            type: "line",
                            name: "Tokyo"
                        }
                    ]; 

                    //Define Layout
                    const layout = {
                        title: "-",
                        xAxis: {title: "Days"},
                        yAxis: {title: "Temperature"},
                    };

                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);
                    `}
                    
                />
            </div>
        </>
    );
};
    
export default LinePage;