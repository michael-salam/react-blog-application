import { X } from "lucide-react";
import { topics } from "../placeholderData";
import { useSearchParams } from "react-router";
import { AnimatePresence, motion } from "motion/react";

const FilterForm = ({
  topic,
  readtime,
  date,
}: {
  topic: string | null;
  readtime: string | null;
  date: string | null;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleUpdateFilters = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set(e.target.name, e.target.value);
    setSearchParams(params);
  };

  return (
    <form className="max-w-[60%] mx-auto">
      <div className="flex gap-2 mb-4 items-center">
        <input
          type="text"
          name="query"
          id="search"
          onChange={(e) => handleUpdateFilters(e)}
          placeholder="Search something"
          className="!border-black/60"
        />
      </div>
      <div className="flex items-end flex-wrap gap-2 justify-between">
        <div className="text-sm flex items-center gap-2">
          <label htmlFor="topic">Topics</label>
          <select
            name="topic"
            id="topic"
            defaultValue={topic || "select"}
            className="min-w-[20%]"
            onChange={(e) => handleUpdateFilters(e)}
          >
            <option value="select" disabled>
              No filter
            </option>
            {topics.map((topic: string) => (
              <option value={topic} key={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div className="text-sm flex items-center gap-2">
          <label htmlFor="readtime" className="min-w-fit">
            Read time
          </label>

          <select
            name="readtime"
            id="readtime"
            defaultValue={readtime || "select"}
            className="min-w-[20%]"
            onChange={(e) => handleUpdateFilters(e)}
          >
            <option value="select" disabled>
              No filter
            </option>
            <option value="under-5">Under 5 min</option>
            <option value="5-10">5-10 min</option>
            <option value="10-plus">10+ min</option>
          </select>
        </div>

        <div className="text-sm flex items-center gap-2">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            defaultValue={date || ""}
            onChange={(e) => handleUpdateFilters(e)}
            className="min-w-[20%]"
          />
        </div>
        {searchParams.size > 0 && (
          <button
            onClick={() => setSearchParams({})}
            type="reset"
            className="bg-black text-white size-10 rounded-full !grid place-content-center"
          >
            <X />
          </button>
        )}
      </div>
    </form>
  );
};

export default FilterForm;
