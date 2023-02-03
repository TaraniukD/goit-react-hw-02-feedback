import PropTypes from 'prop-types';
import { FcLike, FcLikePlaceholder, FcDislike } from 'react-icons/fc';

import { FeedbackDiv, FeedbackButtons, FeedbackSpan } from './Feedbackoption.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const array = Object.keys(options);
  return (
    <>
    <FeedbackDiv >
      {array.map( name => {
        return (
          
          <FeedbackButtons key={name} type="button" name={name} onClick={onLeaveFeedback}>
           {name} <FeedbackSpan>{name === 'good' ?  <FcLike /> : name === 'neutral' ? <FcLikePlaceholder/> : <FcDislike/> }</FeedbackSpan> 
          </FeedbackButtons>
          );
      })}
      </FeedbackDiv>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};