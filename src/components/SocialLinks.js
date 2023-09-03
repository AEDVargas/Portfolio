// import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Socials = () => {
    return (
        <nav className='icons-container' >
            <div className='icons' >
                <a href='https://github.com/AEDVargas' target='__blank' style={{ '--order': 1 }}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href='https://www.linkedin.com/in/edward-vargas-7889151a7/' target='__blank' style={{ '--order': 2 }}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href='https://www.instagram.com/eddie_cvargas/' target='__blank' style={{ '--order': 3 }}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='../resources/CV.pdf' target='__blank' style={{ '--order': 4 }}>
                    CV
                </a>
            </div>
            <div />
        </nav>

    );
}
export default Socials
