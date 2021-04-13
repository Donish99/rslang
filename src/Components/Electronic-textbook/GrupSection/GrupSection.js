import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { CardColumns, Card } from 'react-bootstrap';
import './GrupSection.css';

export default class GrupSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 0, section: 'section 1' },
                { id: 1, section: 'section 2' },
                { id: 2, section: 'section 3' },
                { id: 3, section: 'section 4' },
                { id: 4, section: 'section 5' },
                { id: 5, section: 'section 6' },
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
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </CardColumns>
        )
    }
}
