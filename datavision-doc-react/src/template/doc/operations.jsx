import Editor from "./ace-editor";

const OperationsPage = () => {
  
    return (
        <>
            <h1>Datavision.js Operations</h1>

            <p className="doc-description">
                The operation attribute in Datavision.js is a powerful tool that allows you to specify aggregation functions for your data, such as <b>sum</b>, <b>avg</b> (average), <b>min</b> (minimum), <b>max</b> (maximum), and <b>count</b>. This attribute can be particularly useful when working with datasets that contain multiple data points for each category and you want to visualize a summary statistic.
            </p>

            <p className="doc-description">
            For instance, if you have a dataset representing sales data for each day of the week, and you want to display the average sales per day in a bar chart, you can utilize the operation: 'avg' attribute within your data configuration.
            </p>

            <p>Here's an expanded explanation:</p>
           
            <div>
                <Editor value={`
                // Example code demonstrating the use of the operation attribute in Datavision.js
                const data = [{
                  values: sales,          // Array of sales figures for each day
                  labels: daysOfWeek,     // Array of day labels
                  type: 'bar',            // Type of chart (bar chart in this case)
                  operation: 'avg'        // Aggregation function to compute the average sales
                }];
                `}/>

            </div>

            <p>
                <ul className="doc-list">
                    <li><b>values</b> represent the numerical data points (sales figures).</li>
                    <li><b>labels</b> represent the corresponding labels for each data point (days of the week).</li>
                    <li><b>type</b> specifies the type of chart to be created (in this case, a bar chart).</li>
                    <li><b>operation</b> is an optional attribute that defines the aggregation function to be applied to the data. If not specified, sum is used by default. In this case, we're using avg to compute the average sales.</li>
                </ul>
            </p>

        </>
    );
};
    
export default OperationsPage;