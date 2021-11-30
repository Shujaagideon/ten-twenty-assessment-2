import '../styles/header.css'
import { BsSearch } from "react-icons/bs";


const Header = () => {
    return (
        <>
            <header className="header">
                <div className="cover">
                    <div className="logo">
                        <h2>Logo</h2>
                    </div>
                    <nav>
                        <div className="left-nav link">
                            <ul>
                                <li><a href="#">private clients</a></li>
                                <li><a href="#">corporate</a></li>
                                <li><a href="#">insights</a></li>
                                <li><a href="#">contacts</a></li>
                            </ul>
                        </div>
                        <div className="right-nav">
                            <div className="links link">
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className="btns">
                                <div className="search">
                                    <BsSearch/>
                                </div>
                                <div className="book-btn">
                                    <h4>book a meeting</h4>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
