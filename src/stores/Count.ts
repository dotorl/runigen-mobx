import { observable } from 'mobx';

const Count = observable({
  num: 0,
  increase(){
    this.num++;
  },
  decrease(){
    this.num--;
  }
});

export default Count;