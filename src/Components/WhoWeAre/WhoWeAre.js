import React from "react";
import LineShape from "../../assets/images/secLineShape.svg";
import "./WhoWeAre.scss";

const WhoWeAre = () => {
    return (
        <section className="WhoWeAre secPadding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="activity-grid-container">
                            <div className="item2 items p-4" data-wow-duration="1.5s" data-wow-delay="300ms">
                                <div className="icon mb-3">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.05" width="100" height="100" rx="16" fill="#4991FF" />
                                        <path
                                            d="M66.8273 43.4479H55.8148L58.2253 37.4229C58.5699 36.5645 58.6549 35.6238 58.4698 34.7176C58.2846 33.8113 57.8374 32.9793 57.1836 32.325C56.8159 31.9576 56.3726 31.6748 55.8846 31.4959C55.3966 31.3171 54.8755 31.2467 54.3575 31.2895C53.8395 31.3323 53.3371 31.4874 52.8851 31.7439C52.433 32.0004 52.0422 32.3523 51.7398 32.775L45.3003 41.7854C44.3391 43.1277 43.2703 44.3895 42.1044 45.5583L40.0419 47.6208C39.948 47.7146 39.8735 47.826 39.8228 47.9486C39.772 48.0712 39.746 48.2027 39.7461 48.3354V63.8375C39.7459 64.1061 39.8523 64.3638 40.0419 64.5541L42.3523 66.875C42.9409 67.4666 43.6409 67.9356 44.4119 68.255C45.1829 68.5743 46.0095 68.7376 46.844 68.7354H59.3982C60.3894 68.7346 61.3592 68.4467 62.1903 67.9066C63.0214 67.3664 63.6783 66.5971 64.0815 65.6916L70.2398 51.8354C70.6339 50.9517 70.8362 49.9946 70.8336 49.0271V47.4562C70.8325 46.3939 70.4101 45.3753 69.6591 44.6239C68.9081 43.8725 67.8897 43.4495 66.8273 43.4479Z"
                                            fill="#4991FF"
                                        />
                                        <path
                                            d="M32.8056 46.2645C31.8403 46.2645 30.9146 46.648 30.232 47.3305C29.5495 48.0131 29.166 48.9388 29.166 49.9041V63.5895C29.166 64.5548 29.5495 65.4805 30.232 66.1631C30.9146 66.8456 31.8403 67.2291 32.8056 67.2291C33.7709 67.2291 34.6966 66.8456 35.3792 66.1631C36.0617 65.4805 36.4452 64.5548 36.4452 63.5895V49.9041C36.4452 48.9388 36.0617 48.0131 35.3792 47.3305C34.6966 46.648 33.7709 46.2645 32.8056 46.2645Z"
                                            fill="#4991FF"
                                        />
                                    </svg>
                                </div>
                                <p className="fs-14 fw-medium textClrGrayDark mb-0">Happy Client</p>
                                <p className="count fs-30 fw-medium textClrGrayDark mb-0">1280</p>
                            </div>
                            <div className="item3 items p-4" data-wow-duration="1.5s" data-wow-delay="300ms">
                                <div className="icon mb-3">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.05" width="100" height="100" rx="16" fill="#FFB156" />
                                        <path
                                            d="M50.0001 34.8711C45.2887 34.8711 41.4551 38.7047 41.4551 43.4161C41.4551 48.1275 45.2887 51.9611 50.0001 51.9611C54.7115 51.9611 58.5451 48.1275 58.5451 43.4161C58.5451 38.7047 54.7115 34.8711 50.0001 34.8711Z"
                                            fill="#FFB156"
                                        />
                                        <path
                                            d="M48.0807 64.0469L48.0348 64.005L46.946 63.0197L44.3838 60.7015L41.5979 61.0013L39.893 61.184L39.4888 61.2279L38.1871 61.3676L34.0879 70.0786L40.4359 70.1626L44.5448 75L49.2163 65.0742L48.0807 64.0469Z"
                                            fill="#FFB156"
                                        />
                                        <path
                                            d="M61.8124 61.3676L60.5107 61.2279L60.1065 61.1849L58.4017 61.0013L55.6157 60.7015L53.0535 63.0197L51.9647 64.005L51.9188 64.0469L50.7832 65.0742L55.4547 75L59.5636 70.1626L65.9116 70.0786L61.8124 61.3676Z"
                                            fill="#FFB156"
                                        />
                                        <path
                                            d="M64.9646 43.4162L67.5142 37.7254L62.1065 34.6201L60.8244 28.5172L54.6238 29.1831L49.9993 25L45.3748 29.1832L39.1742 28.5173L37.8921 34.6201L32.4844 37.7253L35.0339 43.4161L32.4844 49.1069L37.8921 52.2121L39.1742 58.315L39.6469 58.2643L41.3527 58.0807L43.0576 57.898L43.5146 57.8492H43.5156L45.3748 57.649L46.7731 58.9136L48.2486 60.2484L48.7086 60.6645L49.3843 61.2757L49.9994 61.8322L50.6145 61.2757L51.2902 60.6645L51.7502 60.2484L52.8976 59.2114L52.8985 59.2104L54.6239 57.6491L57.6373 57.9724H57.6383L57.9449 58.0056L58.646 58.0808H58.647L60.3519 58.2644L60.8245 58.3151L62.1066 52.2122L67.5144 49.107L64.9646 43.4162ZM49.9993 54.8906C43.6728 54.8906 38.5248 49.7437 38.5248 43.4161C38.5248 37.0896 43.6728 31.9416 49.9993 31.9416C56.3259 31.9416 61.4738 37.0896 61.4738 43.4161C61.4738 49.7437 56.3259 54.8906 49.9993 54.8906Z"
                                            fill="#FFB156"
                                        />
                                    </svg>
                                </div>
                                <p className="fs-14 fw-medium textClrGrayDark mb-0">Award-win</p>
                                <p className="count fs-30 fw-medium textClrGrayDark mb-0">08</p>
                            </div>
                            <div className="item4 items p-4" data-wow-duration="1.5s" data-wow-delay="300ms">
                                <div className="icon mb-3">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.05" width="100" height="100" rx="16" fill="#FF317B" />
                                        <path
                                            d="M60.0374 33.0646H31.3257C30.2833 33.0646 29.4355 33.9124 29.4355 34.9547V73.1099C29.4355 74.1523 30.2833 75 31.3257 75H60.0374C61.0787 75 61.9265 74.1523 61.9265 73.1099V34.9547C61.9265 33.9124 61.0787 33.0646 60.0374 33.0646ZM53.6291 59.6775H38.3065C37.4154 59.6775 36.6936 58.9557 36.6936 58.0646C36.6936 57.1734 37.4154 56.4517 38.3065 56.4517H53.6291C54.5202 56.4517 55.242 57.1734 55.242 58.0646C55.242 58.9557 54.5202 59.6775 53.6291 59.6775ZM53.6291 53.2259H38.3065C37.4154 53.2259 36.6936 52.5041 36.6936 51.613C36.6936 50.7218 37.4154 50.0001 38.3065 50.0001H53.6291C54.5202 50.0001 55.242 50.7218 55.242 51.613C55.242 52.5041 54.5202 53.2259 53.6291 53.2259ZM53.6291 46.7743H38.3065C37.4154 46.7743 36.6936 46.0525 36.6936 45.1613C36.6936 44.2702 37.4154 43.5484 38.3065 43.5484H53.6291C54.5202 43.5484 55.242 44.2702 55.242 45.1613C55.242 46.0525 54.5202 46.7743 53.6291 46.7743Z"
                                            fill="#FF317B"
                                        />
                                        <path
                                            d="M70.5644 29.8387V65.3226C70.5644 67.7581 68.6046 70.1613 65.1521 70.1613V34.9546C65.1521 32.1331 62.8577 29.8387 60.0372 29.8387H34.8477C34.8477 27.1704 37.1471 25 39.9727 25H65.4394C68.265 25 70.5644 27.1704 70.5644 29.8387Z"
                                            fill="#FF317B"
                                        />
                                    </svg>
                                </div>
                                <p className="fs-14 fw-medium textClrGrayDark mb-0">Completed Project</p>
                                <p className="count fs-30 fw-medium textClrGrayDark mb-0">4.8k+</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="sectionHeader">
                            <span className="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block">Who we are</span>
                            <div className="secTitle fw-normal fs-48 text-white mb-3">
                                Award-winning product <strong>design and software develop</strong> agency
                            </div>
                            <div className="lineShape mb-4">
                                <img src={LineShape} alt="LineShape" />
                            </div>
                            <div className="secIntro textClrGray fs-6 fw-normal mb-4 pb-2">
                                <p className="mb-0">We are one of the older web development companies on the Polish market. We have been in business since 2008.</p>
                            </div>
                            <div className="secIntro textClrGray fs-6 fw-normal mb-0">
                                <p className="mb-0">At GOGOmedia, we have specialists professionally dealing with creating dedicated web apps who constantly improve their competencies and knowledge.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
