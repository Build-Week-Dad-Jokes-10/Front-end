import React from "react";
import { CardHeader, Col, Nav, NavItem, NavLink } from "reactstrap";

export default function MainHeader() {
  const logout = () => {
    localStorage.clear();
    alert("Thank you! Please come back soon!");
  };
  return (
    <div>
      <Col md={{ offset: 2 }}>
        <CardHeader
          style={{ width: "78%", backgroundColor: "#EBC700", height: "12vh" }}
        >
          <h1
            style={{
              fontWeight: "bold",
              paddingTop: ".5%",
              margin: "0",
              color: "#380a15"
            }}
          >
            <strong>Dad Jokes</strong>
          </h1>
          <Nav style={{ float: "right" }}>
            <NavItem>
              <NavLink href="/" className="acc-page-nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile" className="acc-page-nav-link">
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/settings" className="acc-page-nav-link">
                Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" onClick={logout} className="acc-page-nav-link">
                Log Out
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
      </Col>
    </div>
  );
}
