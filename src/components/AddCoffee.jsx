import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AddCoffee = () => {

 const handleAddCoffee = (e) => {
  e.preventDefault();
  const form = e.target;
  const { name, quantity, supplier, taste, price, details, photo } = form;

  const newCoffee = {
    name: name.value,
    quantity: quantity.value,
    supplier: supplier.value,
    taste: taste.value,
    price: price.value,
    details: details.value,
    photo: photo.value,
  };
  console.log(newCoffee);

  // send data to the server
  fetch('http://localhost:5000/coffee', {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(newCoffee)
  })
  .then(res=> res.json())
  .then(data => {
    console.log(data)
    if(data.insertedId){
      Swal.fire({
        title: 'Success',
        text: 'Coffee Added Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    }
    form.reset();
 })
};


  return (
   <div className='p-24'>
    <div className="text-center">
      <Link to={'/'}>
      <button className="btn btn-info text-center">Home</button>
      </Link>
      <Link to={'/signin'}>
      <button className="btn btn-accent text-center">Sign In</button>
      </Link>
      <Link to={'/signup'}>
      <button className="btn btn-success text-center">Sign Up</button>
      </Link>
    </div>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' className="input w-full" placeholder="Quantity Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Supplier Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="Taste Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' className="input w-full" placeholder="Price per Cup" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Details Name" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full' value="Add Coffee" />
            </form>
        </div>
  );
};

export default AddCoffee;
