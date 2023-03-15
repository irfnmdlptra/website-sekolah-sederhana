import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import Hero from "./Hero";

const Maincontent = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row justify-content-center "  id="about">
          <div className="col-12 text-center py-5">
            <h1>Jurusan Sekolah</h1>
          </div>
          <div className="row justify-content-center d-flex">
            <div className="col-4 d-flex justify-content-center">
              <Cardjurusan Image="https://images.unsplash.com/photo-1625111381887-458fce74a923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Vrb2xhaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" Title="Title" Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quisquam rerum facilis? Iste, labore repudiandae!" />
            </div>

            <div className="col-4 d-flex justify-content-center">
              <Cardjurusan Image="https://images.unsplash.com/photo-1625111696958-792514071a8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c21hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" Title="Title" Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quisquam rerum facilis? Iste, labore repudiandae!" />
            </div>

            <div className="col-4 d-flex justify-content-center">
              <Cardjurusan Image="https://images.unsplash.com/photo-1618191218087-a515ea09bda5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" Title="Title" Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quisquam rerum facilis? Iste, labore repudiandae!" />
            </div>
          </div>

          <div className="row d-flex justify-content-center" id="portfolio">
            <div className="col-12 text-center py-5" >
              <h1>Kegiatan Sekolah </h1>
            </div>

            <div className="row justify-content-center">
            <div className="col-12 my-3">
                <Cardkegiatan 
                Image="https://source.unsplash.com/1090x200?sma"
                Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quisquam rerum facilis? Iste, labore repudiandae!"/>
            </div>
            
            <div className="col-12 my-3">
                <Cardkegiatan 
                Image="https://source.unsplash.com/1090x200?sekolah"
                Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quisquam rerum facilis? Iste, labore repudiandae!"/>
            </div>

            <div className="col-12 my-3">
                <Cardkegiatan 
                Image="https://source.unsplash.com/1090x200?siswa"
                Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quisquam rerum facilis? Iste, labore repudiandae!"/>
            </div>

            <div className="col-12 my-3">
                <Cardkegiatan 
                Image="https://source.unsplash.com/1090x200?Indonesia"
                Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quisquam rerum facilis? Iste, labore repudiandae!"/>
            </div>

            <div className="col-12 my-3">
                <Cardkegiatan 
                Image="https://source.unsplash.com/1090x200?nusantara"
                Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quisquam rerum facilis? Iste, labore repudiandae!"/>
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
