This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)

## Try the Demo Here : [codyadam.github.io/React-Resizable-Panel](https://codyadam.github.io/React-Resizable-Panel/)

# What is this ?

This is a single React component that allow you to make custom resize bar for your panels.

# How to use

You just need to import :

`import ResizeBar from "./ResizeBar.js";`

You can use props for more customization :
(e.g. `<ResizeBar direction="horizontal" position={70} className="bar1" minPos={30} maxPos={60}> [...]`)

-   `direction` either "vertical" or "horizontal" (horizontal by default)
-   `position` area where the bar should be placed at the start in percent (50% by default)
-   `className` the className of the bar to change it's style ("resizeBar" by default)
-   `minPos` the minimum % position of the bar (10% by default)
-   `maxPos` the maximum % position of the bar (90% by default)

![Screen of the JSX code](https://github.com/CodyAdam/React-Resizable-Panel/blob/master/ScreenCode.png?raw=true)

![Gif demo](https://github.com/CodyAdam/React-Resizable-Panel/blob/master/demo.gif?raw=true)
