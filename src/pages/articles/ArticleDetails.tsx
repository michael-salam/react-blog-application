import { useParams } from "react-router";

const ArticleDetails = () => {
  const { slug } = useParams(); // 'id' will contain the value from the URL
  return (
    <header className="py-8">
      <h1 className="heading heading-1 text-center mb-4">{slug}</h1>
      <p className="mb-8 text-2xl">Article summary</p>
    </header>
  );
};

export default ArticleDetails;
