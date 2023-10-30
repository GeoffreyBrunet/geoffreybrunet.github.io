// uno.config.ts
import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                inter: ['Inter:300,500,700'],
            },
        }),
    ],
    rules: [
        ['bg-color-paper', { 'background-color': '#dedbce' }],
        ['text-default', { 'font-size': 'calc(10px + 0.33vw)' }],
        ['p-default', { padding: '5vh 10vw' }],
    ],
})