import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//actions
import { getRestaurants } from "../../actions/restaurentAction";

//utils
import { debounce } from "../../utils/debounce";

//components
import Card from "./Card/Card";
import SearchBar from "../../Components/SearchBar/SearchBar";

//scss
import Style from "./Home.module.scss";
import QrModal from "./QrModal/QrModal";

const Home = () => {
  const [openQrScan, setOpenQrScan] = useState(false);
  const [restaurents, setRestaurents] = useState([]);
  const [serverError, setServerError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [searchText, setSearchText] = useState("");

  const loadRestaurents = async () => {
    setServerError("");
    const reqObj = {
      page: page || 1,
      text: searchText || "",
    };

    try {
      const result = await getRestaurants(reqObj);
      if (result.total - result.perPage * result.page > 0) setHasMore(true);
      else setHasMore(false);
      setRestaurents((prevRestaurents) => [
        ...prevRestaurents,
        ...result.restaurents,
      ]);
    } catch (error) {
      setServerError(error.message);
    }
  };

  useEffect(() => {
    loadRestaurents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, page]);

  const handleSearch = debounce(function (data) {
    setRestaurents([]);
    setHasMore(false);
    setSearchText(data);
  }, 600);

  return (
    <Container fluid className="p-0">
      <Container fluid="md" className="mt-5 mb-5">
        <Container
          fluid
          className="d-flex align-items-center justify-content-center"
        >
          <SearchBar onChange={handleSearch} />
          <FontAwesomeIcon
            icon={faQrcode}
            size="2x"
            className={`ml-4 ${Style.qrcode}`}
            onClick={() => setOpenQrScan(!openQrScan)}
          />
        </Container>
        <ul className="mt-5">
          {
            restaurents &&
            restaurents.length > 0 &&
            restaurents.map((restaurent) => (
              <li
                className="m-0 ml-md-5 mr-md-5 mt--3 mb-3"
                key={restaurent._id}
              >
                <Card data={restaurent} />
              </li>
            ))}
          {restaurents && restaurents.length <= 0 && (
            <p className="text-center">No restaurent found.</p>
          )}
          {serverError && (
            <div className="text-center text-danger">{serverError}</div>
          )}
        </ul>
        {hasMore && (
          <div
            className={`mx-auto mt-4 ${Style.hasMore}`}
            onClick={() => setPage((page) => page + 1)}
          >
            Load More
          </div>
        )}
      </Container>

      {openQrScan && (
        <QrModal show={openQrScan} onHide={() => setOpenQrScan(false)} />
      )}
    </Container>
  );
};

export default Home;
