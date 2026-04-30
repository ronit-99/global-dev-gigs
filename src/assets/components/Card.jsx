import React, { useState } from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  const [saved, setSaved] = useState(false)

  return (
    <div className="card">
        <div>
          <div className="top">
          <img src={props.logo} alt="Logo" />
          <button onClick={() => setSaved(!saved)}>
            {saved ? 'Saved' : 'Save'}
            <Bookmark
              size={25}
              fill={saved ? 'currentColor' : 'none'}
            />
          </button>
        </div>

        <div className="center">
          <h3>{props.company}</h3> 
          <span>{props.datePosted}</span>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>

        <div className="bottom">
            <div>
              <h3>{props.pay} $/hr</h3>
              <p>{props.location}</p>
            </div>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button>Apply Now</button>
            </a>
        </div>
    </div>
  )
}

export default Card