import React, { useState } from 'react';
import ImageCard from '../Utils/ImageCard';

const Landing = () => {
    const content = [
        {
            img: 'https://blog.codewithdan.com/wp-content/uploads/2017/12/react-logo.png',
            title: "React",
            link: "https://reactjs.org/",
            content: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
        },
        {
            img: 'https://www.saashub.com/images/app/service_logos/6/847e01fb2686/large.png?1526683210',
            title: "MongoDB",
            link: "https://www.mongodb.com",
            content: "With MongoDB Atlas, time is being spent on development and innovation rather than checking and optimizing for database speed. I would recommend that anyone interested in using MongoDB Know more."
        },
        {
            img: 'https://www.logolynx.com/images/logolynx/55/55d08f1284c0983a6b9ccd1edf90d506.png',
            title: "Node.js",
            link: "https://www.mongodb.com",
            content: `As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently.`
        },
        {
            img: 'https://b7.pngbarn.com/png/925/447/express-js-node-js-javascript-mongodb-node-js-png-clip-art.png',
            title: "Express.js",
            link: "https://www.mongodb.com",
            content: `As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently.`
        },
        {
            img: 'https://miro.medium.com/max/1024/1*9HanDsRU11ZMsgDGJwN96w.png',
            title: "Bootstrap",
            link: "https://getbootstrap.com",
            content: `Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.
            Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.`
        },
        {
            img: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
            title: "Redux",
            link: "https://redux.js.org/",
            content: `Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark`
        },
        {
            img: 'https://images.opencollective.com/sweet-alert/34742ee/logo/256.png',
            title: "Sweetalert 2",
            link: "https://sweetalert2.github.io/",
            content: `A beautiful, responsive, highly customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. ... GitHub is home to over 40 million developers working together. Join them to grow your own development teams, manage permissions, and collaborate on projects.`
        },
        {
            img: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png',
            title: "Sass",
            link: "https://sass-lang.com/",
            content: `Sass is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a simple scripting language used in Sass files.`
        },
    ]

    return (
        <>
            <div className="jumbotron jumbotron-fluid bg-primary text-white">
                <div className="container">
                    <h1 className="display-4">Mern Stack With Redux and Hooks</h1>
                    <p className="lead">This application built using Node Express, MongoDB and React with Redux and Hooks.</p>
                </div>
            </div>
            <div className="row mt-2 mb-3">
                {
                    content.map((content, i) => (
                        <div className="col-md-3 col-sm-6 col-xs-12 mt-3 mb-3 mx-auto" key={i}>
                            <ImageCard content={content} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Landing