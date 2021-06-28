const APIError = require("../utils/APIError");
const { MSG } = require("../utils/messages");
const { perPage } = require("../constants");
const Users = require("../models/users.model");
const Dish = require("../models/dish.model");
const Category = require("../models/category.model");
const handleResponse = require("../utils/handleResponse");
const mongoose = require("mongoose");

exports.getRestaurents = async (req, res) => {
  let page = req.query.page || 1;
  page = isNaN(page) ? 1 : parseInt(page);
  page = page <= 0 ? 1 : page;

  const skipPerPage = perPage * (page - 1);
  const searchText = req.query.text || "";

  let promise = [];

  promise.push(
    Users.find({
      name: { $regex: `${searchText}`, $options: "i" },
    })
      .skip(skipPerPage)
      .limit(perPage)
      .lean()
  );

  promise.push(
    Users.find({ name: { $regex: `${searchText}`, $options: "i" } }).lean()
  );

  try {
    const response = await Promise.all(promise);

    const result = {
      page: page,
      perPage: perPage,
      total: response[1].length,
      restaurents: response[0],
    };

    return handleResponse.success(res, result);
  } catch (error) {
    return handleResponse.error(
      res,
      new APIError({
        message: MSG.NOT_FOUND,
        error: error,
        status: 400,
      })
    );
  }
};

exports.getRestaurentMenu = async (req, res) => {
  let page = req.query.page || 1;
  page = isNaN(page) ? 1 : parseInt(page);
  page = page <= 0 ? 1 : page;

  let category = req.query.category || "";

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    handleResponse.error(
      res,
      new APIError({
        message: MSG.INVALID_ID,
        status: 403,
      })
    );
  }

  let query = {
    userId: id,
  };

  if (mongoose.Types.ObjectId.isValid(category)) {
    query.categoryId = category;
  }

  const skipPerPage = perPage * (page - 1);
  // const searchText = req.query.text || "";

  try {
    const dishes = await Dish.find(query, { userId: 0 })
      .skip(skipPerPage)
      .limit(perPage)
      .lean();

    const result = {
      page: page,
      perPage: perPage,
      total: dishes.length,
      dishes: dishes,
    };

    return handleResponse.success(res, result);
  } catch (error) {
    console.log(error);
    return handleResponse.error(
      res,
      new APIError({
        message: MSG.NOT_FOUND,
        error: error,
        status: 400,
      })
    );
  }
};

exports.getCategories = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    handleResponse.error(
      res,
      new APIError({
        message: MSG.INVALID_ID,
        status: 403,
      })
    );
  }

  try {
    const result = await Category.find({ userId: id }, { userId: 0 });
    return handleResponse.success(res, result);
  } catch (error) {
    console.log(error);
    return handleResponse.error(
      res,
      new APIError({
        message: MSG.NOT_FOUND,
        error: error,
        status: 400,
      })
    );
  }
};
