<template>
  <div class="vehicle-selector">
    <h1>Select Vehicle</h1>

    <div class="dropdown-container">
      <Dropdown
        id="year"
        label="Year: "
        :options="years"
        :selectedValue="selectedYear"
        @update:selectedValue="onYearChange"
      />

      <Dropdown
        id="make"
        label="Make: "
        :options="makes"
        :selectedValue="selectedMake"
        :disabled="!selectedYear"
        @update:selectedValue="onMakeChange"
      />

      <Dropdown
        id="model"
        label="Model: "
        :options="models"
        :selectedValue="selectedModel"
        :disabled="!selectedMake"
        @update:selectedValue="onModelChange"
      />
    </div>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from "axios";
import Dropdown from "./Dropdown.vue";

export default {
  components: {
    Dropdown
  },
  data() {
    return {
      years: [],
      makes: [],
      models: [],
      selectedYear: null,
      selectedMake: null,
      selectedModel: null,
      loading: false,
      errorMessage: ""
    };
  },
  methods: {
    async fetchYears() {
      try {
        this.loading = true;
        const response = await axios.get(
          "https://new.api.nexusautotransport.com/api/vehicles/years",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        );
        this.years = response.data.data.map((year) => ({
          name: year.toString(),
          id: year.toString()
        }));
      } catch (error) {
        this.errorMessage = "Failed to load years.";
      } finally {
        this.loading = false;
      }
    },

    async fetchMakes(year) {
      if (!year) return;
      try {
        this.loading = true;
        const response = await axios.get(
          `https://new.api.nexusautotransport.com/api/vehicles/makes?year=${year}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        );
        this.makes = response.data.data.map((make) => ({
          name: make.name,
          id: make.id
        }));
        this.selectedMake = null;
        this.selectedModel = null;
        this.models = [];
      } catch (error) {
        this.errorMessage = "Failed to load makes.";
      } finally {
        this.loading = false;
      }
    },

    async fetchModels(year, makeId) {
      if (!year || !makeId) return;

      const selectedMake = this.makes.find((make) => make.id === makeId)?.name;

      if (!selectedMake) {
        this.errorMessage = "Invalid make selected.";
        return;
      }

      const url = `https://new.api.nexusautotransport.com/api/vehicles/models?year=${year}&make=${selectedMake}`;

      try {
        this.loading = true;
        const response = await axios.get(url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        });

        const { data } = response.data;
        if (!data || data.length === 0) {
          this.errorMessage = `No models found for the selected year (${year}) and make (${selectedMake}).`;
        } else {
          this.models = data.map((item) => ({
            name: item.model,
            id: item.model
          }));
          this.errorMessage = "";
        }
      } catch (error) {
        this.errorMessage = "Failed to load models.";
        console.error("Error fetching models:", error);
      } finally {
        this.loading = false;
      }
    },

    onYearChange(year) {
      this.selectedYear = year;
      if (year) {
        this.fetchMakes(year);
      }
    },

    onMakeChange(make) {
      this.selectedMake = make;
      if (make) {
        this.fetchModels(this.selectedYear, make);
      }
    },

    onModelChange(model) {
      this.selectedModel = model;
    }
  },

  mounted() {
    this.fetchYears();
  }
};
</script>

<style scoped>
.vehicle-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  width: 90%;

}


h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.dropdown-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

@media (max-width: 768px) {
  .dropdown-container {
    display: flex;
    flex-direction: column; 
  }
}

.error {
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center; 
}

.dropdown {
  width: 100%;
}
</style>
