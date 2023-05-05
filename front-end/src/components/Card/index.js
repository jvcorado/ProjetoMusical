
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Cards = ({img, alt, title,cantores}) => {
  return (
    <Col lg={12} className="">
        <Col lg={12} className="p-0 m-0 m-auto shadow-lg w-100 d-flex bg-color-primary p-3 gap-3 align-items-center justify-content-between rounded-4">
            <img src={img} alt={alt} className="rounded-3 shadow-lg" style={{width:'130px'}}/>
            <div className="flex-fill">
                <h5>{title}</h5>
                <span>{cantores}</span>
                <i className="fas fa-sharp fa-light fa-chevron-up fa-rotate-90 "></i>
            </div>
        </Col>
    </Col>
  )
}   
