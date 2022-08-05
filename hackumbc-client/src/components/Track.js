import React from 'react'

// css located in About.css

const Track = ({title, desc, children}) => {
    return (
        <div className='track'>
            {children}
            <h1 className='track-title'>{title}</h1>
            <p className='track-text'>{desc}</p>
        </div>
    )
}

export default Track