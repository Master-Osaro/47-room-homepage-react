import logo from '../images/logo.svg';
const Header =({})=>{
    return(
        <header>
            <nav>
                <div className="logo"><img src={logo} alt="" /></div>
                    <ul className="nav-list">
                    <a href="#">home</a>
                    <a href="#">shop</a>
                    <a href="#">about</a>
                    <a href="#">contact</a>
                </ul>
            </nav>
        </header>
    )
}

export default Header