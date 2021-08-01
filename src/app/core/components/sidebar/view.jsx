import { StyledSidebar, SidebarHeader, SidebarOptions } from './styles';
import { NavLink } from 'react-router-dom';

const SidebarView = () => {
  return (
    <StyledSidebar>
      <SidebarHeader>
        <NavLink to="/">spootifly</NavLink>
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
      </SidebarOptions>
    </StyledSidebar>
  );
};

export default SidebarView;
