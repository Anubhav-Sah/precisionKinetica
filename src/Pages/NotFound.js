import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4">
      <div className="text-6xl mb-2">⛔</div>
      <h1 className="text-6xl font-bold mb-4">Error 404 </h1>
      <p className="text-xl mb-6">Oops! The page you are looking for does not exist</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
