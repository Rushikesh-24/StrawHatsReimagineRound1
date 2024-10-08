import React from "react";
import { Pacifico } from "next/font/google";
import Link from "next/link";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col gap-2">
      <div className="h-4/5 w-full  flex text-white md:gap-0 gap-1">
        <div className="w-1/3 h-full flex  items-center md:flex-row flex-col">
          <div className="w-1/4 md:h-full h-1/5 flex items-center justify-center md:text-3xl lg:text-4xl text-sm font-semibold md:font-normal">
            <p className="transform md:-rotate-90 whitespace-nowrap">KNOW US</p>
          </div>
          <div className="w-3/4 md:h-full md:text-left text-center h-4/5 flex flex-col justify-around text-xs md:text-base">
            <Link href={"https://amul.com/m/about-us"} className="leading-3 md:leading-6">About Us</Link>
            <p className="leading-3 md:leading-6">Vission and Mission</p>
            <p className="leading-3 md:leading-6">Crafting Food</p>
            <p className="leading-3 md:leading-6">Nutrition</p>
          </div>
        </div>
        <div className="w-1/3 h-full flex  items-center md:flex-row flex-col">
          <div className="w-1/4 md:h-full h-1/5 flex items-center justify-center md:text-3xl lg:text-4xl text-sm font-semibold md:font-normal">
            <p className="transform md:-rotate-90 whitespace-nowrap">
              RELEASES
            </p>
          </div>
          <div className="w-3/4 md:h-full md:text-left text-center h-4/5 flex flex-col justify-around text-xs md:text-base">
            <p className="leading-3 md:leading-6">News</p>
            <Link href={"https://amul.com/m/press_release"} className="leading-3 md:leading-6">
              Press Releases
            </Link>
            <Link href={"https://amul.com/m/awards"} className="leading-3 md:leading-6">Awards</Link>
            <p className="leading-3 md:leading-6">All Campaigns</p>
          </div>
        </div>
        <div className="w-1/3 h-full flex  items-center md:flex-row flex-col">
          <div className="w-1/4 md:h-full h-1/5 flex items-center justify-center md:text-3xl lg:text-4xl text-sm font-semibold md:font-normal">
            <p className="transform md:-rotate-90 whitespace-nowrap">OTHERS</p>
          </div>
          <div className="w-3/4 md:h-full md:text-left text-center h-4/5 flex flex-col justify-around text-xs md:text-base">
            <Link href={"https://amul.com/m/careers"} className="leading-3 md:leading-6">Careers</Link>
            <p className="leading-3 md:leading-6">Store Locator</p>
            <p className="leading-3 md:leading-6">e-Tendering</p>
            <Link
              href={
                "https://amul.com/files/pdf/vendor_registration_form_plastic_waste_management_2023-24_11062023.pdf"
              }
              className="leading-3 md:leading-6"
            >
              Vendor Registration
            </Link>
          </div>
        </div>
      </div>
      <div className="h-1/5 w-full  flex justify-around items-center">
        <div className=" w-1/3 h-full flex justify-between items-center lg:px-16 md:px-14 sm:px-12 px-4">
          <a href="https://www.facebook.com/amul.coop" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="md:size-14 size-10"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/amul_india/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="md:size-14 size-10"
              viewBox="0 0 48 48"
            >
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                cx="19.38"
                cy="42.035"
                r="44.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fd5"></stop>
                <stop offset=".328" stopColor="#ff543f"></stop>
                <stop offset=".348" stopColor="#fc5245"></stop>
                <stop offset=".504" stopColor="#e64771"></stop>
                <stop offset=".643" stopColor="#d53e91"></stop>
                <stop offset=".761" stopColor="#cc39a4"></stop>
                <stop offset=".841" stopColor="#c837ab"></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                cx="11.786"
                cy="5.54"
                r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#4168c9"></stop>
                <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              ></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="w-1/3 h-full relative flex justify-center items-center flex-col text-xs sm:text-sm md:text-lg gap-2">
          <GradientVer />
          <h2
            className={`${pacifico.className} lg:text-3xl md:text-2xl text-xl text-transparent bg-gradient-to-r from-[#868EE1] to-[#283BF8] bg-clip-text h-1/3 md:h-1/2 lg:h-full flex justify-center items-center`}
          >
            Say Hello
          </h2>
          
          <h2 className="font-semibold text-white">@amul.coop</h2>
        </div>
        <div className=" w-1/3 h-full flex justify-between items-center lg:px-16 md:px-14 sm:px-12 px-4">
          <a href="https://www.youtube.com/user/amultv" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="md:size-14 size-10"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FF3D00"
                d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
              ></path>
              <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/amul_coop" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="md:size-14 size-10"
              viewBox="0 0 48 48"
            >
              <path
                fill="#03A9F4"
                d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

function GradientVer() {
  return (
    <svg className="absolute z-[100] bottom-0" width="1080" height="700" viewBox="0 0 1080 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8" filter="url(#filter0_f_462_94)">
        <circle cx="540" cy="540" r="187" fill="#283BF8"/>
      </g>
      <defs>
        <filter id="filter0_f_462_94" x="0.171875" y="0.171875" width="1079.66" height="1079.66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="176.414" result="effect1_foregroundBlur_462_94"/>
        </filter>
      </defs>
    </svg>

  );
}
