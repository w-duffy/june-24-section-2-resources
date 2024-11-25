import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Image } from "@unpic/react";
import { selectImages, createImage, getAllImages } from "../redux/aws";

function ImageCard({ image }) {
  return (
    <Link to={`/image/${image.id}`}>
      <picture>
        <Image
          width={500}
          height={300}
          background="auto"
          src={image.image}
          alt={`Image ${image.id}`}
          loading="lazy"
        />
      </picture>
    </Link>
  );
}

const AllImagesLandingPage = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  if (!images) return <p>No images yet, add one below!</p>;

  return (
    <section>
      <h2>Image Gallery</h2>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </section>
  );
};

const UploadPicture = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const isAddingNewImage = useSelector((state) => state.images.loading);
  const fileInputRef = useRef(null);
  const [userUpload, setUserUpload] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", userUpload);
    dispatch(createImage(formData));
    fileInputRef.current.value = "";
    setUserUpload(null);
  };

  if (!user) return <p>Please log in to upload images</p>;

  return (
    <section>
      <h2>{isAddingNewImage ? "Uploading..." : "Upload an Image"}</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setUserUpload(e.target.files[0])}
          ref={fileInputRef}
        />
        <button type="submit">Upload Image</button>
      </form>
    </section>
  );
};

export default function AWS() {
  return (
    <main>
      <AllImagesLandingPage />
      <UploadPicture />
    </main>
  );
}

// This is just showing how to use useLoaderData from react router
export function Images() {
  const { images } = useLoaderData();

  if (!images.length) return <p>No images yet, click Home to add one...</p>;

  return images.map((image) => (
    <picture key={image.id}>
      <Image
        width={500}
        height={300}
        background="auto"
        src={image.image}
        alt={`Image ${image.id}`}
        loading="lazy"
      />
    </picture>
  ));
}
