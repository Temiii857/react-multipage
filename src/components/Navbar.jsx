import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="brand">My Site</div>
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}