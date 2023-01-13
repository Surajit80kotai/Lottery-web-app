import React, { useState } from 'react'

const ForgetPassword = () => {
    const [formValues, setFormValues] = useState({
        email: ""
    })

     // handleChange Function for input change
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    //  handleSubmit Function for form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues);
        setFormValues({ email: "" })
    }
    
    return (
        <>
            <main className="main">
                <div className="container">

                    <div className="forgetwrapper">
                        <div className="forget_icon">
                            <img src="assets/img/forgeticon.png" alt="" className="img-fluid" />
                        </div>
                        <h2 className="title text-center">Forget Your Password ?</h2>
                        <p className="text-center">Enter Your Phone Number Or Email Address Below To receive
                            <br />Your Password Reset instruction
                        </p>
                        <form action="" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>

                            {/* Email */}
                            <div className="forget ">
                                <label htmlFor="email" className="form-label label_for">Phone Number Or Email Id</label>
                                <input
                                    type="email"
                                    className="form-control forget_input"
                                    id="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    aria-describedby="emailHelp" />

                            </div>

                            {/* Button */}
                            <div className="text-center mt-5">
                                <button type="submit" className="btn_one">Recover Password</button>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
        </>
    )
}

export default ForgetPassword