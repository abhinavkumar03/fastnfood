import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


const Home = () => {

    const [search, setSearch] = useState('')
    const [foodCat, setFoodCat] = useState([])
    const [foodItem, setFoodItem] = useState([])

    const loadData = async () => {
        let response = await fetch ("http://localhost:5000/api/foodData", {
        // let response = await fetch ("https://fastnfood.onrender.com/api/foodData", {
            method: 'POST',
            headers: {
                'User-Agent':'Thunder Client (https://www.thunderclient.com)',
                'Content-Type':'application/json',
                'Accept':'*/*'
            }
        });
        response = await response.json();
        // console.log(response[0],response[1]);
        setFoodItem(response[0])
        setFoodCat(response[1])
    }

    useEffect(() => {
      loadData()
    }, [])
    

    return (
        <div>
            <div><Navbar /></div>
            <div><div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className='carousel-caption d-none d-md-block' style={{zIndex:"10"}} id='carousel'>
                    <div className='fs-1 text-light fw-bolder fst-italic'><i class="text-warning fa-solid fa-bowl-food fa-fade fa-2xl"></i></div>
                    <div className='fs-1 mb-5 fw-bolder fst-italic text-success'>Fast'N'Food</div>
                    <div className="d-flex mb-5 justify-content-center" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    </div>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100 image" alt="..." style={{filter:"brightness(20%)"}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100 image" alt="..." style={{filter:"brightness(20%)"}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?sandwich" className="d-block w-100 image" alt="..." style={{filter:"brightness(20%)"}} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div></div>
            <div className="container m-3">{
                foodCat !== []? foodCat.map((data)=>{
                    return (<div className='row mb-3'>
                        <div key={data._id} className='fs-3 m-3'> {data.CategoryName}</div>
                        <hr />
                        {foodItem !== []? foodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                            .map(filterItems=>{
                                return(
                                    <div className='col-md-6 col-lg-3 col-12'>
                                        <Card key={filterItems._id} foodItem = {filterItems} options={filterItems.options[0]}/>
                                    </div>
                                )
                            }): <div>No data available</div> }
                        </div>
                        )
                    }) : <div></div>
                }</div>
            {/* <div><Card/></div> */}
            <div><Footer /></div>
        </div>
    )
}

export default Home
