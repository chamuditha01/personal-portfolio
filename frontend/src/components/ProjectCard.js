import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img style={{height:'250px',objectFit:'cover'}} src={imgUrl} />
        <div className="proj-txtx" >
          <h4><a id="a1" style={{textDecoration:'none'}} href={link} target="blank">{title}</a></h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
