import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
};

export default PageLayout;