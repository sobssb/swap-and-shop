import { Link } from "react-router-dom";

const HomeCardBanner = ({ items }) => {
  if (!items) return null;

  return (
    <section className="p-5 my-7 w-full lg:bg-white bg-gray-200">
      <div key={items.id} className="flex flex-col lg:flex-row gap-7 lg:items-center  mb-5">
        <h2 className="lg:text-3xl text-[1.5rem] font-bold">{items.title}</h2>
        <Link to="/" className="text-blue-600 -mt-5 lg:mt-0">
          See more
        </Link>
      </div>

      <div className="flex flex-row gap-5 w-full overflow-auto ">
        {items.img.map((image, index) => (
          <div key={index} className="w-full">
            <img className="lg:min-w-60 min-w-40"  src={image} alt="item images" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCardBanner;
