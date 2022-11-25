import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Loading } from '../../components/loading/Loading';
import Article from '../../components/article/Article';
import ApiCall from '../../assets/js/apiCall';


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const params = useParams();
    const category = params.category;


    useEffect(() => {
        const fetchArticles = () => {
            ApiCall(category).then((response) => {
                const results = response.data.response.docs;
                setArticles(results);
                setLoading(false);
            });
        }
        fetchArticles();
    }, [category])

    return (
        <Container>
            <Row>
                {loading ? <Loading /> : articles.map(article => {
                    return (<Article key={article._id}
                        abstract={article.abstract}
                        headline={article.headline.main}
                        img={`https://static01.nyt.com/${article.multimedia[0].url}`}
                        article={article.web_url}
                    />)
                })}
            </Row>
        </Container>
    )
}