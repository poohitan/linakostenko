import { assert } from 'chai';
import functions from '../src/functions';

describe('forceSpaceAfterPunctuation', function () {
  it('should add space after comma in sentence', function () {
    const input = 'Слово,ше слово';
    const expected = 'Слово, ше слово';
    const actual = functions.forceSpaceAfterPunctuation(input);

    assert.equal(expected, actual);
  });

  it('shouldn\'t do anything if space is already there', function () {
    const input = 'Слово, ше слово';
    const expected = input;
    const actual = functions.forceSpaceAfterPunctuation(input);

    assert.equal(expected, actual);
  });

  it('should add space after question sign', function () {
    const input = 'Одне речення?Друге речення.';
    const expected = 'Одне речення? Друге речення.';
    const actual = functions.forceSpaceAfterPunctuation(input);

    assert.equal(expected, actual);
  });

  it('should add space after exclamation sign', function () {
    const input = 'Одне речення!Друге речення. третє речення';
    const expected = 'Одне речення! Друге речення. третє речення';
    const actual = functions.forceSpaceAfterPunctuation(input);

    assert.equal(expected, actual);
  });

  it('should add space after colon sign', function () {
    const input = 'Один:два, бла-бла';
    const expected = 'Один: два, бла-бла';
    const actual = functions.forceSpaceAfterPunctuation(input);

    assert.equal(expected, actual);
  });

  it('shouldn\'t add space after colon between numbers', function () {
    const input = 'Рахунок був 1:0';
    const expected = input;
    const actual = functions.forceSpaceAfterPunctuation(input);

    assert.equal(expected, actual);
  });

  it('shouldn\'t add space after dot between numbers', function () {
    const input = 'Вага - 1.05 кілограма';
    const expected = input;
    const actual = functions.forceSpaceAfterPunctuation(input);

    assert.equal(expected, actual);
  });
});
