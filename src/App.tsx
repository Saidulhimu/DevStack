import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// @ts-expect-error No declaration file is available for this JSX module.
import Navbar from './components/navber/Navbar';
// @ts-expect-error No declaration file is available for this JSX module.
import Hero from './components/hero/Hero';
// @ts-expect-error No declaration file is available for this JSX module.
import Footer from './components/footer/Footer';
// @ts-expect-error No declaration file is available for this JSX module.
import TechnologyGrid from './components/technologies/TechnologyGrid';
// @ts-expect-error No declaration file is available for this JSX module.
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
    <div className="min-h-screen bg-slate-50 text-gray-900 selection:bg-purple-100 selection:text-purple-600 ">

      <div>
      <ToastContainer />
      <Navbar  />
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

      <Footer />

    </div>
  );
}

export default App;