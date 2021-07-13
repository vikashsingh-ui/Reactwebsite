import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Contect = () => {
    const [data, setData] = useState({
fullname: "",
phone: "",
email: "",
msg: "",

    });
    const InputEvent = (event) => {
const {name, value} = event.target;
setData((preVal) => {
return {
...preVal,
[name]: value,

};

});
    };

    const formsubmit = (e) => {
e.preventDefault();
alert( "Done" );

   

    };

    return (
        <>
            <div className="my-5">
                <h1 className='text-center'> Contect us</h1>

            </div>
            <div className="container contect_div mb-5 ">
                <div className="row">
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname }
                                    onChange={InputEvent}
                                    placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone }
                                    onChange={InputEvent}
                                    placeholder="Mobile number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email }
                                    onChange={InputEvent}
                                    placeholder="your mail" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1"
                                    name="msg"
                                    value={data.msg }
                                    onChange={InputEvent}
                                    rows="3"></textarea>
                            </div>
                            <div class="col-12 ">
                                <button class="btn  btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </>
    );

};

export default Contect;