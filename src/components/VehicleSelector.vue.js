import axios from "axios";
import Dropdown from "./Dropdown.vue";
export default (await import('vue')).defineComponent({
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
                const response = await axios.get("https://new.api.nexusautotransport.com/api/vehicles/years", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                });
                this.years = response.data.data.map((year) => ({
                    name: year.toString(),
                    id: year.toString()
                }));
            }
            catch (error) {
                this.errorMessage = "Failed to load years.";
            }
            finally {
                this.loading = false;
            }
        },
        async fetchMakes(year) {
            if (!year)
                return;
            try {
                this.loading = true;
                const response = await axios.get(`https://new.api.nexusautotransport.com/api/vehicles/makes?year=${year}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                });
                this.makes = response.data.data.map((make) => ({
                    name: make.name,
                    id: make.id
                }));
                this.selectedMake = null;
                this.selectedModel = null;
                this.models = [];
            }
            catch (error) {
                this.errorMessage = "Failed to load makes.";
            }
            finally {
                this.loading = false;
            }
        },
        async fetchModels(year, makeId) {
            if (!year || !makeId)
                return;
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
                }
                else {
                    this.models = data.map((item) => ({
                        name: item.model,
                        id: item.model
                    }));
                    this.errorMessage = "";
                }
            }
            catch (error) {
                this.errorMessage = "Failed to load models.";
                console.error("Error fetching models:", error);
            }
            finally {
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
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Dropdown
        },
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['dropdown-container'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("vehicle-selector") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dropdown-container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Dropdown;
    /** @type { [typeof __VLS_components.Dropdown, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:selectedValue': {} }, id: ("year"), label: ("Year: "), options: ((__VLS_ctx.years)), selectedValue: ((__VLS_ctx.selectedYear)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:selectedValue': {} }, id: ("year"), label: ("Year: "), options: ((__VLS_ctx.years)), selectedValue: ((__VLS_ctx.selectedYear)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:selectedValue': (__VLS_ctx.onYearChange)
    };
    let __VLS_3;
    let __VLS_4;
    var __VLS_5;
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.Dropdown;
    /** @type { [typeof __VLS_components.Dropdown, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onUpdate:selectedValue': {} }, id: ("make"), label: ("Make: "), options: ((__VLS_ctx.makes)), selectedValue: ((__VLS_ctx.selectedMake)), disabled: ((!__VLS_ctx.selectedYear)), }));
    const __VLS_10 = __VLS_9({ ...{ 'onUpdate:selectedValue': {} }, id: ("make"), label: ("Make: "), options: ((__VLS_ctx.makes)), selectedValue: ((__VLS_ctx.selectedMake)), disabled: ((!__VLS_ctx.selectedYear)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        'onUpdate:selectedValue': (__VLS_ctx.onMakeChange)
    };
    let __VLS_11;
    let __VLS_12;
    var __VLS_13;
    const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.Dropdown;
    /** @type { [typeof __VLS_components.Dropdown, ] } */
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{ 'onUpdate:selectedValue': {} }, id: ("model"), label: ("Model: "), options: ((__VLS_ctx.models)), selectedValue: ((__VLS_ctx.selectedModel)), disabled: ((!__VLS_ctx.selectedMake)), }));
    const __VLS_18 = __VLS_17({ ...{ 'onUpdate:selectedValue': {} }, id: ("model"), label: ("Model: "), options: ((__VLS_ctx.models)), selectedValue: ((__VLS_ctx.selectedModel)), disabled: ((!__VLS_ctx.selectedMake)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    let __VLS_22;
    const __VLS_23 = {
        'onUpdate:selectedValue': (__VLS_ctx.onModelChange)
    };
    let __VLS_19;
    let __VLS_20;
    var __VLS_21;
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("error") }, });
        (__VLS_ctx.errorMessage);
    }
    __VLS_styleScopedClasses['vehicle-selector'];
    __VLS_styleScopedClasses['dropdown-container'];
    __VLS_styleScopedClasses['error'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
