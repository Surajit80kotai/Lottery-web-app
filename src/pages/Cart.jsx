import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, totalPrice } from '../services/slice/CartSlice'
import { useEffect } from 'react'

const Cart = () => {
  const cartData = JSON.parse(window.localStorage.getItem("cart_data"))
  const { total, sub_total } = useSelector((state) => state.cartslice)
  const dispatch = useDispatch()

  // Remove ticket function
  const removeTicket = (ticket) => {
    dispatch(removeItem(ticket))
  }

  useEffect(() => {
    dispatch(totalPrice())
  }, [dispatch])

  return (
    <>
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
                {/* <!-- item one --> */}

                {
                  cartData?.map((item, index) => {
                    return (
                      <div className="cart_list_item" key={index}>
                        <div className="cart_item_img">
                          <img src="/assets/img/product1.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="cart_item_content">
                          <div className="cart_title">
                            <h3>{item.ticket_name}</h3>
                          </div>
                          <div className="other_info">
                            <p className="amount">Number Of Ticket : {item.ticket_quantity}</p>
                            <p className="tic_price">Price Of Ticket : {item.ticket_price}</p>
                          </div>
                          <div className="date_result">
                            <h5><span><img src="/assets/img/3135783 1.png" alt="" /></span>Result on <span className="fw-bold">Dec, 25</span></h5>
                          </div>
                        </div>
                        <div className="remove_btn">
                          <button onClick={() => removeTicket(item)}><i className="bi bi-trash3"></i></button>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              {/* <!-- place order area --> */}
              {
                cartData.length > 0 ?
                  <div className="placeorder_area sticky">
                    <Link to="/placeorder" className="orderplace">Place Order</Link>
                  </div>
                  : null
              }

            </div>
            <div className="col-md-4">
              <div className="price_area_wrapper">
                <h3 className="price_title">Purchase Summary</h3>
                <div className="price_inner">
                  <div className="price_item borderbottom">
                    <h4 className="price_text">Price <span> ({cartData?.length} Item):</span></h4>
                    <h6 className="price_value"><span>€</span>{total}</h6>
                  </div>
                  <div className="price_item mt-5">
                    <h4 className="price_text">Total Payables:</h4>
                    <h6 className="price_value"><span>€</span>{sub_total}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart