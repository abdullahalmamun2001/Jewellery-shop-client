import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";


const Addjewellery = () => {
    const { user } = useContext(AuthContext);
    const handleAddForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;
        const email=user.email;

        const newJewellery = { name, description, price, image,email };
        console.log(newJewellery);
        console.log(newJewellery);
        fetch('https://demo-theta-sepia.vercel.app/alljewellery ', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newJewellery)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your jewellary has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            form.reset();

    }


    return (
        <div className="card w-[500px] mx-auto shadow-2xl bg-fuchsia-800 mt-20">
            <h1 className="text-3xl text-center text-gray-700 p-4">This is a form add product</h1>
            <form onSubmit={handleAddForm}>
                <div className="form-control">
                    <label className="label ms-6">
                        <span className="label-text text-lg fw-bold">Name</span>
                    </label>
                    <input type="text" placeholder="Enter the Name" className="input input-bordered w-[450px] mx-auto" name="name" required />
                </div>
                <div className="form-control">
                    <label className="label ms-6">
                        <span className="label-text text-lg fw-bold">Image</span>
                    </label>
                    <input type="text" placeholder="Enter Image Url" className="input input-bordered w-[450px] mx-auto" name="image" required />
                </div>
                <div className="form-control">
                    <label className="label ms-6">
                        <span className="label-text text-lg fw-bold">Price</span>
                    </label>
                    <input type="number" placeholder="Enter Price" className="input input-bordered w-[450px] mx-auto" name="price" required />
                </div>
                <div className="form-control">
                    <label className="label ms-6">
                        <span className="label-text text-lg fw-bold">Description</span>
                    </label>
                    <input type="text" placeholder="Write about the jewellery" className="input input-bordered w-[450px] mx-auto" name="description" required />
                </div>


                <div className="my-4">
                    <button className="btn btn-primary mt-3 w-[450px] ms-6 p-5">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default Addjewellery;