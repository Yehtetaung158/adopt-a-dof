/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        padauk: ['Padauk', 'sans-serif'],
        playwrite: ['Playwrite MX', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      colors:{
        primary: "#059212",
        second: "#06D001",
        third: "#9BEC00",
        forth: "#F3FF90",
        form:"#e609e2",
      },
      backgroundImage: {
        'hero1': "url('https://images.wagwalkingweb.com/media/care/please-adopt-me-choosing-to-adopt-a-puppy-versus-an-adult-dog/please-adopt-me-choosing-to-adopt-a-puppy-versus-an-adult-dog.jpg')",
        'formimg': "url('https://storage.googleapis.com/pod_public/1300/172611.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}