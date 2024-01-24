import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner"
import Footer from "../Components/Footer"
import FooterBottom from "../Components/FooterBottom"
import Sale from "../Sales/Sales"
import HeaderBottom from "../Header/HeaderBottom";
// import NewArrivals from "../NewArrivals/NewArrivals";
// import Signup from "../Signup";
// import Signin from "../Signin";

const Homepage = () => {
  return (
    <div>
      <Header />
      <HeaderBottom/>
      <Banner />
      <Sale/>
      {/* <NewArrivals/> */}
      <Footer />
      <FooterBottom/>
      {/* <Signup/> */}
      {/* <Signin/> */}
    </div>
  );
};

export default Homepage;
