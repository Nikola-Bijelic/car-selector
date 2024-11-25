declare const _default: import("vue").DefineComponent<{}, {}, {
    years: never[];
    makes: never[];
    models: never[];
    selectedYear: null;
    selectedMake: null;
    selectedModel: null;
    loading: boolean;
    errorMessage: string;
}, {}, {
    fetchYears(): Promise<void>;
    fetchMakes(year: any): Promise<void>;
    fetchModels(year: any, makeId: any): Promise<void>;
    onYearChange(year: any): void;
    onMakeChange(make: any): void;
    onModelChange(model: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    Dropdown: import("vue").DefineComponent<{}, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
