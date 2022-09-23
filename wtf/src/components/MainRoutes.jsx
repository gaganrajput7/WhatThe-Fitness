import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader/Loader";
import SingleGym from "./Gym/SingleGym";
function MainRoutes() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [isloading,setIsLoading] = useState(false)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(show);
  }, []);
  function show(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    axios
      .get(`https://devapi.wtfup.me/gym/nearestgym?lat=${lat}&long=${lon}`)
      .then(({ data }) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          
          <>
            <Routes>
              <Route
                path="/"
                element={<Home data={data} setData={setData} show={show} isloading={isloading} setIsLoading={setIsLoading}/>}
              />
              <Route path="/:id" element={<SingleGym />} />
            </Routes>
            <Footer />
          </>
          )
        </>
      )}
    </>
  );
}

export default MainRoutes;
