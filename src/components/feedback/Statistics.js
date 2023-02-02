import React from "react";
import { AiOutlinePercentage } from 'react-icons/ai';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
                <h2>Statistics</h2>
                <p >Good: {good}</p>
                <p >Neutral: {neutral}</p>
                <p >Bad: {bad}</p>
                <p >Total: {total}</p>
                <p >Positive feedback: {positivePercentage}<AiOutlinePercentage /></p>
            </div>
);
export default Statistics;