import { useLocation } from "react-router-dom";
import Goto from '../../assets/images/go-to-btn.svg';
import Button from "../Button/Button";
import LazyImage from "../LazyImage";
import "./SubPageBanner.scss";
const SubPageBanner = (props) => {
    const location = useLocation();
    const bannerCls = location.pathname.replaceAll('/', '_') + '-pageBanner';
    //console.log(props);
    const { tagline, title, intro, bgImg, btn, featureImage, alt, attributes,btn2 } = props;
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
                                <LazyImage src={featureImage} alt={alt} className="img-fluid img-banner" width={[attributes[1], 'px'].join('')} height={[attributes[2], 'px'].join('')} />
                            </div>
                        }
                    </div>
                </div>
            </div>
            {/* {console.log(btn2)} */}
            {
                btn2?.title && btn2?.url &&
                <div className="banner-go-to text-center">
                    <a href={btn2.url}>
                        <span dangerouslySetInnerHTML={{__html:btn2.title}} />
                        <LazyImage src={Goto} height="50px" width="50px"/>
                    </a>
                </div>
            }
        </section>
    );
};

export default SubPageBanner;
