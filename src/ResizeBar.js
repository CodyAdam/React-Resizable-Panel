import React from "react";

/**
 * Add a resize bar between two panel (can not handle more or less then 2 childrens)
 * @param direction either "vertical" or "horizontal" (horizontal by default)
 * @param position area where the bar should be placed at the start in percent (50% by default)
 * @param className the className of the bar to change it's style ("resizeBar" by default)
 * @param minPos the minimum % position of the bar (10% by default)
 * @param maxPos the maximum % position of the bar (90% by default)
 * @return the two children with the resize bar in between
 */
export default class ResizeBar extends React.Component {
    constructor(props) {
        super(props);

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.setContainerSize = this.setContainerSize.bind(this);

        this.container = React.createRef();
        this.state = {
            containerSize: null,
            mouseStartPos: null,
            position: props.position ? props.position : 50,
            minPos: props.minPos ? props.minPos : 10,
            maxPos: props.maxPos ? props.maxPos : 90,
            dragging: false,
        };
    }

    onMouseDown(e) {
        this.setContainerSize();
        this.setState({ dragging: true, mouseStartPos: this.props.direction === "vertical" ? e.clientX : e.clientY });
    }
    onMouseMove(e) {
        if (this.state.dragging) {
            const mousePos = this.props.direction === "vertical" ? e.clientX : e.clientY;
            const containerSize = this.state.containerSize;
            const defaultPos = this.props.position ? this.props.position : 50;

            const newPosition = defaultPos - ((containerSize * defaultPos * 0.01 - mousePos) * 100) / containerSize;

            this.setState({ position: Math.min(Math.max(newPosition, this.state.minPos), this.state.maxPos) });
        }
    }
    onMouseUp(e) {
        this.setState({ dragging: false });
    }

    setContainerSize() {
        this.setState({
            containerSize:
                this.props.direction === "vertical"
                    ? this.container.current.offsetWidth
                    : this.container.current.offsetHeight,
        });
    }

    componentDidMount() {
        this.setContainerSize();
        window.addEventListener("resize", this.setContainerSize);
    }

    render() {
        const containerStyle = {
            width: "100%",
            height: "100%",
            display: "grid",
            flexGrow: "1",
            overflow: "hidden",
            gridTemplateColumns: this.props.direction === "vertical" ? `${this.state.position}% 5px auto` : "auto",
            gridTemplateRows: this.props.direction === "vertical" ? "auto" : `${this.state.position}% 5px auto`,
        };
        const resizeBarStyle = {
            height: this.props.direction === "vertical" ? "100%" : "5px",
            width: this.props.direction === "vertical" ? "5px" : "100%",
            cursor: this.props.direction === "vertical" ? "ew-resize" : "ns-resize",
        };
        return (
            <div
                style={containerStyle}
                ref={this.container}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
                onMouseLeave={this.onMouseUp}
            >
                {this.props.children[0]}
                <div
                    style={resizeBarStyle}
                    className={this.props.className ? this.props.className : "resizeBar"}
                    onMouseDown={this.onMouseDown}
                />
                {this.props.children[1]}
            </div>
        );
    }
}
