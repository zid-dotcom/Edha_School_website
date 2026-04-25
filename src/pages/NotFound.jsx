import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6">

      <div className="text-center max-w-md">

        <h1 className="text-6xl font-bold text-blue-900 mb-4">
          404
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
        >
          Go Back Home
        </button>

      </div>
    </div>
  );
}