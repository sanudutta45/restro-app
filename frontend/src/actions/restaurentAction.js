import { apiCalls } from "./apiCalls";

const ss_restaurant_api_url = process.env.REACT_APP_RESTAURANT_API_URL;

export const getRestaurant = async (values) => {
  const url = ss_restaurant_api_url + "/api/v1/restaurent/dishes/" + values.id;

  const reqObj = {
    page: values.page || 1,
    category: values.categoryId || "",
  };

  try {
    const result = await apiCalls("get", url, reqObj);
    return result.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      console.error("something went wrong:", error.message);
      throw new Error(error.message);
    }
  }
};

export const getRestaurants = async (values) => {
  const url = ss_restaurant_api_url + "/api/v1/restaurent";

  const reqObj = {
    page: values.page || 1,
    text: values.text || "",
  };

  try {
    const result = await apiCalls("get", url, reqObj);
    return result.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      console.error("something went wrong:", error.message);
      throw new Error(error.message);
    }
  }
};

export const getCategories = async (id) => {
  const url =
    ss_restaurant_api_url + "/api/v1/restaurent/category/" + id;

  try {
    const result = await apiCalls("get", url);
    return result.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      console.error("something went wrong:", error.message);
      throw new Error(error.message);
    }
  }
};
