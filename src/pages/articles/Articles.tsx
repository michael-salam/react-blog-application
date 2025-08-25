import { articlesData } from "../../placeholderData";
import ArticleCard from "../../components/ArticleCard";
import FilterForm from "../../components/FilterForm";
import { useSearchParams } from "react-router";

const Articles = () => {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const readtime = searchParams.get("readtime");
  const date = searchParams.get("date");

  const matchedArticles = articlesData.filter((article: any) => {
    if (topic && !article.tags.includes(topic)) return false;
    if (readtime && article.readtime !== parseInt(readtime)) return false;
    if (date && article.date !== date) return false;
    return true;
  });

  return (
    <main>
      <header className="py-8">
        <h1 className="heading heading-1 text-center mb-4">Articles</h1>
        <p className="text-2xl mb-4">Browse all articles</p>
        <FilterForm />
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
    </main>
  );
};

export default Articles;
