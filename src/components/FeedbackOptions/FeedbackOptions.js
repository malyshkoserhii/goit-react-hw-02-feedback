import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((el, idx) => (
        <div key={idx}>
          <button onClick={() => onLeaveFeedback(el)}>{el}</button>
        </div>
      ))}
    </>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
