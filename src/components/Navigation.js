import React from 'react';

function Navigation(props) {
  const navLinks = ['About Me', 'Portfolio', 'Contact', 'Skills'];
  return (<ul className="nav">
    {
      navLinks.map(link => (<li className="nav" key={link}>
        <a href={'#' + link.toLowerCase()} onClick={() => props.handlePageChange(link)} className={props.currentPage === link
            ? 'nav-link active'
            : 'nav-link'
}>
          {link}
        </a>
      </li>))
    }
  </ul>);
}

export default Navigation;
