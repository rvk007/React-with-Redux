import React, { useState, useEffect } from 'react';
import axios from 'axios';

const key = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

const Convert = ({ text, language }) => {
  const [output, setOutput] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: key,
          },
        }
      );

      setOutput(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [debouncedText, language]);

  return (
    <div>
      <h1 className="ui header">{output}</h1>
    </div>
  );
};

export default Convert;
