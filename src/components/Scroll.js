import React from 'react';

const Scroll = (props) =>{
    return(
        <div style={{overflowY:'scroll',border:'1px solid transparent',borderTop:'2px solid #fff',height:'80vh'}}>
            {props.children}
        </div>

    ) ;
}

export default Scroll;
