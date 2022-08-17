import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        dir: "./lib/esm/",
        format: "esm",
        preserveModules: true,
        sourcemap: true,
      },
      {
        name: "vcard4",
        file: "./lib/umd/index.js",
        format: "umd",
        sourcemap: true,
      },
      {
        file: "./dist/index.esm.min.js",
        format: "esm",
        sourcemap: true,
        plugins: [terser()],
      },
      {
        name: "vcard4",
        file: "./dist/index.umd.min.js",
        format: "umd",
        sourcemap: true,
        plugins: [terser()],
      },
    ],
    plugins: [resolve(), babel({ babelHelpers: "bundled" })],
  },
  {
    input: "./types/src/index.d.ts",
    output: {
      dir: "./lib/esm/",
      format: "esm",
      preserveModules: true,
    },
    plugins: [resolve(), dts()],
  },
];
