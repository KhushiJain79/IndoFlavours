import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import Spinner from './Spinner.gif';

function FindProduct() {
  const { query } = useParams();
  const prevquery = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (query !== prevquery.current) {
      prevquery.current = query;
      console.log(query);
      if (query) {
        setLoading(true);
       
        fetch(`https://indoflavours.vercel.app/api/fetchdata/getfood/${query}`)
          .then(response => response.json())
          .then(data => {
            setData(data);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
      }
    }
  }, [query]);

  if (loading) {
    return <div>
      <img className="center" src={Spinner} alt="" />
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div >
      {data && (
        // Render the fetched data here
        <div className='product-container' >
          {data.map(item => (
            <ProductItem key={item._id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FindProduct;