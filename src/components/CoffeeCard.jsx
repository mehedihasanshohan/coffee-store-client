
// const CoffeeCard = ({coffee}) => {

//   const { name, quantity, supplier, taste, price, details, photo } = coffee;

//   return (
//      <div className="card card-side bg-base-100 shadow-xxl">
//       <figure>
//         <img
//           src={photo}
//           alt="coffee" />
//       </figure>
//       <div className="card-body flex justify-between w-full pr-4">
//         <div>
//           <h2 className="card-title">Name: {name}</h2>
//           <p>{quantity}</p>
//           <p>{supplier}</p>
//           <p>{taste}</p>
//         </div>
//         <div className="card-actions justify-end">
//           <div className="btn-group btn-group-vertical space-y-4">
//             <button className="btn btn-active">View</button>
//             <button className="btn">Update</button>
//             <button className="btn">Delete</button>
//           </div>
//         </div>
//       </div>
//      </div>
//   )
// }

// export default CoffeeCard


const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, price, photo } = coffee;

  return (
    <div
      className="
        bg-gradient-to-br from-[#e0e5ec] to-[#f7f9fc]
        rounded-2xl
        p-6
        flex flex-col md:flex-row items-center gap-6
        max-w-2xl mx-auto w-full
        transition-transform duration-300 hover:scale-[1.02]
      "
    >
      {/* Image */}
      <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-inner">
        <img
          src={photo}
          alt={name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>

      {/* Info + Actions */}
      <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between items-start gap-6">

        {/* Info */}
        <div className="space-y-2 text-gray-700 text-sm md:text-base flex-1">
          <h2 className="text-2xl font-extrabold text-gray-900">{name}</h2>
          <p><span className="font-semibold">Quantity:</span> {quantity}</p>
          <p><span className="font-semibold">Supplier:</span> {supplier}</p>
          <p><span className="font-semibold">Taste:</span> {taste}</p>
          <p><span className="font-semibold text-lg">Price:</span> <span className="text-green-600 font-semibold">${price}</span></p>
        </div>

        {/* Buttons */}
        <div className="flex md:flex-col gap-4">
          <button
            className="
              flex items-center justify-center gap-2
              bg-[#e0e5ec] text-gray-700 rounded-xl px-5 py-2
              shadow-[inset_4px_4px_6px_#c1c8d3,inset_-4px_-4px_6px_#ffffff]
              text-sm font-semibold
              transition hover:text-blue-600 hover:scale-110 hover:shadow-md
            "
          >
            {/* Replace with icon if you want */}
            <span>👁️</span> View
          </button>
          <button
            className="
              flex items-center justify-center gap-2
              bg-[#e0e5ec] text-gray-700 rounded-xl px-5 py-2
              shadow-[inset_4px_4px_6px_#c1c8d3,inset_-4px_-4px_6px_#ffffff]
              text-sm font-semibold
              transition hover:text-yellow-600 hover:scale-110 hover:shadow-md
            "
          >
            <span>✏️</span> Update
          </button>
          <button
            className="
              flex items-center justify-center gap-2
              bg-[#e0e5ec] text-gray-700 rounded-xl px-5 py-2
              shadow-[inset_4px_4px_6px_#c1c8d3,inset_-4px_-4px_6px_#ffffff]
              text-sm font-semibold
              transition hover:text-red-600 hover:scale-110 hover:shadow-md
            "
          >
            <span>🗑️</span> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
