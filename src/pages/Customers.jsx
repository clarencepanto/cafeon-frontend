import Widget from "../components/DashboardWidgets";
import searchIcon from "../assets/icons/searchIcon.png";
import CustomerTable from "../components/CustomerTable";
import AddClientModal from "../components/AddClientModal";
import EditClientModal from "../components/EditClientModal";
import DeleteClientModal from "../components/DeleteClientModal";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Customers() {
  const [customerData, setCustomerData] = useState("");
  const [totalLoyalCustomersCount, setGetLoyalCustomersCount] = useState("");
  const [getLoyalCustomer, setGetLoyalCustomer] = useState("");
  const [loyalCustomerInsight, setLoyalCustomerInsight] = useState("");
  const [servedCustomers, setServedCustomers] = useState("");
  const [customerInsight, setCustomerInsight] = useState("");
  const [products, setProducts] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleAddClient = async (newClient) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/customers",
        newClient
      );

      setCustomerData((prev) => [...prev, { id: data.id, ...newClient }]);
    } catch (err) {
      console.error(
        "❌ Failed to add client:",
        err.response?.data || err.message
      );
    }
  };

  const fetchCustomers = async () => {
    const res = await axios.get("http://localhost:4000/customers");

    setCustomerData(res.data);
  };

  const fetchLoyalCustomerCount = async () => {
    const res = await axios.get(
      "http://localhost:4000/customers/loyal-customers-count"
    );

    setGetLoyalCustomersCount(res.data);
  };

  const fetchLoyalCustomer = async () => {
    const res = await axios.get("http://localhost:4000/customers/top-customer");

    setGetLoyalCustomer(res.data);
  };

  const fetchLoyalCustomerInsight = async () => {
    const res = await axios.get(
      "http://localhost:4000/customers/loyal-customers-insight"
    );

    setLoyalCustomerInsight(res.data);
  };

  const fetchServedCustomer = async () => {
    const res = await axios.get(
      "http://localhost:4000/customers/customers-served-today"
    );

    setServedCustomers(res.data);
  };

  const fetchcustomerInsight = async () => {
    const res = await axios.get(
      "http://localhost:4000/customers/customer-insight"
    );

    setCustomerInsight(res.data);
  };

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:4000/products");
    setProducts(res.data);
  };

  // edit

  const handleEditClient = async (updatedClient) => {
    try {
      await axios.put(
        `http://localhost:4000/customers/${updatedClient.id}`,
        updatedClient
      );

      setCustomerData((prev) =>
        prev.map((c) => (c.id === updatedClient.id ? updatedClient : c))
      );
    } catch (err) {
      console.error(
        "❌ Failed to update client:",
        err.response?.data || err.message
      );
      toast.error("Failed to update client.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/customers/${id}`);
      setCustomerData((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      toast.error("Failed to delete customer");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCustomers();
    fetchLoyalCustomerCount();
    fetchLoyalCustomer();
    fetchServedCustomer();
    fetchcustomerInsight();
    fetchLoyalCustomerInsight();
    fetchProducts();
  }, []);

  return (
    <section className="p-2 w-screen">
      <article className="flex justify-between pb-3 pl-4 pr-4 pt-3">
        <h1 className="text-[30px] font-bold">Clients</h1>
        <div
          className="md:w-[150px] md:bg-[#FA9564] md:text-center md:pt-4 md:pb-4 md:text-white md:rounded-lg cursor-pointer md:h-[40px] flex justify-center items-center"
          onClick={() => setShowModal(true)}
        >
          <button>+ Add Clients</button>
        </div>
      </article>

      <article className="flex justify-evenly">
        <Widget
          widgetTitle="Total Loyal Members"
          value={totalLoyalCustomersCount.count}
          insightData={loyalCustomerInsight.insight}
        />
        <Widget
          widgetTitle="Today's Loyal Member"
          value={getLoyalCustomer.name}
          insightData={`Spent $${getLoyalCustomer.total_spent}`}
        />
        <Widget
          widgetTitle="Customer Served Today"
          value={servedCustomers.servedToday}
          insightData={customerInsight.insight}
        />
      </article>

      <article>
        <div className="flex justify-between">
          <h2 className="mt-6 pl-3 text-[20px] font-bold">Loyal Members</h2>
          <div className="w-[200px] h-[40px]">
            <div className="text-[3px]">
              <img
                src={searchIcon}
                alt="searchIcon"
                className="relative top-7 left-3"
              />
            </div>

            <input
              type="text"
              placeholder="Search Clients..."
              className="bg-white w-[175px] h-[38px] pl-9 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </article>
      <article className="mt-10 pl-3 pr-3">
        <CustomerTable
          customers={customerData}
          products={products}
          searchTerm={searchTerm}
          onEdit={(customer) => {
            setSelectedCustomer(customer);
            setEditModalOpen(true);
          }}
          onDeleteClick={(c) => {
            setSelectedCustomer(c);
            setShowDeleteModal(true);
          }}
        />
      </article>

      <AddClientModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddClient}
      />

      <EditClientModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSubmit={handleEditClient}
        customer={selectedCustomer}
      />

      <DeleteClientModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        customer={selectedCustomer}
      />
    </section>
  );
}

export default Customers;
