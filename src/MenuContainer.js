import React, {Component} from 'react';
import './MenuContainer.css'; 
import MenuButton from './MenuButton'; 
import Menu from './Menu'; 

class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = {
      visible: false
    };


    this.toggleMenu = this.toggleMenu.bind(this); 
    this.handleMouseDown  = this.handleMouseDown.bind(this); 
  }

  handleMouseDown(e) {
    this.toggleMenu(); 
    e.stopPropagation(); 
  }

  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }

  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown} 
              menuVisibility={this.state.visible}/> 
      </div>
    );
  }

}

export default MenuContainer; 