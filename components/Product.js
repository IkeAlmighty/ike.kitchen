import { useState, useEffect } from "react";
import S3Image from "./S3Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Product({ productId }) {
  const [price, setPrice] = useState(9999);
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    // TODO: fetch the price of the product based on the productId

    async function fetchItemDataFromBackend() {
      // TODO: implement data fetch from backend

      setPrice(-1);
      setImageUri(null);
    }

    fetchItemDataFromBackend();
  }, [productId]);

  async function adjustCartAmount(adjustment) {
    // TODO: adjust contents in local storage of the product.
  }

  return (
    <div>
      <S3Image uri={imageUri} />
      <div>
        <h2>Product Name</h2>
        <p>Price: ${price}</p>
      </div>
      <div>
        <button onClick={() => adjustCartAmount(1)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button onClick={() => adjustCartAmount(-1)}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </div>
  );
}
