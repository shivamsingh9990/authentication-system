import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800">Welcome, {user.name}! 👋</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>

        {/* User Details Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-3">
            Your Profile Details
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Full Name</p>
              <p className="text-2xl font-bold text-gray-800">{user.name}</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Email Address</p>
              <p className="text-2xl font-bold text-gray-800">{user.email}</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Account Status</p>
              <p className="text-2xl font-bold text-green-600">✓ Active</p>
            </div>

            {user.createdAt && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Member Since</p>
                <p className="text-2xl font-bold text-gray-800">
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Account Information</h2>
          <p className="text-gray-600">
            You are successfully logged in. Your account is secure and all your information is stored safely in our database.
          </p>
        </div>
      </div>
    </div>
  );
}
