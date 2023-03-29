import { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";

export const Home = ({children}) => {
    const { user } = useContext(AuthContext);
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand as={Link} to="/">
            JWT HTTP-Only Cookie
          </Navbar.Brand>
          <Nav className="ms-auto">
            {user && <Nav.Link>{user?.email}</Nav.Link>}
            {!user && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar>
        <Container>{children}</Container>
      </>
    )
}