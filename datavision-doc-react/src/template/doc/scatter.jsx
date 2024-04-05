import ChartDisplaySection from "./chart-display-section";

const ScatterPage = () => {

    const studyTime = [1, 2, 3, 4, 5, 6, 7]; // Hours spent studying
    const testScores = [50, 55, 60, 65, 70, 75, 80]; // Corresponding test scores
    
    //variable for line chart
    const scatterChartData = [
        {
            values: studyTime,
            labels: testScores,
            type: "scatter"
        }
    ];
    const scatterChartLayout = {title: "Datavision.js Scatter Chart"};

    //varibale for multi line chart 
    const bubbleChartData = [
        {
            values: studyTime,
            labels: testScores,
            type: "scatter",
            design: {
                color: ["red", "green", "blue", "orange", "purple", "yellow", "cyan"],
                size: [20, 10, 16, 9, 3, 15, 12]
            }
        }
    ];

    const bubbleChartLayout = {title: "Datavision.js Bubble Chart"};
  
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
                    }
                    ]; 

                    //Define Layout
                    const layout = {title: "-"};

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
                    const studyTime = [1, 2, 3, 4, 5, 6, 7]; // Hours spent studying
                    const testScores = [50, 55, 60, 65, 70, 75, 80]; // Corresponding test scores


                    // Define Data
                    const data = [
                    {
                        values: studyTime, 
                        labels: testScores, 
                        type: "scatter",
                        design: {
                        color: ["red", "green", "blue", "orange", "purple", "yellow", "cyan"],
                        size: [20, 10, 16, 9, 3, 15, 12]
                        }
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
    
export default ScatterPage;