<template>
  <body class="m-0">
    <div class="container w-screen h-screen font-sans">
      
      <section
        class="rgb-background w-screen h-screen flex flex-col"
      >
        <header class="w-screen h-12 bg-gray-400 shadow-2xl">
         <div class="h-12 w-24">
           <h4 class="text-center p-3">Logo</h4>
          </div>
       </header>
        <div  class="w-screen h-[150px] py-9 text-center font-semibold text-7xl">
          {{ timerCount }}
        </div>

        <div class="w-screen h-[240px] bg-stone-800 flex flex-col">

          <div
            class="h-80 w-6 bg-cyan-300 absolute opacity-75 left-48 top-[160px] rounded-lg"
          ></div>

          <div
            id="string"
            class="h-[24px] w-screen my-[8px] py-2 relative"
          > 
            <div class=" h-[8px] w-screen bg-slate-300 "></div>
            <div class="h-8 w-12 bg-green-400 absolute bottom-[-4px] left-[80vw] rounded-xl "></div>
            <div class="h-8 w-12 bg-green-400 absolute bottom-[-4px] left-[60vw] rounded-xl "></div>
            <div class="h-8 w-12 bg-green-400 absolute bottom-[-4px] left-[40vw] rounded-xl "></div>
            <div class="h-8 w-12 bg-green-400 absolute bottom-[-4px] left-[20vw] rounded-xl "></div>
            <div class="h-8 w-12 bg-green-400 absolute bottom-[-4px] left-[0vw] rounded-xl "></div>
          </div>

          <div
            id="string"
            class="h-[24px] w-screen my-[8px] py-2 relative"
          > 
            <div class=" h-[8px] w-screen bg-slate-300 "></div>
            <div class="h-8 w-12 bg-green-400 absolute bottom-[-4px] left-[95vw] rounded-xl "></div>
          </div>

          <div
            id="string"
            class="h-[24px] w-screen my-[8px] py-2 relative"
          > 
            <div class=" h-[8px] w-screen bg-slate-300 "></div>
            <div class="h-8 w-12 bg-green-400 absolute bottom-[-4px] left-[40vw] rounded-xl "></div>
          </div>

          <div
            id="string"
            class="h-[24px] w-screen my-[8px] py-2 relative"
          > 
            <div class=" h-[8px] w-screen bg-slate-300 "></div>
            <div class="h-8 w-12 bg-green-400 absolute bottom-[-4px] left-[90vw] rounded-xl "></div>
          </div>

          <div
            id="string"
            class="h-[24px] w-screen my-[8px] py-2 relative"
          > 
            <div class=" h-[8px] w-screen bg-slate-300 "></div>
            <div class="h-8 w-12 bg-green-400 absolute bottom-[-4px] left-[90vw] rounded-xl "></div>
          </div>

          <div
            id="string"
            class="h-[24px] w-screen my-[8px] py-2 relative"
          > 
            <div class=" h-[8px] w-screen bg-slate-300 "></div>
            <div class="h-8 w-12 bg-green-400 absolute bottom-[-4px] left-[90vw] rounded-xl "></div>
          </div>
        </div>
        <!-- <div class="h-20 py-4 mx-auto ">
                <div class=" bg-white w-20 h-14 py-3 text-center text-2xl font-medium text-black rounded-3xl">69</div>
            </div> -->
        <div class="h-10 w-screen my-6 text-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            v-if="!isHidden"
            @click="changeValue(), isHidden = true"
          >
            start
          </button>
        </div>
      </section>
  <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="recordAudio()">record</button>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="stopRecording()">stopRecording</button> -->

    </div>
  </body>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      timerCount: null,
      recorder: null,
      starter: false,
    }
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--
          }, 1000);
        }
        if (value == 0) {
          this.timerCount = null
        }
        if (this.timerCount == null){
        this.gamePlay()
      }
        console.log(this.timerCount)
      },
      deep: true,
    },
  },
  methods: {
    changeValue() {
      this.timerCount = 5

    },
    gamePlay(){
        this.playAudio() 
    },
    playAudio(){
      var audio = new Audio(require('../audio/Guitar Chords.mp3'))
      audio.play()
    }
    // recordAudio() {
    //   var device = navigator.mediaDevices.getUserMedia({ audio: true })
    //   var items = []
    //   device.then((stream) => {
    //     this.recorder = new MediaRecorder(stream)
    //     this.recorder.ondataavailable = (e) => {
    //       items.push(e.data)
    //       if (recorder.state == "inactive") {
    //         var blob = new Blob(items, { type: "audio/*" })
    //         var audio = document.getElementById("audio")
    //         var mainaudio = document.createElement("audio")
    //         mainaudio.setAttribute("controls", "controls")
    //         audio.appendChild(mainaudio)
    //         mainaudio.innerHTML =
    //           '<source src="' +
    //           URL.createObjectURL(blob) +
    //           '" type="audio/*" />'
    //       }
    //     }
    //     this.recorder.start()
    //     stopRecording(); {
    //       this.recorder.stop()
    //     }
    //   })
    // },
  },
}
</script>

<style scoped>
.rgb-background {
  background: linear-gradient(
    -45deg,
    rgb(243, 63, 153),
    #bd2672,
    #96068e,
    #6e0660
  );
}
</style>
