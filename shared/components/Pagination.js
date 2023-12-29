import { useLocation, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Pagination=({pages})=>{
    const {total,limit,currentPage,next,prev,hasNext,hasPrev}= pages;
    const {pathname,search} = useLocation();
    const totalPages = Math.ceil(total/limit);
    const [searchParams,setSearchParams]= useSearchParams();
    const formatUrl = (page)=>{
        return `${pathname}?keyword=${searchParams.get("keyword")}&page=${page}`
    }
    const renderPagesHtml = (dealta=2)=>{
        let pagesHtml = [];
        const left = currentPage - dealta;
        const right = currentPage + dealta;
        for(let i=1;i<=totalPages;i++){
            if(
                i===1 ||
                i===totalPages ||
                i===currentPage ||
                (i>=left && i<=right)
            ){
                pagesHtml.push(i);
            }
            else if (
                i===left - 1 ||
                i===right + 1
            ){
                pagesHtml.push("...")
            }
        }
        
        return pagesHtml;
    }
return(
 
    <ul className="pagination">
      {
        hasPrev
        ?<li className="page-item"><Link className="page-link" to={formatUrl(prev)}>Trang trước</Link></li>
        :null
      }

    {
        renderPagesHtml().map((value)=>
        <li className={`page-item ${value===currentPage && 'active'}`}>
            {
                value==="..."
                ? <span className="page-link">{value}</span>
                : <Link className="page-link" to={formatUrl(value)}>{value}</Link>
            }
        </li>
        )
    }

      {
        hasNext
        ?<li className="page-item"><Link className="page-link" to={formatUrl(next)}>Trang sau</Link></li>
        : null
      }
    </ul> 
 
)
}
export default Pagination