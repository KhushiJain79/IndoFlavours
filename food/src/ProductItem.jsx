import React from 'react'

function ProductItem({product}) {
  return (
    <div>
       <div className="card product-display" style={{ width: "18rem" }} key={product._id}>
              <img className="card-img-top" src={product.image_url} height={250} width={500} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <button className="btn btn-primary" style={{backgroundColor:"orangered",border:"2px solid orangered"}}  data-bs-toggle="modal" data-bs-target={`#myModal-${product._id}`}>
                  Go to recipe
                </button>

                <div className="modal fade" id={`myModal-${product._id}`} tabIndex="-1" aria-labelledby={`myModalLabel-${product._id}`} aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title heading" id={`myModalLabel-${product._id}`}>{product.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">

                        <h1 className='subheading'>Ingredients</h1>
                        <p>{product.ingredients}</p>
                        <h1 className='subheading'>Instructions</h1>
                        <p>{product.instructions}</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default ProductItem
