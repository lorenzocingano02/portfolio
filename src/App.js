import './App.css';
import {
    FaGithub,
    FaInstagram,
    FaTelegram,
    FaWhatsapp
} from "react-icons/fa";
import cat from './cat.png'


function App() {
  return (
    <>
        <div className={"App-container"}>
            <div className={"Home-content-container"}>
                <div className={"Logo-container"}>
                    <h1>Lorenzo</h1>
                    <h1>Cingano</h1>
                </div>
                <div className={"Separator"}></div>
                <ul className={"Home-list"}>
                    <li>
                        <a href={"#"}>About</a>
                    </li>
                    <li>
                        <a href={"#"}>Pricing</a>
                    </li>
                    <li>
                        <a href={"#"}>Experience</a>
                    </li>
                    <li>
                        <a href={"#"}>Portfolio</a>
                    </li>
                    <li>
                        <a href={"#"}>Contact me</a>
                    </li>
                </ul>
                <div className={"Socials-container"}>
                    <a href={"#"}>
                        <FaInstagram/>
                    </a>
                    <a href={"#"}>
                        <FaTelegram/>
                    </a>
                    <a href={"#"}>
                        <FaWhatsapp/>
                    </a>
                    <a href={"#"}>
                        <FaGithub/>
                    </a>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
