import './VideoSection.css';

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-section-bg">
        <video
          className="video-player"
          autoPlay
          loop
          muted
          playsInline
          src="/demo.mp4"
        />
      </div>
    </section>
  );
}
