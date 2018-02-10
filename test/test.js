import { assert } from 'chai';
import LinaKostenko from '../src/main';

describe('forceSpaceAfterPunctuation', function () {
  it('should add space after comma in sentence', function () {
    const input = 'Слово,ше слово';
    const expected = 'Слово, ше слово';
    const actual = LinaKostenko.forceSpaceAfterPunctuation(input);

    assert.equal(actual, expected);
  });

  it('shouldn\'t do anything if space is already there', function () {
    const input = 'Слово, ше слово';
    const expected = input;
    const actual = LinaKostenko.forceSpaceAfterPunctuation(input);

    assert.equal(actual, expected);
  });

  it('should add space after question sign', function () {
    const input = 'Одне речення?Друге речення.';
    const expected = 'Одне речення? Друге речення.';
    const actual = LinaKostenko.forceSpaceAfterPunctuation(input);

    assert.equal(actual, expected);
  });

  it('should add space after exclamation sign', function () {
    const input = 'Одне речення!Друге речення. третє речення';
    const expected = 'Одне речення! Друге речення. третє речення';
    const actual = LinaKostenko.forceSpaceAfterPunctuation(input);

    assert.equal(actual, expected);
  });

  it('should add space after colon sign', function () {
    const input = 'Один:два, бла-бла';
    const expected = 'Один: два, бла-бла';
    const actual = LinaKostenko.forceSpaceAfterPunctuation(input);

    assert.equal(actual, expected);
  });

  it('shouldn\'t add space after colon between numbers', function () {
    const input = 'Рахунок був 1:0';
    const expected = input;
    const actual = LinaKostenko.forceSpaceAfterPunctuation(input);

    assert.equal(actual, expected);
  });

  it('shouldn\'t add space after dot between numbers', function () {
    const input = 'Вага - 1.05 кілограма';
    const expected = input;
    const actual = LinaKostenko.forceSpaceAfterPunctuation(input);

    assert.equal(actual, expected);
  });
});

describe('replaceHyphensWithLongDashes', function () {
  it('should replace hyphens with long dashes', function () {
    const input = '<p>- Шо там?</p><p>- Та ніц.</p>';
    const expected = '<p>&mdash;&nbsp;Шо там?</p><p>&mdash;&nbsp;Та ніц.</p>';
    const actual = LinaKostenko.replaceHyphensWithLongDashes(input);

    assert.equal(actual, expected);
  });
});

describe('main', function () {
  it('should prettify the text', function () {
    const input = `- Ну шо там?
- Та не знаю... Як завжди,всяка фігня відбувається.`;

    const expected = `&mdash;&nbsp;Ну шо там?
&mdash;&nbsp;Та не знаю… Як завжди, всяка фігня відбувається.`;

    const actual = LinaKostenko(input);

    assert.equal(actual, expected);
  });

  it('shoudn\'t touch HTML tags', function () {
    const input = '<p><img src="http://google.com/images/table,chair-small.jpg" style="display:block; vertical-align:top; margin:5px auto; text-align: center;"></p>';
    const expected = input;
    const actual = LinaKostenko(input);

    assert.equal(actual, expected);
  });
});
