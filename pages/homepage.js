import Head from "next/head";
import { TextField } from "@mui/material";
import Header from "../components/header";
import SearchContainer from "../components/search-container";
import FlightContainer from "../components/flight-container";
import PopularDestinationsContainer from "../components/popular-destinations-container";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStaysForm from "../components/popular-stays-form";
import VariantContainedSizeLarge from "/";
import FooterLinks from "../components/footer-links";

const Homepage = () => {
  return (
    <div className="relative rounded-2xl bg-primary-contrast w-full h-[850.71px] overflow-hidden flex flex-col items-center justify-start gap-[51.58px] text-center text-[13.46px] text-cornflowerblue-200 font-components-button-large hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange">
      <div className="self-stretch flex flex-col items-center justify-start">
        <Header />
        <SearchContainer />
      </div>
      <div className="w-full flex flex-col py-0 px-[59.803165435791016px] box-border items-center justify-start gap-[59.8px] max-w-[1280px] md:pl-[30px] md:pr-[30px] md:box-border">
        <FlightContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysForm />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch relative h-[395.45px] overflow-hidden shrink-0 bg-[url('/frame-708@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="[position:relative!important] top-[38.87px] left-[auto!important] w-[410.4px] flex flex-col p-[14.950791358947754px] box-border items-center justify-start gap-[22.43px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-[5.23px]">
              <b className="self-stretch relative tracking-[0.04em] uppercase">
                subscribe to our newsletter
              </b>
              <b className="self-stretch relative text-[22.43px] text-darkslategray-100">
                Get weekly updates
              </b>
            </div>
            <div className="self-stretch rounded-[8.97px] bg-primary-contrast shadow-[0px_0px_17.94px_rgba(0,_0,_0,_0.03)] flex flex-col py-[20.931108474731445px] px-[22.426189422607422px] items-start justify-start gap-[12.71px] text-left text-slategray border-[0.7px] border-solid border-whitesmoke">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[25.42px]">
                  Fill in your details to join the party!
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[7.48px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Your name"
                    size="medium"
                    margin="none"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Email address"
                    size="medium"
                    margin="none"
                  />
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-orange rounded-[2.99px] w-[122.6px] h-[41.86px] overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-saddlebrown sm:w-full sm:hover:bg-peru-200">
                <VariantContainedSizeLarge
                  button="submit"
                  variantContainedSizeLargeBoxSizing="border-box"
                  buttonFontSize="15px"
                  buttonLineHeight="26px"
                  buttonColor="#fff"
                  buttonDisplay="inline-block"
                />
              </button>
            </div>
          </div>
        </div>
        <FooterLinks />
      </div>
    </div>
  );
};

export default Homepage;
