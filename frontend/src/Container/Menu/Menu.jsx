import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import CategoryCard from "./CategoryCard/CategoryCard";
import FoodCard from "./FoodCard/FoodCard";

//actions
import { getCategories, getRestaurant } from "../../actions/restaurentAction";

import MenuStyle from "./Menu.module.scss";

const Menu = () => {
  const { id } = useParams();

  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async function () {
      setServerError("");
      try {
        const result = await getCategories(id);
        setCategories(result);
        result.length > 0 && setActiveCategory(result[0]._id);
      } catch (error) {
        setServerError(error.message);
        setLoading(false);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (activeCategory) {
      (async function () {
        setServerError("");
        const reqObj = {
          page: page,
          categoryId: activeCategory,
          id: id,
        };
        try {
          setLoading(true);
          const result = await getRestaurant(reqObj);
          if (result.total - result.perPage * result.page > 0) setHasMore(true);
          setDishes((prevResult) => [...prevResult, ...result.dishes]);
          setLoading(false);
        } catch (error) {
          setServerError(error.message);
          setLoading(false);
        }
      })();
    }
  }, [id, activeCategory, page]);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return;
    setDishes([]);
    setActiveCategory(categoryId);
  };
  return (
    <Container fluid="md">
      <ul className="d-flex justify-content-center mt-5 mb-3 flex-wrap">
        {categories &&
          categories.map((category) => (
            <li className="p-2" key={category._id}>
              <CategoryCard
                name={category.title}
                active={category._id === activeCategory}
                onClick={() => handleCategoryChange(category._id)}
              />
            </li>
          ))}
      </ul>

      <Row>
        {loading && <Col className="text-center">loading...</Col>}

        {!loading &&
          dishes &&
          dishes.length > 0 &&
          dishes.map((dish) => (
            <Col md={6} className="pt-2 pb-2" key={dish._id}>
              <FoodCard dish={dish} />
            </Col>
          ))}
        {!loading && dishes.length <= 0 && (
          <Col className="text-center">No dishes available.</Col>
        )}
        {hasMore && (
          <Col>
            <div
              className={`mx-auto mt-4 ${MenuStyle.hasMore}`}
              onClick={() => setPage((page) => page + 1)}
            >
              Load More
            </div>
          </Col>
        )}
      </Row>
      {serverError && (
        <div className="text-center text-danger">{serverError}</div>
      )}
    </Container>
  );
};

export default Menu;
