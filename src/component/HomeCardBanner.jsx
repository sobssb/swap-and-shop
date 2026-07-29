import { Link } from "react-router-dom";

const HomeCardBanner = ({ items }) => {
  if (!items) return null;

  return (
    <section className="p-5 my-7 w-full lg:bg-white bg-gray-200">
      <div
        key={items.id}
        className="flex flex-col lg:flex-row gap-7 lg:items-center  mb-5"
      >
        <h2 className="lg:text-3xl text-[1.5rem] font-bold">{items.title}</h2>
        <Link to="/" className="text-blue-600 -mt-5 lg:mt-0">
          See more
        </Link>
      </div>

      <div className="flex flex-row gap-5 w-full overflow-x-scroll [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-lg ">
        {items.img.map((image, index) => (
          <div key={index} className="w-full mb-3">
            <img
              className="lg:min-w-60 min-w-40"
              loading="lazy"
              src={image}
              alt="item images"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCardBanner;
