import { Link } from "react-router";

const Home = () => {
  return (
    <main>
      <header className="py-8">
        <h1 className="heading heading-1 text-center mb-4">Blog Home</h1>
        <p className="mb-8 text-2xl">This is the home page</p>

        <div className="flex gap-4 items-center justify-center">
          <Link
            to="/profile"
            className="bg-black text-2xl rounded-full font-medium text-white px-8 py-3"
          >
            Create profile
          </Link>

          <Link
            to="/articles"
            className="text-2xl rounded-full font-medium text-black border-2 border-black px-8 py-3"
          >
            View articles
          </Link>
        </div>
      </header>
    </main>
  );
};

export default Home;
