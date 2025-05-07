import { observer } from "mobx-react-lite";
import { Header } from "../../../widgets/layout/header";
import { CartPageRendering } from "../../../features/cartMainRender/cart-page-render";
import { cartStore } from "../../../shared/store/lenghtsCart/cartStore";

export const CartComponent = observer(() => {
  const { items, totalPrice } = cartStore;
  return (
    <>
      <div className="bg-zinc-900">
        <Header />
        {items.length > 0 ? (
          <CartPageRendering />
        ) : (
          <p className="text-pink-600 text-2xl flex ml-5">
            В корзине пока пусто
          </p>
        )}
        {items.length >= 1 && (
          <div className="text-pink-600 text-2xl ml-4">
            Итого к оплате: {totalPrice}р
          </div>
        )}
      </div>
    </>
  );
});
