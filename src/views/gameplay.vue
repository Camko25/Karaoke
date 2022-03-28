<template>
  <div class="container">
    <div class="">{{ timerCount }}</div>
    <div>HRACIA PLOCHA</div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="changeValue()">start</button>
  </div>
</template>

<script>

    export default {

        data() {
            return {
                timerCount: null
            }
        },

        watch: {

            timerCount: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }
                    if (value == 0){
                      this.timerCount= null
                      // gamePlay()  toto bude callovat celu tu hru
                    }

                },
                deep: true
            }

        },
        methods:{
          changeValue(){
            this.timerCount = 5
          }
        },
    }

</script>
