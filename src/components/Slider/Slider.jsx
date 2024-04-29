const Slider = () => {
    return (
        <div className="mt-6">
            <div className="carousel w-full h-3/2 relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/xs3t362/s-m-ibrahim-1-NEJki-TTu-LU-unsplash.jpg" className="w-full h-[60%] rounded-2xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-lg text-white font-bold text-4xl">Cox's Bazar</div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/BVm29hv/mamun-srizon-v6-A4n-Xxqk-Fo-unsplash.jpg" className="w-full h-[60%] rounded-2xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-lg text-white font-bold text-4xl">Sundarban</div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/R0skwSZ/alfiano-sutianto-ex-Fd-OWk-YBQw-unsplash.jpg" className="w-full h-[60%] rounded-2xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-lg text-white font-bold text-4xl">Bali</div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/xs3t362/s-m-ibrahim-1-NEJki-TTu-LU-unsplash.jpg" className="w-full h-[60%] rounded-2xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-lg text-white font-bold text-4xl">Phuket</div>
                    </div>
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
