declare namespace _default {
    export const input: string;
    export const output: {
        file: any;
        format: string;
    }[];
    export const external: string[];
    export const plugins: import("rollup").Plugin[];
}
export default _default;
