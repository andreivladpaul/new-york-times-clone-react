import React from 'react';
import './article.scss';
import { Col } from 'react-bootstrap';


export default function Article(props) {
    return (
        <>
            <Col sm className='text__section p-2'>
                <h3>{props.headline}</h3>
                <p>{props.abstract}</p>
                <a href={props.article} target="_blank">
                    <img src={props.img} alt={props.headline} />
                </a>
            </Col>
            <hr />
        </>
    )
}
