import React from 'react';
import Divider from '../Divider/Divider';
import './sideBarInfo.scss';

const SideBarInfo = ({ setStartProject, optionData }) => {
  return (
    <div className="side-bar-info">
      {typeof optionData['contact-sidebar-title-2'] !== 'undefined' && optionData['contact-sidebar-title-2'] ? 
      <h3 className="side-bar-title" dangerouslySetInnerHTML={{__html:optionData['contact-sidebar-title-2']}} /> : ''}
      <div className="contact-info">
        <h6>Let's talk</h6>
        <Divider />
        <div className="contact-item">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="15.5"
              fill="url(#paint0_linear_13855_63233)"
              stroke="#202124"
            />
            <path
              d="M15.3999 16.6004C15.3999 15.9376 15.9372 15.4004 16.5999 15.4004H19.1834C19.77 15.4004 20.2706 15.8245 20.367 16.4031L21.2542 21.7262C21.3408 22.2458 21.0784 22.7612 20.6072 22.9968L18.7494 23.9256C20.089 27.2544 22.7459 29.9113 26.0747 31.2509L27.0035 29.3931C27.2391 28.9219 27.7545 28.6595 28.2741 28.7461L33.5972 29.6333C34.1758 29.7297 34.5999 30.2303 34.5999 30.8169V33.4004C34.5999 34.0631 34.0626 34.6004 33.3999 34.6004H30.9999C22.3843 34.6004 15.3999 27.616 15.3999 19.0004V16.6004Z"
              fill="#00FFA3"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13855_63233"
                x1="25"
                y1="0"
                x2="25"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#191A1D" />
                <stop offset="1" stopColor="#191A1D" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="item-details">
            <p>Phone number</p>
            <h6>
              {typeof optionData['contact-phone'] !== 'undefined' &&
              <a href={['tel', optionData['contact-phone']].join(':')} className="text-white">
                {optionData['contact-phone']['0'] }
              </a>
              }
            </h6>
          </div>
        </div>
        <Divider />
        <div className="contact-item">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="15.5"
              fill="url(#paint0_linear_13855_63234)"
              stroke="#202124"
            />
            <path
              d="M15.4039 20.0601L24.9998 24.858L34.5959 20.06C34.5235 18.7996 33.4785 17.7998 32.1999 17.7998H17.7999C16.5213 17.7998 15.4763 18.7996 15.4039 20.0601Z"
              fill="#4991FF"
            />
            <path
              d="M34.5999 22.7413L24.9998 27.5413L15.3999 22.7414V29.7998C15.3999 31.1253 16.4744 32.1998 17.7999 32.1998H32.1999C33.5254 32.1998 34.5999 31.1253 34.5999 29.7998V22.7413Z"
              fill="#4991FF"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13855_63234"
                x1="25"
                y1="0"
                x2="25"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#191A1D" />
                <stop offset="1" stopColor="#191A1D" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="item-details">
            <p>Email address</p>
            <h6>
              {typeof optionData['contact-email'] !== 'undefined' && 
              <a href={["mailto", optionData["contact-email"][0]].join(":")} className="text-white"> 
              {optionData['contact-email']['0']}
              </a>
              }
            </h6>
          </div>
        </div>
        <Divider />
        <div className="contact-item">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="15.5"
              fill="url(#paint0_linear_13855_63235)"
              stroke="#202124"
            />
            <path
              d="M19.9321 33.8862L20.3077 34.074C21.8389 34.9847 23.5896 35.4608 25.3712 35.4509C30.8561 35.4384 35.3626 30.9214 35.3626 25.4369C35.3626 22.7863 34.3098 20.2409 32.4377 18.3645C30.5681 16.4688 28.0138 15.4004 25.3518 15.4004C19.8921 15.4004 15.3999 19.8929 15.3999 25.3518C15.3999 25.395 15.3999 25.4375 15.4005 25.4807C15.417 27.3367 15.9361 29.1535 16.9027 30.738L17.1531 31.1136L16.1516 34.8062L19.9321 33.8862V33.8862Z"
              fill="#00E676"
            />
            <path
              d="M30.9854 27.9399L30.2969 27.627C30.2969 27.627 29.2954 27.1888 28.6695 26.8759C28.6069 26.8759 28.5443 26.8133 28.4817 26.8133C28.3274 26.8171 28.1766 26.8602 28.0436 26.9385C27.9103 27.0167 27.981 27.0011 27.1047 28.0025C27.0453 28.1195 26.9232 28.1928 26.7918 28.1902H26.7292C26.6351 28.1745 26.5479 28.1309 26.4788 28.0651L26.1659 27.9399C25.4944 27.6556 24.8795 27.2528 24.3507 26.7507C24.2256 26.6256 24.0378 26.5004 23.9126 26.3752C23.4492 25.9314 23.0491 25.4259 22.7234 24.8731L22.6608 24.7479C22.6064 24.6714 22.5642 24.587 22.5356 24.4976C22.5192 24.3892 22.5414 24.2784 22.5982 24.1847C22.6552 24.0908 22.8486 23.8717 23.0363 23.684C23.2241 23.4962 23.2241 23.371 23.3493 23.2458C23.4136 23.1565 23.4581 23.0544 23.4797 22.9465C23.5013 22.8385 23.4995 22.7272 23.4745 22.62C23.1828 21.8101 22.8485 21.0162 22.473 20.2417C22.3724 20.0851 22.2156 19.9731 22.0349 19.9287H21.3464C21.2212 19.9287 21.096 19.9913 20.9708 19.9913L20.9082 20.0539C20.7831 20.1165 20.6579 20.2417 20.5327 20.3042C20.4075 20.3668 20.3449 20.5546 20.2198 20.6798C19.7822 21.2327 19.5401 21.9149 19.5312 22.62C19.5382 23.1159 19.6446 23.6054 19.8442 24.0595L19.9068 24.2472C20.4688 25.4488 21.2548 26.5321 22.2227 27.4392L22.473 27.6895C22.6552 27.8404 22.8228 28.0081 22.9737 28.1902C24.2706 29.3187 25.811 30.1323 27.474 30.5686C27.6618 30.6312 27.9122 30.6312 28.0999 30.6937H28.7258C29.053 30.6776 29.373 30.5923 29.6647 30.4434C29.818 30.3739 29.9645 30.2901 30.1028 30.193L30.228 30.0679C30.3532 29.9427 30.4784 29.8801 30.6036 29.7549C30.7259 29.6459 30.8314 29.5194 30.9165 29.3794C31.0367 29.099 31.1212 28.8049 31.1669 28.5032V28.0651C31.1106 28.0145 31.0474 27.9724 30.9791 27.9399"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13855_63235"
                x1="25"
                y1="0"
                x2="25"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#191A1D" />
                <stop offset="1" stopColor="#191A1D" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="item-details">
            <p>WhatsApp</p>
            <h6>
              {typeof optionData['contact-social-whatapp'] !== 'undefined' && 
              <a href={optionData['contact-social-whatapp']?.text_field_2} className="text-white" target="_blank" rel="noreferrer">{optionData['contact-social-whatapp']?.text_field_1}</a>              
              }
            </h6>
          </div>
        </div>
        <Divider />
        <div className="contact-item">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="15.5"
              fill="url(#paint0_linear_13855_63232)"
              stroke="#202124"
            />
            <g clipPath="url(#clip0_13855_63232)">
              <ellipse
                cx="21.0714"
                cy="20.7143"
                rx="6.07143"
                ry="5.71429"
                fill="#184AA9"
              />
              <circle cx="29.2866" cy="29.2856" r="5.71429" fill="#2173F0" />
              <circle
                cx="25.0006"
                cy="25.0006"
                r="9.28571"
                fill="url(#paint1_linear_13855_63232)"
              />
              <path
                d="M25.0483 20C26.5578 20 28.5706 20.7143 28.0674 21.6667C27.3796 22.9684 26.0547 21.6667 25.0483 21.6667C24.0419 21.6667 23.5387 22.1429 23.5387 22.619C23.5387 23.0952 23.7903 23.5714 25.0483 24.0476C26.3062 24.5238 28.5706 25.2381 28.5706 27.1429C28.5706 29.0476 26.8094 30 24.5451 30C22.5167 30 21.0228 29.0476 21.526 28.0952C22.1046 27 23.5387 28.3333 24.5451 28.3333C25.5515 28.3333 26.5578 28.0952 26.5578 27.1429C26.5578 26.1905 25.0483 25.9524 24.0419 25.4762C22.7839 24.8809 21.526 24.2857 21.526 22.619C21.526 20.9524 23.5387 20 25.0483 20Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_13855_63232"
                x1="25"
                y1="0"
                x2="25"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#191A1D" />
                <stop offset="1" stopColor="#191A1D" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_13855_63232"
                x1="17.7783"
                y1="19.326"
                x2="31.7069"
                y2="30.9331"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#297AC0" />
                <stop offset="1" stopColor="#48B0F9" />
              </linearGradient>
              <clipPath id="clip0_13855_63232">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(15 15)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="item-details">
            <p>Skype</p>
            <h6>
              {typeof optionData['contact-social-skype'] !== 'undefined' && 
              <a href={optionData['contact-social-skype']?.text_field_2} className="text-white">{optionData['contact-social-skype']?.text_field_1}</a>
              }
              </h6>
          </div>
        </div>
        <Divider />
      </div>
      {typeof optionData['contact-request-link'] !== 'undefined' && 
      <a href={optionData['contact-request-link']} className="cta-btn" target="_blank" rel="noreferrer">
        <span className="left-content">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3335 3.33301V8.33301"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.6665 3.33301V8.33301"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.8335 15.1504H34.1668"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35 14.1663V27.2663C33.7833 25.883 32 24.9997 30 24.9997C26.3167 24.9997 23.3333 27.983 23.3333 31.6663C23.3333 32.9163 23.6833 34.0997 24.3 35.0997C24.65 35.6997 25.1 36.233 25.6167 36.6663H13.3333C7.5 36.6663 5 33.333 5 28.333V14.1663C5 9.16634 7.5 5.83301 13.3333 5.83301H26.6667C32.5 5.83301 35 9.16634 35 14.1663Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9926 22.8333H20.0076"
              stroke="url(#paint0_linear_13854_63203)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.8237 22.8333H13.8387"
              stroke="url(#paint1_linear_13854_63203)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.8237 27.8333H13.8387"
              stroke="url(#paint2_linear_13854_63203)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.6668 31.6667C36.6668 32.9167 36.3168 34.1 35.7002 35.1C34.5502 37.0333 32.4335 38.3333 30.0002 38.3333C28.3168 38.3333 26.7835 37.7167 25.6168 36.6667C25.1002 36.2333 24.6502 35.7 24.3002 35.1C23.6835 34.1 23.3335 32.9167 23.3335 31.6667C23.3335 27.9833 26.3168 25 30.0002 25C32.0002 25 33.7835 25.8833 35.0002 27.2666C36.0335 28.45 36.6668 29.9833 36.6668 31.6667Z"
              stroke="url(#paint3_linear_13854_63203)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.4004 31.6666L29.0504 33.3165L32.6004 30.0332"
              stroke="url(#paint4_linear_13854_63203)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13854_63203"
                x1="19.1685"
                y1="21.9124"
                x2="21.3676"
                y2="22.5414"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#00FFA3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_13854_63203"
                x1="12.9995"
                y1="21.9124"
                x2="15.1987"
                y2="22.5414"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#00FFA3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_13854_63203"
                x1="12.9995"
                y1="26.9124"
                x2="15.1987"
                y2="27.5414"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#00FFA3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_13854_63203"
                x1="23.3335"
                y1="24.2988"
                x2="40.9567"
                y2="29.35"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#00FFA3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_13854_63203"
                x1="27.4004"
                y1="29.8605"
                x2="33.5673"
                y2="32.6599"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#00FFA3" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          {typeof optionData['contact-sidebar-button-title'] !== 'undefined' && optionData['contact-sidebar-button-title'] ? optionData['contact-sidebar-button-title'] : 'Schedule a call'}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="right-arrow"
        >
          <path
            d="M14.4302 5.92969L20.5002 11.9997L14.4302 18.0697"
            stroke="#6B6E78"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 12H20.33"
            stroke="#6B6E78"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      }
      <button className="cta-btn" onClick={() => setStartProject(true)}>
        <span className="left-content">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6167 14.7998H29.3667"
              stroke="url(#paint0_linear_13854_63208)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6333 14.7998L11.8833 16.0498L15.6333 12.2998"
              stroke="url(#paint1_linear_13854_63208)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.6167 26.4668H29.3667"
              stroke="url(#paint2_linear_13854_63208)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6333 26.4668L11.8833 27.7168L15.6333 23.9668"
              stroke="url(#paint3_linear_13854_63208)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0002 36.6663H25.0002C33.3335 36.6663 36.6668 33.333 36.6668 24.9997V14.9997C36.6668 6.66634 33.3335 3.33301 25.0002 3.33301H15.0002C6.66683 3.33301 3.3335 6.66634 3.3335 14.9997V24.9997C3.3335 33.333 6.66683 36.6663 15.0002 36.6663Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13854_63208"
                x1="20.6167"
                y1="14.7472"
                x2="22.3336"
                y2="19.053"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#00FFA3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_13854_63208"
                x1="10.6333"
                y1="12.1026"
                x2="16.8735"
                y2="14.4874"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#00FFA3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_13854_63208"
                x1="20.6167"
                y1="26.4142"
                x2="22.3336"
                y2="30.72"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#00FFA3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_13854_63208"
                x1="10.6333"
                y1="23.7696"
                x2="16.8735"
                y2="26.1544"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3" />
                <stop offset="1" stopColor="#00FFA3" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          {typeof optionData['contact-sidebar-button-title-2'] !== 'undefined' && optionData['contact-sidebar-button-title-2'] ? optionData['contact-sidebar-button-title-2'] : 'Start a project'}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="right-arrow"
        >
          <path
            d="M14.4302 5.92969L20.5002 11.9997L14.4302 18.0697"
            stroke="#6B6E78"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 12H20.33"
            stroke="#6B6E78"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBarInfo;