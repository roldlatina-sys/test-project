function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to React + Tailwind
        </h1>
        <p className="text-gray-600 mb-6">
          Your app is now configured with Tailwind CSS!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
