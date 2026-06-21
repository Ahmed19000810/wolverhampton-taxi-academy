import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  CheckCircle,
  Zap,
  Users,
  Globe,
  TrendingUp,
  BookOpen,
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-950 dark:to-orange-950 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Master the{" "}
                  <span className="text-orange-600 dark:text-orange-500">
                    Wolverhampton
                  </span>{" "}
                  PHV Test
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Comprehensive training platform for taxi and private hire
                  vehicle licensing exams. Pass your knowledge test with
                  confidence using AI-powered learning tools and thousands of
                  practice questions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 text-center"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/features"
                  className="px-8 py-4 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-slate-900 font-semibold rounded-lg transition-all text-center"
                >
                  Explore Features
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">
                    5000+
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Practice Questions
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">
                    30+
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Languages
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">
                    95%
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Pass Rate
                  </p>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-md h-full min-h-96 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute w-40 h-40 bg-white rounded-full top-10 right-10 opacity-30"></div>
                  <div className="absolute w-32 h-32 bg-white rounded-full bottom-20 left-5 opacity-20"></div>
                </div>
                <div className="relative text-center text-white space-y-4">
                  <BookOpen className="w-24 h-24 mx-auto opacity-90" />
                  <p className="text-2xl font-bold">Ready to Pass?</p>
                  <p className="text-orange-100">
                    Join thousands of successful candidates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Pass
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools and resources designed specifically for the
              Wolverhampton PHV licensing examination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "5000+ Practice Questions",
                description:
                  "Access our complete question bank covering all exam topics with detailed explanations.",
              },
              {
                icon: Zap,
                title: "AI Learning Assistant",
                description:
                  "Get instant help from our AI tutor. Ask questions, get explanations in your language.",
              },
              {
                icon: TrendingUp,
                title: "Progress Analytics",
                description:
                  "Track your performance with detailed charts and get personalized improvement recommendations.",
              },
              {
                icon: Globe,
                title: "30+ Languages",
                description:
                  "Study in your preferred language while exam questions remain in English for authentic practice.",
              },
              {
                icon: Users,
                title: "Mock Exams",
                description:
                  "Practice with timed mock exams that simulate the real Wolverhampton PHV test environment.",
              },
              {
                icon: CheckCircle,
                title: "Instant Feedback",
                description:
                  "Receive immediate feedback on every answer with clear explanations and learning resources.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 border border-gray-200 dark:border-slate-700 rounded-xl hover:shadow-lg dark:hover:shadow-orange-900/20 transition-all dark:bg-slate-800"
              >
                <feature.icon className="w-12 h-12 text-orange-600 dark:text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section Preview */}
      <section className="py-20 sm:py-32 bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$19",
                period: "month",
                features: [
                  "500+ Practice Questions",
                  "Progress Tracking",
                  "Mobile Access",
                  "Community Support",
                ],
                highlighted: false,
              },
              {
                name: "Premium",
                price: "$49",
                period: "month",
                features: [
                  "5000+ Practice Questions",
                  "AI Learning Assistant",
                  "Unlimited Mock Exams",
                  "Progress Reports",
                  "30+ Languages",
                  "Priority Support",
                ],
                highlighted: true,
              },
              {
                name: "Lifetime",
                price: "$299",
                period: "one-time",
                features: [
                  "All Premium Features",
                  "Lifetime Access",
                  "Future Updates Included",
                  "No Recurring Charges",
                ],
                highlighted: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl transition-all ${
                  plan.highlighted
                    ? "ring-2 ring-orange-600 dark:ring-orange-500 transform lg:scale-105 bg-white dark:bg-slate-800 shadow-xl"
                    : "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      /{plan.period}
                    </span>
                  </div>

                  <Link
                    to="/register"
                    className={`block text-center w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                      plan.highlighted
                        ? "bg-orange-600 hover:bg-orange-700 text-white"
                        : "border border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-slate-700"
                    }`}
                  >
                    Get Started
                  </Link>

                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All plans include a 7-day free trial. No credit card required.
            </p>
            <Link
              to="/pricing"
              className="text-orange-600 dark:text-orange-500 font-semibold hover:underline"
            >
              View all pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join Thousands of Successful Candidates
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              See what our students have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I passed my PHV test on the first attempt thanks to Taxi Academy. The practice questions were spot on!",
                author: "Ahmed Hassan",
                role: "Private Hire Driver",
              },
              {
                quote:
                  "The AI learning assistant helped me understand complex safeguarding concepts. Highly recommend!",
                author: "Maria Garcia",
                role: "Taxi Operator",
              },
              {
                quote:
                  "The mock exams gave me confidence. The timed practice felt exactly like the real exam.",
                author: "James Williams",
                role: "Licensed Driver",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Pass Your Wolverhampton PHV Test?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Start your free trial today. No credit card required. Access all
            features for 7 days.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-orange-600 font-bold rounded-lg transition-all transform hover:scale-105"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </Layout>
  );
}
