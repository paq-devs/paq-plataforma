import { Navbar, Container, Nav, Image, NavDropdown } from "react-bootstrap";
import Head from "next/head";

import styles from "../styles/PaqNavbar.module.css";

const PaqNavbar = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>PAQ - Educandos</title>
      </Head>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/img/logo-paq.png"
              alt="logo PAQ"
              className={styles.logoPaqNavbar}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Educandos">
              <NavDropdown.Item href="/educandos">
                Todos os educandos
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Pesquisa</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Portfolio de projetos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Insignias conquistadas
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Eventos">
              <NavDropdown.Item href="/eventos">
                Todos os eventos
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Eventos passados</NavDropdown.Item>
              <NavDropdown.Item href="#">Eventos futuros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">PAQnic</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Abertos para comunidade
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      {children}
    </Container>
  );
};

export default PaqNavbar;
