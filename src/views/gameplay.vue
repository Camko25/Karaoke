<template>
<body class="m-0">

    <div class="container w-screen h-screen font-sans ">
        <header class="w-screen h-12 bg-gray-400 box-border shadow-2xl">
            <div class="h-12 w-24">
                <h4 class="text-center p-3">Logo</h4>
            </div>

        </header>
        <section class="rgb-background w-screen h-[577px] flex flex-col box-border ">
            <div class="w-screen h-[150px] py-9 text-center font-semibold text-7xl ">{{ timerCount }}</div>
            <div class="w-screen h-[240px] bg-stone-800 flex flex-col">
                <div id="string" class="h-[8px] w-screen bg-slate-300 my-[16px]"></div>                
                <div id="string" class="h-[8px] w-screen bg-slate-300 my-[16px]"></div>
                <div id="string" class="h-[8px] w-screen bg-slate-300 my-[16px]"></div>
                <div id="string" class="h-[8px] w-screen bg-slate-300 my-[16px]"></div>
                <div id="string" class="h-[8px] w-screen bg-slate-300 my-[16px]"></div>
                <div id="string" class="h-[8px] w-screen bg-slate-300 my-[16px]"></div>

            </div>
            <div class="h-20 py-4 mx-auto ">
                <div class=" bg-white w-20 h-14 py-3 text-center text-2xl font-medium text-black rounded-3xl">69</div>
            </div>
            <div class="h-10 w-screen my-6 text-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="changeValue()">start</button>
            </div>
        </section>
        
    </div>
    
</body>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      timerCount: null,
    };
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
        if (value == 0) {
          this.timerCount = null;
          // gamePlay()  toto bude callovat celu tu hru
        }
      },
      deep: true,
    },
  },
  methods: {
    changeValue() {
      this.timerCount = 5;
    },
  },
};
</script>

<style scoped>
.rgb-background {
    background: linear-gradient(-45deg, rgb(243, 63, 153), #bd2672, #96068e, #6e0660);
}
</style>
