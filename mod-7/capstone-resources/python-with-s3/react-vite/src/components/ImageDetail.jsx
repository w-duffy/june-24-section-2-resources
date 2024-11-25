import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getImageById } from "../redux/aws";
import { useEffect } from "react";

export default function ImageDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const loadedImage = useSelector((state) => state.images.allImages[id]);
  const noImageError = useSelector((state) => state.images.error);

  useEffect(() => {
    dispatch(getImageById(id));
    return () => {
      dispatch({ type: "error/cleanup" });
    };
  }, [dispatch, id]);

  if (noImageError.message) return <p>{noImageError.message}</p>;

  if (!loadedImage) return <p>Loading Spinner...</p>;

  return <img src={loadedImage.image} />;
}
