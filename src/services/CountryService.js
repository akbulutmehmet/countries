import { GetAxios } from "../utils/GetAxios"
class CountryService {
    getAllCountry = (url,callback)  => {
        GetAxios(url).then((response) => {
            if(callback) {
                callback(response);
            }
        });
    }
    getCountryWithName = (url,callback) => {
        GetAxios(url).then((response) => {
            if(callback) {
                callback(response);
            }
        });
    }
}

const countryService =  new CountryService();
export default countryService;