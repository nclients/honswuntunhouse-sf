// @ts-nocheck
/** @type {import('tailwindcss').Config} */
import config from "ssg-theme-astro/tailwind"
const plugin = require('tailwindcss/plugin')
export default {
  ...config, ...{
    // content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './theme/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        textShadow: {
          sm: '0 1px 2px var(--tw-shadow-color)',
          DEFAULT: '0 2px 4px var(--tw-shadow-color)',
          lg: '0 8px 16px var(--tw-shadow-color)',
          all: '1px 1px 2px var(--tw-shadow-color), -1px -1px 2px var(--tw-shadow-color), 1px -1px 2px var(--tw-shadow-color), -1px 1px 2px var(--tw-shadow-color)',
        }
        },
      },
    },
    plugins: [
      plugin(function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
        )
      }),
    ],
  }
