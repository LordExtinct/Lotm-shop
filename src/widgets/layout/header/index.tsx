import { observer } from "mobx-react-lite";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { cartStore } from "../../../shared/store/lenghtsCart/cartStore";
import { userStore } from "../../../shared/store/auth/user-store";

export const Header = observer(() => {
  const { cartLength } = cartStore;
  const { user } = userStore;
  return (
    <>
      <header className="border-b border-stone-200/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link to="/">
              <h1 className="text-2xl font-serif text-stone-200 cursor-pointer">
                Lotm Library
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Найти"
                className="bg-stone-200/10 backdrop-blur-md px-4 py-2 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-stone-200/50 text-stone-200 placeholder-stone-300/70 w-64"
              />
              <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-200/70" />
            </div>
            <Link to="/basket">
              <div className="relative">
                {cartLength > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-stone-200 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartLength}
                  </span>
                )}
                <AiOutlineShoppingCart className="text-stone-200 text-2xl cursor-pointer" />
              </div>
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <Link to={"/lxrd"}>
                  <div className="flex items-center gap-2 cursor-pointer ml-3">
                    <p className="text-white text-xl mr-2">{user.name}</p>
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt="Avatar"
                        className="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-purple-500">
                        <span className="text-gray-500 text-sm">
                          {user.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ) : (
              <Link to="/main">
                <div className="flex items-center gap-2 cursor-pointer">
                  <LuUserRound className="text-stone-200 text-2xl" />
                  <p className="text-stone-200 text-sm">Зарегистрироваться</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
});
