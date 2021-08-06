import logo from '../images/logo.svg'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Splitter Logo" />
            <h2 className="title">Tip Calculator</h2>
        </div>
    )
}

export default Header
