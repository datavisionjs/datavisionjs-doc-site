
import React, { useEffect } from 'react';

const DataVisionChart = ({id, data, layout}) => {

    useEffect(() => {
        const chart = new DataVision(id);
        chart.plot(data, layout);
    }, [data, layout]);

    return (
        <>
            <div className="doc-dv-chart" id={id}></div>
        </>
    );
};
    
export default DataVisionChart;