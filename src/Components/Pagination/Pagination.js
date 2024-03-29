import React from "react";
import "./Pagination.scss";

const Pagination = (props) => {
    // console.log('props.startFrom', props.startFrom);
    // console.log('props.postPerPage', props.postPerPage);
    // console.log(props.startFrom/props.postPerPage);
    const list = [];
    var cls;
    for (let i = 0; i < props.data; i++) {
        if (i === Math.floor(props.startFrom/props.postPerPage)) cls = "active";
        else cls = "";
        list.push(
            <li className="page-item" key={i}>
                <span className={["page-link", "bg-transparent", cls].join(" ")} onClick={() => props.startFromChange(i * props.postPerPage)}>
                    {i + 1}
                </span>
            </li>
        )
    }
    return (
        <div className="pagination-box">
            <nav>
                <ul className="pagination justify-content-center gap-3">
                    
                        <li className="page-item">
                            <span className="page-link bg-transparent" aria-label="Previous" onClick={() => props.startFrom!==0 && props.startFromChange(props.startFrom - props.postPerPage)}>
                                <span aria-hidden="true">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.3184 14.94L6.42836 10.05C5.85086 9.4725 5.85086 8.5275 6.42836 7.95L11.3184 3.06"
                                            stroke="#6B6E78"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </span>
                        </li>
                                       
                    {list}
                    
                        
                        <li className="page-item">
                            <span className="page-link bg-transparent" aria-label="Next" onClick={() => ((props.startFrom)/props.postPerPage + 1) < props.data && props.startFromChange(props.startFrom + props.postPerPage)}>
                                <span aria-hidden="true">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.68164 14.94L11.5716 10.05C12.1491 9.4725 12.1491 8.5275 11.5716 7.95L6.68164 3.06"
                                            stroke="#6B6E78"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </span>
                        </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
