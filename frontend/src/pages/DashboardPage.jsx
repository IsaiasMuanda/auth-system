import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg w-full mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-indigo-600">
        Dashboard
      </h2>

      <div className="space-y-6">
        <motion.div
          className="p-6 bg-slate-50 rounded-lg border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">Informações do perfil</h3>
          <p className="text-slate-700">Nome: {user.name}</p>
          <p className="text-slate-700">Email: {user.email}</p>
        </motion.div>

        <motion.div
          className="p-6 bg-slate-50 rounded-lg border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">Actividades recentes</h3>
          <p className="text-slate-700">
            <span className="font-bold">Criado: </span>
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-slate-700">
            <span className="font-bold">Último login: </span>
            {formatDate(user.lastLogin)}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg shadow 
          hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;