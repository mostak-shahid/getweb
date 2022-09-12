import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import LazyImage from "../LazyImage";
import "./SubPageBanner.scss";

const SubPageBanner = (props) => {
    const location = useLocation();
    const bannerCls = location.pathname.replaceAll('/', '_') + '-pageBanner';
    //console.log(props);
    const { tagline, title, intro, bgImg, btn, featureImage, alt } = props;
    return (
        <section className={["subPageBanner position-relative bgClrDarkLight", bannerCls ].join(' ')} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container-lg">
                <div className="bannerContent row align-items-center">
                    <div className="bannerInfo col-lg-6">
                        <h6 className="banner-tag-line textClrGreen fs-6 fwBold" dangerouslySetInnerHTML={{__html:tagline}} />
                        <div className="banner-heading fs-48 fw-normal" dangerouslySetInnerHTML={{__html:title}} />
                        <div className="banner-desc" dangerouslySetInnerHTML={{__html:intro}} />
                        {
                            btn?.url &&
                                <Button title={btn.title?btn.title:'Work with Us'} url={btn.url}/> 
                        }
                    </div>
                    {
                    featureImage &&
                        <div className="bannerImage col-lg-6 text-center text-lg-end">
                            <LazyImage src={featureImage} alt={alt} className="img-fluid img-banner" />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default SubPageBanner;
