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

      <section className="bg-gray-950 grid sm:place-content-center lg:p-5 p-3">
        <article className="text-white grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5">
          <FooterLinkNames names={knowUs} />
          <FooterLinkNames names={makeMoney} />
          <FooterLinkNames names={paymentProducts} />
          <FooterLinkNames names={letHelpYou} />
        </article>
      </section>
    </footer>
  );
};

export default Footer;
