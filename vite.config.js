import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@context': path.resolve(__dirname, './src/context'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@middlewares': path.resolve(__dirname, './src/middlewares'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@partials': path.resolve(__dirname, './src/partials'),
            '@private': path.resolve(__dirname, './src/private'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@services': path.resolve(__dirname, './src/services'),
            '@stores': path.resolve(__dirname, './src/stores'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@tests': path.resolve(__dirname, './src/tests'),
            '@translations': path.resolve(__dirname, './src/translations'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
        extensions: [
            '.js', 
            '.jsx', 
            '.ts', 
            '.tsx', 
            '.json',
            '.mjs',
            '.css', 
            '.scss', 
            '.sass', 
            '.less', 
            '.svg', 
            '.png', 
            '.jpg', 
            '.jpeg', 
            '.gif', 
            '.tiff', 
            '.bmp', 
            '.webp',
            '.ttf',
            '.otf',
            '.woff',
            '.woff2',
            '.eot',
        ],
    },
});
