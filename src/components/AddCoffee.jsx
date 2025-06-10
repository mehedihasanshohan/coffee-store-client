const AddCoffee = () => {

  const handleAddCoffee = (e) => {
    e.preventDefault();
    console.log('hi');
  };

  return (
    <div className='p-24 bg-gray-100 min-h-screen'>
      <div className='p-12 text-center space-y-4'>
        <h1 className="text-6xl text-indigo-700 font-bold">Add Coffee</h1>
        <p className="text-gray-600">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </p>
      </div>

      <form onSubmit={handleAddCoffee}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[
            { name: 'name', label: 'Name', placeholder: 'Coffee Name' },
            { name: 'quantity', label: 'Quantity', placeholder: 'Quantity' },
            { name: 'supplier', label: 'Supplier', placeholder: 'Supplier Name' },
            { name: 'taste', label: 'Taste', placeholder: 'Taste' },
            { name: 'price', label: 'Price', placeholder: 'Price per Cup' },
            { name: 'details', label: 'Details', placeholder: 'Details' },
          ].map(({ name, label, placeholder }) => (
            <fieldset key={name} className="bg-white border border-gray-300 rounded-lg p-4">
              <label className="block text-gray-700 mb-1 font-medium">{label}</label>
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </fieldset>
          ))}
        </div>

        <fieldset className="bg-white border border-gray-300 rounded-lg my-6 p-4">
          <label className="block text-gray-700 mb-1 font-medium">Photo</label>
          <input
            type="text"
            name='photo'
            placeholder="Photo URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </fieldset>

        <input
          type="submit"
          value="Add Coffee"
          className='w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition'
        />
      </form>
    </div>
  );
};

export default AddCoffee;
