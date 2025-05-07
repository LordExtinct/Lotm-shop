import { observer } from "mobx-react-lite";
import { cartStore } from "../../../shared/store/lenghtsCart/cartStore";
import { Link } from "react-router-dom";

export const CartPageRendering = observer(() => {
  const { items } = cartStore;

  const removeFromCart = (id: number) => {
    cartStore.removeFromCart(id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ml-10 mt-3 mr-10">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-neutral-800 rounded-lg shadow-md overflow-hidden transition-transform"
        >
          <div className="relative">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover object-center"
              />
            </Link>
          </div>
          <div className="p-2">
            <Link to={`/product/${item.id}`}>
              <h3 className="text-lg font-semibold text-white truncate">
                {item.title}
              </h3>
            </Link>
            <div className="flex justify-between items-center">
              <span className="text-white">{item.price} Р</span>
              <button
                onClick={() => {
                  removeFromCart(item.id);
                }}
                className="bg-pink-500 cursor-pointer hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});
