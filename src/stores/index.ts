import Count from "@stores/Count";
import Double from "@stores/Double";

const store = {Count, Double};

function useStore() {
  return store;
}

export default useStore;