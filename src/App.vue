<script setup>
  import { ref } from 'vue'
  import { copyText } from 'vue3-clipboard'

  const tempBarcode = ref('')
  const myinput = ref(null)
  const trimmedBarcode = ref('')
  const barcodes = ref([])

  const handelKeyEnter = () => {
    trimmedBarcode.value = tempBarcode.value.substr(18,25)
    copyText (trimmedBarcode.value, undefined, (error, event) => {
      if (error){
        alert ('can not copy')
      } else{
        tempBarcode.value=''
        myinput.value.focus()
        barcodes.value.unshift(trimmedBarcode.value)
      }
    })
  }
</script>

<template>
  <div class='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>
      <div class='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
        <div class='max-w-md mx-auto space-y-6'>
          <form
            @submit.prevent
            name="barcode"
            data-netlify="true"
          >
            <h2 class="text-2xl font-bold ">邮局绿色信封</h2>
            <p class="my-4 opacity-70">请扫描二维码，系统会自动复制二维码</p>
            <hr class="my-6">
            <label class="uppercase text-sm font-bold opacity-70">二维码</label>
            <input
              type="text"
              name="barcode"
              v-model="tempBarcode"
              ref="myinput"
              @keyup.enter="handelKeyEnter"
              class="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none">
            <p
              class="opacity-70"
              v-for="barcode in barcodes "
              :key="barcode.value"> {{ barcode }} </p>

          </form>
        </div>
      </div>
    </div>
</template>

<style>

</style>
