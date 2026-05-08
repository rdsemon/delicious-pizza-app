import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig([
  ...compat.extends("next/core-web-vitals", "plugin:prettier/recommended"),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      eqeqeq: "error",
      curly: "error",
      camelcase: "error",
      "prefer-const": "warn",
      "no-console": "warn",
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-redeclare": "error",
      "no-trailing-spaces": "warn",
      "prefer-arrow-callback": "warn",

      // Let Prettier handle formatting
      "prettier/prettier": "error",
    },
  },
]);
