import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setOrderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'User-Agent':'Thunder Client (https://www.thunderclient.com)',
                'Content-Type':'application/json',
                'Accept':'*/*'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setOrderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container my-5 '>
                <div className='row'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                            data.orderData.order_data.slice(0).reverse().map((item) => {
                                return (
                                    item.map((arrayData) => {
                                        return (
                                            
                                            <div className='col-12 col-md-6 col-lg-3 my-3' >
                                                    {arrayData.Order_date ? <div className="fw-bolder lh-lg m-auto mt-5 w-50 border border-5 border-primary bg-light text-dark p-5 rounded-circle mt-3 m-auto" style={{ width: "16rem", maxHeight: "360px" }}>

                                                        {data = arrayData.Order_date}
                                                    </div> :
                                                    
                                                    <div>
                                                        <div className="container text-center ">
                                                          
                                                        <div className='' >
                                                            <div className="card mt-3 m-auto" style={{ width: "16rem", maxHeight: "360px" }}>
                                                            <div className="col">
                                                            <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/- <br/>
                                                                        </div>
                                                                        {/* <span className='m-1'>{data}</span> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                
                                                            </div>

                                                        </div>
                                                      </div>
                                                      </div>

                                                    }
                                                </div>

                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>

            <Footer />
        </div>
    )
}