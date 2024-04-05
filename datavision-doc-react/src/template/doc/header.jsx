import { Link } from "react-router-dom";
import MenuButton from "./menu-button";

const Header = () => {
    
    return (
        <div className="doc-header">
            <div className="left">
                <a href="/"><h3>DATAVISION</h3></a>
            </div>
            <div className="right">
                <div className="menu-button-container">
                    <MenuButton id="left-menu-bar" />
                </div>
                <div className="link-list">
                    <Link to="/docs">Home</Link>
                    <a target="_blank" href="https://github.com/datavisionjs/datavision.js">GitHub</a>
                </div>
            </div>
        </div>
    );
};
    
export default Header;