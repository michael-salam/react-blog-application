import { motion } from "motion/react";

const Profile = () => {
  return (
    <motion.main
      initial={{ transform: "translateY(500px)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
    >
      <header className="py-8">
        <h1 className="heading heading-1 text-center mb-4">
          Set up your profile
        </h1>
        <p className="mb-8 text-2xl">Get started in a few easy steps</p>
      </header>
    </motion.main>
  );
};

export default Profile;
