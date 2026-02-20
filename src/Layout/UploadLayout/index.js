import Header from "./Header";

function UploadLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default UploadLayout;