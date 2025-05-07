import { observer } from "mobx-react-lite";
import { cartStore } from "../../../shared/store/lenghtsCart/cartStore";
export type obj = {
  book: any;
  bookid: any;
};
export const AllButton = observer((props: obj) => {
  const { book, bookid } = props;

  const isInCart = cartStore.isInCart(props.bookid);

  const addToCart = () => {
    cartStore.addToCart(book);
  };
  const removeFromCart = () => {
    cartStore.removeFromCart(bookid);
  };

  return (
    <>
      {isInCart ? (
        <button
          className="px-4 py-2 cursor-pointer bg-neutral-700 text-stone-200 rounded-full hover:bg-neutral-600 duration-200 transition-colors flex items-center gap-2 text-lg"
          onClick={() => {
            removeFromCart();
          }}
        >
          Удалить из корзины
        </button>
      ) : (
        <button
          className="px-4 py-2 cursor-pointer bg-pink-700 text-stone-200 rounded-full hover:bg-pink-800 transition-colors flex items-center gap-2 text-lg"
          onClick={() => {
            addToCart();
          }}
        >
          Добавить в корзину
        </button>
      )}
    </>
  );
});
