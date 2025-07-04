import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, price, taste, supplier, photo, details} = coffee;

    // const handleUpdateCoffee = e =>{
    //     e.preventDefault();
    //     const form = e.target;
    //     const formData = new FormData(form);
    //     const updatedCoffee = Object.fromEntries(formData.entries())
    //     console.log(updatedCoffee);

    //     // send updated coffee to the db
    //     fetch(`http://localhost:5000/coffee/${_id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedCoffee)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //         if(data.modifiedCount > 0){
    //             Swal.fire({
    //                 title: 'Success!',
    //                 icon: 'success',
    //                 text: 'Coffee updated successfully.',
    //                 confirmButtonText: 'Cool'
    //               });
    //         }
    //     })

    // }
    const handleUpdateCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedCoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                icon: 'success',
                text: 'Coffee updated successfully.',
                confirmButtonText: 'Cool'
            });
        } else if (data.matchedCount > 0) {
            Swal.fire({
                title: 'No changes detected',
                icon: 'info',
                text: 'No updates were made because data is the same.',
            });
        } else {
            Swal.fire({
                title: 'Update failed',
                icon: 'error',
                text: 'Coffee not found or update failed.',
            });
        }
    })
    .catch(error => {
        console.error('Update error:', error);
        Swal.fire({
            title: 'Error!',
            icon: 'error',
            text: 'Failed to update coffee. Please try again.',
        });
    });
};


    return (
        <div className='p-24'>
          <div className="text-center">
            <Link to={'/'}>
              <button className="btn btn-info text-center">Home</button>
             </Link>
           </div>
           <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Update Coffee</h1>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Quantity Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Supplier Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Taste Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price per Cup" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Details Name" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;