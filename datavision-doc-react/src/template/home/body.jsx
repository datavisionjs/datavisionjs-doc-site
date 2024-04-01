
const ChartCard = ({href, name, imgSrc}) => {

    return (
        <a href={href} className="chart-card">
            <img src={imgSrc} alt={name} />
            <div className="container">
                <h4>{name}</h4>
            </div>
        </a>
    );
};

const Body = () => {
  
    return (
        <div className="site-body">
            <section className="body-section">
                <div className="section-title">
                    <span>Charts</span>
                </div>

                <div className="chart-container">
                    <ChartCard name="Line Chart" imgSrc="https://cdn.pixabay.com/photo/2017/12/22/08/01/graph-3033203_1280.jpg" />
                    <ChartCard name="Bar Chart" imgSrc="https://cdn.pixabay.com/photo/2017/12/22/08/01/graph-3033203_1280.jpg" />
                    <ChartCard name="Pie Chart" imgSrc="https://cdn.pixabay.com/photo/2017/12/22/08/01/graph-3033203_1280.jpg" />
                    <ChartCard name="Doughnut Chart" imgSrc="https://cdn.pixabay.com/photo/2017/12/22/08/01/graph-3033203_1280.jpg" />
                    <ChartCard name="Scatter Plot" imgSrc="https://cdn.pixabay.com/photo/2017/12/22/08/01/graph-3033203_1280.jpg" />
                    <ChartCard name="Bubble Chart" imgSrc="https://cdn.pixabay.com/photo/2017/12/22/08/01/graph-3033203_1280.jpg" />
                    <ChartCard name="Stacked Chart" imgSrc="https://cdn.pixabay.com/photo/2017/12/22/08/01/graph-3033203_1280.jpg" />
                    <ChartCard name="Mixed Chart" imgSrc="https://cdn.pixabay.com/photo/2017/12/22/08/01/graph-3033203_1280.jpg" />

                </div>
            </section>

            <section className="body-section">
                <div className="home-footer">DATAVISION.JS is free to use under the <a href="">MIT License</a></div>
            </section>
        </div>
    );
};
    
export default Body;