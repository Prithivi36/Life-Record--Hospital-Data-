function Navbar() {
  return (
    <div className="">
        <nav className="navbar p-4  navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand fw-bold" href="#">Life Record</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">DashBoard </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Notifications</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Report</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
export default Navbar