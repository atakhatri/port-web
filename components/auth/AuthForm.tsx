"use client";

import { useState, FormEvent } from "react";
import { Mail, Lock, User, AlertCircle, Github, Chrome } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import AnimatedContent from "../animated/animatedcontent";

interface AuthFormProps {
  mode: "login" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const isLogin = mode === "login";
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = { username: "", email: "", password: "" };

    if (!isLogin && !formData.username)
      newErrors.username = "Username is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    if (Object.values(newErrors).every((error) => error === ""))
      console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AnimatedContent distance={30} delay={0.1}>
          <h2 className="text-4xl font-bold text-center text-white mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
        </AnimatedContent>
        <AnimatedContent distance={30} delay={0.2}>
          <p className="text-center text-gray-400 mb-8">
            {isLogin
              ? "Enter your credentials to access your account."
              : "Join us and start building your portfolio today."}
          </p>
        </AnimatedContent>

        <form className="space-y-2" onSubmit={handleSubmit} noValidate>
          {!isLogin && (
            <AnimatedContent distance={30} delay={0.3}>
              <div className="relative">
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="peer h-12 w-full border-b-2 border-gray-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-primary"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
                <label
                  htmlFor="username"
                  className="absolute left-0 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-primary peer-focus:text-sm"
                >
                  Username
                </label>
                <User className="absolute right-2 top-3 h-6 w-6 text-gray-500" />
              </div>
              <div className="h-6 mt-1">
                {errors.username && (
                  <AnimatedContent distance={10} delay={0}>
                    <p className="text-red-400 text-sm flex items-center gap-1 pt-1">
                      <AlertCircle size={16} /> {errors.username}
                    </p>
                  </AnimatedContent>
                )}
              </div>
            </AnimatedContent>
          )}

          <AnimatedContent distance={30} delay={isLogin ? 0.3 : 0.4}>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                className="peer h-12 w-full border-b-2 border-gray-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-primary"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-primary peer-focus:text-sm"
              >
                Email address
              </label>
              <Mail className="absolute right-2 top-3 h-6 w-6 text-gray-500" />
            </div>
            <div className="h-6 mt-1">
              {errors.email && (
                <AnimatedContent distance={10} delay={0}>
                  <p className="text-red-400 text-sm flex items-center gap-1 pt-1">
                    <AlertCircle size={16} /> {errors.email}
                  </p>
                </AnimatedContent>
              )}
            </div>
          </AnimatedContent>

          <AnimatedContent distance={30} delay={isLogin ? 0.4 : 0.5}>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                className="peer h-12 w-full border-b-2 border-gray-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-primary"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-primary peer-focus:text-sm"
              >
                Password
              </label>
              <Lock className="absolute right-2 top-3 h-6 w-6 text-gray-500" />
            </div>
            <div className="h-6 mt-1">
              {errors.password && (
                <AnimatedContent distance={10} delay={0}>
                  <p className="text-red-400 text-sm flex items-center gap-1 pt-1">
                    <AlertCircle size={16} /> {errors.password}
                  </p>
                </AnimatedContent>
              )}
            </div>
          </AnimatedContent>

          <AnimatedContent distance={30} delay={isLogin ? 0.5 : 0.6}>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 px-4 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/40 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Submitting..." : isLogin ? "Log In" : "Sign Up"}
            </button>
          </AnimatedContent>
        </form>

        <AnimatedContent distance={30} delay={isLogin ? 0.6 : 0.7}>
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} delay={isLogin ? 0.7 : 0.8}>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="w-full inline-flex justify-center py-3 px-4 border border-gray-600 rounded-md shadow-sm bg-nav-bg/40 text-sm font-medium text-white hover:bg-nav-bg/80 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </button>
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full inline-flex justify-center py-3 px-4 border border-gray-600 rounded-md shadow-sm bg-nav-bg/40 text-sm font-medium text-white hover:bg-nav-bg/80 transition-colors"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Google
            </button>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} delay={isLogin ? 0.8 : 0.9}>
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <Link
                href={isLogin ? "/signup" : "/login"}
                className="font-medium text-primary hover:underline"
              >
                {isLogin ? "Sign Up" : "Log In"}
              </Link>
            </p>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default AuthForm;
