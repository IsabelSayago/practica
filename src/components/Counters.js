import React, { Component } from 'react';

class Counters extends Component{
    render(){
    
    return(
    <div class="flow-right controls">
        <span>Item count: <span id="item-count" >0</span></span>
        <span>Unchecked count: <span id="unchecked-count" >0</span></span>
        
      </div>
    )
}
    
    
    
}
    export default Counters;
    