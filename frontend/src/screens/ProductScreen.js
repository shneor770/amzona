import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';


function ProductScreen(props){
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id))
        return ()=>{
            //
        };
    }, []);

    const handleAddToCart = ()=>{
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }


    return <div>
                 <div className="back-to-result">
                     <Link to="/">back to result</Link>
                 </div>
                 {loading? <div>Loading...</div>:
                 error? <div>{error}</div>:
                 (
                    <div className="detalis">
                    <div className="detalis-image">
                       <img className="product-image" src={product.image} alt="product"/>
                    </div>
                    <div className="detalis-info">
                        <ul>
                            <li>
                                <h4>{product.name}</h4>
                            </li>
                            <li>
                                {product.rating} Stars ({product.numReiews} Reiews)
                            </li>
                            <li>
                               Price <b>₪{product.price}</b>
                            </li>
                            <li>
                                Description:
                                <div>
                                {product.description}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="detalis-action">   
                         <ul>
                             <li>Price: ₪{product.price}</li>
                             <li>Status: {product.countInStock >0? "InStock" : "Unavailable."}</li>
                             <li>Qty:
                                  <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                                     {
                                        [...Array(product.countInStock).keys()].map(x=>
                                            <option key={x+1}  value={x+1}>{x+1}</option>
                                        )}
                                 </select>
                             </li>
                             <li>
                                 {product.countInStock >0 && <button onClick={handleAddToCart} className="button">Add to cart</button>
                                 }
                                 </li>
                       </ul>
                    </div>  
               </div>
                 )
                 }

                 
          </div>
}


export default  ProductScreen;