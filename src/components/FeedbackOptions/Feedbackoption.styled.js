import styled from 'styled-components';

export const FeedbackDiv = styled.div`
margin: 25px 0;
`
export const FeedbackButtons = styled.button`
margin-right: 10px;
padding: 5px 8px;
border: 1px solid #238cb9;
border-radius: 5px;
background-color:#238cb9;
color: #f5f2eb;

font-weight: 500;
font-size: 18px;

cursor: pointer;
scale: 1;

&:hover,
&:focus {
    scale: 1.05;
}
`

export const FeedbackSpan = styled.span`
pointer-events: none;
`