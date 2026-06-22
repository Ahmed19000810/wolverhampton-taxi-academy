import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-20 sm:py-32">
        <div className="space-y-8">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-500 hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Reset Your Password
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-8 max-w-md">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-500"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all"
              >
                Send Reset Link
              </button>
            </form>

            <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-sm text-orange-800 dark:text-orange-200">
                📧 We'll send a password reset link to your email. Check your
                inbox and spam folder.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-orange-600 dark:text-orange-500 font-semibold hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
