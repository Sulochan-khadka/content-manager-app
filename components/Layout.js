import ActiveResource from 'components/ActiveResource';
import Navbar from 'components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ActiveResource />
      {children}
    </>
  );
};

export default Layout;
