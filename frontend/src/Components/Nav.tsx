import "../Styles/Nav.scss"
import LoginComponent from "./LoginComponent";
import LoginButton from "./LoginButton";
export default function Nav () {
return (
    <nav className="Nav">
        <h3>
            <img src="../Logo/MTBLogo.png" alt="MTBLogo"/>
        </h3>
        <ul>
            <li><a href = "/Home">Home</a></li>
            <li><a href = "/About">About</a></li>
            <li><a href = "/Contact">Contact</a></li>
            <li><a href = "/Placeholder">Placeholder</a></li>
        </ul>
        <div className={"Login"}>
        <LoginComponent/>
            <LoginButton/>
        </div>
    </nav>
)
}