import React, {Component} from 'react';

class AppNavigation extends Component{

     render(){
           function NavigationList(props){
            return(
                <div className="h-middle col-sm-6">
                <ul className='h-menu'>{props.children}</ul>
                </div>);
           }
           function NavigationItem(props){
               var linktitle=props.children;
               var description=props.description;
               var tooltip=props.tooltip;
            return(<li title={tooltip} className='hm-menuitem'>
            <h1>{linktitle}</h1>
            <h2>{description}</h2></li>);
           }
         
        return(
            <NavigationList>
                <NavigationItem destination='blog' tooltip='My Blog, items I am working on, products I have built' description='Comments on technology and links to interesting items found online' >Blog</NavigationItem>
                <NavigationItem destination='resume' tooltip='Details of contracts and work completed. Download docx here' description='View my resume or download it in docx or pdf formats'>Resume</NavigationItem>
            </NavigationList>
            )
    }
}

export default AppNavigation;