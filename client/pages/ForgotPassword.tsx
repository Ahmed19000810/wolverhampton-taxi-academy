import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/password-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send reset link");
      }

      setSubmitted(true);
      toast({
        title: "Success!",
        description: `Password reset link sent to ${email}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to send reset link",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-20 sm:py-32">
          <div className="space-y-8 text-center">
            <div className="flex justify-center">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Check Your Email
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We've sent a password reset link to{" "}
                <span className="font-semibold text-orange-600 dark:text-orange-500">
                  {email}
                </span>
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-6">
              <p className="text-blue-800 dark:text-blue-200">
                ✅ Please check your email inbox and spam folder for the reset
                link. The link will expire in 24 hours.
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setEmail("");
              }}
              className="inline-block px-6 py-2 text-orange-600 dark:text-orange-500 font-medium hover:underline"
            >
              Try another email?
            </button>

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-500"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all"
              >
                {loading ? "Sending..." : "Send Reset Link"}
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
