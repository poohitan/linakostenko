import { WHITESPACE, SENTENCE_DELIMITERS } from '../constants';

function splitToSentences(string) {
  const sentences = [];
  const { length } = string;

  let sentenceBegin = 0;
  let quoteOpened = false;

  for (let i = 0; i < length; i += 1) {
    const currentChar = string[i];
    const prevChar = string[i - 1];

    if (currentChar === '"') {
      quoteOpened = !quoteOpened;
    }

    const isSentenceEnd = (WHITESPACE.includes(currentChar)
      && SENTENCE_DELIMITERS.includes(prevChar)) || i === length - 1;

    if (isSentenceEnd && !quoteOpened) {
      sentences.push(string.slice(sentenceBegin, i + 1));

      sentenceBegin = i + 1;
    }
  }

  return sentences;
}

export default splitToSentences;
