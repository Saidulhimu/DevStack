import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/navber/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
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
    <div className="min-h-screen bg-slate-50 text-gray-900 selection:bg-purple-100 selection:text-purple-600 ">

      <div>
      <ToastContainer />
      <Navbar className="min-h-screen bg-slate-50 text-gray-900 selection:bg-purple-100 selection:text-purple-600 " />
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