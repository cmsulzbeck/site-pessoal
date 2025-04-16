import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.jpeg"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

const Projects = () => {
    
    const projects = [
        {
            title: 'Programa Uny',
            description: 'Fidelization Program in the pharmaceutical industry',
            imgUrl: projImg1,   
        },
        {
            title: 'Consignado Santander',
            description: 'APIs for the payroll loan sector at Santander Bank',
            imgUrl: projImg2,
        },
        {
            title: 'Authentication API',
            description: 'Authentication API for a personal project',
            imgUrl: projImg3,
        },
        
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of the projects I've worked on.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Segundo</Tab.Pane>
                                <Tab.Pane eventKey="third">Terceiro</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    )
}

export default Projects