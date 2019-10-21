import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

export default class Spinner extends React.Component {

    render() {
        return (
            <Loader
                type="Oval"
                color="#36a2a1"
                height={this.props.height}
                width={this.props.width}
            />
        );
    }
}