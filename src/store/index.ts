import { defineStore } from 'pinia'
import {dayjs} from "element-plus";
import {computed, ref} from "vue";

    const hour = dayjs().hour()
    const minute = dayjs().minute()
    const second = dayjs().second()
    const sec = hour * 3600 + minute * 60 + second

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: sec, name: 'Eduardo' }),

    getters: {
        doubleCount: (state) => state.count * 2,
        showTime:(state) => Math.floor(state.count/(60*60)) +"时"+Math.floor(state.count%(60*60)/60)+"分"+Math.floor(state.count%60)+"秒"
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
// export const useCounterStore = defineStore('counter', () => {
//     const hour = dayjs().hour()
//     const minute = dayjs().minute()
//     const second = dayjs().second()
//     const sec = hour * 3600 + minute * 60 + second
//     const count = ref(sec)
//     const name = ref('邓俊杰')
//     // const doubleCount = computed(() => count.value * 2)
//     const doubleCount = ()=>{
//         return count.value/24 +"小时"+count.value/(24*60)+"分钟"+count.value/(24*60*60)+"秒"
//     }
//     function increment() {
//         count.value++
//     }
//
//     return { count, name, doubleCount, increment }
// })
