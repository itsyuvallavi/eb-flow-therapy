import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <main className="flex-grow">
      {children}
    </main>
  );
};

export default PageLayout;