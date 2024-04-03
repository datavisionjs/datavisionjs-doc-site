
import BarPage from "./bar";
import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Body = () => {
    const location = useLocation();
    const currentPath = location.pathname.split("/");

    const page = currentPath[currentPath.length - 1];
  
    return (
        <div className="doc-body">
            <section id="left-menu-bar" className="left doc-left-hide">
                <ul>
                    <li><Link className={page === "docs"? "active": ""} to="">Geting Started</Link></li>
                    <li><Link className={page === "operations"? "active": ""} to="operations">Operations</Link></li>
                    <li><Link className={page === "bar"? "active": ""} to="bar">Bar Charts</Link></li>
                    <li><Link className={page === "line"? "active": ""} to="line">Line Charts</Link></li>
                    <li><Link className={page === "pie"? "active": ""} to="pie">Pie Charts</Link></li>
                    <li><Link className={page === "scatter"? "active": ""} to="scatter">Scatter Plots</Link></li>
                    <li><Link className={page === "mixed"? "active": ""} to="mixed">Mixed Charts</Link></li>
                </ul>
            </section>

            <section className="right">
               <Outlet />
            </section>
        </div>
    );
};
    
export default Body;