import axios from 'axios';

export default async function getArticles(category) {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=$${category}&api-key=${process.env.REACT_APP_API_KEY}`);
        return response;
    } catch (error) {
        alert('Something when wrong, try again!');
    }
};