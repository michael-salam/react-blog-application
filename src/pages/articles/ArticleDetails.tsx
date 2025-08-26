import { useParams } from "react-router";
import { articlesData } from "../../placeholderData";
import { motion } from "motion/react";
import type { Article } from "../../placeholderTypes";

const ArticleDetails = () => {
  const { slug } = useParams();
  const matchedArticle = articlesData.filter(
    (article: Article) => article.slug === slug
  )[0];

  return (
    <motion.main
      initial={{ transform: "translateY(500px)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
    >
      <header className="py-8">
        <div className="flex items-center justify-center gap-4 font-bold text-black/50">
          <p>{matchedArticle.author}</p>
          <p>{matchedArticle.date}</p>
          <p>{matchedArticle.readTime} mins</p>
        </div>
        <h1 className="heading heading-1 text-center mt-2 mb-4">
          {matchedArticle.title}
        </h1>
        <p className="text-2xl">{matchedArticle.summary}</p>
      </header>
    </motion.main>
  );
};

export default ArticleDetails;
