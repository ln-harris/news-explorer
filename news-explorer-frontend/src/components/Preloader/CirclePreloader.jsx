import "./CirclePreloader.css";

function CirclePreloader() {
  return (
    <section className="circle-preloader">
      <div className="circle-preloader__circle" />
      <p className="circle-preloader__text">Searching for news...</p>
    </section>
  );
}

export default CirclePreloader;