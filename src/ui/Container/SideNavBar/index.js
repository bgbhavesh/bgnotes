import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
// import SvgIcon from 'react-icons-kit';

// import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
// import { ic_business } from 'react-icons-kit/md/ic_business';


//specify the base color/background of the parent container if needed
const MySideNav = () => (
    <div >
        <ListGroup>
            <ListGroupItem href="/">Home</ListGroupItem>
            <ListGroupItem href="/app">App</ListGroupItem>
            {/* <ListGroupItem onClick={alert('hi')}>Trigger an alert</ListGroupItem> */}
        </ListGroup>
    </div>
)
export default MySideNav;