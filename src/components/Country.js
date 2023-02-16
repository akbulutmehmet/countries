import { useState } from "react";
import { Col,Card, Button } from "react-bootstrap";
import styles from "./country.module.css"
import CountryDetail from "./CountryDetail";
function Country (props) {
    const [show,setShow] = useState(false);
    const handleOnClick = () => {
      setShow(true);
    }
     return(
        <Col className="col-md-3 p-1" align='center' >
        <Card className={" border border-dark " + styles.customCard}>
  <Card.Img variant="top" src={props.flags.png} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      Population: {props.population}
    </Card.Text>
    <Button variant="success" onClick={handleOnClick}>Detail</Button>
    
  </Card.Body>
  
</Card>
<CountryDetail show={show} onHide={() => {setShow(false)}} {...props}/>
        </Col>
      
    );
}

export default Country;