<div className="payment_form">

                                            <div className="row">
                                                {/* MTN Mobile money */}
                                                <div className="col-md-6">
                                                    <div className="upi_one">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="inlineRadioOptions"
                                                                id="inlineRadio1"
                                                                value="option1"
                                                            />
                                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                                MTN Mobile Money <span className="upi_icon"><img src="assets/img/pay (2).png" alt="" /></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Orange Money */}
                                                <div className="col-md-6">
                                                    <div className="upi_one">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="inlineRadioOptions"
                                                                id="inlineRadio1"
                                                                value="option1"
                                                            />
                                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                                Ornage Money <span className="upi_icon"><img src="assets/img/pay (1).png" alt="" /></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            {/* <!-- credit card payment --> */}

                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Credit Or Debit Card
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">

                                                            {/* Card Number */}
                                                            <div className="mb-3">
                                                                <label htmlFor="cardNumber" className="form-label label_style">Card Number</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form_input"
                                                                    id="cardNumber"
                                                                    name="cardNumber"
                                                                    placeholder="Enter Card Number"
                                                                    value={formValues.cardNumber}
                                                                    onChange={handleChange}
                                                                />
                                                                {/* Card Number Validation */}
                                                                {
                                                                    formErrors.cardNumber ? <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                                        {formErrors.cardNumber}
                                                                    </div>
                                                                        : null
                                                                }
                                                            </div>

                                                            <div className="row">
                                                                {/* Expiry Date */}
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label htmlFor="exdate" className="form-label label_style">Expiry Date</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form_input"
                                                                            id="exdate"
                                                                            placeholder="MM/YY"
                                                                            name="exdate"
                                                                            value={formValues.exdate}
                                                                            onChange={handleChange}
                                                                            onKeyUp={formatString}
                                                                            maxLength={5}
                                                                        />
                                                                        {/* Expiry Date Validation */}
                                                                        {
                                                                            formErrors.exdate ?
                                                                                <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                                                    {formErrors.exdate}
                                                                                </div>
                                                                                : null
                                                                        }

                                                                    </div>
                                                                </div>

                                                                {/* CVV */}
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label htmlFor="cvv" className="form-label label_style">CVV</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form_input"
                                                                            id="cvv"
                                                                            aria-describedby="emailHelp" placeholder="Enter CVV"
                                                                            name='cvv'
                                                                            value={formValues.cvv}
                                                                            onChange={handleChange}
                                                                            maxLength={3}
                                                                        />
                                                                        {/* CVV Validation */}
                                                                        {
                                                                            formErrors.cvv ?
                                                                                <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                                                    {formErrors.cvv}
                                                                                </div>
                                                                                : null
                                                                        }

                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>