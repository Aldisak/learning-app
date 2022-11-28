interface CardProps {
    question: string;
    answer: string;
}

function Card({answer, question}: CardProps) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{question}</h5>
                <p className="card-text">{answer}</p>
            </div>
        </div>
    );
}