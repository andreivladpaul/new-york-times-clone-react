import { Row, Col } from 'react-bootstrap';
import './about.scss'

export default function About() {
    return (
        <Row>
            <Col className='about-section d-flex justify-content-center'>
                <h2>New York Times</h2>
                <div>
                    <img className='about-img' src="https://upload.wikimedia.org/wikipedia/en/2/2e/The-New-York-Times-March-26-2018.jpg" alt="New York Times Page" />
                </div>
                <p>The New York Times (nicknamed NYT and the Gray Lady) is an American daily newspaper based in New York City with a worldwide readership. It was founded in 1851 by Henry Jarvis Raymond and George Jones, and was initially published by Raymond, Jones & Company. The Times has won 132 Pulitzer Prizes, the most of any newspaper and has long been regarded as a national "newspaper of record". It is ranked 18th in the world by circulation and 3rd in the U.S.
                </p>
                <br />
                <p>
                    The paper is owned by the New York Times Company, which is publicly traded. It has been governed by the Sulzberger family since 1896, through a dual-class share structure after its shares became publicly traded. A. G. Sulzberger, the paper's publisher and the company's chairman, is the fifth generation of the family to head the paper.
                </p>
            </Col>
        </Row>
    )
}
