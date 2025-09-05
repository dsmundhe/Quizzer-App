import React from "react";

const ProfilePage = () => {
  // Dummy user data (replace with your actual user state or props)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "+91 9876543210",
    age: 25,
    address: "123 Main Street, City, Country",
    profilePic: "https://i.pravatar.cc/150?img=12", // placeholder image
  };

  const handleLogout = () => {
    // Add your logout logic here
    alert("Logged out!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-blue-200">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center mb-6">
          Profile Page
        </h1>

        {/* Profile Card */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-blue-300 shadow-lg object-cover"
            />
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-4 w-full">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800">
                {user.name}
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <div className="bg-blue-50 p-4 rounded-xl shadow-inner">
                <p className="font-medium">Mobile</p>
                <p>{user.mobile}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl shadow-inner">
                <p className="font-medium">Age</p>
                <p>{user.age}</p>
              </div>
              <div className="sm:col-span-2 bg-blue-50 p-4 rounded-xl shadow-inner">
                <p className="font-medium">Address</p>
                <p>{user.address}</p>
              </div>
            </div>

            {/* Logout Button */}
            <div className="mt-6 text-center sm:text-left">
              <button
                onClick={handleLogout}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
