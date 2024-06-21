/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
    ,"node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
        fontFamily:{
          stick:["Stick No Bills", "sans-serif"],
        }
      },
      colors:{
        primary:"#25282B",
        secondary:"#BF8B5E",
        primaryLight:"#969696",
        fontGreen:"#74DB0D",
        blueBerry:"#5E6CFB",
        gold:"#EBD292",
        redberry:"#EA2F15",
        purple:"#6c35ea",
      },
      firstImpression:{

      },
      container:{
        center:"true",
        padding:{
          sm:"3rem",
        },
        spacing:{
          '128':'32rem',
        },
      }
    },
    plugins: [
    ],
  }

  /*rgb(238,103,103)-bg of landing */