export default (await import('vue')).defineComponent({
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
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ((__VLS_ctx.id)), });
    (__VLS_ctx.label);
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ((__VLS_ctx.id)), value: ((__VLS_ctx.selected)), disabled: ((__VLS_ctx.disabled)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
    (__VLS_ctx.label);
    for (const [option] of __VLS_getVForSourceType((__VLS_ctx.options))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((option.id)), value: ((option.id)), });
        (option.name);
    }
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
