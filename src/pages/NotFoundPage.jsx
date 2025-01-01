import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <FontAwesomeIcon icon={faSadTear} size="5x" className="mb-4 text-gray-300" />
      <h1 className="uppercase text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
      <button
        onClick={handleGoHome}
        className="px-4 py-2 bg-[#0f5ea3] text-white rounded hover:bg-blue-600 transition"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default NotFoundPage;