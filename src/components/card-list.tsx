import {useEffect, useState} from 'react';
import {Card, CardProps} from "./card";

export function CardList() {
    const [cards, setCards] = useState<CardProps[]>([]);

    useEffect(() => {
        fetch("https://retoolapi.dev/0xBBjN/learningApp")
            .then((response) => response.json())
            .then((cards) => setCards(cards));
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
}