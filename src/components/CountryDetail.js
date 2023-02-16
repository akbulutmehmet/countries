import { Button, Modal } from "react-bootstrap";
function CountryDetail (props) {

    return (<>
    <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.flags.png} width={400} className='text-center'/>
            <h1 className="display-4">Capital : {props.capital}</h1>
            <p>Population : {props.population}</p>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>);
}
export default CountryDetail;