import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import widgetActionCreators from './actions/widget-actions';
import List from './components/list';

class App extends React.Component {
    constructor(props){
      super(props);
      this.clearForm = this.clearForm.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.selectItem = this.selectItem.bind(this);
    }

    componentDidMount() {
        const {widgetActions} = this.props;

        widgetActions.getWidgets();
    }
    selectItem(e,item){
        e.preventDefault();
        this.refs.name.value = item.name;
        this.refs.description.value = item.description;
        this.refs._id.value = item._id;
    }
    clearForm(){

        this.refs.name.value = '';
        this.refs.description.value = '';
        this.refs._id.value = '';
    }
    handleForm(e) {
        e.preventDefault();
        const {widgetActions} = this.props;
        let data={};
        data.name = this.refs.name.value.trim();
        data.description = this.refs.description.value.trim();
        const _id = this.refs._id.value;
        if(_id) {
            data._id = _id;
            widgetActions.updateWidget(data);
        }else{
            widgetActions.createWidget(data);    
        }
        
        this.clearForm();
    }

    deleteItem(e,id) {
        e.preventDefault();
        e.stopPropagation();
        this.props.widgetActions.deleteWidget(id);
        this.clearForm();
    }

    render() {
        const {widgets} = this.props;

        return (
            <div>
                <div className="main-container">

                    <div className="main-content">

                        <div className="left-content">
                            <List  widgets={widgets} selectItem={this.selectItem} deleteItem={this.deleteItem}/>
                        </div>
                        <div className="right-content">

                            <form role="form" onSubmit={this.handleForm.bind(this)}>
                                <h3>Notes</h3>
                                <div className="action-btn">
                                    <input type="button" value="Clear" onClick={this.clearForm.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    
                                <input type="hidden" className="form-control"  ref="_id"
                                           placeholder="_id" />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="Title">Title</label>
                                    <input type="text" className="form-control"  ref="name"
                                           placeholder="Title" required/>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="Title">Description:</label>
                                    <textarea className="form-control" type="textarea" ref="description"
                                              placeholder="Description" maxLength="140" rows="7"></textarea>
                                </div>

                                <button type="submit"   className="btn btn-primary pull-right">
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
