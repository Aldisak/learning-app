import {useState} from "react";
import styled from "styled-components";

export interface CardProps {
    question: string;
    answer: string;
}

export function Card({answer, question}: CardProps) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <CardContainer>
            <CardBody className={showAnswer ? "is-flipped" : ""}>
                <CardFace className="card__face--front">
                    <CardTitle>{question}?</CardTitle>
                    <CardButton onClick={() => setShowAnswer(!showAnswer)}>
                        Show Answer
                    </CardButton>
                </CardFace>
                <CardFace className="card__face--back">
                    <CardTitle>{answer}.</CardTitle>
                    <CardButton onClick={() => setShowAnswer(!showAnswer)}>
                        Show Question
                    </CardButton>
                </CardFace>
            </CardBody>
        </CardContainer>
    );
}

const CardContainer = styled.div`
  height: 260px;
  perspective: 600px;
`;

const CardBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 0.5s;

  &.is-flipped {
    transform: translateX(-100%) rotateY(-180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  border: 1px solid #eee;
  width: 100%;
  height: 100%;
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;

  &.card__face--back {
    transform: rotateY(180deg);
  }
`;

const CardTitle = styled.h5`
    font-size: 24px;
    font-weight: bold;
    margin-top: 64px;
`;

const CardButton = styled.button`
    position: absolute;
    width: 80%;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 16px;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: #eee;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  
    &:hover {
        background-color: #ddd;
    }
`;