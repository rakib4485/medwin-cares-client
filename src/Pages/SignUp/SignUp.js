import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg mb-4 w-full">
          Sign Up with Google
        </button>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default SignUp;