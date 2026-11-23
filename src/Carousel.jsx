import { useRef, useState } from "react";

export default function Carousel({ images = [], video }) {
  const [current, setCurrent] = useState(0);
  const [ratios, setRatios] = useState({});
  const [wrap, setWrap] = useState(false);
  const videoRef = useRef(null);
  const slides = video ? [video, ...images] : images;
  const ratio = ratios[slides[current].src] ?? 16 / 9;
  const move = (step) => {
    if (current === 0) videoRef.current?.pause();
    setWrap((step < 0 && current === 0) || (step > 0 && current === slides.length - 1));
    setCurrent((current + step + slides.length) % slides.length);
  };

  return (
    <section className="detail-carousel" aria-label="Project media gallery">
      <div className="detail-carousel-viewport" style={{ width: `min(100%, ${ratio * 68}vh, ${ratio * 720}px)`, aspectRatio: ratio }}>
        <div className="detail-carousel-track" style={{ transform: `translateX(-${current * 100}%)`, transition: wrap ? "none" : undefined }}>
          {video && <div className="detail-carousel-slide" aria-hidden={current !== 0}>
            <video className="detail-carousel-video" ref={videoRef} src={video.src} poster={video.poster} aria-label={video.alt} controls={current === 0} tabIndex={current === 0 ? 0 : -1} playsInline preload="none" />
          </div>}
          {slides.map((image, index) => image !== video && (
            <a className="detail-carousel-slide" href={image.full ?? image.src} target="_blank" rel="noopener noreferrer" key={image.src} tabIndex={current === index ? 0 : -1} aria-hidden={current !== index}>
              <img src={image.src} alt={image.alt} loading={index === current ? "eager" : "lazy"} onLoad={(event) => {
                const measuredRatio = event.currentTarget.naturalWidth / event.currentTarget.naturalHeight;
                setRatios((saved) => saved[image.src] === measuredRatio ? saved : { ...saved, [image.src]: measuredRatio });
              }} />
            </a>
          ))}
        </div>
      </div>
      <div className="detail-carousel-controls">
        <p aria-live="polite"><span>{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>{slides[current].alt}</p>
        <div>
          <button type="button" onClick={() => move(-1)} aria-label="Previous slide">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next slide">→</button>
        </div>
      </div>
    </section>
  );
}
