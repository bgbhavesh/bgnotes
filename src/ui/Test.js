import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import widgetActionCreators from './actions/widget-actions';
import List from './components/list';
import SearchInput from './components/SearchInput';
import apiCall from "../ui/actions/base-actions"

var widgetApi;
class Test extends React.Component {
    constructor(props) {
        super(props);

        this.clearForm = this.clearForm.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.searchItems = this.searchItems.bind(this);
        this.getAllData = this.getAllData.bind(this);
    }

    componentDidMount() {
        const { widgetActions } = this.props;

        var widgetApi = new apiCall('widget');
        widgetApi.getItems();
        // widgetActions.getWidgets();
    }
    selectItem(e, item) {
    }
    getAllData() {
        const { widgetActions } = this.props;
        // widgetActions.getWidgets();


    }
    clearForm() {

    }
    handleForm(e) {
    }
    searchItems(e, text) {
    }
    deleteItem(e, id) {
    }

    render() {
        const { widgets } = this.props;
        // console.log('test')
        return (
            <div className=''>
                <List widgets={widgets} selectItem={this.selectItem} deleteItem={this.deleteItem} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        widgets: state.widgets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        widgetActions: bindActionCreators(widgetActionCreators, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);
