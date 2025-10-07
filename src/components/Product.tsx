import { DollarSign } from "lucide-react";
import { useCartState } from "../../hooks/cartHooks";
import { motion, AnimatePresence } from "framer-motion";
const Product = () => {
  const state = useCartState();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 h-fit w-full text-black">
      <AnimatePresence>
        {state.items.map((item) => (
          <motion.div
            whileHover={{ scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            key={item.id}
            className="flex flex-col p-1 m-1 justify-center text-center items-center bg-yellow-800 rounded-md text-sm"
          >
            <p className="font-extrabold">{item.title.toUpperCase()}</p>
            <motion.img
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.4 }}
              src={item.thumbnail}
              alt={item.title}
              height={200}
              width={200}
            />
            <p>{item.category}</p>
            <p className="text-white flex items-center font-bold">
              <DollarSign />
              {item.price}
            </p>

            <button className="bg-transparent border hover:bg-amber-500 hover:cursor-pointer font-bold rounded-md px-3 py-1 opacity-75 hover:opacity:100 hover:animate-pulse">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Product;
