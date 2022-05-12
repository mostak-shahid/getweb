import React, { Component } from 'react';
import Config from '../../../Config.json';
import Technology from './Technology/Technology';

export default class TechnologiesBar extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }
    state = {
        loading: true,
        technologiesData: null,
    };
    async componentDidMount() {        
        const url = Config.API_BASE + "data-list/technology/"+ this.props.data.term_id + "/0/10";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            technologiesData: data, 
            loading: false,
        });
        //console.log(this.props.data.term_id);
    }

    render() {
        const {name='', slug=''} = this.props.data;
        const {technologiesData} = this.state;
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.technologiesData) {
            return <div>Didn't get data from API</div>;
        }
        //console.log(technologiesData);
        return (
            <div className={['singleTechnology','p-2','mb-4', slug].join(' ')}>
                <div className="row align-items-center">
                    <div className="col-xl-3">
                        <div className="p-3">
                            <h4 className="tech-title fs-18 fwSemiBold text-white mb-0">{name}</h4>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="singleTechLogo d-flex align-items-center flex-wrap gap-2">
                            {
                                (technologiesData.length)?
                                technologiesData.map((logo, index) => (
                                    <Technology data={logo} key={logo.id} />
                                )):''
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
