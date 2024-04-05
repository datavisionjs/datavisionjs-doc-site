
import ChartDisplaySection from "./chart-display-section";

const BarPage = () => {

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


    //variable for bar chart
    const barChartData = [
        {
            values: [120, 150, 180, 200, 190],
            labels: daysOfWeek,
            type: "bar"
        }
    ];
    const barChartLayout = {title: "Datavision.js Bar Chart"};

    //variable for horizontal bar chart
    const hrBarChartData = [
        {
            values: daysOfWeek,
            labels: [120, 150, 180, 200, 190],
            type: "bar",
            direction: "hr"
        }
    ];
    const hrBarChartLayout = {title: "Datavision.js Horizontal Bar Chart"};


    const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
    const quarter1 = [100, 150, 200, 250]; // Revenue for Category 1, 2, 3, 4 respectively
    const quarter2 = [120, 160, 180, 220];
    const quarter3 = [110, 140, 190, 230];

    //variables for grouped bar chart
    const groupedBarChartData = [
        {
            values: quarter1,
            labels: categories,
            type: "bar",
        },{
            values: quarter2,
            labels: categories,
            type: "bar",
        },{
            values: quarter3,
            labels: categories,
            type: "bar",
        }
    ];
    const groupedBarChartLayout = {title: "Datavision.js Grouped Bar Chart"};
   
   
    //variables for stacked bar chart
    const stackedBarChartData = [
        {
            values: quarter1,
            labels: categories,
            type: "bar",
            mode: "stack"
        },{
            values: quarter2,
            labels: categories,
            type: "bar",
        },{
            values: quarter3,
            labels: categories,
            type: "bar",
        }
    ];
    const stackedBarChartLayout = {title: "Datavision.js Stacked Bar Chart"};
    


    return (
        <>
            <h1>Bar Charts in Datavsion.js</h1>

            <p className="doc-description">How to make bar charts in Datavision.js? Examples of Vertical, Horizontal, Grouped and Stacked bar charts. </p>
           
            <div>
                <ChartDisplaySection
                    id="bar-chart"
                    title="Bar Chart"
                    penValue="wvZPEQY"
                    data={barChartData}
                    layout={barChartLayout}
                    editorValue={`
                    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
                    const dailyVisitors = [120, 150, 180, 200, 190];
                                        
                    // Define Data
                    const data = [
                    {
                        values: dailyVisitors, 
                        labels: daysOfWeek, 
                        type: "bar",
                    }
                    ]; 
                                        
                    //Define Layout
                    const layout = {title: "-"};
                                        
                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);           
                    `}
                    
                />

                <ChartDisplaySection
                    id="hr-bar-chart"
                    title="Horizontal Bar Chart"
                    penValue="poBpJdg"
                    data={hrBarChartData}
                    layout={hrBarChartLayout}
                    editorValue={`
                    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
                    const dailyVisitors = [120, 150, 180, 200, 190];
            
                    // Define Data
                    const data = [
                    {
                        values: daysOfWeek, 
                        labels: dailyVisitors, 
                        type: "bar",
                        direction: "hr"
                    }
                    ]; 
            
                    //Define Layout
                    const layout = {title: "-"};
            
                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);
                                        
                    `}
                    
                />

                <ChartDisplaySection
                    id="group-bar-chart"
                    title="Grouped Bar Chart"
                    penValue="xxepVKR"
                    data={groupedBarChartData}
                    layout={groupedBarChartLayout}
                    editorValue={`
                    const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
                    const quarter1 = [100, 150, 200, 250]; // Revenue for Category 1, 2, 3, 4 respectively
                    const quarter2 = [120, 160, 180, 220];
                    const quarter3 = [110, 140, 190, 230];

                    // Define Data
                    const data = [
                    {
                        values: quarter1,
                        labels: categories,
                        type: "bar",
                    },{
                        values: quarter2,
                        labels: categories,
                        type: "bar",
                    },{
                        values: quarter3,
                        labels: categories,
                        type: "bar",
                    }
                    ]; 

                    //Define Layout
                    const layout = {title: "-"};

                    const chart = new DataVision("my-chart");
                    chart.plot(data, layout);

                                        
                    `}
                    
                />

                <ChartDisplaySection
                    id="stack-bar-chart"
                    title="Stacked Bar Chart"
                    penValue="oNOpxge"
                    data={stackedBarChartData}
                    layout={stackedBarChartLayout}
                    editorValue={`
                    const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
                    const quarter1 = [100, 150, 200, 250]; // Revenue for Category 1, 2, 3, 4 respectively
                    const quarter2 = [120, 160, 180, 220];
                    const quarter3 = [110, 140, 190, 230];

                    // Define Data
                    const data = [
                    {
                        values: quarter1,
                        labels: categories,
                        type: "bar",
                        mode: "stack"
                    },{
                        values: quarter2,
                        labels: categories,
                        type: "bar",
                    },{
                        values: quarter3,
                        labels: categories,
                        type: "bar",
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
    
export default BarPage;