import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "../../widgets/layout/header";
import { observer } from "mobx-react-lite";
import cartRenderStore from "../../shared/store/store-main-page/cart-store-render";

import { initAnimationRight } from "../../entities/animation/main";
import { RenderCart } from "../../features/cartMainRender";
import { BsGithub, BsTelegram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const MainPageFast = observer(() => {
  const { CartRender } = cartRenderStore;

  useEffect(() => {
    CartRender();
  }, []);

  return (
    <div className="min-h-screen bg-stone-900">
      <div className="bg-[url('https://i.pinimg.com/736x/24/f2/a7/24f2a7458b6d4929e6eef55aa41ec1e3.jpg')] bg-cover bg-center">
        <div className="bg-black/40 backdrop-blur-sm">
          <Header />

          <div className="max-w-7xl mx-auto px-4 py-15 text-center">
            <motion.h2
              variants={initAnimationRight}
              initial="hidden"
              whileInView="visible"
              className="text-5xl font-serif text-stone-200 mb-6"
            >
              lxrd Extinct
            </motion.h2>
            <motion.p
              variants={initAnimationRight}
              initial="hidden"
              whileInView="visible"
              className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto"
            >
              Интернет магазин на Mokky Api. Также смотри аниме на -{" "}
              <a className="text-amber-300" target="blank" href="https://ani-florz.vercel.app/">
                AniFlorz
              </a>
            </motion.p>
          </div>
        </div>
      </div>

      <RenderCart />

      <section className="bg-stone-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-48">
            <div className="flex items-center gap-4">
              <div className="flex center">
                <BsTelegram className="mt-1 mr-2 text-blue-400 text-2xl" />
                <a
                  className="text-2xl text-white"
                  target="blank"
                  href="https://t.me/LordExtinct"
                >
                  Telegram
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex center">
                <BiLogoGmail className="mt-1 mr-2 text-white text-2xl" />
                <a
                  className="text-2xl text-white"
                  target="blank"
                  href="mailto:extracerberuss@gmail.com"
                >
                  Gmail
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex center">
                <BsGithub className="mt-1 mr-2 text-white text-2xl" />
                <a
                  className="text-2xl text-white"
                  target="blank"
                  href="https://ani-florz.vercel.app/"
                >
                  AniFlorz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default MainPageFast;
