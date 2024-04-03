
import Editor from "./ace-editor";
import DataVisionChart from "../../components/davavision-chart";


function ChartDisplaySection({id, title, penValue, editorValue, data, layout}) {
   
    const penLink = "https://codepen.io/Arthur-Kennedy/pen/"+penValue;

    return (
        <section className="chart-display-area">
            <div className="title">
                <h2>{title}</h2>
            </div>

            <DataVisionChart id={id} data={data} layout={layout} />
            <Editor value={editorValue}/>

            <div>
                <a target="_blank" href={penLink}>Try in Codepen</a>
            </div>
        </section>
    );
}

export default ChartDisplaySection;
