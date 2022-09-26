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
        const {image_attributes=''} = this.props.data.featured_image;
        return (
            <div className="techLogos">
                <div className="techLogo-icon icons mb-2">
                    <LazyImage src={image} alt={title} width={[image_attributes[1],'px'].join('')} height={[image_attributes[2],'px'].join('')} />
                    {/* {console.log(this.props.data.featured_image.image_attributes[1])} */}
                    {/* featured_image.image_attributes*/}
                </div>
                <h5 className="techLogo-text">{title}</h5>
            </div>
        )
    }
}
