import HotelCardForm from "./hotel-card-form";
import HotelCardContainer from "./hotel-card-container";

const PopularStaysForm = () => {
  return (
    <form className="self-stretch flex flex-col items-start justify-start gap-[14.95px]">
      <div className="self-stretch flex flex-row items-center justify-center">
        <b className="relative text-[22.43px] tracking-[0.04em] capitalize inline-block font-components-button-large text-darkslategray-300 text-left w-[826.29px] h-[26.16px] shrink-0 sm:text-3xl">
          Popular Stays
        </b>
        <a
          className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast flex flex-row items-start justify-start gap-[7.48px] md:hidden"
          href="#"
        >
          <div className="relative text-[13.46px] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-200 text-right inline-block w-[105.15px] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
            alt=""
            src="/arrowright3.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
        <HotelCardForm
          dimension="/unsplashrlwe8f8anoc@2x.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          pricePerNight="$575/night"
          imageDimensions="/video1.svg"
          reviewCount="(60 reviews)"
          rating="4.9"
          imageDimensions2="/vector1.svg"
        />
        <HotelCardContainer
          roomDimensions="/unsplashtsn8bpopveo@2x.png"
          accommodationType="2-Story beachfront suite"
          accommodationName="Discovery Shores"
          pricePerNight="$360/night"
          reviewCount="(116 reviews)"
          rating="4.8"
          imageDimensions="/vector2.svg"
        />
        <HotelCardContainer
          roomDimensions="/unsplashrlwe8f8anoc1@2x.png"
          accommodationType="Single deluxe hut"
          accommodationName="Arctic Hut "
          pricePerNight="$420/night"
          reviewCount="(78 reviews)"
          rating="4.7"
          imageDimensions="/vector3.svg"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardForm
          dimension="/unsplashyqrybvxug5q@2x.png"
          roomType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          pricePerNight="$244/night"
          imageDimensions="/video2.svg"
          reviewCount="(63 reviews)"
          rating="4.6"
          imageDimensions2="/vector4.svg"
        />
      </div>
      <div className="rounded-[23.17px] bg-primary-contrast hidden flex-row items-start justify-start gap-[7.48px] md:flex md:mt-4">
        <div className="relative text-[13.46px] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-200 text-right inline-block w-[105.15px] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
          alt=""
          src="/arrowright4.svg"
        />
      </div>
    </form>
  );
};

export default PopularStaysForm;
