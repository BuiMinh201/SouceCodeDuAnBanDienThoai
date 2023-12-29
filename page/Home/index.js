import React from "react";
import { getProducts } from "../../services/Api";
import ProductsItem from "../../shared/components/Layout/product-item";
const Home = () =>{
  const [featuredProduct,setFeturedProduct] = React.useState([]);
  const [latestProduct,setLatestProduct]= React.useState([]);
  React.useEffect(()=>{
//get Featured
getProducts({
  params:{
    limit:6,
    "filter[is_featured]" : true,
  }
}).then(({data})=>setFeturedProduct(data.data.docs));
//get Latest
getProducts({
  params:{
    limit: 6,
  }
}).then(({data})=>setLatestProduct(data.data.docs));
  },[])
return(
<>
     {/*	Feature Product	*/}
     <div className="products">
       <h3>Sản phẩm nổi bật</h3>
       <div className="product-list card-deck">
          {
            featuredProduct.map((value)=>
                <ProductsItem item={value}/>
            )
          }
       </div>
     </div>
     {/*	End Feature Product	*/}
     {/*	Latest Product	*/}
     <div className="products">
       <h3>Sản phẩm mới</h3>
       <div className="product-list card-deck">
          {
            latestProduct.map((value)=>
                  <ProductsItem item={value}/>
            )
          }
       </div>
     </div>
     {/*	End Latest Product	*/}
</>
)
}
export default Home;