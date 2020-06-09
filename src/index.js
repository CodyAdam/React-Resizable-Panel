import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <ResizeBar direction="horizontal" position={50}>
                    <ResizeBar direction="vertical" position={50}>
                        <div id="div1">Div 1</div>
                        <div id="div2">Div 2</div>
                    </ResizeBar>
                    <div id="div3">Div 3</div>
                </ResizeBar>
            </div>
        );
    }
}

/**
 * Add a resize bar between two panel (can not handle more or less then 2 childrens)
 * @param direction either "horizontal" or "vertical"
 * @param position area where the bar should be placed by default (in percent)
 * @return the two children with the resize bar in between
 */
class ResizeBar extends React.Component {
    constructor(props) {
        super(props);

        this.container = React.createRef();
        this.state = {
            size: props.position,
        };
    }

    render() {
        const containerStyle = {
            width: "100%",
            height: "100%",
            display: "grid",
            flexGrow: "1",
            gridTemplateColumns: this.props.direction === "horizontal" ? `${this.state.size}% 5px auto` : "auto",
            gridTemplateRows: this.props.direction === "horizontal" ? "auto" : `${this.state.size}% 5px auto`,
        };
        const resizeBarStyle = {
            height: this.props.direction === "horizontal" ? "100%" : "5px",
            width: this.props.direction === "horizontal" ? "5px" : "100%",
            backgroundColor: "red",
            cursor: this.props.direction === "horizontal" ? "ew-resize" : "ns-resize",
        };
        return (
            <div style={containerStyle} ref={this.container}>
                {this.props.children[0]}
                <div style={resizeBarStyle} className="resizeBar" />
                {this.props.children[1]}
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
