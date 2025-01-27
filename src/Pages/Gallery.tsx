import { useEffect, useState } from "react";
import clientConfig from "../clientConfig";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./Gallery.module.css";
import { leftArrow, rightArrow } from "../utils/icons";
import LoadingRipples from "../assest/loading_ripple.gif";
import { useIsMobile } from "../utils/utils";

const Gallery = () => {
  const isMobile = useIsMobile();
  const [gallery, setGallery] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getNextImage = () => {
    const currentIndex = gallery.indexOf(selectedImage);
    return gallery[(currentIndex + 1) % gallery.length];
  };

  const getPreviousImage = () => {
    const currentIndex = gallery.indexOf(selectedImage);
    return gallery[(currentIndex - 1 + gallery.length) % gallery.length];
  };

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          `${clientConfig.backendUrl}/api/v1/gallery`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": clientConfig.apiKey || "",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setGallery(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };
    fetchGallery();
  }, []);

  const handleImageClick = (src: string) => {
    if (!isMobile) {
      setSelectedImage(src);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  let data = (
    <div className={styles.loadingContainer}>
      <img
        style={{ width: "100px", height: "100px" }}
        src={LoadingRipples}
        alt="loading"
      />
    </div>
  );
  if (gallery.length > 0) {
    data = (
      <div className={styles.galleryContainer}>
        <div className={styles.gallery}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {gallery.map((item: any) => (
                <img
                  style={{ width: "100%", height: "auto", cursor: "pointer" }}
                  src={item}
                  alt={item.alt}
                  onClick={() => handleImageClick(item)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    );
  }
  let imagesModel = null;
  if (selectedImage && !isMobile) {
    imagesModel = (
      <div className={styles.modal}>
        <div className={styles.closeOverlay} onClick={closeModal}></div>
        <div className={styles.closeButton}>
          <div className={styles.closeIcon} onClick={closeModal}>
            <div className={styles.closeIconX}>X</div>
          </div>
        </div>
        <button
          onClick={() => handleImageClick(getPreviousImage())}
          className={styles.arrowButton}
        >
          {leftArrow}
        </button>
        <img
          src={selectedImage}
          alt="Large view"
          className={styles.modalImage}
        />
      
        <button
          onClick={() => handleImageClick(getNextImage())}
          className={styles.arrowButton}
        >
          {rightArrow}
        </button>
      </div>
    );
  }

  return (
    <div>
      {data}
      {imagesModel}
    </div>
  );
};

export default Gallery;
