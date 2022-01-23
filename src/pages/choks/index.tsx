import React, { FC, VFC } from 'react';
import useStore from '@stores/index';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import SuperMarket from '@components/Market';

const Choks: VFC = observer( () => {
    const { Count, Double } = useStore();

    autorun(()=>{
      // if( Double.double ){
      //   console.log(`Double : ${Double.double}  `);
      // }
      if( Double.getDouble === 8 ){
        console.log(`만약 value가 8이라면 0으로 초기화`);
        Double.value = 0;
      }
    })

    return (
      <>
        <div style={{ padding: '50px' }}>
          <div style={{ marginBottom: '50px' }}>
            <h1>Count (Class)</h1>
            <div>number: {Count.num}</div>
            <button onClick={() => Count.increase()}>plus</button>
            <button onClick={() => Count.decrease()}>minus</button>
          </div>
        </div>

        <div>
          <h1>Computed</h1>
          <div>double number: {Double.value}</div>
          <button onClick={() => Double.increment()}>
            double increment
          </button>
        </div>


        <SuperMarket />

      </>
    )
});

export default Choks;