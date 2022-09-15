import { Component } from "react";
import Button from "../Button/Button";
import MultipleRows from "../slider/PortfolioSlider";
import './PortfolioComponent.scss';
//const PortfolioComponent = () => {
export default class PortfolioComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
        //console.log(props);
    }
    render() {
        if (this.state.loading) {
            return <div className="textClrGreen text-center d-none">loading...</div>;
        }
        // if (!this.state.taxonomiesData) {
        //     return <div>Didn't get data from API</div>;
        // }
        // const {taxonomiesData} = this.state;
        const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='', _mosacademy_page_group_button} = this.props.data;
        const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
        const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6 mb-5 mb-lg-0':'col-sm-12';
        return (        
            <div className="row">
                <div className={[widthClass, orderClass].join(' ')}>
                    <div className="part-one">                        
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
                    <div className="part-two">     
                        <MultipleRows data={this.props.data} />
                    </div>
                </div>
                {_mosacademy_page_group_button?.url &&
                <div className='portfolio-button-container text-center'>
                    <Button title={_mosacademy_page_group_button?.title} url={_mosacademy_page_group_button?.url}/>
                </div>
                }

                

            </div>
        );
    }
};
