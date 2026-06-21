import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-20 sm:py-32 text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Page Not Found
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist yet.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all"
        >
          Return Home
        </Link>
      </div>
    </Layout>
  );
}
