import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductCategory,getCategory } from "../../services/Api";
import ProductItem from "../../shared/components/Layout/product-item";
import Pagination from "../../shared/components/Pagination";
const Category = () =>{
  const params = useParams();
  const id = params.id;
  const [product,setProduct] =  React.useState([]);
  const [category,setCategory] = React.useState("");
  const [pages,setPages]= React.useState(
    {
      limit:12,
    }
  )
  useEffect(()=>{
    getCategory (id,{}).then(({data})=>setCategory(data.data));
    getProductCategory(id,{
      limit:12,
    }).then(({data})=>{
    setPages({...pages,...data.data.pages})  
    setProduct(data.data.docs)});
  },[id]);

return(
<>
    {/*	List Product	*/}
    <div className="products">
      <h3>{category.name} (hiện có {product.length} sản phẩm)</h3>
      <div className="product-list card-deck">
       {
            product.map((item)=>
                <ProductItem item={item}/>
            )
       }
      </div>
    </div>
    {/*	End List Product	*/}
    <div id="pagination">
      <Pagination pages={pages}/>
      {/* <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
        <li className="page-item active"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
      </ul>  */}
    </div>
  </>
)
}
export default Category;