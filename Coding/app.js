// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyx:"abc"},
//      "Hello From an Aspiring Developer!"
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(heading);     //Object

// ReactElement(Object) => HTML(Browser Understands)
const parent = React.createElement("div",
    {id: "parent"}, [
    React.createElement("div", {id:"child1"},[ 
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag")]),

    React.createElement("div", {id:"child2"},[ 
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag")])
]);


root.render(parent); 