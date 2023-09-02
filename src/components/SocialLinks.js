// import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Socials = () => {
    return (
        <div className='icons' >
                <a href='https://github.com/AEDVargas' target='__blank'>
                    <FontAwesomeIcon
                        icon={faGithub}
                        size='3x'
                    />
                </a>
            <a href='https://www.linkedin.com/in/edward-vargas-7889151a7/' target='__blank' >
                <FontAwesomeIcon
                    icon={faLinkedin}
                    size='3x'
                />
            </a>
            <a href='https://www.instagram.com/eddie_cvargas/' target='__blank'>
                <FontAwesomeIcon
                    icon={faInstagram}
                    size='3x'
                />
            </a>
            <a href='../resources/CV.pdf' target='__blank' >
                <FontAwesomeIcon
                    icon={faUser}
                    size='3x'
                //DOWNLOAD CV FUNCTIONALITY
                />
            </a>

        </div>

    );
}
export default Socials
