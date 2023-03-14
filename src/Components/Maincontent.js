import Cardjurusan from "./Cardjurusan"
import Hero from "./Hero"

const Maincontent = () => {
    return (
        <>
        <Hero/>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center py-5">
                    <h1>Jurusan Sekolah</h1>
                </div>
                <div className="col-4 d-flex">
                    <Cardjurusan 
                    Image="https://images.unsplash.com/photo-1625111381887-458fce74a923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Vrb2xhaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    Title="Title"
                    Text="Text" />
                </div>
                
                <div className="col-4 d-flex">
                    <Cardjurusan 
                    Image="https://images.unsplash.com/photo-1625111381887-458fce74a923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Vrb2xhaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    Title="Title"
                    Text="Text" />
                </div>

                <div className="col-4 d-flex">
                    <Cardjurusan 
                    Image="https://images.unsplash.com/photo-1625111381887-458fce74a923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Vrb2xhaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    Title="Title"
                    Text="Text" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Maincontent