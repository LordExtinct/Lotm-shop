import { motion } from "framer-motion";
import { initAnimation } from "../../entities/animation/main";
import { observer } from "mobx-react-lite";
import cartRenderStore from "../../shared/store/store-main-page/cart-store-render";
import { AllButton } from "./deleteButtonMain";
import { Link } from "react-router-dom";

export const RenderCart = observer(() => {
  const { allCarts } = cartRenderStore;

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={initAnimation}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          {allCarts.map((book) => (
            <div
              key={book.id}
              className="bg-stone-800 rounded-xl overflow-hidden shadow-lg border border-stone-800 hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/product/${book.id}`}>
                <div className="h-64 overflow-hidden relative group cursor-pointer">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://via.placeholder.com/400x300?text=Book+Cover";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-stone-200 text-center px-6">
                      {book.description}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="p-6 ">
                <Link to={`/product/${book.id}`}>
                  <h3 className="text-xl font-serif text-stone-200 mb-2">
                    {book.title}
                  </h3>
                </Link>
                <p className="text-stone-600 mb-2 italic">{book.price} ₽</p>
                <div className="flex items-center gap-2 mb-4"></div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-serif text-stone-800">
                    ${book.price}
                  </span>
                  <AllButton book={book} bookid={book.id} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </main>
    </>
  );
});
