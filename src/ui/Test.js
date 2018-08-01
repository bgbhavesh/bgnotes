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
        widgetApi = new apiCall({ model: "widgets" });
        console.log(widgetApi)
    }
    componentWillMount() {

    }

    componentDidMount() {
        const { widgetActions } = this.props;
        var x = widgetApi.getItems();
        console.log(x)
        // widgetActions.getWidgets();
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
