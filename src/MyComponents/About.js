import React from 'react'

export const About = () => {
    let myStyle = {
        minHeight: "90vh",
        margin: "40px auto"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h1 className="text-center">This is a To-Do App Made with React Js.</h1>
            <h2 className="my-5">ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules.</h2>
            <h3 className="my-5">In this app we can: <br/>
            - Add a Todo <br/>
            - Delete a Todo <br/>
            - Also Todos get restored even if we reload.<br/>
            <br/>
            <br/>
            <br/>
            </h3>
            <h1 className="text-center">Made with ♥ by Debopom</h1>
        </div>
    )
}
