<template>
  <div class="about">
    <p>{{ workers }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "about",
  data() {
    return {
      workers: "",
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
    };
  },
  created() {
    this.getWorkers();
  },
  methods: {
    getWorkers() {
      axios
        .get("/api/workers", {
          params: {
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
          },
        })
        .then(function (response) {
          this.workers = response;
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
