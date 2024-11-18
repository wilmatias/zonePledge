import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { resolve } from 'path';
import { VantResolver } from "@vant/auto-import-resolver";

import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) =>{
	return {
		build: {
			outDir: mode === 'production' ? resolve(__dirname, 'D:/NB-Project/Web/NewTeplate/zonePledge/Publish') : resolve(__dirname, 'D:/NB-Project/Web//NewTeplate/zonePledgeTest/Publish'),
			target: 'es2015',
			terserOptions: {
				  compress: {
					drop_console: true,
				  },
			},
		},
		plugins: [
			vue(),
			AutoImport({
				resolvers: [VantResolver()],
			}),
			Components({
				resolvers: [VantResolver()],
			}),
		],
		resolve: {
			alias: {
			'@': '/src',
			},
		},
	}
})
