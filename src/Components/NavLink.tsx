import { NavLink } from 'react-router-dom';

import links from '../utils/link';

const NavLinks = () => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, text, path, icon: Icon } = link;
        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="icon">{< Icon />}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
