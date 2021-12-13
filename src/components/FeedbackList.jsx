import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';
import Spinner from './shared/Spinner';

import FeedBackItem from './FeedBackItem';

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No FeedBack yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={index} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
