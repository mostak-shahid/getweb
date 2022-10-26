
import { Helmet } from "react-helmet";
import Config from "../../Config.json";
const SeoMeta = ({pageData}) => {
  return (
    <Helmet>
    {/* {console.log(Config)*/}
    {/* {console.log(pageData)} */}
        {/* <link rel="icon" href={[Config.SITE_DOMAIN, 'favicon.png'].join("")} />
        <link rel="apple-touch-icon" href={[Config.SITE_DOMAIN, 'favicon.png'].join("")} /> */}
        {/* <title>{pageData?.meta?._yoast_wpseo_title && pageData?.meta?._yoast_wpseo_title}</title>
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
        } */}

        {/* {Rank Math} */}
        <title>{pageData?.meta?.rank_math_title ? pageData?.meta?.rank_math_title:pageData?.title}</title>
        {
            pageData?.meta?.rank_math_description && 
            <meta name="description" content={pageData?.meta?.rank_math_description}/>
        }
        {
            pageData?.meta?.rank_math_description && 
            <meta name="keywords" content={pageData.meta?.rank_math_focus_keyword}></meta>
        }
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData?.meta?.rank_math_title ? pageData?.meta?.rank_math_title:pageData?.title} />
        
        {
            pageData?.meta?.rank_math_description && 
            <meta property="og:description" content={pageData?.meta?.rank_math_description} />
        }        
        {
            pageData?.slug && 
            <meta property="og:url" content={[Config.SITE_DOMAIN, 'blog',pageData?.slug].join('/')} />
        }
        <meta property="og:site_name" content={Config.SITE_TITLE}/>
        {
        pageData?.taxonomy?.post_tag &&
            pageData.taxonomy.post_tag.map((item, index) => (
                <meta key={index} property="article:tag" content={item.name} />
            ))        
        }
        {
        pageData?.taxonomy?.category &&
            pageData.taxonomy.category.map((item, index) => (
                <meta key={index} property="article:section" content={item.name} />
            ))        
        }

        <meta property="og:updated_time" content={pageData?.modified_date} />             
        {
            pageData?.image && 
            <meta property="og:image" content={pageData?.image} />
        }             
        {
            pageData?.image && 
            <meta property="og:image:secure_url" content={pageData?.image} />
        }
        
        <meta property="og:image:width" content={pageData?.featured_image?.image_attributes[1]} />
        <meta property="og:image:height" content={pageData?.featured_image?.image_attributes[2]} />
        <meta property="og:image:alt" content={pageData?.featured_image?.image_alt} />
        
        <meta property="article:published_time" content={pageData?.date} />
        <meta property="article:modified_time" content={pageData?.modified_date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData?.meta?.rank_math_title ? pageData?.meta?.rank_math_title:pageData?.title} />
        {
            pageData?.meta?.rank_math_description && 
            <meta name="twitter:description" content={pageData?.meta?.rank_math_description} />
        }
        {
            pageData?.image && 
            <meta name="twitter:image" content={pageData?.image} />
        }
        
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={pageData?.author?.name} />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content={[pageData?.reading_time, 'minutes'].join(' ')} />
        {/* {Rank Math} */}

    </Helmet>
  )
}

export default SeoMeta