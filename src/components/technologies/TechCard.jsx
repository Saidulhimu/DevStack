const TechCard = ({ tech, onAddToStack, isAdded }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-sky-500 border border-sky-100">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-5 text-[11px] font-medium text-gray-600">
          <span className="bg-gray-100 px-2.5 py-1 rounded-md">{tech.category}</span>
          <span className="bg-gray-100 px-2.5 py-1 rounded-md">{tech.difficulty}</span>
          <span className="flex items-center gap-1 text-amber-500 font-bold ml-auto">
            ★ {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-all ${isAdded
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed opacity-80'
              : 'brand-gradient-bg text-white hover:opacity-95 shadow-xs'
            }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;