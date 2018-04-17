import React,{Component} from 'react';
import {stringTruncat} from '../../globalFunction';
export default class List extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        let { widgets } = this.props;
        // console.log('List')
        return(
            <div >
                {widgets
                    ?
                    widgets.map((w,i) => 
                        <Item  w={w} key={i} {...this.props}/>                    
                    )
                    :
                    <div>none</div>
                }
            </div>
        );
    }
}
function Item(props) {
    return (
        <div className='listItem pad15h' onClick={e => props.selectItem(e,props.w)}>
            <a href="#" 
                className="close" 
                
                aria-label="close" onClick={e => props.deleteItem(e,props.w.uid)}>×</a>
                    <p><strong>{stringTruncat(props.w.name,20)}</strong></p>
            {stringTruncat(props.w.description,25)}
        </div>
    )
}