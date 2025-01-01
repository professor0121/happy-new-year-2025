export const Newsletter = () => {
  return (
    <div className="mt-12 text-center">
      <p className="text-gray-600 mb-4">Subscribe to my technical newsletter</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <button
        className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
      >
        Subscribe
      </button>
    </div>
  );
};