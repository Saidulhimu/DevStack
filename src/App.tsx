import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// @ts-expect-error The hook is currently implemented in JavaScript without a declaration file.
import Navbar from './components/navber/Navbar';
import Hero from './components/hero/Hero';
import TechnologyGrid from './components/technologies/TechnologyGrid';
import { useTechnologies } from './hooks/useTechnologies';

function App() {
  const {
    technologies,
    stack,
    loading,
    handleAddToStack,
    handleRemove,
    handleRemoveAll,
  } = useTechnologies();

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer />
      <Navbar />
      <Hero />

      {/* Main Content Section */}
      <TechnologyGrid
        technologies={technologies}
        stack={stack}
        loading={loading}
        onAddToStack={handleAddToStack}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
}

export default App;