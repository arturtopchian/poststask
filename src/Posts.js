import React, {useEffect} from "react";
const URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10";
// Url for posts

const Posts = () => {
    // save our posts here as state.
    // state https://reactjs.org/docs/hooks-state.html

    useEffect(() => {
        // write code here. use Fetch.
        // useEffect https://reactjs.org/docs/hooks-effect.html
        // Fetch https://webtricks-master.ru/javascript/uchimsya-kodit-na-javascript-fetch-api-razbiraem-raboty-fetch-na-primerah/
    }, []);


    // we have Card component for every post
    // Lists: https://reactjs.org/docs/lists-and-keys.html
    // don't forget about keys!
    return (
        <div className="row">

        </div>
    );
    // Card component now have static data. needs implement
}
export default Posts;