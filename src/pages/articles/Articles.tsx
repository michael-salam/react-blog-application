import { articlesData } from "../../placeholderData";
import ArticleCard from "../../components/ArticleCard";
import FilterForm from "../../components/FilterForm";
import { useSearchParams } from "react-router";
import { motion } from "motion/react";

const Articles = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const topic = searchParams.get("topic");
  const readtime = searchParams.get("readtime");
  const date = searchParams.get("date");

  const matchedArticles = articlesData.filter((article: any) => {
    if (query && !article.title.toLowerCase().includes(query.toLowerCase()))
      return false;
    if (topic && !article.tags.includes(topic)) return false;
    if (readtime) {
      if (readtime === "under-5" && article.readTime >= 5) return false;
      if (
        readtime === "5-10" &&
        (article.readtime < 5 || article.readTime > 10)
      )
        return false;
      if (readtime === "10-plus" && article.readTime <= 10) return false;
    }
    if (date && article.date !== date) return false;
    return true;
  });

  return (
    <motion.main
      initial={{ transform: "translateY(500px)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
    >
      <header className="py-8">
        <h1 className="heading heading-1 text-center mb-4">Articles</h1>
        <p className="text-2xl mb-4">Browse all articles</p>
        <FilterForm topic={topic} readtime={readtime} date={date} />
      </header>

      {matchedArticles.length ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matchedArticles.map((article: any) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </section>
      ) : (
        <p className="text-center py-8 font-bold text-4xl">
          No articles match your filter!
        </p>
      )}
    </motion.main>
  );
};

export default Articles;
