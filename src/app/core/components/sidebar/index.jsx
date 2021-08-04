import SidebarView from './view';

import { useMusicContextValue } from '../../helpers/AppContext';

const Sidebar = () => {
  const [{ token }] = useMusicContextValue();
  return <SidebarView token={token} />;
};

export default Sidebar;
