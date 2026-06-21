import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.split("/")[1] || "page";

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-20 sm:py-32">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 capitalize">
            {pageName} Page
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            This page is coming soon! Continue building this page by providing
            specific requirements or design details.
          </p>
          <div className="bg-white dark:bg-slate-900 rounded-lg p-8 text-left max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              What would you like to build for this page?
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>• Describe the layout and components needed</li>
              <li>• Share a design or mockup</li>
              <li>• Explain the functionality required</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
