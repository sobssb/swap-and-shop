import { useState } from "react";
// icon
import { FaAngleDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const SellingFAQ = ({ title, text, span, handleSpanClick, id }) => {
  const [faqIsClick, setFaqIsClick] = useState({
    id: null,
    show: false
  });

  const handleShowFaqDetails = () => {

    setFaqIsClick({
        id : id,
        show: !faqIsClick.show
    });
  };

  return (
    <article
      className="border-b-[.5px] border-slate-200 p-2"
      onClick={handleShowFaqDetails}
    >
      <div className="text-[.9rem] flex justify-between items-cente">
        <h3>{title}</h3>
        <div>{faqIsClick.show ? <FaTimes /> : <FaAngleDown />}</div>
      </div>

      {faqIsClick.show && (
        <p className="mt-1 text-[.7rem] mx-5 ">
            <span className="opacity-[.7]">
                {text}{" "}
            </span>
          
          {span && (
            <span
              className="underline cursor-pointer"
              onClick={handleSpanClick}
            >
              {span}
            </span>
          )}
        </p>
      )}
    </article>
  );
};

export default SellingFAQ;
