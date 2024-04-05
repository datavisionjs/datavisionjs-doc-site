import ChartDisplaySection from "./chart-display-section";

const PiePage = () => {

    const productCategories = ["Electronics", "Clothing", "Home Goods", "Books", "Toys"];
    const salesDistribution = [30, 25, 20, 15, 10]; // Sales percentage for each category
    
    //variable for line chart
    const pieChartData = [
        {
            values: salesDistribution,
            labels: productCategories,
            type: "pie"
        }
    ];
    const pieChartLayout = {title: "Datavision.js Pie Chart"};

    //varibale for multi line chart 
    const doughnutChartData = [
        {
            values: salesDistribution,
            labels: productCategories,
            type: "pie",
            hole: .8
        }
    ];

    const doughnutChartLayout = {title: "Datavision.js Doughnut Chart"};
  
    return (
        <>
            <h1>Pie Charts in Datavsion.js</h1>

            <p className="doc-description">How to make pie charts in Datavision.js? Examples of pie and doughnut  charts. </p>
           
            <div>
                <ChartDisplaySection
                    id="pie-chart"
                    title="Pie Chart"
                    penValue="oNOpbWx"
                    data={pieChartData}
                    layout={pieChartLayout}
                    editorValue={`
                    const productCategories = ["Electronics", "Clothing", "Home Goods", "Books", "Toys"];
                    const salesDistribution = [30, 25, 20, 15, 10]; // Sales percentage for each category


                    // Define Data
                    const data = [
                    {
                        values: salesDistribution, 
                        labels: productCategories, 
                        type: "pie",
                    }
                    ]; 

                    //Define Layout
                    const layout = {title: "-"};

                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);
                    `}
                    
                />

                <ChartDisplaySection
                    id="doughnut-chart"
                    title="Doughnut Chart"
                    penValue="mdgpVWm"
                    data={doughnutChartData}
                    layout={doughnutChartLayout}
                    editorValue={`
                    const productCategories = ["Electronics", "Clothing", "Home Goods", "Books", "Toys"];
                    const salesDistribution = [30, 25, 20, 15, 10]; // Sales percentage for each category


                    // Define Data
                    const data = [
                    {
                        values: salesDistribution, 
                        labels: productCategories, 
                        type: "pie",
                        hole: .8
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
    
export default PiePage;