import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

import baseActionCreators from "../../../actions/base-actions"; //'./actions/base-actions';
var baseObj = {
    model: "products",
    redux: "GET_PRODUCTS",
    data: {},
    uid: null,
    caseSensitive: false,
    searchText: "",
    searchFields: ["description", "name"],
}
class LeoLeftSideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { baseActions } = this.props;

        baseActions.getItems(baseObj);
    }

    render() {
        // const { products } = this.props;
        // console.log('app')
        return (
            <div className=''>
                <ListGroup>
                    <ListGroupItem href="/">Home</ListGroupItem>
                    <ListGroupItem href="/aboutUs">About US</ListGroupItem>
                    <ListGroupItem href="/contactUs">Contact Us</ListGroupItem>
                    {/* <ListGroupItem onClick={alert('hi')}>Trigger an alert</ListGroupItem> */}
                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        baseActions: bindActionCreators(baseActionCreators, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeoLeftSideBar);
