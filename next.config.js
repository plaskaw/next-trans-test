require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const sass = require('@zeit/next-sass');
const { locales, defaultLocale } = require('./i18n.json');


const nextConfig = {
	i18n: {
    locales,
    defaultLocale
  },
  devIndicators: {
    autoPrerender: true
	},
	env: {
    API_URL: process.env.API_URL
	},
	poweredByHeader: false
};


module.exports = withPlugins([
	[optimizedImages, {
		imagesFolder: 'images',
		handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
		optimizeImages: true,
    optimizeImagesInDev: true,
		mozjpeg: {
			quality: 80,
		},
		optipng: {
			optimizationLevel: 3,
		},
		pngquant: false,
		gifsicle: {
      interlaced: false,
      optimizationLevel: 3,
    },
		svgo: {
			plugins: [
				{ removeComments: false }
			]
		},
		webp: {
      preset: 'default',
      quality: 75,
		}
	}],
	[sass, {
		webpack: config => {
			config.module.rules.push({
				enforce: "pre",
				test: /.scss$/,
				loader: "sass-resources-loader",
				options: {
					resources: "./_global-styles/mixins/index.scss"
				}
			});
			return config
		}
	}]
], nextConfig);
