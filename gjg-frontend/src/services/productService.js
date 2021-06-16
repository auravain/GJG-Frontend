import axios from 'axios';

export default class ProductService {
	getProducts() {
		return axios.get('https://recruitment-mock-data.gjg-ads.io/data');
	}
}
