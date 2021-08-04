import { StyledSidebar, SidebarHeader, SidebarOptions } from './styles';
import { NavLink } from 'react-router-dom';

const SidebarView = ({ token }) => {
  return (
    <StyledSidebar>
      <SidebarHeader>
        <h2 to="/">spootifly</h2>
      </SidebarHeader>
      <SidebarOptions>
        <ul>
          <li>
            <NavLink to="/app" activeClassName="active">
              <span>inicio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" activeClassName="active">
              <span>buscar</span>
            </NavLink>
          </li>
        </ul>
        {token && <NavLink to="/">Cerrar sesión</NavLink>}
      </SidebarOptions>
    </StyledSidebar>
  );
};

export default SidebarView;
