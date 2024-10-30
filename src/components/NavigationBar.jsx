import './bootstrap.css';
import './styless.css';

const NavigationBar = () => {
    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />

            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse justify-content-between container" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">
                        <img src="./images/brand_logo.png" alt="" />
                    </a>
                    <ul className="navbar-nav mt-2 mt-lg-0 d-flex flex-row">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">MENU</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">LOCATION</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                    <button className="btn btn-danger">Login</button>
                </div>
            </nav>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    );
};

export default NavigationBar;