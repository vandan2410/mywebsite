import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,tolink}) => {
  return (
    <Col size={12} sm={6} md={4} >
      <a href={tolink}>
      <div className="proj-imgbx w-full h-full  ">
        <img className="w-full h-full object-contain proj flex-wrap " src={imgUrl} alt=''/>
        <div className="proj-txtx text-white ">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
