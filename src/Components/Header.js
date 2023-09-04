import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './CSS/Headers.css'
import { Link } from 'react-scroll';
const Header = () => {
  const [links, setLinks] = useState([]);
  const [projects, setProjects] = useState();


  useEffect(() => {
    setLinks([
      {
        "name": 'linkedin',
        'url': "https://www.linkedin.com/in/hdevavan/",
        'icon': faLinkedin
      },
      {
        "name": 'github',
        'url': "https://github.com/Devavanshi-Harsh",
        'icon': faGithub
      },
      {
        "name": 'hackerrank',
        'url': "https://www.hackerrank.com/HarshDevavanshi",
        'icon': faHackerrank
      },
    ])
    setProjects(["https://devavanshi-harsh.github.io/MongataGalloStore/homepage.html"])
  }, [])

  return (
    <header className='container-Headers'>
      <section id='Header-Final-Container'>
        <nav className='icons-Headers'>
          {
            links.map((item, index) => {
              return (
                <a href={item.url} target='.blank' rel="noopener noreferrer" key={index} >{item.icon && <FontAwesomeIcon icon={item.icon} className='icon' />}</a>
              )
            })
          }
        </nav>
        <nav className='contacts'>

          <Link to='main'><FontAwesomeIcon icon={faHome} /></Link>
          <Link to='projects' smooth={true} duration={500}>Projects</Link>
          <Link to='contacts' smooth={true} duration={500}>Contact Me</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;