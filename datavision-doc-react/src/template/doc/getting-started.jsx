
import ChartDisplaySection from "./chart-display-section";
import Editor from "./ace-editor";

const GettingStartedPage = () => {

    const products = ["Product A", "Product B", "Product C", "Product D"];
    const sales = [1200, 900, 1500, 810]; // Sales figures for each product


    //variable for bar chart
    const barChartData = [
        {
            values: sales,
            labels: products,
            type: "bar",
            operation: "sum",
            design: {
                color: "#4169e185"
            }
        }
    ];
    const barChartLayout = {title: "Datavision.js Create Chart"};
  
    return (
        <>
            <h1>Getting Started with Datavision.js</h1>

            <p className="doc-description">Want to get started with Datavision.js? Here is how to create a chart.</p>
           
            <div>
                <ChartDisplaySection
                    id="bar-chart"
                    title="Create Chart"
                    penValue="KKYZBby"
                    data={barChartData}
                    layout={barChartLayout}
                    editorValue={`
                    <head>
                        <script src="https://djwe937twmucp.cloudfront.net/datavision.min.js"></script>
                    </head>

                    <body>
                        <div id="my-chart" style="width:100%"></div>
                    </body>

                    <script>
                        const products = ["Product A", "Product B", "Product C", "Product D"];
                        const sales = [1200, 900, 1500, 810]; // Sales figures for each product

                        // Define Data
                        const data = [
                        {
                            values: sales,
                            labels: products,
                            type: "bar",
                            operation: "sum",
                            design: {
                                color: "#4169e185"
                            }
                            }
                        ]; 

                        //Define Layout
                        const layout = {title: "Datavision.js Create Chart"};

                        const chart = new DataVision("my-chart");
                        chart.plot(data, layout);
                    </script>
     
                    `}
                    
                />
            </div>

            <p className="doc-description">Here's a breakdown of the code:</p>
            
            <hr />

            <div>
                <Editor value={`
                    <head>
                        <script src="https://djwe937twmucp.cloudfront.net/datavision.min.js"></script>
                    </head>
                `}/>

            </div>

            <p className="doc-description">The head section of the code includes Datavision.js Library.</p>
            
            <hr />

            <div>
                <Editor value={`
                    <body>
                        <div id="my-chart" style="width:100%"></div>
                    </body>
                `}/>

            </div>

            <p className="doc-description">The '&lt;div&gt;' element with the ID 'my-chart' in the body section will display the generated chart.</p>
            
            <hr />

            <div>
                <Editor value={`
                const data = [
                {
                    values: sales,
                    labels: products,
                    type: "bar",
                    operation: "sum",
                    design: {
                        color: "#4169e185"
                    }
                    }
                ]; 

                //Define Layout
                const layout = {title: "Datavision.js Create Chart"};
                `}/>

            </div>

            <p className="doc-description"> 
                <b>const data</b> is an array containing an object representing the data to be plotted.
                <ul className="doc-list">
                    <li><b>values</b> represent the numerical data points (sales figures).</li>
                    <li><b>labels</b> represent the corresponding labels for each data point (Products).</li>
                    <li><b>type</b> specifies the type of chart to be created (bar, line, pie, doughnut, etc.).</li>
                    <li><b>operation</b> is an optional attribute that defines the aggregation function to be applied to the data. If not specified, sum is used by default. </li>
                </ul>
                <b>const layout</b> is an object defining the layout options for the chart. In this case, it includes a title.
            </p>

            
            <hr />

            <div>
                <Editor value={`
                const chart = new DataVision("my-chart");
                chart.plot(data, layout);
                `}/>

            </div>

            <p className="doc-description"> 
                <b>const chart</b> creates a new instance of the DataVision class, passing in the ID of the '&lt;div&gt;' element where the chart will be rendered ("my-chart").
            </p>
            <p>
                <b>chart.plot(data, layout)</b> plots the chart using the provided data and layout options.
            </p>




        </>
    );
};
    
export default GettingStartedPage;