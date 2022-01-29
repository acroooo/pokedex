import { API_HOST } from '../utils/constants';

export async function getPokemonsApi(){
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        //fetch url from url string
        const response = await fetch(url);
        //convert response to json
        const json = await response.json();
        return json;
    } catch (error) {
        throw error
    }
}

export async function getPokemonDetailsByUrlApi(url){
    try {
        const response = await fetch(url);
        const result = await response.json()
        return result;
    } catch (error) {
        throw error
    }
}