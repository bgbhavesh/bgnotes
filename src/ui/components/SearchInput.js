import React,{Component} from 'react';
export default class SearchInput extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        // console.log('SearchInput')
        return(
            <div >
                <form >
                    <div className="form-group pad15h">
                        <label htmlFor="Title">Search</label>
                        <input type="text" className="form-control"  ref="Search"
                            placeholder="Search" 
                            onKeyUp={e => {
                                var text = e.target.value.trim();
                                if(text && text!=''){
                                    this.props.searchItems(e,text)
                                }
                                else{
                                    this.props.getAllData();
                                }
                            }}
                        />

                    </div>
              </form>
            </div>
        );
    }
}
