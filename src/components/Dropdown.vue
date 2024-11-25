<template>
  <div>
    <label :for="id">{{ label }}</label>
    <select :id="id" v-model="selected" :disabled="disabled">
      <option value="" disabled>Select {{ label }}</option>
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    options: Array,
    selectedValue: [String, Number],
    disabled: Boolean
  },
  data() {
    return {
      selected: this.selectedValue || ""
    };
  },
  watch: {
    selected(newVal) {
      this.$emit("update:selectedValue", newVal);
    }
  },
  computed: {
    selectedValue: {
      get() {
        return this.selected;
      },
      set(newVal) {
        this.selected = newVal;
      }
    }
  }
};
</script>

<style scoped>
select {
  width: 200px;
  padding: 8px;
  margin: 8px 0;
}
</style>
