<script setup lang="ts">
// const previewData = '# 你好'


import {ref,} from "vue";
import {getAllDocsById, getOneDocByDocID} from "@/apis";

// const json2md = require("json2md")
// let previewData = json2md(
//     [
//       { h1: "JSON To Markdown" },
//       { blockquote: "A JSON to Markdown converter." },
//       { img: [{
//         title: "Some image", source: "https://example.com/some-image.png"
//         }, {
//         title: "Another image", source: "https://example.com/some-image1.png"
//         }, {
//         title: "Yet another image", source: "https://example.com/some-image2.png"
//       }]
//     }
//       , { h2: "Features" }
//       , { ul: [
//         "Easy to use"
//         , "You can programmatically generate Markdown content"
//         , "..."
//       ]
//     }
//       , { h2: "How to contribute" }
//       , { ol: [
//         "Fork the project"
//         , "Create your branch"
//         , "Raise a pull request"
//       ]
//     }
//       , { h2: "Code blocks" }
//       , { p: "Below you can see a code block example." }
//       , { "code": {
//         language: "js"
//         , content: [
//           "function sum (a, b) {"
//           , "   return a + b"
//           , "}"
//           , "sum(1, 2)"
//         ]
//       }
//     }
//     ]
// )

const previewData = ref('')


const rows = ref([])

async function init(id : string) {
  let res = await getOneDocByDocID(id)
  previewData.value = res.data.content
}
init("1")

console.log(previewData)



</script>

<template>
  <v-md-editor :model-value="previewData" mode="preview">

  </v-md-editor>


</template>

<style scoped>

</style>
