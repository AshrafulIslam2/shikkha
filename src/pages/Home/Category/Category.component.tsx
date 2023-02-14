import { useEffect } from "react";
import manPic from "../../../images/home/categoryChoice/men.jpeg";
import gadgetPic from "../../../images/home/categoryChoice/gadget.jpeg";
import voucherPic from "../../../images/home/categoryChoice/voucher.jpeg";
import { Link } from "react-router-dom";

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mx-10 my-12">
      {/* Choice category section start  */}
      <h1 className="text-3xl font-semibold mb-10">Choice Category</h1>
      <section className="flex flex-row justify-between items-center">
        <div className="flex flex-col items-center">
          <Link
            to={"/catagoris/mansfashion"}
            className="bg-slate-50 p-6 rounded-full mb-4"
          >
            <img className="h-8 w-8" src={manPic} alt="Man Fashion" />
          </Link>
          <Link to={"/catagoris/mansfashion"} className=" text-left">
            Man Fashion
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to={"/catagoris/gadget"}
            className="bg-slate-50 p-6 rounded-full mb-4"
          >
            <img className="h-8 w-8" src={gadgetPic} alt="gadget electronic" />
          </Link>
          <Link to={"/catagoris/gadget"} className=" text-left">
            Gadget Electronic
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to={"/catagoris/voucher"}
            className="bg-slate-50 p-6 rounded-full mb-4"
          >
            <img className="h-8 w-8" src={voucherPic} alt="voucher game" />
          </Link>
          <Link to={"/catagoris/voucher"} className=" text-left">
            Voucher
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to={"/catagoris/property"}
            className="bg-slate-50 p-6 rounded-full mb-4"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_207)">
                <path
                  d="M23.25 25.3333H25.95V14.6667H17.85V25.3333H20.55V17.3333H23.25V25.3333ZM4.35 25.3333V5.33333C4.35 4.97971 4.49223 4.64057 4.74541 4.39052C4.99858 4.14048 5.34196 4 5.7 4H24.6C24.958 4 25.3014 4.14048 25.5546 4.39052C25.8078 4.64057 25.95 4.97971 25.95 5.33333V12H28.65V25.3333H30V28H3V25.3333H4.35ZM9.75 14.6667V17.3333H12.45V14.6667H9.75ZM9.75 20V22.6667H12.45V20H9.75ZM9.75 9.33333V12H12.45V9.33333H9.75Z"
                  fill="url(#paint0_linear_3_207)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3_207"
                  x1="3"
                  y1="16"
                  x2="30"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EC008C" />
                  <stop offset="1" stopColor="#FC6767" />
                </linearGradient>
                <clipPath id="clip0_3_207">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to={"/catagoris/property"} className=" text-left">
            Property
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to={"/catagoris/kidsfashion"}
            className="bg-slate-50 p-6 rounded-full mb-4"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_213)">
                <path
                  d="M9.33333 5.31579V14.5263L16 11.2368L22.6667 14.5263V5.31579H26.6667C27.0203 5.31579 27.3594 5.45442 27.6095 5.70118C27.8595 5.94793 28 6.28261 28 6.63158V27.6842C28 28.0332 27.8595 28.3679 27.6095 28.6146C27.3594 28.8614 27.0203 29 26.6667 29H5.33333C4.97971 29 4.64057 28.8614 4.39052 28.6146C4.14048 28.3679 4 28.0332 4 27.6842V6.63158C4 6.28261 4.14048 5.94793 4.39052 5.70118C4.64057 5.45442 4.97971 5.31579 5.33333 5.31579H9.33333ZM16 10.5789L10 4H22L16 10.5789ZM17.3333 14.8368L16 14.1789L14.6667 14.8368V26.3684H17.3333V14.8368ZM20 18.4737V21.1053H25.3333V18.4737H20Z"
                  fill="url(#paint0_linear_3_213)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3_213"
                  x1="4"
                  y1="16.5"
                  x2="28"
                  y2="16.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#02AAB0" />
                  <stop offset="1" stopColor="#00CDAC" />
                </linearGradient>
                <clipPath id="clip0_3_213">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to={"/catagoris/kidsfashion"} className="text-left">
            Kids Fashion
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to={"/catagoris/coumputer&laptop"}
            className="bg-slate-50 p-6 rounded-full mb-4"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_219)">
                <path
                  d="M17.85 23.7368V26.3684H23.25V29H9.75004V26.3684H15.15V23.7368H4.33925C4.16198 23.7358 3.98666 23.7007 3.82333 23.6335C3.66001 23.5663 3.5119 23.4683 3.38749 23.3453C3.26308 23.2222 3.16482 23.0764 3.09834 22.9162C3.03185 22.756 2.99845 22.5846 3.00006 22.4118V5.325C3.00006 4.59342 3.6143 4 4.33925 4H28.6608C29.4006 4 30 4.59079 30 5.325V22.4118C30 23.1434 29.3857 23.7368 28.6608 23.7368H17.85Z"
                  fill="url(#paint0_linear_3_219)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3_219"
                  x1="3"
                  y1="16.5"
                  x2="30"
                  y2="16.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF512F" />
                  <stop offset="1" stopColor="#F09819" />
                </linearGradient>
                <clipPath id="clip0_3_219">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to={"/catagoris/coumputer&laptop"} className="text-left">
            Computer & Laptop
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to={"/catagoris/womensfashion"}
            className="bg-slate-50 p-6 rounded-full mb-4"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_225)">
                <path
                  d="M28.65 4C29.008 4 29.3514 4.14048 29.6046 4.39052C29.8578 4.64057 30 4.97971 30 5.33333V14.6667C30 15.0203 29.8578 15.3594 29.6046 15.6095C29.3514 15.8595 29.008 16 28.65 16H25.9487L25.95 26.6667C25.95 27.0203 25.8078 27.3594 25.5546 27.6095C25.3014 27.8595 24.958 28 24.6 28H8.4C8.04196 28 7.69858 27.8595 7.44541 27.6095C7.19223 27.3594 7.05 27.0203 7.05 26.6667L7.04865 15.9987L4.35 16C3.99196 16 3.64858 15.8595 3.39541 15.6095C3.14223 15.3594 3 15.0203 3 14.6667V5.33333C3 4.97971 3.14223 4.64057 3.39541 4.39052C3.64858 4.14048 3.99196 4 4.35 4H12.45C12.45 5.06087 12.8767 6.07828 13.6362 6.82843C14.3957 7.57857 15.4259 8 16.5 8C17.5741 8 18.6043 7.57857 19.3638 6.82843C20.1233 6.07828 20.55 5.06087 20.55 4H28.65Z"
                  fill="url(#paint0_linear_3_225)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3_225"
                  x1="3"
                  y1="16"
                  x2="30"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F857A6" />
                  <stop offset="1" stopColor="#FF5858" />
                </linearGradient>
                <clipPath id="clip0_3_225">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to={"/catagoris/womensfashion"} className="text-left">
            Woman Fashion
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to={"/catagoris/sports"}
            className="bg-slate-50 p-6 rounded-full mb-4"
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9934 15.3441L16.3895 16.7278C14.9591 19.8963 14.8086 23.4951 15.9697 26.7718C15.1551 26.9242 14.3281 27.0006 13.4993 27C11.5865 27.003 9.695 26.598 7.9511 25.812L13.9934 15.3441V15.3441ZM18.7411 18.0873L24.4567 21.3867C22.9679 23.4533 20.9265 25.0582 18.567 26.0172C17.6683 23.5906 17.6721 20.9217 18.5778 18.4977L18.7411 18.0873V18.0873ZM9.26053 12.6117L11.6567 13.9941L5.61437 24.4566C3.37928 22.8467 1.68859 20.5931 0.768111 17.9968C4.02998 17.3945 6.9549 15.6096 8.98245 12.9843L9.26053 12.6117V12.6117ZM26.8717 11.6316C26.9568 12.2431 27 12.8668 27 13.5C27.003 15.4129 26.598 17.3045 25.812 19.0485L20.0937 15.7477C21.7037 13.6227 24.0439 12.1697 26.6625 11.6694L26.8717 11.6316V11.6316ZM1.18929 7.95285L6.90625 11.2536C5.25175 13.4371 2.82846 14.9092 0.128244 15.3711C0.0427723 14.7511 -7.60724e-05 14.1259 1.01384e-07 13.5C1.01384e-07 11.5222 0.425229 9.6444 1.18794 7.9515L1.18929 7.95285ZM21.3856 2.54206C23.6207 4.15197 25.3114 6.40555 26.2319 9.0018C22.9694 9.6054 20.0442 11.3911 18.0162 14.017L17.7395 14.3896L15.3433 13.0059L21.3856 2.54341V2.54206ZM13.4993 9.53694e-06C15.477 9.53694e-06 17.3547 0.425259 19.0475 1.18801L13.0052 11.6559L10.6091 10.2735C12.0403 7.10428 12.1907 3.5044 11.0289 0.226809C11.8436 0.0749461 12.6706 -0.000979408 13.4993 9.53694e-06V9.53694e-06ZM8.43302 0.985509C9.33033 3.41253 9.32554 6.08122 8.41952 8.505L8.25753 8.91405L2.54192 5.6133C3.97317 3.62742 5.91569 2.06643 8.16304 1.09621L8.43302 0.984159V0.985509Z"
                fill="url(#paint0_linear_3_233)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3_233"
                  x1="0"
                  y1="13.5"
                  x2="27"
                  y2="13.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00D2FF" />
                  <stop offset="1" stopColor="#3A7BD5" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <Link to={"/catagoris/sports"} className="text-left">
            Sports
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to={"/catagoris/game"}
            className="bg-slate-50 p-6 rounded-full mb-4"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_237)">
                <path
                  d="M22.0909 5C24.1885 5 26.2002 5.82969 27.6835 7.30653C29.1667 8.78338 30 10.7864 30 12.875V18.125C30 20.2136 29.1667 22.2166 27.6835 23.6935C26.2002 25.1703 24.1885 26 22.0909 26H8.90909C6.81147 26 4.79976 25.1703 3.31652 23.6935C1.83328 22.2166 1 20.2136 1 18.125V12.875C1 10.7864 1.83328 8.78338 3.31652 7.30653C4.79976 5.82969 6.81147 5 8.90909 5H22.0909ZM12.8636 11.5625H10.2273V14.1875H7.59091V16.8125H10.226L10.2273 19.4375H12.8636L12.8623 16.8125H15.5V14.1875H12.8636V11.5625ZM23.4091 16.8125H20.7727V19.4375H23.4091V16.8125ZM20.7727 11.5625H18.1364V14.1875H20.7727V11.5625Z"
                  fill="url(#paint0_linear_3_237)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3_237"
                  x1="1"
                  y1="15.5"
                  x2="30"
                  y2="15.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D38312" />
                  <stop offset="1" stopColor="#A83279" />
                </linearGradient>
                <clipPath id="clip0_3_237">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to={"/catagoris/game"} className="text-left">
            Gaming
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to={"/catagoris/flim&music"}
            className="bg-slate-50 p-6 rounded-full mb-4"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_243)">
                <path
                  d="M3 5.324C3.00247 4.97384 3.14432 4.63869 3.39489 4.39096C3.64547 4.14322 3.98466 4.00279 4.3392 4H28.6608C29.4006 4 30 4.59333 30 5.324V26.676C29.9975 27.0262 29.8557 27.3613 29.6051 27.609C29.3545 27.8568 29.0153 27.9972 28.6608 28H4.3392C3.9839 27.9996 3.64327 27.86 3.39216 27.6117C3.14105 27.3635 3 27.0269 3 26.676V5.324ZM5.7 6.66667V9.33333H8.4V6.66667H5.7ZM24.6 6.66667V9.33333H27.3V6.66667H24.6ZM5.7 12V14.6667H8.4V12H5.7ZM24.6 12V14.6667H27.3V12H24.6ZM5.7 17.3333V20H8.4V17.3333H5.7ZM24.6 17.3333V20H27.3V17.3333H24.6ZM5.7 22.6667V25.3333H8.4V22.6667H5.7ZM24.6 22.6667V25.3333H27.3V22.6667H24.6Z"
                  fill="url(#paint0_linear_3_243)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3_243"
                  x1="3"
                  y1="16"
                  x2="30"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFB75E" />
                  <stop offset="1" stopColor="#ED8F03" />
                </linearGradient>
                <clipPath id="clip0_3_243">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to={"/catagoris/flim&music"} className="text-left">
            Film & Music
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to={"/catagoris"} className="bg-slate-50 p-6 rounded-full mb-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_249)">
                <path
                  d="M8.59211 3C9.32647 3 10.0536 3.14464 10.7321 3.42567C11.4106 3.7067 12.027 4.11861 12.5463 4.63789C13.0656 5.15716 13.4775 5.77363 13.7585 6.4521C14.0396 7.13056 14.1842 7.85774 14.1842 8.5921V14.1842H8.59211C7.10899 14.1842 5.68661 13.595 4.63789 12.5463C3.58917 11.4976 3 10.0752 3 8.5921C3 7.10899 3.58917 5.68661 4.63789 4.63789C5.68661 3.58917 7.10899 3 8.59211 3ZM8.59211 16.8158H14.1842V22.4079C14.1842 23.5139 13.8562 24.5951 13.2418 25.5147C12.6273 26.4343 11.7539 27.1511 10.7321 27.5743C9.71029 27.9976 8.5859 28.1083 7.50114 27.8925C6.41638 27.6768 5.41996 27.1442 4.63789 26.3621C3.85582 25.58 3.32323 24.5836 3.10745 23.4989C2.89168 22.4141 3.00242 21.2897 3.42568 20.2679C3.84893 19.2461 4.56568 18.3727 5.4853 17.7582C6.40492 17.1438 7.48609 16.8158 8.59211 16.8158ZM22.4079 3C23.891 3 25.3134 3.58917 26.3621 4.63789C27.4108 5.68661 28 7.10899 28 8.5921C28 10.0752 27.4108 11.4976 26.3621 12.5463C25.3134 13.595 23.891 14.1842 22.4079 14.1842H16.8158V8.5921C16.8158 7.10899 17.405 5.68661 18.4537 4.63789C19.5024 3.58917 20.9248 3 22.4079 3ZM16.8158 16.8158H22.4079C23.5139 16.8158 24.5951 17.1438 25.5147 17.7582C26.4343 18.3727 27.1511 19.2461 27.5743 20.2679C27.9976 21.2897 28.1083 22.4141 27.8925 23.4989C27.6768 24.5836 27.1442 25.58 26.3621 26.3621C25.58 27.1442 24.5836 27.6768 23.4989 27.8925C22.4141 28.1083 21.2897 27.9976 20.2679 27.5743C19.2461 27.1511 18.3727 26.4343 17.7582 25.5147C17.1438 24.5951 16.8158 23.5139 16.8158 22.4079V16.8158Z"
                  fill="url(#paint0_linear_3_249)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3_249"
                  x1="3"
                  y1="15.5"
                  x2="28"
                  y2="15.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6A3093" />
                  <stop offset="1" stopColor="#A044FF" />
                </linearGradient>
                <clipPath id="clip0_3_249">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to={"/catagoris"} className="text-left">
            View All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Category;
