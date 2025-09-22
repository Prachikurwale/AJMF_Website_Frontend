import React from "react";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
      <form className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
        
        <label className="block mb-2 text-gray-700 font-semibold">Name</label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        
        <label className="block mb-2 text-gray-700 font-semibold">Email</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        
        <label className="block mb-2 text-gray-700 font-semibold">Password</label>
        <input 
          type="password" 
          placeholder="Enter your password" 
          className="w-full p-3 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        
        <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-600 transition-colors">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default App;
