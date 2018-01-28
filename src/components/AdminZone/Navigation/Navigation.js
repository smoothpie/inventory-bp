import React, { Component } from 'react';
import propTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router-dom';
import '../AdminPage/AdminPage.less';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = (e) => {
    e.preventDefault();
  }

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open
    });
  };

  render(){
    return(
      <div className="adminpage__navigation">
        <Menu>
        <MenuItem
          primaryText="Dashboard"
          containerElement={<Link to='/admin' />}
          leftIcon={<ContentInbox />}
        />
        <MenuItem
          primaryText="Shop"
          leftIcon={<ActionGrade />}
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <MenuItem
              containerElement={<Link to='/admin/stock' />}
              key={1}
              primaryText="Stock"
              leftIcon={<ActionGrade />}
            />,
            <MenuItem
              key={2}
              containerElement={<Link to='/admin/sales' />}
              primaryText="Orders"
              leftIcon={<ContentSend />}
            />,
            <MenuItem
              key={3}
              primaryText="Vendors"
              containerElement={<Link to='/admin/vendors' />}
              leftIcon={<ContentInbox />}
              open={this.state.open}
              onNestedListToggle={this.handleNestedListToggle}
            />,
            <MenuItem
              key={4}
              primaryText="Manage"
              containerElement={<Link to='/admin/manage' />}
              leftIcon={<ContentInbox />}
              open={this.state.open}
              onNestedListToggle={this.handleNestedListToggle}
            />,
          ]}
        />
        <MenuItem
          containerElement={<Link to='/posts' />}
          primaryText="Blog"
          leftIcon={<ContentInbox />}
        />
        <MenuItem
          containerElement={<Link to='/users' />}
          primaryText="Users"
          leftIcon={<ContentSend/>}
        />
        <MenuItem primaryText="Settings" leftIcon={<ContentDrafts />} />
        <MenuItem
          containerElement={<Link to='/logout' />}
          primaryText="Logout"
          leftIcon={<ContentInbox />}
        />
        </Menu>
        </div>
    );
  }
}

export default Navigation;
