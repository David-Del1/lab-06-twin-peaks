import React, { useState } from 'react';
import { getQuote } from '../twinPeaksApi';
import Quote from '../components/quote/Quote';
import Load from '../components/quote/Load';

const TwinPeaksContainer = () => {
  const [quote, setQuote] = useState({});

  const handleClick = async () => {
    const quote = await getQuote();

    setQuote({ quote });
  };

  return (
    <>
      <Quote quoteText={quote} />
      <Load onClick={handleClick} />

    </>
  );
};

export default TwinPeaksContainer;
