import React from "react";
import Header from "../Components/Header";
import Banner from "../Banner/Banner"
import Footer from "../Components/Footer"
import FooterBottom from "../Components/FooterBottom"
// import Signup from "../Signup";
// import Signin from "../Signin";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Footer />
      <FooterBottom/>
      {/* <Signup/> */}
      {/* <Signin/> */}
    </div>
  );
};

export default Homepage;
