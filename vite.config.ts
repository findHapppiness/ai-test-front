import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

const resolve = (src: string) => path.resolve(__dirname, src);

export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return defineConfig({
		plugins: [react(), svgr(), tsconfigPaths()],
		resolve: {
			alias: [
				{ find: '@components', replacement: resolve('src/components') },
				{ find: '@page', replacement: resolve('src/page') },
				{ find: '@store', replacement: resolve('src/store') },
				{ find: '@assets', replacement: resolve('src/assets') },
				{ find: '@api', replacement: resolve('src/api') },
				{ find: '@constant', replacement: resolve('src/constant') },
				{ find: '@styles', replacement: resolve('src/styles') },
			],
		},
		server: {
			proxy: {
				'/predict': env.VITE_SERVER_URL,
				'/feedback': env.VITE_SERVER_URL,
			},
		},
	});
};
