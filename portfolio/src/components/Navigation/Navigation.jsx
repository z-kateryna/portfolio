import "./Navigation.scss";
import { useState, useEffect } from "react";
import arrow from "../../assets/icons/arrow.svg";
import dribble from "../../assets/icons/dribbble.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedIn.svg";
import mail from "../../assets/icons/mail.svg";

export default function Homepage() {
  const fullName = "Kateryna Zabrodska";
  const [displayed, setDisplayed] = useState("K");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let index = 1;
    let interval;

    if (isHovered) {
      interval = setInterval(() => {
        setDisplayed(fullName.slice(0, index));
        index++;
        if (index > fullName.length) clearInterval(interval);
      }, 100);
    // } else {
    //   setDisplayed("K");
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <>
      <nav className="nav">
        <div className="nav__logo"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            fontFamily: "DMSans",
            fontSize: "1.25rem",
            fontWeight: "400",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {displayed}
        </div>
        <ul className="nav__menu-container">
          <li className="nav__menu--item">
            <a href="#"></a>Home
          </li>
          <li className="nav__menu--item">
            <a href="#"></a>About
          </li>
          <li className="nav__menu--item">
            <a href="#"></a>Coding
            <img src={arrow} />
          </li>
          <li className="nav__menu--item">
            <a href="#"></a>Resume
            <img src={arrow} />
          </li>
        </ul>
        <div className="nav__icons-container">
          <a className="nav__icon" href="#">
            <img src={dribble} alt="github icon" />
          </a>
          <a className="nav__icon" href="#">
            <img src={github} alt="github icon" />
          </a>
          <a className="nav__icon" href="#">
            <img src={linkedin} alt="github icon" />
          </a>
          <a className="nav__icon" href="#">
            <img src={mail} alt="github icon" />
          </a>
        </div>
      </nav>
      <hr className="nav__line" />
    </>
  );
}
