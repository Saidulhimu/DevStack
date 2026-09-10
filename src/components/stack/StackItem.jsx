
const StackItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white shadow-2xs">
      <div className="flex items-center gap-3">
        <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
        <div>
          <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
          <span className="text-xs text-gray-400">{item.category}</span>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-gray-400 hover:text-red-500 p-1 font-bold text-base transition-colors"
        title="Remove Item"
      >
        ✕
      </button>
    </div>
  );
};

export default StackItem;