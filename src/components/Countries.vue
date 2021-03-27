<template>
  <div>
    <h1>Where in the world?</h1>
    <input placeholder="Search for a country" />
    <select>
      <option
        v-for="region in regions"
        :key="region.value"
        value="region.value"
      >
        {{ region.text }}
      </option>
      >
    </select>
    <div class="row">
      <CountryCard
        v-for="country in countries"
        :key="country.alpha2Code"
        :countries="country"
        class="col col-3"
      ></CountryCard>
    </div>
  </div>
</template>

<script>
import Countriesservice from "../../services";
import CountryCard from "./CountryCard";
export default {
  name: "Countries",
  components:{CountryCard},
  data() {
    return {
      countries: [],
      regions: [
        {
          value: "Africa",
          text: "África",
        },
        {
          value: "Americas",
          text: "Americas",
        },
        {
          value: "Asia",
          text: "Asia",
        },
        {
          value: "Europe",
          text: "Europe",
        },
        {
          value: "Oceania",
          text: "Oceania",
        },
      ],
    };
  },
  async mounted() {
    try {
      console.log("countries list");
      let response = await Countriesservice.getCountries();
      this.countries = response.data;
      console.log("Fin countries list");
      console.log(response.data);
    } catch (error) {
      console.log(error.log);
    } finally {
      //
    }
  },
};
</script>

<style lang="scss" scoped>
</style>