
import { Helmet } from "react-helmet";
import Config from "../../Config.json";
const SeoMeta = ({pageData}) => {
  return (
    <Helmet>
    {/* {console.log(Config)*/}
    {/* {console.log(pageData)} */}
        <link rel="icon" href={[Config.SITE_DOMAIN, 'favicon.png'].join("")} />
        <link rel="apple-touch-icon" href={[Config.SITE_DOMAIN, 'favicon.png'].join("")} />
        <title>{pageData?.meta?._yoast_wpseo_title && pageData?.meta?._yoast_wpseo_title}</title>
        <meta name="description" content={pageData.meta?._yoast_wpseo_metadesc} />
        <meta name="keywords" content={pageData.meta?._yoast_wpseo_focuskw}></meta>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData?.meta?._yoast_wpseo_title && pageData?.meta?._yoast_wpseo_title} />
        <meta property="og:description" content={pageData.meta?._yoast_wpseo_metadesc} />
        <meta property="og:url" content={pageData.meta?._yoast_wpseo_canonical?pageData.meta?._yoast_wpseo_canonical:window.location.href} />
        <meta property="og:site_name" content={Config.SITE_TITLE} />
        <meta property="article:modified_time" content={pageData.modified_date} />
        <meta name="author" content={pageData.author.name} />

        {pageData.meta['_yoast_wpseo_opengraph-image'] && 
            <meta property="og:image" content={pageData.meta['_yoast_wpseo_opengraph-image']} />
        }
        
        <meta name="twitter:card" content="summary_large_image" />
        {pageData.meta['_yoast_wpseo_twitter-title'] &&        
            <meta name="twitter:title" content={pageData.meta['_yoast_wpseo_twitter-title']} />
        }
        {pageData.meta['_yoast_wpseo_twitter-description'] &&        
            <meta name="twitter:description" content={pageData.meta['_yoast_wpseo_twitter-description']} />
        }
        {pageData.meta['_yoast_wpseo_twitter-image'] &&        
            <meta name="twitter:image" content={pageData.meta['_yoast_wpseo_twitter-image']} />
        }
    </Helmet>
  )
}

export default SeoMeta