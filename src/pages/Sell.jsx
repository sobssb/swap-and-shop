import { useState } from "react";
import { useNavigate } from "react-router-dom";
import H2_Element from "../component/H2_Element";
import Header from "../layout/Header";
import Button from "../component/Button";
import nike1 from "../assets/pngwing.com (2) (4).png";
import nike2 from "../assets/pngwing.com (2) (5).png";
import adidas from "../assets/pngwing.com (2) (6).png";
import samdes from "../assets/pngwing.com (2) (7).png";
import Footer from "../layout/Footer";
import SellingSteps from "../component/SellingSteps";
import SellingFAQ from "../component/SellingFAQ";
import background from "../assets/backgroundBanner.png"
// icon
import { FaAngleDown } from "react-icons/fa";

const Sell = ({
  addToCart,
  isSignedIn,
  getUserAfterSignIN,
  cartList,
  getUserName,
  sideMenubar,
  setSideMenubar,
  sideMenu,
}) => {
  const navigate = useNavigate()
  
  return (
    <main>
      <Header
        addToCart={addToCart}
          isSignedIn={isSignedIn}
          getUserAfterSignIN={getUserAfterSignIN}
          cartList={cartList}
          getUserName={getUserName}
          sideMenubar={sideMenubar}
          setSideMenubar={setSideMenubar}
          sideMenu={sideMenu}
      />

      <section className="flex gap-2 justify-between lg:px-5 px-3 items-center my-3">
        <H2_Element text="Sell" />

        <div className="flex gap-1.5 whitespace-nowrap">
          <Button
            buttonTitle="My shop"
            className="w-full py-1 px-4 text-[.8rem] font-normal rounded-3xl"
            handleClick={() => navigate("/")}
          />
          <Button
            buttonTitle="List an item"
            className="bg-blue-700 text-white w-full py-1 px-4 text-[.8rem] font-normal rounded-3xl"
            handleClick={() => navigate("/listItem")}
          />
        </div>
      </section>

      <section className="py-5.5 px-5 my-1 bg-gray-200 lg:mx-5 mx-3  rounded-lg flex lg:flex-row flex-col justify-around gap-3.5 items-center">
        <article className="">
          <H2_Element text="If you don't love it, list it" className={"md:max-w-50"} />
          <p className="md:max-w-80">
            Cash in on your pre-loved pieces - millions of buyers are waiting.
          </p>
          <Button
            buttonTitle="Sell"
            className="bg-blue-700 text-white md:w-80  w-full py-1 px-4 text-[.8rem] font-normal rounded-3xl mt-2"
            handleClick={() => handleAddCart(item)}
          />
        </article>

        <article className="flex gap-1 lg:w-1/2">
          <div className="w-1/2 h-60 bg-gray-700 grid place-content-center">
            <img src={adidas} alt="image" />
          </div>

          <div className="w-1/2 h-60 bg-gray-700 grid place-content-center">
            <img src={nike1} alt="image" />
          </div>
        </article>
      </section>

      <section className="my-10 lg:mx-5 mx-3">
        <H2_Element
          text="Reach millions of trusted buyers on Swap and Shop"
          className={"text-center font-bold text-[1.4rem]"}
        />

        <article className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-5 gap-10 ">
          <div>
            <H2_Element
              text="Quick Listing"
              className={"font-bold text-[1.1rem]"}
            />
            <p>
              List in a few steps with AI-powered help for pricing and
              descriptios, Only pay a final value fee when your item sells.{" "}
              <span className="underline">Learn more about fees</span>
            </p>
          </div>

          <div>
            <H2_Element
              text="Secure payments"
              className={"font-bold text-[1.1rem]"}
            />
            <p>
              Get paid securely with fraud detection, dispute resolution, and
              safeguards against abusive buyers.
            </p>
          </div>

          <div>
            <H2_Element
              text="Easy shipping"
              className={"font-bold text-[1.1rem]"}
            />
            <p>
              Pick your carrier or use our suggestion- get discounted shipping
              labels on Swap and Shop, or arrange a local pickup directle with
              the buyer.
            </p>
          </div>
        </article>
      </section>

      <section className="py-10.5 px-5 my-1 bg-gray-200 lg:mx-5 mx-3  rounded-lg flex lg:flex-row flex-col justify-center gap-3.5 items-center">
        <article className="lg:w-1/2">
          <H2_Element
            text="Selling as a business? We make it easy"
            className={"font-medium"}
          />
          <p>
            We've got powerful tools to help you manage your inventory and
            orders, track your sales, and build you brand.
          </p>
          <Button
            buttonTitle="Learn more"
            className="text-blue-500 border-blue-700 border py-2.5 px-8 text-[1rem] font-semibold rounded-3xl mt-2 hover:bg-blue-700 hover:text-white"
            handleClick={() => handleAddCart(item)}
          />
        </article>
      </section>

      <section className="my-10 lg:mx-5 mx-3 ">
        <H2_Element
          text="Create a great listing"
          className={"font-bold text-[1.4rem]"}
        />
        <p className="-mt-2">Here's six ways to set yourself up for success.</p>

        <article className="flex overflow-x-scroll [&::-webkit-scrollbar]:h-0 mt-5 gap-2 ">
          <SellingSteps
            title={"Write a standout title"}
            className={"bg-orange-200"}
            firstList={
              "We'll recommend search terms that buyers often use, so be sure to add these in the title."
            }
            secondList={
              "Avoid all  caps and focus on specific details like brand, model, size and color."
            }
          />

          <SellingSteps
            title={"Take high-quality photos"}
            className={"bg-yellow-200"}
            firstList={
              "Snap your items from multiple angles in a well-lit place and capture any blemishes for transparency."
            }
            secondList={
              "On the Swap and Shop app, you can clean up your images and add a white background."
            }
          />

          <SellingSteps
            title={"Pick a purchase format"}
            className={"bg-blue-200"}
            firstList={
              "If you want to sell your item quickly, Buy it Now is probably the best format for you."
            }
            secondList={
              "Otherwise, if you want to try your luck and shoott for the best possible price, choose Auction."
            }
          />

          <SellingSteps
            title={"Set the right price"}
            className={"bg-violet-200"}
            firstList={
              "We will recommend a price based on recent sales of similar items."
            }
            secondList={
              "You can even watch how other sellers are pricing their items, or use Best offer to negotiate and sell faster."
            }
          />

          <SellingSteps
            title={"Stand out from the crowd"}
            className={"bg-green-200"}
            firstList={
              "Promote your listing and be seen by more buyers with sponsored placements across the Swap and Shop network."
            }
            secondList={
              "Sell your items faster with Swap and Shop's advertising tools."
            }
          />

          <SellingSteps
            title={"Ship with ease"}
            className={"bg-red-200"}
            firstList={
              "We provide recommendations for delivery, but to save on shipping, use an Swap and Shop delivery label."
            }
            secondList={
              "Plus, if you're selling locally, you can also offer local Pickup."
            }
          />
        </article>
      </section>

      <section className="lg:px-5 px-3">
        <H2_Element text="FAQ" className={"font-bold text-[1.4rem]"} />

            <SellingFAQ 
            title={"How much does it cost to sell?"}
            id={1}
            text={"Once your item sells we generally charge 10-15% of the final value. Your first 250 listings each month are fre and after there's a $0.35 insertion fee per listing."}
            span={"Learn more about fees."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={2}
            title={"What's the best way to ship my item?"}
            text={"Swap and Shop provides recommendations, but you can choose a preffered shipping carrier. Can't make it to your local dropoff? Some offer free \"ship from home\" pickup. Print your shipping labels with Swap and Shop to receive a discount from the carriers we work with. If you don't have a printer, we also offer QR codes for Swap and Shop labels."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={3}
            title={"Can I sell locally on Swap and Shop?"}
            text={"When creating your listing, you can offer local pickup by selecting it in shipping details. Once the buyer pays, they'll receive a QR code and a 6-digit code, which you can scan or enter with the app to confirm the sale."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={4}
            title={"How much will it cost to ship my item?"}
            text={"You can choose the shipping option that offers the greatest value and convenience for you."}
            span={"Learn more about shipping."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={5}
            title={"Where can I get shipping supplies?"}
            text={"You can use any packing supplies you may already have at home or get free boxes from carriers. For an added touch, Swap and Shop branded supplies are available to purchase."}
            span={"Buy Swap and Shop branded packaging."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={6}
            title={"How should I choose my listing pice?"}
            text={"For most items, we can provide a price recommendation for you based on recently sold, similar items. How you price your item can depend on how you prefer to sell it- Auction or Buy It Now. Choose a lower starting price for auctions to create more interest."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={7}
            title={"How does Swap and Shop protect sellers?"}
            text={"We understand that things can happen that are out of your control as a seller. When they do, we have your back."}
            span={"Learn more about seller protection."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={8}
            title={"What can I sell on Swap and Shop?"}
            text={"You can sell almost anything, from homemade goods to used or unused items from your closet. We restrict items that violate any laws or infringe on intellectual property."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={9}
            title={"How do I create an account?"}
            text={"To get started, select List an item. We'll help you create and verify your account and set-up payment informationg during your first listing. Have your preferred payment account details on hand and be ready to receive a call or text on your phone for verification."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={10}
            title={"When will I get paid?"}
            text={"After we confirm the buyer's payment has been received, payouts are seen directly to your bank account, Monday through Friday (excluding bank holidays), withing two business days. Once a payout is initiated, funds are typically available within 1-3 business days depending on your bank's normal processing time."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={11}
            title={"Do I have to pay federal income tax on my sales?"}
            text={"For tax year 2023, IRS regulations require all businesses that process payments, including online marketplaces like Swap and Shop, to issue a Form 1099-K for all sellers whose gross payments exceed the current reporting threshold of $20,000 and 200 transactions. However, just because you receive a 1099-K doesn’t automatically mean that you’ll owe taxes on the amount reported on your 1099-K. Form 1099-K reports proceeds (the total amount made from sales regardless of whether you made a profit or a loss). You will need to determine what amount, if any, reported on Form 1099-K represents income to be declared on your tax return. Generally, you don’t have to pay taxes on the sale of a personal item that was sold at a loss (you sold the item for less than what you paid for it). For example, if you bought a bike for $1,000 last year, and then sold it on eBay today for $700, that $700 you made would generally not be subject to income tax. Check out our"}
            span={"1099-K FAQ."}
            handleSpanClick={() => navigate("/")}
            />

            <SellingFAQ 
            id={12}
            title={"How does Swap and Shop Advertising work?"}
            text={"Swap and Shop Advertising can help you build your business on Swap and Shop with effective advertising tools that create a meaningful connection between you and Swap and Shop's global community of passionate buyers - and help you sell your items faster. Stand out among billions of listings on Swap and Shop by putting your items in front of interested buyers no matter the size of your budget."}
            span={"Learn More."}
            handleSpanClick={() => navigate("/")}
            />
        
      </section>

      <section className="my-5 sm:relative">
        <img src={background} alt="background image"  className="w-full h-fit"/>
        <div className="sm:absolute bg-white sm:w-80 h-fit sm:top-1/2 sm:-translate-y-1/2 lg:left-40 sm:left-20 p-5 rounded-lg">
            <H2_Element
            text="You've got this. We've got your back."
            className={"max-w-45"}
          />
          <Button
            buttonTitle="List an item"
            className="bg-blue-700 text-white w-fit py-3 px-4 text-[.8rem] font-normal rounded-3xl mt-2"
            handleClick={() => handleAddCart(item)}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Sell;
