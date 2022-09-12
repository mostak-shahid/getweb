import { Component } from 'react';
import LazyImage from '../../../LazyImage';
import './Techonology.scss';

export default class Technology extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {};
    }
    render() {
        const {image='', title=''} = this.props.data;
        return (
            <div className="techLogos">
                <div className="icons mb-2">
                    <LazyImage src={image} alt={title} />
                </div>
                <h5 className="fs-12 fw-medium text-white mb-0">{title}</h5>
            </div>
        )
    }
}
