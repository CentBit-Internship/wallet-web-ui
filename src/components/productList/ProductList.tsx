import * as React from "react";
import { Table, ProductListContainer } from "./product-styled";
import { Product } from "../../Product";
import './product.css'

const ProductList = () => {

  return (
    <ProductListContainer>
      <Table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Sold</th>
            <th>Total Sold</th>
            <th>Stock Status</th>
            <th>Action</th>
          </tr>
          {Product.map((item) => (
            <>
              <tr key={item.id}>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    gap: "10px",
                  }}
                >
                  <img
                    src={item.image}
                    style={{ width: "40px", borderRadius: 5 }}
                  />
                  {item.productName}
                </td>
                <td>{item.sold} pcs</td>
                <td> ${item.totalSales}</td>
              <td style= {{color: item.stockStatus.toLowerCase() == "in stock"? "green":"black"}}>{item.stockStatus}</td>
                <td>{item.action}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </ProductListContainer>
  );
};
export default ProductList;
