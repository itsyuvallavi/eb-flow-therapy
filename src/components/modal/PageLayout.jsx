import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`${!isHomePage ? 'pt-28' : ''} bg-beige-50`}>
      {children}
    </div>
  );
};

export default PageLayout;