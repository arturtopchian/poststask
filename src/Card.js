import React from "react";
// needs implement.
const Card = () => {
    return (
        <div className="card">
            <img
                src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                className="card-img-top"
                alt="img"
            />
            <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text">Body - Text</p>
                <button
                    className="btn w-100 btn-danger"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
export default Card;