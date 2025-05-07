import { useState } from "react";
import { Sparkles, Lock, Mail, User } from "lucide-react";
import { mokkyApi } from "../baseUrl";
import { IUser, userStore } from "../../store/auth/user-store";
import { useNavigate } from "react-router-dom";
import { useJwtDecode } from "../../hooks/useJwtDecode";
import { observer } from "mobx-react-lite";
export const RegistrationComponent = observer(() => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [name, setName] = useState("");

  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();
  const { decodeJwt } = useJwtDecode();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await mokkyApi.post(
        "/register",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUser(res.data);
      console.log(res.data);
      navigate("/");

      const userData = {
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        token: res.data.token,
      };

      userStore.setUser(userData);
      localStorage.setItem("token", userData.token);
      const token = res.data.token;
      const decodedData = token && decodeJwt(token);
      userStore.setUser(decodedData);
    } catch (e) {
      console.error(e);
    }
  };

  if (user) {
  }

  return (
    <div className="w-full max-w-md bg-black/40 p-8 rounded-lg backdrop-blur-md border border-purple-500/20 shadow-2xl">
      <div className="flex items-center justify-center mb-6">
        <Sparkles className="w-8 h-8 text-purple-400" />
        <h1 className="text-2xl font-bold text-purple-300 ml-2">Регистрация</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-purple-300">
            <div className="flex items-center gap-2 mb-1">
              <User className="w-4 h-4" />
              <span>Ваше имя</span>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-100 placeholder-purple-400"
              placeholder="Введите ваше имя"
            />
          </label>
        </div>

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
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-pink-600 hover:bg-pink-700 cursor-pointer text-white rounded-md transition-all duration-300 shadow-lg font-medium"
        >
          Зарегистрироваться
        </button>

        <div className="text-center mt-4">
          <a
            href="/auth"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm"
          >
            Уже владеете аккаунтом? Войти
          </a>
        </div>
      </form>
    </div>
  );
});
