import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { routes } from "../../Router"

export const NavBar = () => {
    const renderPatterns = () => {
        return (
            routes.map(route => {
                return <NavDropdown.Item key={route.path} href={route.title}>{route.title}</NavDropdown.Item>
            })
        )
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="home">Design Patterns</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="patterns">
                            {renderPatterns()}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}