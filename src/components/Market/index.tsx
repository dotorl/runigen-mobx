import React, { FC, useCallback, useEffect, useState } from 'react';

import useStore from '@stores/index';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';

const SuperMarket:FC = () => {

  const { Count, Double } = useStore();

  const [_count, setCount] = useState<number>(1);
  
  autorun(()=>{
    console.log('Market Autorun 실행되는 곳');
  });
  
  useEffect(()=>{
    console.log("COUNT UseEffect " , Count.num);
  },[Count.num]);

  

  return (
    <div className="MarketTemplate">
        <div className="Market">
          <div className="products-wrapper">
            <h2>판매상품</h2>
            {/* ProductList */}
          </div>
          <div className="basket-wrapper">
            <h2>장바구니</h2>
            {/* BasketList */}
          </div>
        </div>
        <div className="AddProduct">
          <h4>add</h4>
          {/* addProduct */}

          <p>Count : {Count.num}</p>
          <p>Double : {Double.getDouble}</p>


        </div>
      </div>
  );
};

export default SuperMarket;