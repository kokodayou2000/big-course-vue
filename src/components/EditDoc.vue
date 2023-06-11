<template>
  <div class="p10">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Markdown编辑器</span>
        </div>
      </template>

      <v-md-editor v-model="text"
                   height="400px"
                   @save="update"
      />
    </el-card>
  </div>
</template>


<script lang="ts" setup>
import {onMounted, ref} from "vue";
import { getOneDocByDocID, updateDocs} from "@/apis";
import {IDoc} from "@/typing/doc";

const text = ref('')
onMounted(()=>{
  text.value = props.content
})

const props = defineProps<IDoc>()

// @save="emits('update')"
interface IEmits {
  (e: 'update'): void
}
const emits = defineEmits<IEmits>()

const update = ()=>{
  // 执行父节点的update
  console.log("执行父节点的update")
  emits('update')

  updateDocs({content: text.value, id: props.id})

}

</script>


<style scoped>

</style>
