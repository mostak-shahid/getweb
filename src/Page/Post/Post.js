import React, { Component } from 'react';
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Post extends Component {
    state = {
        loading: true,
        postData: null,
    };

    constructor(props) {
        super(props);
        //console.log(props);
    }
    async componentDidMount() {

        const {slug} = this.props.params;
        //console.log(slug);

        const url = "http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-single/" + slug;
        const response = await fetch(url);
        const postResponse = await response.json();
        this.setState({ 
            postData: postResponse,
            loading: false,
        });
        //console.log(this.state.postData);
    }
    render() {
        //const { slug } = useParams();
        
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.postData) {
            return <div>Didn't get data from API</div>;
        }
        return (
            <>
            <section className="page-title">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="text-center">{this.state.postData.title}</h1>
                    </div>
                </div>
            </section>
            <section className="content-area">
                <div className="wrapper">
                    <div className="container" dangerouslySetInnerHTML = {{__html: this.state.postData.content}}></div>
                </div>
            </section>
            </>
        )
    }
}
export default withParams(Post);