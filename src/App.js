

import { useSelector, useDispatch, connect } from "react-redux";
import { useEffect } from "react";
import {
  fetchData,
  prevImage,
  nextImage,
  setArtId,
  reset,
} from "./features/dataSlice";

const mapStateToProps = state => state.data

let debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args)
    }
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
}

function App({artId}) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(()=>{
    dispatch(fetchData())
  },[artId])

  const renderImg = () => {
    if (data?.apiData) {
      return (
        <img
          style={{ width: "100vw" }}
          src={data.apiData.primaryImage}
          alt={data.apiData.title}
        />
      );
    } else {
      return <p>image here</p>;
    }
  };

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            // dispatch fetchData
            dispatch(fetchData());
          }}
        >
          Thunk!
        </button>

        <button
          onClick={() => {
            dispatch(reset());
            // dispatch reset
          }}
        >
          Clear
        </button>

        <button
          onClick={() => {
            dispatch(nextImage()); // dispatch next
          }}
        >
          Next
        </button>

        <button
          onClick={() => {
            dispatch(prevImage());
            // dispatch prev
          }}
        >
          Back
        </button>
      </div>
      <input
        value={data?.artId}
        onChange={(e) => {
          // dispatch setArtId
        }}
      />
      <div>
        {data?.artId}
        {renderImg()}
      </div>
    </div>
  );
}

export default connect(mapStateToProps) (App)



