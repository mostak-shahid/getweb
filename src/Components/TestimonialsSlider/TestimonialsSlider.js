import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testmonialslogo1 from "../../assets/images/testmonials-logo1.svg";
import testmonialslogo2 from "../../assets/images/testmonials-logo2.svg";
import testmonialslogo3 from "../../assets/images/testmonials-logo3.svg";
import testmonialslogo4 from "../../assets/images/testmonials-logo4.svg";

import reviewer1 from "../../assets/images/reviewer1.svg";
import reviewer2 from "../../assets/images/reviewer2.svg";
import reviewer3 from "../../assets/images/reviewer3.svg";
import reviewer4 from "../../assets/images/reviewer4.svg";

import "./TestimonialsSlider.scss";

import Slider from "react-slick";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    };

    const testmonialsItems = [
      {
        logo: testmonialslogo1,
        desc: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc, consequat vel aliquam vitae, porta ac mi. Integer commodo sapien lacus, nec interdum nisi vehicula aliquam.",
        img: reviewer1,
        name: "Cameron Williamson",
        designation: "Finance",
      },
      {
        logo: testmonialslogo2,
        desc: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur.",
        img: reviewer2,
        name: "Eleanor Pena",
        designation: "Chief Executive Officer",
      },
      {
        logo: testmonialslogo3,
        desc: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea",
        img: reviewer3,
        name: "Darlene Robertson",
        designation: "Asistant Backend Developer",
      },
      {
        logo: testmonialslogo4,
        desc: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium fringilla blandit. Etiam ut accumsan leo. Aliquam id mi quam. Vivamus dictum ut erat nec congue. Etiam facilisis lacus ut arcu vulputate, non pellentesque sem convallis. Proin tempus",
        img: reviewer4,
        name: "Annette Black",
        designation: "Ux Designer",
      },
      {
        logo: testmonialslogo1,
        desc: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc, consequat vel aliquam vitae, porta ac mi. Integer commodo sapien lacus, nec interdum nisi vehicula aliquam.",
        img: reviewer1,
        name: "Cameron Williamson",
        designation: "Finance",
      },
      {
        logo: testmonialslogo2,
        desc: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur.",
        img: reviewer2,
        name: "Eleanor Pena",
        designation: "Chief Executive Officer",
      },
      {
        logo: testmonialslogo3,
        desc: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea",
        img: reviewer3,
        name: "Darlene Robertson",
        designation: "Asistant Backend Developer",
      },
      {
        logo: testmonialslogo4,
        desc: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium fringilla blandit. Etiam ut accumsan leo. Aliquam id mi quam. Vivamus dictum ut erat nec congue. Etiam facilisis lacus ut arcu vulputate, non pellentesque sem convallis. Proin tempus",
        img: reviewer4,
        name: "Annette Black",
        designation: "Ux Designer",
      },
    ];

    return (
      <div className="TestimonialsSlider">
        <Slider {...settings}>
          {
            testmonialsItems.map((items) => (
              <div className="singleFeedback isRadius16 p-4 bgClrDarkLight" key={items.logo}>
                <div className="logos mb-4">
                  <img src={items.logo} alt="slider logo" />
                </div>
                <div className="feedbackText textClrGray fw-normal fs-6 mb-5">
                  <p className="mb-0" style={{ maxWidth: "350px", width: "100%" }}>
                    {items.desc}
                  </p>
                </div>
                <div className="reviewerInfo d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="pic">
                      <img src={items.img} alt="pic" />
                    </div>
                    <a href="#" className="info text-decoration-none">
                      <p className="fs-14 fw-bold text-white mb-1">
                        {items.name}
                      </p>
                      <p className="fs-12 fw-medium textClrGray mb-0">
                        {items.designation}
                      </p>
                    </a>
                  </div>
                  <div className="qoute">
                    <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.98242 16.8035C2.40953 17.131 1.87033 17.0491 1.36483 16.5578C0.893039 16.0337 0.893039 15.5588 1.36483 15.1329C2.44322 14.052 3.18462 13.2495 3.58902 12.7254C3.99341 12.1686 4.21246 11.5626 4.24615 10.9075C4.34725 10.1869 4.14506 9.82659 3.63956 9.82659C2.62857 9.82659 1.76923 9.40077 1.06154 8.54914C0.353848 7.6975 0 6.60019 0 5.25723C0 3.68497 0.454944 2.42389 1.36483 1.47399C2.30842 0.491331 3.55531 0 5.1055 0C6.58828 0 7.85202 0.540462 8.8967 1.62139C9.94139 2.70231 10.4637 4.14355 10.4637 5.94509C10.4637 10.2033 7.96996 13.8227 2.98242 16.8035ZM15.5187 16.8035C14.9458 17.131 14.4066 17.0491 13.9011 16.5578C13.4293 16.0665 13.4293 15.5915 13.9011 15.1329C14.9795 14.052 15.7209 13.2495 16.1253 12.7254C16.5297 12.1686 16.7656 11.5626 16.833 10.9075C16.9004 10.1869 16.6813 9.82659 16.1758 9.82659C15.1648 9.82659 14.3055 9.40077 13.5978 8.54914C12.8901 7.66474 12.5363 6.56744 12.5363 5.25723C12.5363 3.68497 12.9912 2.42389 13.9011 1.47399C14.8447 0.491331 16.0916 0 17.6418 0C19.1245 0 20.3883 0.540462 21.433 1.62139C22.4777 2.70231 23 4.14355 23 5.94509C23 10.2033 20.5062 13.8227 15.5187 16.8035Z" fill="#00FFA3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}