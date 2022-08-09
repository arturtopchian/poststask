import React from "react";
import Form from "./Form";
import Posts from "./Posts";

// First of all run npm i
// run project npm start
// Ignore Form component now.
// Go to Posts

const App = () => {
    return (
        <div className="container">
            <h1>FORM BLOGPOST</h1>
            <hr/>
            <Form/>
            <hr/>
            <Posts/>
        </div>
    )
}
export default App;
