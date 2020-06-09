import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ResizeBar from "./ResizeBar.js";

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <ResizeBar direction="vertical" position={66}>
                    <ResizeBar direction="horizontal">
                        <div id="div1">Div 1</div>
                        <div id="div2">
                            <ResizeBar direction="vertical" position={66}>
                                <ResizeBar direction="vertical" position={50}>
                                    <div>Div 3</div>
                                    <div>Div 4</div>
                                </ResizeBar>
                                <div>Div 5</div>
                            </ResizeBar>
                        </div>
                    </ResizeBar>
                    <div id="div3">Div 3</div>
                </ResizeBar>
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
