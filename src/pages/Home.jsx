import { Outlet, useParams } from "react-router-dom";
import Card from "../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMediaTv } from "../redux/actions/trend-tv-actions";
import { fetchMediaMovie } from "../redux/actions/trend-movie-actions";

export default function Shows() {
  const trendMov = useSelector((state) => state.trendMovie);
  const trendTv = useSelector((state) => state.trendTv);
  const dispatch = useDispatch();
  let id = useParams();

  useEffect(() => {
    dispatch(fetchMediaMovie());
    dispatch(fetchMediaTv());
  }, [dispatch]);
  return (
    <div>
      {undefined === id.id ? (
        <>
          <div className="panner d-flex flex-column">
            <h1>The Leatest Trending</h1>
            <h2>Movies & Series</h2>
          </div>
          <div className="container trend my-5">
            <div className="row g-3 my-2">
              <h2 className="text-white pb-2">Trending Movies</h2>
              {trendMov?.map((Show, index) => {
                return <Card key={index} data={Show} />;
              })}
            </div>
            <hr className="text-white" />
            <div className="row g-3 my-2">
              <h2 className="text-white pb-2">Trending Series</h2>
              {trendTv?.map((Show, index) => {
                return <Card key={index} data={Show} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="container my-5">
          <Outlet />
        </div>
      )}
    </div>
  );
}
