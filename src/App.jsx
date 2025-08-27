import { HelmetProvider } from 'react-helmet-async'
import MainLayout from './components/MainLayout'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="w-full min-h-screen bg-white">
          <MainLayout />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;