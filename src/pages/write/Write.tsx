import { motion } from "motion/react";

import { SimpleEditor } from "../../components/tiptap-templates/simple/simple-editor";

const Write = () => {
  return (
    // <motion.main
    //   initial={{ transform: "translateY(500px)", opacity: 0 }}
    //   animate={{ transform: "translateY(0)", opacity: 1 }}
    // >
    //   <header className="py-8">
    //     <h1 className="heading heading-1 text-center mb-4">Write an article</h1>
    //     <p className="mb-8 text-2xl max-w-[40ch] mx-auto">
    //       Write your own articles and get your ideas out into the world
    //     </p>
    //   </header>
    // </motion.main>
    <SimpleEditor />
  );
};

export default Write;
