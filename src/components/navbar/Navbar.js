import React, {useState} from 'react'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <div>
                    <img width={'60px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png'></img>
                </div>
                <ul className='nav-menu'>
                    <li><a href='https://www.nike.com/kr/ko_kr/w/xg/xb/xc/new-releases'>New Releases</a></li>
                    <li><a href='https://www.nike.com/kr/ko_kr/l/men'>Men</a></li>
                    <li><a href='https://www.nike.com/kr/ko_kr/l/women'>Women</a></li>
                    <li><a href='https://www.nike.com/kr/ko_kr/l/kids'>Kids</a></li>
                    <li>Sale</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
