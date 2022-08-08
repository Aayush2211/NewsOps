import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
  let {title , description , imageUrl , newsUrl , author , date} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imageUrl?"https://assets.thehansindia.com/h-upload/2022/07/22/1304290-nasa.jpg" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className = "class-text"><small className='text-muted'>By {!author ? "Unknown" : author} at {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
