import React from 'react';

const Contract = () => {
    return (
        <div className='my-6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <h1 className="text-3xl text-center text-gray-700 p-4">Contract with Us</h1>
            <div className="card w-[500px] mx-auto shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500">

                <form>
                    <div className="form-control">
                        <label className="label ms-6">
                            <span className="label-text text-lg fw-bold">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered w-[450px] mx-auto" name="name" required />
                    </div>
                    {/* <div className="form-control">
                    <label className="label ms-6">
                        <span className="label-text text-lg fw-bold">Image</span>
                    </label>
                    <input type="text" placeholder="Enter Image Url" className="input input-bordered w-[450px] mx-auto" name="image" required />
                </div> */}
                    <div className="form-control">
                        <label className="label ms-6">
                            <span className="label-text text-lg fw-bold">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" className="input input-bordered w-[450px] mx-auto" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label ms-6">
                            <span className="label-text text-lg fw-bold">Feedback</span>
                        </label>
                        <textarea className='w-[450px] mx-auto' name="feedback" id="" cols="30" rows="10"></textarea>
                    </div>


                    <div className="my-4">
                        <button className="btn btn-primary mt-3 w-[450px] ms-6 p-5">Send</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Contract;