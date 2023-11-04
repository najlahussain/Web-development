import React from "react";
import ReactDOM from "react-dom/client";
import MyComponent from "./components/MyComponent";

function Test(){
    return <h1>test</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <MyComponent/>
        < Test/>
    </div>
    );