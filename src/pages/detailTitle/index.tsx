import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import cartAddStore from "../../shared/store/store-cart-add/cart-add-store";
import { useEffect } from "react";
import { AllButton } from "../../features/cartMainRender/deleteButtonMain";
import { FaArrowLeft } from "react-icons/fa";

export const CartDetail = observer(() => {
  const { id } = useParams<{ id: string | any }>();
  const { cart, CartIdDetail, loading } = cartAddStore;

  useEffect(() => {
    CartIdDetail(id);
  }, [id]);

  if (!cart) return <div className="text-center mt-10 text-xl">Секунду...</div>;

  if (loading)
    return (
      <div>
        Апишки мокки не хватило, так что вот так, можешь не ждать, оно не
        отобразиться впринципе ):
      </div>
    );

  return (
    <div className="flex flex-col">
      <Link to={"/"}>
        <FaArrowLeft className="absolute z-10 cursor-pointer text-xl ml-2 mt-1" />
      </Link>
      <div className="w-full h-80 relative overflow-hidden rounded-b-2xl shadow-lg">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          '<img className="w-full" src={cart.backgroundImage} alt="" />
        </div>
      </div>

      <div className="w-full bg-white rounded-2xl shadow-lg p-6 flex gap-6">
        <img
          src={cart.image}
          alt={cart.title}
          className="w-48 h-72 object-cover rounded-lg shadow-md"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">{cart.title}</h2>
            <p className="text-neutral-500 mb-4">{cart.titleEn}</p>
            <p className="text-gray-600 mb-4">{cart.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-pink-600">
              {cart.price} ₽
            </span>
            <AllButton book={cart} bookid={cart.id} />
          </div>
        </div>
      </div>
    </div>
  );
});
