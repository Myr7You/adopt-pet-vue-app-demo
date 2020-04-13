<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      animal: {}
    };
  },
  computed: {
    ...mapState(["cats", "dogs"])
    // cats() {
    //   return this.$store.state.cats
    // }  the samething as below but easier to use mapState
  },
  mounted() {
    const animals = this[this.$route.params.species][this.$route.params.id];
    this.animal = animals;
    // this.cats
    // this['cats'] the samething as above
  }
};
</script>
