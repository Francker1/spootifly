import NavbarView from './view';

import { useMusicContextValue } from '../../helpers/AppContext';

const NavBar = () => {
  const [{ user }] = useMusicContextValue();

  return <NavbarView user={user} />;
};

export default NavBar;
