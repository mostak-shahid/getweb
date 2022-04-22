import React from 'react';
import footerLogo from '../../assets/images/footer-logo.svg';
import footerSubLogo1 from '../../assets/images/footer-sublogo-img1.png';
import footerSubLogo2 from '../../assets/images/footer-sublogo-img2.png';
import footerSubLogo3 from '../../assets/images/footer-sublogo-img3.png';
import protected1 from '../../assets/images/protected-img.svg';
import './FooterComponent.scss';

const FooterComponent = () => {
    return (
        <div className='footer'>
            <div className='contactUs isBgBorder pt-120 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-4'>
                            <div className='contacts'>
                                <p className='textClrGray fs-14 fw-medium mb-2'>
                                    Want to collaborate?
                                </p>
                                <a href='mailto:info@getwebinc.com' className='textClrGreen fs-22 fwSemiBold text-decoration-none'>
                                    info@getwebinc.com
                                </a>
                            </div>
                        </div>
                        <div className='col-xl-4'>
                            <div className='contacts'>
                                <p className='textClrGray fs-14 fw-medium mb-2'>
                                    Want to join us?
                                </p>
                                <a href='mailto:careers@getwebinc.com' className='textClrGreen fs-22 fwSemiBold text-decoration-none'>
                                    careers@getwebinc.com
                                </a>
                            </div>
                        </div>
                        <div className='col-xl-4'>
                            <div className='contacts'>
                                <p className='textClrGray fs-14 fw-medium mb-2'>
                                    Want to visit us?
                                </p>
                                <p className='fs-22 fwSemiBold text-white mb-0'>
                                    23/6. Rupayan Shelford <br />
                                    Dhaka - 1207
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerWidgetArea isBgBorder py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-4'>
                            <div className='widget'>
                                <div className='footerLogo mb-4'>
                                    <a href='#'>
                                        <img src={footerLogo} alt="footerLogo" />
                                    </a>
                                </div>
                                <div className='intro textClrGray fs-14 fw-normal mb-4'>
                                    <p className='mb-0'>
                                        We help global brands design <br className='d-none d-xl-inline' /> enabling seamless user experiences <br className='d-none d-xl-inline' /> across all modern platforms and <br className='d-none d-xl-inline' /> devices.
                                    </p>
                                </div>
                                <div className='footerSubLogo d-flex align-items-center gap-3 flex-wrap mb-4'>
                                    <a href='#'>
                                        <img src={footerSubLogo1} alt="footerSubLogo" />
                                    </a>
                                    <a href='#'>
                                        <img src={footerSubLogo2} alt="footerSubLogo" />
                                    </a>
                                    <a href='#'>
                                        <img src={footerSubLogo3} alt="footerSubLogo" />
                                    </a>
                                </div>
                                <div className='Careers'>
                                    <p className='text-white fs-14 fw-bold'>
                                        Careers
                                    </p>
                                    <a href='#' className='text-decoration-none bgClrPink d-inline-flex px-4 py-2 rounded-pill align-items-center gap-2 text-white fwSemiBold fs-13'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.9375 5.0625C5.9375 3.37364 7.31114 2 9 2C10.6885 2 12.062 3.37312 12.0625 5.06154C12.0555 6.7186 10.7642 8.05522 9.1184 8.1175H9.11838H9.11835H9.11833H9.1183H9.11828H9.11826H9.11823H9.11821H9.11818H9.11816H9.11814H9.11811H9.11809H9.11806H9.11804H9.11801H9.11799H9.11797H9.11794H9.11792H9.11789H9.11787H9.11784H9.11782H9.11779H9.11777H9.11774H9.11772H9.11769H9.11767H9.11764H9.11761H9.11759H9.11756H9.11754H9.11751H9.11749H9.11746H9.11743H9.11741H9.11738H9.11736H9.11733H9.1173H9.11728H9.11725H9.11722H9.1172H9.11717H9.11714H9.11712H9.11709H9.11706H9.11703H9.11701H9.11698H9.11695H9.11693H9.1169H9.11687H9.11684H9.11681H9.11679H9.11676H9.11673H9.1167H9.11667H9.11665H9.11662H9.11659H9.11656H9.11653H9.1165H9.11647H9.11644H9.11641H9.11639H9.11636H9.11633H9.1163H9.11627H9.11624H9.11621H9.11618H9.11615H9.11612H9.11609H9.11606H9.11603H9.116H9.11597H9.11593H9.1159H9.11587H9.11584H9.11581H9.11578H9.11575H9.11572H9.11568H9.11565H9.11562H9.11559H9.11556H9.11552H9.11549H9.11546H9.11543H9.11539H9.11536H9.11533H9.11529H9.11526H9.11523H9.11519H9.11516H9.11513H9.11509H9.11506H9.11502H9.11499H9.11496H9.11492H9.11489H9.11485H9.11482H9.11478H9.11475H9.11471H9.11468H9.11464H9.1146H9.11457H9.11453H9.1145H9.11446H9.11442H9.11439H9.11435H9.11431H9.11428H9.11424H9.1142H9.11416H9.11413H9.11409H9.11405H9.11401H9.11398H9.11394H9.1139H9.11386H9.11382H9.11378H9.11374H9.1137H9.11367H9.11363H9.11359H9.11355H9.11351H9.11347H9.11343H9.11339H9.11335H9.1133H9.11326H9.11322H9.11318H9.11314H9.1131H9.11306H9.11301H9.11297H9.11293H9.11289H9.11285H9.1128H9.11276H9.11272H9.11267H9.11263H9.11259H9.11254H9.1125H9.11241H9.11232H9.11224H9.11215H9.11206H9.11198H9.11189H9.1118H9.11172H9.11163H9.11154H9.11146H9.11137H9.11129H9.1112H9.11111H9.11103H9.11094H9.11086H9.11078H9.11069H9.11061H9.11052H9.11044H9.11035H9.11027H9.11019H9.1101H9.11002H9.10994H9.10985H9.10977H9.10969H9.10961H9.10952H9.10944H9.10936H9.10928H9.1092H9.10911H9.10903H9.10895H9.10887H9.10879H9.10871H9.10863H9.10855H9.10847H9.10839H9.10831H9.10823H9.10815H9.10807H9.10799H9.10791H9.10783H9.10775H9.10767H9.10759H9.10751H9.10743H9.10735H9.10728H9.10724C9.03457 8.10971 8.96109 8.11063 8.89395 8.11649C7.21116 8.04189 5.9375 6.70623 5.9375 5.0625Z" fill="white" stroke="white" />
                                            <path opacity="0.4" d="M12.8102 10.62C10.7177 9.22498 7.30521 9.22498 5.19771 10.62C4.24521 11.25 3.72021 12.1125 3.72021 13.035C3.72021 13.9575 4.24521 14.8125 5.19021 15.4425C6.24021 16.1475 7.62021 16.5 9.00021 16.5C10.3802 16.5 11.7602 16.1475 12.8102 15.4425C13.7552 14.805 14.2802 13.95 14.2802 13.02C14.2727 12.105 13.7552 11.2425 12.8102 10.62Z" fill="white" />
                                            <path d="M8.52768 14.445C8.40768 14.445 8.28768 14.3925 8.19768 14.31L7.25268 13.365C7.07268 13.185 7.07268 12.885 7.25268 12.705C7.43268 12.525 7.73268 12.525 7.91268 12.705L8.52768 13.32L10.0877 11.76C10.2677 11.58 10.5677 11.58 10.7477 11.76C10.9277 11.94 10.9277 12.24 10.7477 12.42L8.85768 14.31C8.76768 14.4 8.64768 14.445 8.52768 14.445Z" fill="white" />
                                        </svg>
                                        <span>
                                            We Are Hiring!
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-8'>
                            <div className='widgetMenu'>
                                <div className='m-widget mb-4 mb-xl-0 ps-xl-4'>
                                    <h4 className='widgetTitle fs-14 fw-bold text-white mb-4 pb-2'>
                                        Company
                                    </h4>
                                    <ul className='widgetList list-unstyled mb-0'>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Services
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                About
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                How We Work
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Portfolio
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Careers
                                            </a>
                                        </li>
                                        <li className='mb-0'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='m-widget mb-4 mb-xl-0 ps-xl-4'>
                                    <h4 className='widgetTitle fs-14 fw-bold text-white mb-4 pb-2'>
                                        Product Design
                                    </h4>
                                    <ul className='widgetList list-unstyled mb-0'>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Figma
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                XD
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Sketch
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Invision
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Photoshop
                                            </a>
                                        </li>
                                        <li className='mb-0'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Framer
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='m-widget mb-4 mb-xl-0 ps-xl-4'>
                                    <h4 className='widgetTitle fs-14 fw-bold text-white mb-4 pb-2'>
                                        Frontend
                                    </h4>
                                    <ul className='widgetList list-unstyled mb-0'>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                RectJS
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Angular
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Nextjs
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Vuejs
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Bootstrap
                                            </a>
                                        </li>
                                        <li className='mb-4'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Foundation
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Tailwind
                                            </a>
                                        </li>
                                        <li className='mb-0'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                HTML5
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='m-widget mb-4 mb-xl-0 ps-xl-4'>
                                    <h4 className='widgetTitle fs-14 fw-bold text-white mb-4 pb-2'>
                                        Wep App
                                    </h4>
                                    <ul className='widgetList list-unstyled mb-0'>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                PHP
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Laravel
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                CodeIgniter
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Nodejs
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Golang
                                            </a>
                                        </li>
                                        <li className='mb-0'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Express.js
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='m-widget ps-xl-4'>
                                    <h4 className='widgetTitle fs-14 fw-bold text-white mb-4 pb-2'>
                                        Mobile App
                                    </h4>
                                    <ul className='widgetList list-unstyled mb-0'>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                iOS
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Android
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Swift
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                React Native
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Flutter
                                            </a>
                                        </li>
                                        <li className='mb-0'>
                                            <a href='#' className='fs-14 fw-medium textClrGray text-decoration-none'>
                                                Xamarin
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='copyrightText d-flex align-items-center gap-3'>
                                <div className='protected'>
                                    <button className='btn p-0' type='button'>
                                        <img src={protected1} alt="protected" />
                                    </button>
                                </div>
                                <div className='text fs-14 fw-medium textClrGrayDark'>
                                    <p className='mb-0 d-flex aling-items-center gap-2'>
                                        <svg className='mt-1' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.08262 5.78294L9.18629 4.67927C8.7325 4.27403 8.16984 4.01073 7.56795 3.92197C6.96606 3.8332 6.35136 3.92286 5.7999 4.17985C5.24844 4.43684 4.78443 4.84988 4.4653 5.36786C4.14616 5.88584 3.98591 6.48603 4.00436 7.09415C4.02281 7.70227 4.21917 8.29163 4.56912 8.78931C4.91908 9.28698 5.40727 9.67113 5.9733 9.89421C6.53932 10.1173 7.15834 10.1695 7.75374 10.0444C8.34914 9.91932 8.89479 9.62239 9.32318 9.19038L8.30196 8.16605H8.1394C7.91702 8.36128 7.64357 8.48903 7.35114 8.53431C7.05871 8.57959 6.75943 8.54052 6.48842 8.42168C6.21741 8.30284 5.98592 8.10917 5.82112 7.86339C5.65632 7.61761 5.56504 7.32992 5.558 7.03409C5.55096 6.73826 5.62845 6.44655 5.78137 6.19321C5.93429 5.93987 6.1563 5.7354 6.42135 5.6038C6.68639 5.47221 6.98348 5.41894 7.27773 5.45026C7.57199 5.48157 7.85121 5.59617 8.08262 5.7806V5.78294Z" fill="#6B6E78" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.99999 0C8.38446 0 9.73784 0.410543 10.889 1.17971C12.0401 1.94888 12.9373 3.04213 13.4671 4.32121C13.997 5.60029 14.1356 7.00776 13.8655 8.36563C13.5954 9.72349 12.9287 10.9708 11.9497 11.9497C10.9708 12.9287 9.72349 13.5954 8.36563 13.8655C7.00776 14.1356 5.60029 13.997 4.32121 13.4671C3.04213 12.9373 1.94888 12.0401 1.17971 10.889C0.410543 9.73784 0 8.38446 0 6.99999C0 5.14348 0.737497 3.363 2.05025 2.05025C3.363 0.737497 5.14348 0 6.99999 0V0ZM6.99999 1.55555C8.0768 1.55555 9.12943 1.87487 10.0248 2.47311C10.9201 3.07135 11.6179 3.92166 12.03 4.9165C12.4421 5.91134 12.5499 7.00603 12.3398 8.06215C12.1297 9.11827 11.6112 10.0884 10.8498 10.8498C10.0884 11.6112 9.11827 12.1297 8.06215 12.3398C7.00603 12.5499 5.91134 12.4421 4.9165 12.03C3.92166 11.6179 3.07135 10.9201 2.47311 10.0248C1.87487 9.12943 1.55555 8.0768 1.55555 6.99999C1.55555 5.55604 2.12916 4.17122 3.15019 3.15019C4.17122 2.12916 5.55604 1.55555 6.99999 1.55555V1.55555Z" fill="#6B6E78" />
                                        </svg>
                                        <span>
                                            2022 Getweb . All Rights Reserved
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='social'>
                                <ul className='list-unstyled mb-0 d-flex align-items-center gap-3 justify-content-xl-end'>
                                    <li>
                                        <a href='#'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#6B6E78" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_10583_9601)">
                                                    <path d="M6.2918 18.1251C13.8371 18.1251 17.9652 11.8724 17.9652 6.45167C17.9652 6.27589 17.9613 6.0962 17.9535 5.92042C18.7566 5.33967 19.4496 4.62033 20 3.7962C19.2521 4.12896 18.458 4.34627 17.6449 4.44074C18.5011 3.92755 19.1421 3.12135 19.4492 2.17159C18.6438 2.64892 17.763 2.98563 16.8445 3.1673C16.2257 2.50976 15.4075 2.07439 14.5164 1.9285C13.6253 1.78261 12.711 1.93433 11.9148 2.3602C11.1186 2.78607 10.4848 3.46238 10.1115 4.28455C9.73825 5.10672 9.64619 6.02897 9.84961 6.9087C8.21874 6.82686 6.62328 6.40321 5.16665 5.6652C3.71002 4.9272 2.42474 3.89132 1.39414 2.62472C0.870333 3.52782 0.710047 4.59649 0.945859 5.61353C1.18167 6.63057 1.79589 7.51966 2.66367 8.10011C2.01219 8.07943 1.37498 7.90402 0.804688 7.58839V7.63917C0.804104 8.58691 1.13175 9.50561 1.73192 10.2391C2.3321 10.9726 3.16777 11.4756 4.09687 11.6626C3.49338 11.8277 2.85999 11.8518 2.2457 11.7329C2.50788 12.548 3.01798 13.2609 3.70481 13.7721C4.39164 14.2833 5.22093 14.5673 6.07695 14.5845C4.62369 15.726 2.82848 16.3452 0.980469 16.3423C0.652739 16.3418 0.325333 16.3217 0 16.2821C1.87738 17.4866 4.06128 18.1263 6.2918 18.1251Z" fill="#6B6E78" />
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47939 0 0 4.47939 0 10C0 15.5206 4.47939 20 10 20C15.5098 20 20 15.5206 20 10C20 4.47939 15.5098 0 10 0ZM16.6052 4.60954C17.7983 6.06291 18.5141 7.91756 18.5358 9.92406C18.2538 9.86987 15.4338 9.295 12.5922 9.65294C12.5271 9.51194 12.4729 9.36006 12.4078 9.20825C12.2343 8.79613 12.0391 8.37312 11.8438 7.97181C14.9891 6.692 16.4208 4.84816 16.6052 4.60954ZM10 1.47506C12.1692 1.47506 14.154 2.28851 15.6616 3.62256C15.5097 3.83948 14.2191 5.56399 11.1822 6.70281C9.78306 4.13232 8.23213 2.0282 7.9935 1.70282C8.63338 1.55097 9.30588 1.47506 10 1.47506ZM6.36662 2.27766C6.59437 2.58134 8.11281 4.69631 9.53363 7.21256C5.5423 8.2755 2.01736 8.25381 1.63774 8.25381C2.19089 5.60738 3.98047 3.40564 6.36662 2.27766ZM1.45336 10.0109C1.45336 9.92406 1.45336 9.83731 1.45336 9.75056C1.82213 9.76137 5.96529 9.81562 10.2278 8.53581C10.4773 9.013 10.705 9.50106 10.9219 9.98913C10.8134 10.0217 10.6941 10.0542 10.5857 10.0867C6.18221 11.5076 3.83948 15.3904 3.64425 15.7158C2.2885 14.2082 1.45336 12.2018 1.45336 10.0109ZM10 18.5466C8.026 18.5466 6.20391 17.8742 4.76139 16.7462C4.91323 16.4317 6.64856 13.0911 11.4642 11.41C11.4859 11.3991 11.4968 11.3991 11.5184 11.3883C12.7223 14.5011 13.2104 17.1149 13.3406 17.8633C12.3102 18.308 11.1822 18.5466 10 18.5466ZM14.7614 17.0824C14.6746 16.5618 14.2191 14.0673 13.1019 10.9978C15.7809 10.5748 18.1236 11.269 18.4165 11.3666C18.0478 13.7419 16.6811 15.7917 14.7614 17.0824Z" fill="#6B6E78" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM8.24536 5.58315C7.88936 5.50715 7.49576 5.46875 7.06457 5.46875H2.7998V14.5319H7.19257C7.59256 14.5327 7.99176 14.4815 8.37896 14.3799C8.76375 14.2783 9.10615 14.1223 9.40695 13.9103C9.70775 13.6991 9.94694 13.4263 10.1245 13.0919C10.3021 12.7575 10.3909 12.3615 10.3909 11.9047C10.3909 11.3375 10.2533 10.8527 9.97814 10.4511C9.70295 10.0495 9.28615 9.76792 8.72775 9.60712C9.13335 9.41272 9.44055 9.16313 9.64775 8.85833C9.85494 8.55353 9.95894 8.17273 9.95894 7.71594C9.95894 7.29274 9.88934 6.93754 9.74934 6.64954C9.60935 6.36154 9.41255 6.13115 9.15895 5.95755C8.90535 5.78395 8.60135 5.65915 8.24536 5.58315ZM7.68696 8.88313C7.45817 9.05193 7.16617 9.13673 6.81097 9.13673L4.79339 9.13833V7.01834H6.65817C6.83097 7.01754 7.00297 7.03274 7.17257 7.06234C7.33737 7.09194 7.48296 7.14474 7.61016 7.22074C7.73736 7.29674 7.83896 7.40314 7.91496 7.53834C7.99096 7.67354 8.02936 7.84713 8.02936 8.05833C8.03016 8.43913 7.91576 8.71353 7.68696 8.88313ZM7.48376 12.9255C7.30057 12.9639 7.11337 12.9831 6.92537 12.9823L4.79339 12.9831V10.4951H6.96377C7.39497 10.4951 7.74216 10.5943 8.00456 10.7935C8.26696 10.9919 8.39816 11.3247 8.39816 11.7895C8.39816 12.0263 8.35736 12.2215 8.27736 12.3735C8.19656 12.5255 8.08856 12.6463 7.95336 12.7351C7.81816 12.8239 7.66136 12.8871 7.48376 12.9255ZM14.0661 13.1855C13.5581 13.1855 13.1685 13.0543 12.8981 12.7919C12.6277 12.5303 12.4797 12.1071 12.4549 11.5255H17.1893C17.2229 11.0175 17.1805 10.5311 17.0621 10.0655C16.9437 9.59992 16.7509 9.18552 16.4845 8.82153C16.2181 8.45753 15.8773 8.16793 15.4629 7.95193C15.0477 7.73594 14.5613 7.62794 14.0029 7.62794C13.5037 7.62794 13.0485 7.71673 12.6381 7.89433C12.2277 8.07193 11.8741 8.31513 11.5781 8.62393C11.2821 8.93273 11.0533 9.29832 10.8925 9.72152C10.7317 10.1447 10.6517 10.6015 10.6517 11.0919C10.6517 11.5991 10.7301 12.0647 10.8861 12.4879C11.0421 12.9111 11.2645 13.2743 11.5525 13.5791C11.8405 13.8839 12.1917 14.1191 12.6061 14.2839C13.0205 14.4487 13.4861 14.5311 14.0021 14.5311C14.7469 14.5311 15.3813 14.3615 15.9061 14.0231C16.4309 13.6847 16.8205 13.1223 17.0741 12.3351H15.4877C15.4285 12.5383 15.2677 12.7311 15.0053 12.9127C14.7429 13.0943 14.4301 13.1855 14.0661 13.1855ZM13.9517 8.98473C14.3917 8.98473 14.7197 9.10313 14.9357 9.33992C15.1509 9.57672 15.3013 9.92392 15.3869 10.3799H12.4549C12.4629 10.2535 12.4909 10.1095 12.5373 9.94872C12.5837 9.78792 12.6637 9.63592 12.7781 9.49192C12.8925 9.34792 13.0445 9.22793 13.2349 9.13033C13.4245 9.03353 13.6637 8.98473 13.9517 8.98473ZM15.8093 5.92875H12.1461V6.94474H15.8093V5.92875Z" fill="#6B6E78" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_10583_9609)">
                                                    <path d="M10 0C4.47712 0 0 4.47708 0 9.99992C0 15.5228 4.47712 19.9998 10 19.9998C15.5229 19.9998 20.0001 15.5228 20.0001 9.99992C20 4.47708 15.5228 0 10 0ZM7.33199 14.8344H5.13638V7.74112H7.33199V14.8344ZM6.22372 6.81219C5.50666 6.81219 4.92536 6.22616 4.92536 5.50336C4.92536 4.78048 5.50674 4.19448 6.22372 4.19448C6.9407 4.19448 7.52201 4.78048 7.52201 5.50336C7.52205 6.2262 6.94074 6.81219 6.22372 6.81219V6.81219ZM15.56 14.8344H13.375V11.111C13.375 10.0898 12.9871 9.51975 12.1796 9.51975C11.3008 9.51975 10.8417 10.1135 10.8417 11.111V14.8344H8.73582V7.74112H10.8417V8.69647C10.8417 8.69647 11.4751 7.52475 12.9792 7.52475C14.4833 7.52475 15.56 8.44315 15.56 10.343L15.56 14.8344V14.8344Z" fill="#6B6E78" />
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;