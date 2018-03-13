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

  it('should add spaces after question sign and comma', function () {
    const input = 'Одне речення?Друге,речення.';
    const expected = 'Одне речення? Друге, речення.';
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

  it('shouldn\'t add space after html code', function () {
    const input = 'У Прип&#39;яті Петро з&#39;їв яблуко';
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
    const input = '<p>-Шо там?</p><p>- Та ніц.</p>';
    const expected = '<p>—&nbsp;Шо там?</p><p>—&nbsp;Та ніц.</p>';
    const actual = LinaKostenko.replaceHyphensWithLongDashes(input);

    assert.equal(actual, expected);
  });
});

describe('replaceStraightQuotationMarks', function () {
  // TODO
});

describe('methods chaining', function () {
  it('should return chainable string', function () {
    const input = 'test';
    const expected = 'test';
    const actual = LinaKostenko
      .chain(input)
      .value();

    assert.equal(actual, expected);
  });

  it('should apply only two rules', function () {
    const input = 'test!! test???? "test!"';
    const expected = 'test!!! test??? "test!"';
    const actual = LinaKostenko
      .chain(input)
      .normalizeSeriesOfQuestionMarks()
      .normalizeSeriesOfExclamationMarks()
      .value();

    assert.equal(actual, expected);
  });
});

describe('main', function () {
  it('should prettify the text', function () {
    const input = `- Ну шо там?
- Та не знаю... Як завжди,всяка фігня відбувається.`;

    const expected = `—&nbsp;Ну шо там?
—&nbsp;Та не знаю… Як завжди, всяка фігня відбувається.`;

    const actual = LinaKostenko(input);

    assert.equal(actual, expected);
  });

  it('should prettify the text', function () {
    const input = `<p>-Привіт, шо ти там?</p>
<p>- Та ніц... А ти як?Чув,ти помер? &quot;Як так &quot;сталось&quot; взагалі?&quot; - спитав мене Вася.</p>`;

    const expected = `<p>—&nbsp;Привіт, шо ти там?</p>
<p>—&nbsp;Та ніц… А ти як? Чув, ти помер? «Як так „сталось“ взагалі?»&nbsp;— спитав мене Вася.</p>`;

    const actual = LinaKostenko(input);

    assert.equal(actual, expected);
  });

  it('shoudn\'t touch HTML tags', function () {
    const input = '<p><img src="http://google.com/images/table,chair-small.jpg" style="display:block; vertical-align:top; margin:5px auto; text-align: center;"></p>';
    const expected = input;
    const actual = LinaKostenko(input);

    assert.equal(actual, expected);
  });

  it('shoudn\'t touch HTML tags', function () {
    const input = '<p>джфіадлрфівадлгрфіва</p><p>фівалдорфівдлрфаів</p><p><strong>іавдлорфівалдоріфва</strong> </p><p>іфва<em>лдорфі</em>вдалрдлфівоард</p><p>фівафівдалодф<u>ліовардлфоі</u>рвадлорваі</p><p><br></p><p><img src="http://localhost:3600/images/6d1700d6-79b2-4349-842e-f3f001e1a76c/large_chair_small.jpg" style="display: block; vertical-align: top; margin: 5px auto; text-align: center;"></p><p>фівадлоіфвадлор фділвоар фділовардфіва</p>';
    const expected = input;
    const actual = LinaKostenko(input);

    assert.equal(actual, expected);
  });

  it('should only replace HTML codes with symbols', function () {
    const input = '<p>&mdash;&nbsp;Привіт, шо ти там?</p><p>&mdash;&nbsp;Та ніц&hellip; А ти як? Чув, ти <strong>помер</strong>? &laquo;<strong>Як</strong> так &bdquo;сталось&ldquo; взагалі?&raquo;&nbsp;&mdash; спитав мене Вася.</p>';
    const expected = '<p>—&nbsp;Привіт, шо ти там?</p><p>—&nbsp;Та ніц… А ти як? Чув, ти <strong>помер</strong>? «<strong>Як</strong> так „сталось“ взагалі?»&nbsp;— спитав мене Вася.</p>';
    const actual = LinaKostenko(input);

    assert.equal(actual, expected);
  });
});
