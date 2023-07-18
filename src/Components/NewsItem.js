import React from 'react'

const NewsItem = (props) =>{          
        return (
            <div className="card">
                <img src={props.imageUrl} className="card-img-top" alt="..." style={{height: '13rem'}}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{zIndex: 11, left: '90%'}}>
                    {props.source}<span className="visually-hidden" >unread messages</span>
                </span>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.on).toGMTString()} </small></p>
                    <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    
}

export default NewsItem
