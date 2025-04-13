import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Bem Vindo de volta
        </h2>

        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center mb-6">
            <Link to="/forgot-password" className="text-sm text-indigo-500 hover:text-indigo-700 transition-colors">
              Esqueci-me da password?
            </Link>
          </div>
          {error && <p className="text-rose-500 font-medium mb-2">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="w-5 h-5 animate-spin mx-auto" /> : "Login"}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-slate-50 flex justify-center">
        <p className="text-sm text-slate-600">
          Não tem uma conta?{" "}
          <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 transition-colors">
            Inscrever-se
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;