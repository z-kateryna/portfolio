import "./Homepage.scss";
import arrow from '../../assets/icons/arrow.svg';
import dribble from '../../assets/icons/dribbble.svg';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedIn.svg';
import mail from '../../assets/icons/mail.svg';

export default function Homepage() {
    return (
        <>
        <nav className="nav">
            <p>K</p>
            <ul>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Coding<img src={arrow}/></li>
                <li><a href="#"></a>Resume<img src={arrow}/></li>
            </ul>
            <div>
                <a href="#"><img src={dribble} alt="github icon"/></a>
                <a href="#"><img src={github} alt="github icon"/></a>
                <a href="#"><img src={linkedin} alt="github icon"/></a>
                <a href="#"><img src={mail} alt="github icon"/></a>
            </div>
        </nav>
        <p>Hi, I'm Kat</p>
        </>
    )
}