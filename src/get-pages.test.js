'use strict';

const getPages = require('./get-pages');

test('Should return 4 pages', () => {
  expect(getPages({ totalCount: 32, perPage: 10 }))
    .toEqual([1, 2, 3, 4]);
});

test('Should return 1 page', () => {
  expect(getPages({ totalCount: 3, perPage: 5 }))
    .toEqual([1]);
});

test('Should return empty array', () => {
  expect(getPages({ totalCount: 0, perPage: 10 }))
    .toEqual([]);
});

test('Should return 5 pages', () => {
  expect(getPages({ totalCount: 50, perPage: 10 }))
    .toEqual([1, 2, 3, 4, 5]);
});
