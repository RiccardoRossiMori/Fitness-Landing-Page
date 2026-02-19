function Services() {
  return (
    <section id="services" className="bg-secondary text-white py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Courses</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <i className="bi bi-heart fs-1 text-danger"></i>
                <h5 className="mt-3">Personal Training</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <i className="bi bi-people fs-1 text-danger"></i>
                <h5 className="mt-3">Group Classes</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <i className="bi bi-heart-pulse fs-1 text-danger"></i>
                <h5 className="mt-3">Nutrition Coaching</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  );
}

export default Services;
