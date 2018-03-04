import React, { Component } from 'react';

class AppHeader extends Component{
    render(){
       return( 
        <header class="container-fluid main-header" ng-controller="HeaderCtrl">
  		  <span class="align-left title" title="Return to the home page link">neilhighley.com</span><br/>
  		  <span class="align-left subtitle">internet - games - mobile</span>
		</header> )
    }
}

export default AppHeader;