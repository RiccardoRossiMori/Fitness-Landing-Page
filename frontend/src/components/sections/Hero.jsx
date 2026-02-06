function Hero() {
  return (
    <section id="hero" className="vh-100 d-flex align-items-center text-white bg-dark">
      <div className="container text-center">
        <h1 className="display-3 fw-bold">Transform your body, change your life</h1>
        <p className="lead mt-3">Personal training tailored to you, functional workouts, real results and much more than that!</p>
        <button className="btn btn-danger btn-lg mt-4"><a href="#contact" className="text-white text-decoration-none">Start Now</a></button>
      </div>
    </section>
  );
}

export default Hero;
