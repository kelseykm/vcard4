import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import glob from "glob";
import path from "path";

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
    input: Object.fromEntries(
      glob
        .sync("types/**/*d.ts")
        .map((file) => [
          path.relative("types/src", file.replace(/\.d\.ts$/, "")),
          file,
        ])
    ),
    output: {
      dir: "./lib/esm/",
      format: "esm",
    },
    plugins: [resolve(), dts()],
  },
];
