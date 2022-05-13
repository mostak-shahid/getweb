import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.scss";

const Pagination = () => {
    return (
        <div className="pagination-box">
            <nav>
                <ul class="pagination justify-content-center gap-3 mb-0 py-5 ">
                    <li class="page-item">
                        <Link to="/" class="page-link bg-transparent" aria-label="Previous">
                            <span aria-hidden="true">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.3184 14.94L6.42836 10.05C5.85086 9.4725 5.85086 8.5275 6.42836 7.95L11.3184 3.06"
                                        stroke="#6B6E78"
                                        stroke-width="1.5"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </li>
                    <li class="page-item">
                        <Link to="/" class="page-link bg-transparent active">
                            1
                        </Link>
                    </li>
                    <li class="page-item">
                        <Link to="/" class="page-link bg-transparent">
                            2
                        </Link>
                    </li>
                    <li class="page-item">
                        <Link to="/" class="page-link bg-transparent">
                            3
                        </Link>
                    </li>
                    <li class="page-item">
                        <Link to="/" class="page-link bg-transparent">
                            4
                        </Link>
                    </li>
                    <li class="page-item">
                        <Link to="/" class="page-link bg-transparent" aria-label="Next">
                            <span aria-hidden="true">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.68164 14.94L11.5716 10.05C12.1491 9.4725 12.1491 8.5275 11.5716 7.95L6.68164 3.06"
                                        stroke="#6B6E78"
                                        stroke-width="1.5"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
