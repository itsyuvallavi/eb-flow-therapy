import { X } from "lucide-react";

const Popup = ({ message, type, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={20} />
        </button>
        <div className={`text-center ${type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          <h3 className="text-xl font-medium mb-4">
            {type === 'success' ? 'Thank You!' : 'Error'}
          </h3>
          <p className="text-gray-600 leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;