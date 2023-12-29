import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/Layout/product-item"
import Pagination from "../../shared/components/Pagination";
const Search = () =>{
  const [products,setProducts] = React.useState([]);
  const [searchParams,setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const page = searchParams.get("page") || 1;
  const [pages,setPages]= React.useState(
    {
      limit:12,
    }
  )
  useEffect(()=>{
 getProducts({
  params:{
    name: keyword,
    limit: 12,
    page: page,
  }
 }).then(({data})=>{
  setPages({...pages,...data.data.pages});
  setProducts(data.data.docs)});
  },[keyword,page])
return(
<>
    {/*	List Product	*/}
    <div className="products">
      <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>{keyword}</span></div>
      <div className="product-list card-deck">
{
    products.map((item)=>
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
export default Search;