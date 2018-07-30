import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import widgetActionCreators from './actions/widget-actions';
import List from './components/list';
import SearchInput from './components/SearchInput';
class App extends React.Component {
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

        widgetActions.getWidgets();
    }
    selectItem(e, item) {
        e.preventDefault();
        this.refs.name.value = item.name;
        this.refs.description.value = item.description;
        this.refs.uid.value = item.uid;
    }
    getAllData() {
        const { widgetActions } = this.props;
        widgetActions.getWidgets();
    }
    clearForm() {

        this.refs.name.value = '';
        this.refs.description.value = '';
        this.refs.uid.value = '';
    }
    handleForm(e) {
        e.preventDefault();
        const { widgetActions } = this.props;
        let data = {};
        data.name = this.refs.name.value.trim();
        data.description = this.refs.description.value.trim();
        const uid = this.refs.uid.value;
        if (uid) {
            data.uid = uid;
            widgetActions.updateWidget(data);
        } else {
            widgetActions.createWidget(data);
        }

        this.clearForm();
    }
    searchItems(e, text) {
        e.preventDefault();
        e.stopPropagation();
        this.props.widgetActions.searchWidgets(text || '');
        this.clearForm();
    }
    deleteItem(e, id) {
        e.preventDefault();
        e.stopPropagation();
        this.props.widgetActions.deleteWidget(id);
        this.clearForm();
    }

    render() {
        const { widgets } = this.props;
        // console.log('app')
        return (
            <div className=''>
                <header className="container-fluid">
                    <p>Notes</p>
                </header>
                <div className="container-fluid">

                    <div className="row content">

                        <div className="col-sm-3 col-lg-3 col-xs-3 sidenav">
                            <SearchInput getAllData={this.getAllData} searchItems={this.searchItems} />
                            <List widgets={widgets} selectItem={this.selectItem} deleteItem={this.deleteItem} />
                        </div>
                        <div className="col-sm-9 col-lg-9 col-xs-9">

                            <form onSubmit={this.handleForm.bind(this)}>
                                <button type="button" className="pull-right btn btn-default" onClick={this.clearForm.bind(this)}>
                                    Clear
                                </button>

                                <div className="form-group">

                                    <input type="hidden" className="form-control" ref="uid"
                                        placeholder="uid" />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="Title">Title</label>
                                    <input type="text" className="form-control" ref="name"
                                        placeholder="Title" required />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="Title">Description:</label>
                                    <textarea className="form-control" type="textarea" ref="description"
                                        placeholder="Description" maxLength="140" rows="7"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary pull-right">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>


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
)(App);
