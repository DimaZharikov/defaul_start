import { FC } from 'react';

import Navigation from '../components/navigation/Navigation.container';
import Footer from '../components/footer/Footer.container';

interface ILayoutPropsTypes {
  children: JSX.Element
}

const Layout: FC<ILayoutPropsTypes> = ({ children }): JSX.Element => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
