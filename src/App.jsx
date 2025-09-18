import { HelmetProvider } from 'react-helmet-async'
import MainLayout from './components/MainLayout'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="w-full min-h-screen" style={{ 
          background: 'linear-gradient(135deg, rgba(244, 194, 161, 0.15) 0%, rgba(255, 255, 255, 0.05) 25%, rgba(244, 194, 161, 0.1) 50%, rgba(255, 228, 196, 0.08) 75%, rgba(244, 194, 161, 0.12) 100%)'
        }}>
          <MainLayout />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;