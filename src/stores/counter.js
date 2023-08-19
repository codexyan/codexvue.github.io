import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// mendefinisikan toko bernama counter menggunakan 'pinia'
export const useCounterStore = defineStore('counter', () => {
  // membuat variabel reaktif 'count' dengan nilai awal 0
  const count = ref(0)

  // Hitung nilai ganda dari 'count' menggunakan computed property
  const doubleCount = computed(() => count.value * 2)

  // definisikan fungsi 'increment' untuk menambahkan nilai count sebanyak 1x
  function increment() {
    count.value++
  }

  // Kembalikan objek yang berisi variabel
  return { count, doubleCount, increment }
})
