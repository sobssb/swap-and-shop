import React from "react";
import FooterLinkListNames from "../data/FooterLinkListNames";
import FooterLinkNames from "../component/FooterLinkNames";

const Footer = () => {
  const { knowUs, makeMoney, paymentProducts, letHelpYou } =
    FooterLinkListNames();

  return (
    <footer>
      <section
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="bg-gray-500 grid place-content-center py-3 mt-5 text-2xl text-white cursor-pointer"
      >
        <p>Back to top</p>
      </section>

      <div className="bg-gray-950 grid place-content-center lg:p-5 p-3">
        <section className="text-white grid lg:grid-cols-4 grid-cols-2 gap-10">
          <FooterLinkNames names={knowUs} />
          <FooterLinkNames names={makeMoney} />
          <FooterLinkNames names={paymentProducts} />
          <FooterLinkNames names={letHelpYou} />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
