import ChartDisplaySection from "./chart-display-section";

const ScatterPage = () => {

    const studyTime = [1, 2, 3, 4, 5, 6, 7]; // Hours spent studying
    const testScores = [50, 55, 60, 65, 70, 75, 80]; // Corresponding test scores
    
    const sales = [500, 400, 300, 200, 100]; //sales in USD
    const category = ["Electronics", "Clothing", "Home Goods", "Books", "Toys"]; //different product categories

    
    //variable for line chart
    const scatterChartData = [
        {
            values: studyTime,
            labels: testScores,
            type: "scatter",
            design: {
                size: 5
            }
        }
    ];
    const scatterChartLayout = {
        title: "Datavision.js Scatter Chart",
        xAxis: {title: "Test Scores"},
        yAxis: {title: "Study Time (hr)"}
    };

    //varibale for multi line chart 
    const bubbleChartData = [
        {
            values: sales,
            labels: category,
            type: "bubble",
            design: {
                color: ["red", "green", "blue", "orange", "purple"],
                text: "% Market Share",
                size: [30, 25, 20, 15, 10]
            }
        }
    ];

    const bubbleChartLayout = {
        title: "Datavision.js Bubble Chart", 
        xAxis: {title: "Category"},
        yAxis: {title: "Sales (USD)"}
    };
  
    return (
        <>
            <h1>Scatter Plots in Datavsion.js</h1>

            <p className="doc-description">How to make scatter plots in Datavision.js? Examples of scatter plot and bubble chart. </p>
           
            <div>
                <ChartDisplaySection
                    id="scatter-chart"
                    title="Scatter Plot"
                    penValue="YzMYwaV"
                    data={scatterChartData}
                    layout={scatterChartLayout}
                    editorValue={`
                    const studyTime = [1, 2, 3, 4, 5, 6, 7]; // Hours spent studying
                    const testScores = [50, 55, 60, 65, 70, 75, 80]; // Corresponding test scores


                    // Define Data
                    const data = [
                    {
                        values: studyTime, 
                        labels: testScores, 
                        type: "scatter",
                        design: {
                            size: 5
                        }
                    }
                    ]; 

                    //Define Layout
                    const layout = {
                        title: "-",
                        xAxis: {title: "Test Scores"},
                        yAxis: {title: "Study Time (hr)"}
                    };

                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);
                    `}
                    
                />

                <ChartDisplaySection
                    id="bubble-chart"
                    title="Bubble Chart"
                    penValue="bGJaEmx"
                    data={bubbleChartData}
                    layout={bubbleChartLayout}
                    editorValue={`
                    const sales = [500, 400, 300, 200, 100]; //sales in USD
                    const category = ["Electronics", "Clothing", "Home Goods", "Books", "Toys"]; //different product categories


                    // Define Data
                    const data = [
                    {
                        values: sales,
                        labels: category,
                        type: "bubble",
                        design: {
                            color: ["red", "green", "blue", "orange", "purple"],
                            text: "% Market Share",
                            size: [30, 25, 20, 15, 10]
                        }
                    }
                    ]; 

                    //Define Layout
                    const layout = {
                        title: "-",
                        xAxis: {title: "Category"},
                        yAxis: {title: "Sales (USD)"}
                    };

                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);
                    `}
                    
                />
            </div>
        </>
    );
};
    
export default ScatterPage;