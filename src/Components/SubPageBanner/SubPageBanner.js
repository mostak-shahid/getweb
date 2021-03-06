import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import "./SubPageBanner.scss";

const SubPageBanner = (props) => {
    const location = useLocation();
    const bannerCls = location.pathname.replaceAll('/', '_') + '-pageBanner';
    const { tagline, title, intro, bgImg, btn } = props;
    return (
        <section className={["subPageBanner position-relative bgClrDarkLight", bannerCls ].join(' ')} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container">
                <div className="bannerContent d-flex align-items-center">
                    <div className="bannerInfo w-100">
                        <h6 className="banner-tag-line textClrGreen fs-6" dangerouslySetInnerHTML={{__html:tagline}} />
                        <div className="banner-heading fs-48 fw-normal" dangerouslySetInnerHTML={{__html:title}} />
                        <div className="banner-desc w-100 w-lg-50 fw-normal mb-40" dangerouslySetInnerHTML={{__html:intro}} />
                        {
                            btn?.url &&
                                <Button title={btn.title?btn.title:'Work with Us'} url={btn.url}/> 
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubPageBanner;
