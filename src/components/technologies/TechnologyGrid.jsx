import TechCard from './TechCard';
import StackSidebar from '../stack/StackSidebar';
import Spinner from '../common/Spinner';

const TechnologyGrid = ({
  technologies,
  stack,
  loading,
  onAddToStack,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                onAddToStack={onAddToStack}
                isAdded={stack.some((item) => item.id === tech.id)}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <StackSidebar
              stack={stack}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnologyGrid;