import React from 'react';

function Navigation(props) {
  const navLinks = ['about', 'portfolio', 'contact', 'resume'];
  return (<ul className="nav">
    {
      navLinks.map(link => (<li className="nav-item" key={link}>
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
