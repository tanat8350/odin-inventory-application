const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

const Item = require('../models/item');
const Category = require('../models/category');

exports.list = asyncHandler(async (req, res, next) => {
  const allItems = await Item.find({})
    .sort({ name: 1 })
    .populate('category')
    .exec();
  res.render('item_list', {
    title: 'Item list',
    items: allItems,
  });
});

exports.detail = asyncHandler(async (req, res, next) => {
  res.send('detail');
});
exports.create_get = asyncHandler(async (req, res, next) => {
  res.render('item_form');
});
exports.create_post = asyncHandler(async (req, res, next) => {
  res.send('create_post');
});
exports.delete_get = asyncHandler(async (req, res, next) => {
  res.send('delete_get');
});
exports.delete_post = asyncHandler(async (req, res, next) => {
  res.send('delete_post');
});
exports.update_get = asyncHandler(async (req, res, next) => {
  res.render('item_form');
});
exports.update_post = asyncHandler(async (req, res, next) => {
  res.send('update_post');
});
