import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import tt from '@tomtom-international/web-sdk-maps';

createApp(App).mount('#app')


const map = tt.map({
    key: "9ndAiLQMA0GuE3FRyeJN3u42T2H4UMvU",
    container: "map"
});