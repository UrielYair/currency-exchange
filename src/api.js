import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// const API_KEY = '47d78df504422d5f476eea4acee7156d'
// const API_URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}&format=1`
const API_URL = 'https://api.exchangeratesapi.io/latest?base=USD'

const getRates = async () => {
    const response = await axios.get(API_URL)
    var rates = response.data.rates;
	let ratesList = [];
	for (var key in rates) {
		if (rates.hasOwnProperty(key)) {
			ratesList.push({
				currency_name: key,
				currency_rate: rates[key],
				checked: false,
				id: uuidv4()

			})
		}
	}
	return ratesList;
}


export default getRates;