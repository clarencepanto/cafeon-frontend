import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

function CustomerTable({
  customers,
  products,
  searchTerm,
  onEdit,
  onDeleteClick,
}) {
  const { addToCart, clearCart, setCustomer } = useCart();

  const filteredCustomers = Array.isArray(customers)
    ? customers.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleCustomerClick = (customer) => {
    const matchedProduct = products.find(
      (p) =>
        p.name.toLowerCase().trim() ===
        customer.frequent_order.toLowerCase().trim()
    );

    if (!matchedProduct) {
      toast.error(`Product "${customer.frequent_order}" not found.`);
      return;
    }

    clearCart();
    setCustomer(customer); // 🧠 Save customer context

    addToCart({
      id: matchedProduct.id,
      name: matchedProduct.name,
      price: matchedProduct.price,
    });

    toast.success(`${customer.name}'s order sent to cart!`);
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-md overflow-y-scroll h-[490px]">
      <table className="min-w-full border border-gray-200 bg-white text-sm">
        <thead className="text-gray-700 bg-gray-100 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Frequent Order</th>
            <th className="px-4 py-3 text-center">Visits</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers && filteredCustomers.length > 0 ? (
            filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t hover:bg-gray-50"
                onClick={() => handleCustomerClick(customer)}
              >
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.phone}</td>
                <td className="px-4 py-2">{customer.frequent_order}</td>
                <td className="px-4 py-2 text-center">{customer.visits}</td>
                <td className="px-4 py-2 flex justify-center gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(customer);
                    }}
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteClick(customer);
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                Loading customers...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
