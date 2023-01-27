import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { delCartItem } from '../services/slice/CartSlice'
import { useEffect } from 'react'

const image = process.env.REACT_APP_NODE_HOST

const Cart = () => {
  const { cart_data } = useSelector((state) => state.cartslice)
  const dispatch = useDispatch()
  const len = cart_data?.length
  const [amount, setAmount] = useState({ subtotal: 0, discount: 0, total: 0 })

  // Calculate Function
  // Calculate Sum
  const calculateSum = () => {
    let st = 0
    let dc = 0

    cart_data?.map(({ resp, info }) => {
        if (info[0].discount_percentage) {
            st += (Number((info[0].ticket_price * resp.quantity)))
            dc += (Number(((info[0].ticket_price) * (info[0].discount_percentage) / 100) * resp.quantity))
            return Number(st)
        } else {
            st += Number(info[0].ticket_price * resp.quantity)
            return st
        }
    })
    return setAmount({
        ...amount,
        subtotal: st,
        discount: dc,
        total: st - dc
    })
}

  useEffect(() => {
    window.scrollTo(0, 0)
    calculateSum()
  }, [cart_data, len])




  return (
    <>
      <main>
        <div className="cart_list_wrapper pb-5">
          <div className="container pt-5">
            <div className="bred">
              <div className="product_title_top">
                <h3>Your Order List</h3>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Cart</li>
                </ol>
              </nav>
            </div>
          </div>
          {/* Cart Item list */}
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="cart_list_area">
                  {
                    cart_data?.length ?
                      cart_data?.map((item) => {
                        // cart_data?.map((item) => {
                        return (
                          <div className="cart_list_item" key={item.resp._id}>
                            <div className="cart_item_img">
                              <img src={image + item?.info[0]?.main_image} alt="" className="img-fluid" />
                            </div>
                            <div className="cart_item_content">
                              <div className="cart_title">
                                <h3>{item?.info[0]?.ticket_name}</h3>
                              </div>
                              <div className="other_info">
                                <p className="amount fw-bold text-dark">Item Quantity : {item?.resp?.quantity}</p>
                                {/* Calculation of discounted price */}
                                <p className="tic_price fw-bold text-dark">Price Of Ticket :
                                  {
                                    (Number(item?.info[0]?.ticket_price - ((item?.info[0]?.ticket_price * item?.info[0]?.discount_percentage) / 100)) * item?.resp?.quantity).toFixed(2)
                                  }
                                </p>
                              </div>
                              <div className="date_result">
                                {/* Calculating the data */}
                                <h5><span><img src="/assets/img/3135783 1.png" alt="" /></span>Result on <span className="fw-bold">
                                  {new Date(item?.info[0]?.time_left).toLocaleString('en-US', {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric'
                                  })}
                                </span></h5>
                              </div>
                            </div>
                            <div className="remove_btn">
                              <button onClick={() => dispatch(delCartItem(item?.resp?._id))}><i className="bi bi-trash3"></i></button>
                            </div>
                          </div>
                        )
                      })
                      :
                      <div className='text-center' >
                        <img src="/assets/img/emptycart.png" alt="" />
                        <h2>Your Cart Is Empty</h2>
                      </div>

                  }
                </div>
                {/* <!-- place order area --> */}
                {
                  cart_data?.length > 0 ?
                    <div className="placeorder_area sticky">
                      <Link to="/placeorder" className="orderplace">Place Order</Link>
                    </div>
                    :
                    <div className="placeorder_area sticky">
                      <button disabled>No item left to place order</button>
                    </div>
                }

              </div>

              {/* Purchase Summery Section */}
              <div className="col-md-4">
                <div className="price_area_wrapper">
                  <h3 className="price_title">Purchase Summary</h3>
                  <div className="price_inner">

                    {/* Total Price calculation */}
                    <div className="price_item borderbottom">
                      <h4 className="price_text">Price <span> ({cart_data?.length} Item):</span></h4>
                      <h6 className="price_value"><span>€</span>
                        {/* {
                          cart_data?.length && cart_data?.reduce((subTotal, arr) => {
                            return (
                              subTotal += (Number(arr?.info[0]?.ticket_price * arr?.resp?.quantity))
                            )
                          }, 0).toFixed(2)
                        } */}
                        {(amount.total).toFixed(2)}
                      </h6>
                    </div>

                    {/* Discount Calculation */}
                    <div className="price_item borderbottom">
                      <h4 className="price_text">Total Discount :</h4>
                      <h6 className="price_value text-success"><span>€</span>-
                        {/* {
                          cart_data?.length && cart_data?.reduce((subTotal, arr) => {
                            return (
                              subTotal += (Number(((arr?.info[0]?.ticket_price) * (arr?.info[0]?.discount_percentage) / 100) * arr?.resp?.quantity))
                            )
                          }, 0).toFixed(2)
                        } */}
                        {(amount.discount).toFixed(2)}
                      </h6>
                    </div>

                    {/* Sub Total calculation */}
                    <div className="price_item mt-5">
                      <h4 className="price_text">Total Payables:</h4>
                      <h6 className="price_value"><span>€</span>
                        {/* {
                          cart_data?.length && cart_data?.reduce((subTotal, arr) => {
                            return (
                              subTotal += (Number(arr?.info[0]?.ticket_price - ((arr?.info[0]?.ticket_price * arr?.info[0]?.discount_percentage) / 100)) * arr?.resp?.quantity)
                            )
                          }, 0).toFixed(2)
                        } */}
                        {(amount.subtotal).toFixed(2)}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default Cart