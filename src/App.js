import { useEffect, useState } from "react";
import CountryService from "./services/CountryService";
import Country from "./components/Country";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import search from "./search.png"
import { propTypes } from "react-bootstrap/esm/Image";

function App() {
  const [countries,setCountries] = useState([]);
  const [searchInput,setSearchInput] = useState("");
  const [filteredCountries,setFilteredCountries] = useState([]);
  useEffect(() => {
    CountryService.getAllCountry('https://restcountries.com/v2/all?fields=name,population,capital,flags',(response) => {
      setCountries(response.data);
    })
    
  },[])
  useEffect(() => {
    filteredDataFind();
  },[searchInput,countries])
  const countryList = filteredCountries.map((country,key) => {
   return <Country key={key} name={country.name} population={country.population} capital={country.capital} flags={country.flags}/>
  })
  const handleOnChange = (searchValue) => {
      setSearchInput(searchValue);
      
  }
  const filteredDataFind = () => {
    if(searchInput !== '') {
      const filteredData = countries.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })
    setFilteredCountries(filteredData);
    }
    else {
      setFilteredCountries(countries);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <h1 className="display-1 text-center">Welcome</h1>
          <p className="text-center">You can search country with name.  </p>
          <InputGroup>
          <Form.Control type="search" onChange={(e) => handleOnChange(e.target.value)}/>
          <Button variant="primary">
          <img src={search} width={20} alt=''></img>
          </Button>
          
          </InputGroup>
        </Row>
      <Row>
      {countryList}
      </Row>
      </Container>
    </>
  );
}

export default App;
