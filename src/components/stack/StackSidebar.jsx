import StackItem from './StackItem';

const StackSidebar = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs sticky top-24">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">Your Stack</h2>
        <p className="text-sm text-gray-400 mt-1">
          {stack.length > 0 ? `${stack.length} Technology Selected` : 'No technologies selected yet.'}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-2xl py-10 px-4 text-center my-2">
          <p className="text-gray-400 text-sm font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3 mb-6 max-h-[380px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <StackItem key={item.id} item={item} onRemove={onRemove} />
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full py-2.5 border border-red-200 text-red-500 font-bold rounded-xl text-sm hover:bg-red-50 transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackSidebar;