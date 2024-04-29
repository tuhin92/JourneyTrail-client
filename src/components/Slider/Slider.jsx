const Slider = () => {
    return (
        <div className="mt-6">
            <div className="carousel w-full h-3/2">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/DfCpX2K/ravin-rau-otb0-Wq-G3l34-unsplash.jpg" className="w-full h-[60%] rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/BVm29hv/mamun-srizon-v6-A4n-Xxqk-Fo-unsplash.jpg" className="w-full h-[60%] rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/R0skwSZ/alfiano-sutianto-ex-Fd-OWk-YBQw-unsplash.jpg" className="w-full h-[60%] rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/xs3t362/s-m-ibrahim-1-NEJki-TTu-LU-unsplash.jpg" className="w-full h-[60%] rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        </div>
    );
};

export default Slider;