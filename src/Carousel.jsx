import { useState } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [ratios, setRatios] = useState({});
  const [wrap, setWrap] = useState(false);
  const ratio = ratios[images[current].src] ?? 16 / 9;
  const move = (step) => {
    setWrap((step < 0 && current === 0) || (step > 0 && current === images.length - 1));
    setCurrent((current + step + images.length) % images.length);
  };

  return (
    <section className="detail-carousel" aria-label="Project image gallery">
      <div className="detail-carousel-viewport" style={{ width: `min(100%, ${ratio * 68}vh, ${ratio * 720}px)`, aspectRatio: ratio }}>
        <div className="detail-carousel-track" style={{ transform: `translateX(-${current * 100}%)`, transition: wrap ? "none" : undefined }}>
          {images.map((image, index) => (
            <a className="detail-carousel-slide" href={image.src} target="_blank" rel="noopener noreferrer" key={image.src} tabIndex={current === index ? 0 : -1} aria-hidden={current !== index}>
              <img src={image.src} alt={image.alt} loading={index === current ? "eager" : "lazy"} onLoad={(event) => {
                const measuredRatio = event.currentTarget.naturalWidth / event.currentTarget.naturalHeight;
                setRatios((saved) => saved[image.src] === measuredRatio ? saved : { ...saved, [image.src]: measuredRatio });
              }} />
            </a>
          ))}
        </div>
      </div>
      <div className="detail-carousel-controls">
        <p aria-live="polite"><span>{String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>{images[current].alt}</p>
        <div>
          <button type="button" onClick={() => move(-1)} aria-label="Previous image">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next image">→</button>
        </div>
      </div>
    </section>
  );
}
