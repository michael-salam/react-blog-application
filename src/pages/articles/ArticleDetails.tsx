import { useParams } from "react-router";
import { articlesData } from "../../placeholderData";

const ArticleDetails = () => {
  const { slug } = useParams();
  const matchedArticle = articlesData.filter(
    (article: any) => article.slug === slug
  )[0];

  return (
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
  );
};

export default ArticleDetails;
