import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "reactstrap";
import { PRODUCT } from "../services/constants";

const ProductUpdateModal = (props) => {
  const { updateModal, setUpdateModalValue, products, index } = props;

  const {
    register,
    reset,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const inputFile = useRef(null);

  useEffect(() => {
    if (index !== -1) {
      setValue("product_description", products[index].product_description);
      setValue("product_name", products[index].product_name);
      setValue("product_price", products[index].product_price);
    }
  });

  const onSubmit = (value) => {
    if (inputFile.current.files.length > 0) {
      var data = new FormData();
      data.append("image", inputFile.current.files[0]);
      data.append("product_description", value.product_description);
      data.append("product_name", value.product_name);
      data.append("product_price", value.product_price);

      if (products)
        fetch(PRODUCT + products[index]._id, {
          method: "POST",
          body: data,
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.success) {
              reset();
              setUpdateModalValue(false);
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
    }
  };

  return (
    <Modal
      isOpen={updateModal}
      toggle={() => {
        setUpdateModalValue(!updateModal);
      }}
      centered={true}
      size="lg"
      className="update-modal"
    >
      <div className="modal-header">
        <h5 className="mb-0">UPDATE PRODUCT</h5>
      </div>

      <div className="modal-body">
        <form
          className="form"
          id="update-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3>Add Product</h3>

          <label>Product Name:</label>
          <input
            className="form-control"
            type="text"
            name="product_name"
            placeholder="Enter Product Name."
            {...register("product_name", {
              required: {
                value: true,
                message: "You need to enter product name.",
              },
            })}
          />
          {errors.product_name && (
            <p className="add-product-error">{errors.product_name.message}</p>
          )}

          <label style={{ marginTop: "18px" }}>Product Price:</label>
          <input
            className="form-control"
            type="text"
            name="product_price"
            placeholder="Enter Product Price."
            {...register("product_price", {
              required: {
                value: true,
                message: "You need to enter product price.",
              },
            })}
          />
          {errors.product_price && (
            <p className="add-product-error">{errors.product_price.message}</p>
          )}

          <label style={{ marginTop: "18px" }}>Product Description:</label>
          <input
            className="form-control"
            type="text"
            name="product_description"
            placeholder="Enter Product Description."
            {...register("product_description", {
              required: {
                value: true,
                message: "You need to enter product description.",
              },
            })}
          />
          {errors.product_description && (
            <p className="add-product-error">
              {errors.product_description.message}
            </p>
          )}

          <label style={{ marginTop: "18px" }}>Product Image</label>
          <br />
          <input ref={inputFile} type="file" />
        </form>
      </div>

      <div className="modal-footer">
        <button
          style={{ marginBottom: "18px" }}
          type="submit"
          form="update-form"
          className="btn btn-primary"
        >
          Update
        </button>
      </div>
    </Modal>
  );
};
export default ProductUpdateModal;
