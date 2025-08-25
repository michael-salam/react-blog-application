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
          className="mb-8 text-2xl"
        >
          This is the home page
        </motion.p>

        <div className="flex gap-4 items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Link
              to="/profile"
              className="bg-black text-2xl rounded-full font-medium text-white px-8 py-3"
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
              className="text-2xl rounded-full font-medium text-black border-2 border-black px-8 py-3"
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
