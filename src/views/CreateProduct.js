import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom';


// 
// 
// See Contact.js and SinglePost.js for additional line by line comments on using RFC (react functional components)
// 
// 


export default function CreateProduct({ user }) {

const sendToFlask = async ( e ) => { // we add the parameter/variable e (which stands for event) because we will be getting some input from the user down in our JSX form
    e.preventDefault(); // because we are passing in an event, we have to use preventDefault() which prevents the screen from reloading when we get our event
    const res = await fetch("http://127.0.0.1:5000/api/create-product", { // Anytime you want to fetch from Flask, you have to create an API endpoint in your Flask's route.py under the corresponding template directory
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': user.token
        },
        body: JSON.stringify({ // You can only send a string over to an object, so we have to use stringify
            title: e.target.title.value,
            email: e.target.img_url.value,
            description: e.target.description.value,
        })
    });
};

        <div className='border col-12 col-xs-9 col-sm-8 col-lg-4'> {/* for Bootsrtaps col class, when the viewport is normal size, the <div> takes up 12, extra small (xs) it takes up 0, small 8, and large 4 */}

            <form onSubmit={(e)=>sendToFlask(e)}> {/* when the user submits the data in this form, we want to run sendToFlask and send the data as e (the event) */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input name='title' type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="img_url" className="form-label">Image URL</label>
                    <input name='img_url' type="text" className="form-control" id="img_url" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input name='description' type="text" className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    // )
}
