import { observable } from 'mobx';

const Double = observable({
  value: 1,
  get getDouble(){
    return this.value * 2;
  },
  increment() {
    this.value++
  },
});

export default Double;