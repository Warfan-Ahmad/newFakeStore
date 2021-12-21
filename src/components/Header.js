import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='ui fixed menu'>
            <div className='ui container center nav'>
                <Link to="/" id='HomeBtn'>Home</Link>
            </div>
        </div>
    )
}

export default Header
