import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl}) => {
    return (
        <Col sm={12} md={6} lg={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;