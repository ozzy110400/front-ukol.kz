/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
	theme: {
		extend: {
		  colors: {
			'my-white': '#f7f7f1',
			'my-green': '#88e788',
			'my-black': '#1F2400', 
		  },
		},
	  },
	plugins: [require('@tailwindcss/typography'), require('daisyui')],	
  }