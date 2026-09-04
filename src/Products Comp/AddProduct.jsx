import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:5000/product/addproduct", form);

    alert("Product saved in database!");

    setForm({ name: "", price: "", image: "" });
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="add-product-page">
      
      <h2 className="title">Add Product</h2>

      <form className="product-form" onSubmit={handleSubmit}>

        <input
          className="input"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="input"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          className="input"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button className="btn" type="submit">
          Add Product
        </button>

      </form>

    </div>
  );
}

export default AddProduct;
