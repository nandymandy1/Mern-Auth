import React from 'react'

const ImageCard = ({ content: { img, title, content, link } }) => {
    return (
        <div className="card">
            <img
                src={img}
                alt={title}
                className="card-img-top img-fluid"
                style={{
                    maxHeight: '250px !important'
                }}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content.substring(0, 90)}[...]</p>
                <a href={link} className="btn btn-primary">Learn More</a>
            </div>
        </div>
    )
}

export default ImageCard