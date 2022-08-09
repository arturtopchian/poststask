import React from "react";

const Form = () => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title Post
                </label>
                <input
                    name="title"
                    type="text"
                    className="form-control"
                />
                <div id="emailHelp" className="form-text">
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Content
                </label>
                <textarea
                    name="body"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                />
            </div>
            <button className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}
export default Form;