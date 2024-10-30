import './bootstrap.css';
import './styless.css';

const Bodyy = () => {
    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />

            <div className="container d-flex flex-column flex-md-row mt-5">
                <div className="col-md-6 order-2 order-md-1">
                    <p className="head-textt">YOUR FEET DESERVE THE BEST</p>
                    <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="container-fluid mb-3">
                        <button className="btn btn-danger">Shop Now</button>
                        <button className="btn btn-light mx-2">Category</button>
                    </div>
                    <div className="row">
                        <p>Also Available On</p>
                        <div className="d-flex">
                            <img src="./images/flipkart.png" alt="Flipkart" className="imgg" />
                            <img src="./images/amazon.png" alt="Amazon" className="imgg ms-2" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center mt-3 mt-md-0">
                    <img src="./images/shoe_image.png" alt="Shoe" className="img-fluid shoeimg" />
                </div>
            </div>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    );
};

export default Bodyy;