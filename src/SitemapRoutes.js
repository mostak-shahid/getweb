import React from "react";
import { Route, Routes } from 'react-router';
const pages = [
  {"post_name": "about" },
  {"post_name": "android-app-development" },//android-app-development
  {"post_name": "appis" },
  {"post_name": "back-end-developer" },
  {"post_name": "blog" },
  {"post_name": "branding" },
  {"post_name": "careers" },
  {"post_name": "contact" },
  {"post_name": "cross-platform-mobile-development" },//Cross Platform Mobile Development
  {"post_name": "custom-application-development" },
  {"post_name": "custom-web-apps" },
  //{"post_name": "elementor-363" },
  {"post_name": "front-end-developer" },
  {"post_name": "front-end-developer-services" },
  {"post_name": "full-stack-developer" },
  //{"post_name": "gutenberg" },
  //{"post_name": "home" },
  {"post_name": "ios-app-development" },//iOS App Development
  {"post_name": "job-application-form" },
  {"post_name": "lean-product-development" },
  {"post_name": "mobile-app-developer" },
  {"post_name": "our-process" },
  {"post_name": "portfolios" },
  {"post_name": "product-design" },
  {"post_name": "product-design-sprint" },
  {"post_name": "progressive-web-apps" },
  {"post_name": "research-development" },
  {"post_name": "saas-application-development" },
  //{"post_name": "sample-page" },
  {"post_name": "scoping-session" },
  {"post_name": "single-job-page" },
  {"post_name": "ui-design" },
  {"post_name": "ux-design" },
  {"post_name": "ux-review" },
  {"post_name": "ux-writing" },
  {"post_name": "magento" },
  {"post_name": "workshops" },
  {"post_name": "wordpress" },
  {"post_name": "e-commerce-app" },
  {"post_name": "e-commerce-web" },
  {"post_name": "aws" },
  {"post_name": "azure" },
  {"post_name": "google-cloud" },
  {"post_name": "app-development" },
  {"post_name": "cloud-solutions" },
  {"post_name": "ecommerce-cms-development" },
  {"post_name": "product-design-service-category-page" },
  {"post_name": "web-applications" },
  {"post_name": "staff-augmentation" },
  {"post_name": "ideation-and-evaluation" },
  {"post_name": "product-engineering" },
  {"post_name": "quality-assurance" },
  {"post_name": "blog/everything-about-ui-ux-design-development" },
  {"post_name": "blog/how-to-become-a-wordpress-developer" },
  {"post_name": "blog/how-to-become-a-shopify-developer" },
  {"post_name": "blog/how-to-build-a-web-app" },
  {"post_name": "blog/what-is-brand-discovery" },
  {"post_name": "blog/what-does-a-ux-writer-do" },
  {"post_name": "blog/what-is-a-software-development-kit" },
  {"post_name": "blog/how-to-get-into-uiux-design" },
  {"post_name": "blog/how-long-to-learn-front-end-development" }
]

// const SitemapRoutes = (props) => {
  //const [postsData,setPostsData]=useState([])
  export default (
  // return (
    <Routes>
    <Route exact path="/" />
    {/* <Route path="/blog" />   */}
    {pages.map((item, index) => (
      <Route path={item.post_name} key={item.post_name} />
    ))}
    {console.log(pages)}
    </Routes>
  )   
// };
// export default SitemapRoutes;










