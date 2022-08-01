import React, { useEffect, useState } from "react";
import Config from "../../Config.json";
import "./WhoWeAre.scss";

const WhoWeAre = (props) => {
    const [sectionData,setSectionData]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-list/block/32/0/3";//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setSectionData(resp))//setting response to state posts
        //.then(setLoading(false))
    },[]);
    
    useEffect(() => {
        if (sectionData.length !== 0) {
            setLoading(false);
        }
        //console.log(pageData);
    }, [sectionData]);
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-md-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12';

    //console.log(props);
    return (
        <div className="row">
            <div className={[widthClass, orderClass].join(' ')}>
                <div className="sectionHeader">                   
                    {
                        _mosacademy_page_group_sub_titles[0] &&
                        <div className="secTagLine" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_sub_titles[0]}}></div>
                    }
                    {
                        _mosacademy_page_group_title_text &&
                        <div className="secTitle fw-normal fs-48 text-white mb-3" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_text}}></div>
                    }                    
                    {
                        _mosacademy_page_group_title_description &&
                        <div className="secIntro" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                    }
                </div>
            </div>
            <div className={[widthClass].join(' ')}>
            {
                    loading
                    ?<div className="textClrGreen text-center">loading...</div>
                    :
                <div className="activity-grid-container">
                    {sectionData.map((item, index) => (
                        <div className={["items p-4 item", (index + 2)].join('')} key={index}>
                            <div className="icon mb-3" dangerouslySetInnerHTML={{__html:item.meta._mosacademy_custom_html}} />
                            <div className="fs-14 fw-medium textClrGrayDark" dangerouslySetInnerHTML={{__html:item.title}}/>
                            <div className="count fs-30 fw-medium textClrGrayDark" dangerouslySetInnerHTML={{__html:item.content}} />
                        </div>
                    ))}

                    {/* <div className="item3 items p-4" data-wow-duration="1.5s" data-wow-delay="300ms">
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
                    </div> */}
                </div>
            }
            </div>
        </div>
    );
};

export default WhoWeAre;
