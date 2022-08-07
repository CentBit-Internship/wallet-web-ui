import * as React from "react";
import {
  Table,
  ProductListContainer,
  ProductListHeader,
  TBody,
  THead,
  TData
} from "./product-styled";
import { Product } from "../../Product";


const ProductList = () => {

  return (
    <ProductListContainer>
      <ProductListHeader>Top Selling Products</ProductListHeader>
      <Table>
        <TBody>
          <tr>
            <THead>Product</THead>
            <THead>Sold</THead>
            <THead>Total Sold</THead>
            <THead>Stock Status</THead>
            <THead></THead>
          </tr>
          {Product.map((item) => (
            <>
              <tr key={item.id}>
                <TData
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
                </TData>
                <TData>{item.sold} pcs</TData>
                <TData> ${item.totalSales}</TData>
                <TData
                  style={{
                    color:
                      item.stockStatus.toLowerCase() == "in stock"
                        ? "green"
                        : "black",
                  }}
                >
                  {item.stockStatus}
                </TData>
                <TData>{item.action}</TData>
              </tr>
      
            </>
          ))}
        </TBody>
      </Table>
    </ProductListContainer>
  );
};
export default ProductList;
