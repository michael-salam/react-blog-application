import { Link } from "react-router";
import type { Article } from "../placeholderTypes";
import { motion } from "motion/react";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className="text-left"
    >
      <Link to={`/articles/${article.slug}`} className="w-full h-48 block mb-4">
        <img
          src={article.image}
          alt={article.title}
          className="size-full object-cover rounded-2xl"
        />
      </Link>

      <div className="px-2">
        <div className="flex items-center justify-between text-sm font-semibold text-black/50 mb-2">
          <p>{article.date}</p>
          <p>{article.readTime} mins</p>
        </div>
        <Link to={`/articles/${article.slug}`}>
          <p className="font-bold mb-2 text-xl">{article.title}</p>
        </Link>
        <p className="text-black/80 mb-2">{article.summary}</p>
        <div className="flex gap-2">
          {article.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs mb-4 bg-black/10 text-black/80 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/articles/${article.slug}`}
          className="font-semibold text-lg"
        >
          Read more →
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
