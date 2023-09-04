// import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Logo from "./Logo";

const Socials = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item" style={{ '--order': 1 }}>
                    <a href='https://github.com/AEDVargas' target='__blank' className="nav-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className="nav-item" style={{ '--order': 2 }} >
                    <a href='https://www.linkedin.com/in/edward-vargas-7889151a7/' target='__blank' className="nav-link">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li className="nav-item" style={{ '--order': 3 }}>
                    <a href='https://www.instagram.com/eddie_cvargas/' target='__blank' className="nav-link">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li className="nav-item" style={{ '--order': 4 }}>    <a href='../resources/CV.pdf' target='__blank' className="nav-link">
                    CV
                </a>
                </li>
            </ul>
        </nav>
    );
}
export default Socials
