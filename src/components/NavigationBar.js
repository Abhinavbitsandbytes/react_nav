import React from 'react';
import "./NavigationBar.css"
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Styles = styled.div`
  .navbar { background-color: #ffffff; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    // &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
    position: absolute;
    background-color: #144192;
    left: 0;
    top: 0;
    height: 100%;
    width:65px;
    text-align:center;
  }
  .form-center {
    position: absolute !important;
    left: 6%;
    right: 25%;
    width:25%;
  }
  .form-center input{
    border-radius:8px;
    background-color: #F5F7FD;
  }
  input:focus{
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
.form-control:focus{
  box-shadow:none
}
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Tuto</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
        <div class="dropdown">
        <p>Testing</p>
        <p>Css ONLY</p>
        <p>Dropdown</p>
        <p>Dropdown</p>
    </div>
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>  */}
          <IconButton aria-label="notification">
      <StyledBadge badgeContent={4} color="secondary">
        <NotificationsIcon />
      </StyledBadge>
    </IconButton>
          {/* <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item> */}
          <div style={{display:'flex'}}>
            <div>
<span>Abhinav Kumar</span>
<span style={{display:'block', fontSize:'12px'}}>abhinav.gupta@precily.com</span>
            </div>
            <div>
      <Avatar alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar.png" />

            </div>
          </div>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)