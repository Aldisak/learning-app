import {useEffect, useState} from 'react';

export function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/api/cards")
            .then((response) => response.json())
            .then((cards) => setCards(cards));
    }, []);

    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
}