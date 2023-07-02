import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
// import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

const Navbar = () => {
    let data = useCart();
    const [cartView, setCartView] = useState(false)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary ">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 fst-italic text-warning" to="/">Fast'N'Food <i class="fa-solid fa-truck-fast"></i> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {<div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white active fs-5 " aria-current="page" to="/"><i class="fa-solid fa-house btn bg-white text-danger mx-2 "></i> Home</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ? <li className="nav-item">
                                <Link className="nav-link text-white active fs-5 " aria-current="page" to="/myOrder"><i class="fa-solid fa-user btn bg-white text-danger mx-2"></i> My Orders</Link>
                            </li> : " "}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex flex-end'>
                                <Link className="btn bg-white text-success mx-1 " to="/login"><i class="fa-solid fa-right-to-bracket"></i></Link>
                                <Link className="btn bg-white text-success mx-1 " to="/createuser"><i class="fa-solid fa-user-plus"></i></Link>
                            </div> :
                            <div>
                                <div className='btn bg-white text-success mx-2' onClick={() => { setCartView(true) }} ><i class="fa-solid fa-cart-shopping"></i> {" "}
                                    {data.length > 0 && (<Badge pill bg="danger">{data.length}</Badge>)}
                                    {/* <Badge pill bg="danger">{data.length}</Badge> */}
                                </div>
                                {cartView ? <Modal onClose={() => setCartView(false)} > <Cart /> </Modal> : null}
                                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i></div>
                            </div>
                        }
                    </div>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
