import { motion } from "motion/react";
import { Link } from "react-router";

const Home = () => {
  return (
    <main>
      <header className="py-8">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="heading heading-1 text-center mb-4"
        >
          Blog Home
        </motion.h1>
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-8 text-[clamp(1.125rem,_1.0157rem_+_0.5381vw,_1.5rem)]"
        >
          This is the home page
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Link
              to="/profile"
              className="bg-black text-[clamp(1.125rem,_1.0157rem_+_0.5381vw,_1.5rem)] rounded-full font-medium text-white px-8 py-3"
            >
              Create profile
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Link
              to="/articles"
              className="text-[clamp(1.125rem,_1.0157rem_+_0.5381vw,_1.5rem)] rounded-full font-medium text-black border-2 border-black px-8 py-3"
            >
              View articles
            </Link>
          </motion.div>
        </div>
      </header>
    </main>
  );
};

export default Home;
