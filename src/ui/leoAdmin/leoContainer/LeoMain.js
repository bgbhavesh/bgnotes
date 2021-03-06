import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LeoLeftSideBar from "../leoComponent/leoLayout/LeoLeftSideBar";
import LeoFooter from "../leoComponent/leoLayout/LeoFooter";
import LeoHeader from "../leoComponent/leoLayout/LeoHeader";
import baseActionCreators from "../../actions/base-actions"; //'./actions/base-actions';
var baseObj = {
    model: "products",
    redux: "GET_PRODUCTS",
    data: {},
    uid: null,
    caseSensitive: false,
    searchText: "",
    searchFields: ["description", "name"],
}
class LeoMain extends React.Component {
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
                <LeoHeader />
                <LeoLeftSideBar />
                <LeoFooter />
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
)(LeoMain);
