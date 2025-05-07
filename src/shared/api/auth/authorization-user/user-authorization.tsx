import { Lock, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { mokkyApi } from "../../baseUrl";
import { userStore } from "../../../store/auth/user-store";
import { useNavigate } from "react-router-dom";

export const UserAuthorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await mokkyApi.post(
        "/auth",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

        const userData = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          token: response.data.token,
        };

        userStore.setUser(userData);
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full max-w-md bg-black/40 p-8 rounded-lg backdrop-blur-md border border-purple-500/20 shadow-2xl">
      <div className="flex items-center justify-center mb-6">
        <Sparkles className="w-8 h-8 text-purple-400" />
        <h1 className="text-2xl font-bold text-purple-300 ml-2">Авторизация</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-purple-300">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4" />
              <span>Адрес</span>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-100 placeholder-purple-400"
              placeholder="your@email.com"
              required
            />
          </label>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-purple-300">
            <div className="flex items-center gap-2 mb-1">
              <Lock className="w-4 h-4" />
              <span>Пароль</span>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg--900/20 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-purple-100 placeholder-purple-400"
              placeholder="••••••••"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-pink-600 hover:bg-pink-700 cursor-pointer text-white rounded-md transition-all duration-300 shadow-lg font-medium"
        >
          Войти
        </button>

        <div className="text-center mt-4">
          <a
            href="/main"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm"
          >
            Нет аккаунта? Зарегестрируйтесь тут!
          </a>
        </div>
      </form>
    </div>
  );
};
