module.exports = {
  "plugins": ["prettier", "tailwindcss"],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:tailwindcss/recommended",
  ],
  "rules": {
    "no-console": ["warn"],
    "prettier/prettier": [
      "warn",
      {
        "tabWidth": 2,
        "singleQuote": true,
        "semi": false,
        "trailingComma": "es5",
      },
    ],
  }
}