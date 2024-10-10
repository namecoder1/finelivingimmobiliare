import Image from "next/image";

const Carousel = ({ images }) => {
  return (
    <div>
      <div className="carousel w-full my-5">
        {
          images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                width={1000}
                height={600}
                alt={`Immagine ${index + 1}`}
                className="w-full object-cover carousel-item"
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Carousel;
