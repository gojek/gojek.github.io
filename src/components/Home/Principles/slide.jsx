import React, { Component } from 'react'

class Slide extends Component {
  render() {
    const { data } = this.props

    var text = []

    const heading = data.heading.split('|')

    heading.forEach((element, index) => {
      text.push(
        <span
          key={index}
          className={`${element === 'Walk the Talk' ? 'pl-5 pl-md-0' : ''}`}
        >
          {element} <br />
        </span>
      )
    })

    return (
      <div className="principles-card">
        <img
          className="card-img-top img-fluid"
          src={data.image}
          alt={data.alt}
        />
        <div className="card-body px-0">
          <a
            className="text-dark transparent-outline-link"
            href={data.link}
            target="_blank"
          >
            <h4 className="card-title font-md raleway-bold ">{text}</h4>
          </a>

          <p className="font-xs-l">{data.text}</p>
        </div>
      </div>
    )
  }
}

export default Slide
