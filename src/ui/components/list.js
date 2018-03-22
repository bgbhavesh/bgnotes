import React,{Component} from 'react';
import {stringTruncat} from '../../globalFunction';
export default class List extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        let { widgets } = this.props;
        console.log(this.props)
        return(
            <ul>
                {widgets
                    ?
                    widgets.map((w,i) => 
                        <Item  w={w} key={i} {...this.props}/>                    
                    )
                    :
                    <li>none</li>
                }
            </ul>
        );
    }
}
function Item(props) {
    return (
        <li 
            onClick={e => props.selectItem(e,props.w)}>
            {stringTruncat(props.w.name,20)}
            
                    <span 
                        className='carbon-wrap'
                        onClick={e => props.deleteItem(e,props.w.uid)}>
                            x
                    </span><br/>
            {stringTruncat(props.w.description,25)}
        </li>
    )
}