import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  const data = ref([]);
  const getData = async () => {
    try {
      const api =
        "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c";
      const res = await axios.get(api);
      data.value = res.data.data.XML_Head.Infos.Info;
    } catch (error) {
      console.log(error);
    }
  };

  return { data, getData };
});
