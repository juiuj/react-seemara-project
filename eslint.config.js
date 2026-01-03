import globals from "globals";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import path from "path";

export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react,
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", path.resolve("./src")]],
          extensions: [".js", ".jsx"],
        },
      },
    },
    rules: {
      // 여기에 기존 룰 유지/추가
    },
  },
];
