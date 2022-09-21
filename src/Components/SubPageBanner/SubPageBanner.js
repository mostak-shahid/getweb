import { useLocation } from "react-router-dom";
import goto from '../../assets/images/goto.svg';
import Button from "../Button/Button";
import LazyImage from "../LazyImage";
import "./SubPageBanner.scss";
const SubPageBanner = (props) => {
    const location = useLocation();
    const bannerCls = location.pathname.replaceAll('/', '_') + '-pageBanner';
    //console.log(props);
    const { tagline, title, intro, bgImg, btn, featureImage, alt, btn2 } = props;
    return (
        <section className={["subPageBanner position-relative bgClrDarkLight", bannerCls ].join(' ')} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container-lg">
                <div className="bannerContent d-flex align-items-center">
                    <div className="row align-items-center">
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
            </div>
            {
            btn2?.url &&
            <div className="position-absolute bottom-0 end-0 start-0">
                <div className="d-flex justify-content-center">
                    <a href={btn2?.url} className="text-center lint-to-id">
                        <span className="lint-to-id-title" dangerouslySetInnerHTML={{__html:btn2?.title}} />
                        <LazyImage src={goto} width="50" height="50" className="lint-to-id-img" />
                    </a>
                </div>
            </div>
            }
        </section>
    );
};

export default SubPageBanner;
