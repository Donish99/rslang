import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { CardColumns, Card } from 'react-bootstrap';
import './GrupSection.css';

export default class GrupSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 0, section: 'section1', text: 'text1' },
                { id: 1, section: 'section2', text: 'text2' },
                { id: 2, section: 'section3', text: 'text3' },
                { id: 3, section: 'section4', text: 'text4' },
                { id: 4, section: 'section5', text: 'text5' },
                { id: 5, section: 'section6', text: 'text6' },
            ],
        }
    }

    render() {
        const { items } = this.state
        return (
            <CardColumns>
                {items.map(e => (
                    <Link key={e.id} to={`/wordSection/${e.id}`} >
                        <Card className='cardSection'>
                            <Card.Img variant="top"
                                src="https://proprikol.ru/wp-content/uploads/2019/07/chelovechki-prikolnye-kartinki-30.jpg"
                                alt='Section foto' />
                            <Card.Body>
                                <Card.Title>{e.section}</Card.Title>
                                <Card.Text>{e.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </CardColumns>
        )
    }
}
