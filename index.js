import Live2D from './index.vue'
import { live2DManger } from './src/main.ts'
export default function install(app) {
  app.component('Live2D', Live2D)
}

export { live2DManger } 