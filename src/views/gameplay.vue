<template>
  <body class="m-0">
    <div class="container w-screen h-screen font-sans">
      <section class="rgb-background w-screen h-screen flex flex-col">
        <header class="w-screen h-12 bg-gray-400 shadow-2xl">
          <div class="h-12 w-24">
            <h4 class="text-center p-3">Logo</h4>
          </div>
        </header>
        <div class="w-screen h-[150px] py-9 text-center font-semibold text-7xl">
          {{ timerCount }}
        </div>
        <div class="w-screen h-[240px] bg-stone-800 flex flex-col">
          <div
            class="h-80 w-6 bg-cyan-300 absolute opacity-75 left-[13vw] top-[160px] rounded-lg"
          ></div>

          <div id="string" class="h-[24px] w-screen my-[8px] py-2 relative">
            <div class="h-[8px] w-screen bg-slate-300"></div>
            <div
              ref="movin3"
              class="h-8 w-12 bg-green-400 absolute bottom-[-4px] rounded-xl hidden"
            >
              3
            </div>
            <div
              ref="movin2"
              class="h-8 w-12 bg-green-400 absolute bottom-[-4px] rounded-xl hidden"
            >
              3
            </div>
          </div>

          <div id="string" class="h-[24px] w-screen my-[8px] py-2 relative">
            <div class="h-[8px] w-screen bg-slate-300"></div>
            <div
              ref="movin0"
              class="h-8 w-12 bg-green-400 absolute bottom-[-4px] rounded-xl hidden"
            >
              0
            </div>
            <div
              ref="movin1"
              class="h-8 w-12 bg-green-400 absolute bottom-[-4px] rounded-xl hidden"
            >
              0
            </div>
          </div>

          <div id="string" class="h-[24px] w-screen my-[8px] py-2 relative">
            <div class="h-[8px] w-screen bg-slate-300"></div>
          </div>

          <div id="string" class="h-[24px] w-screen my-[8px] py-2 relative">
            <div class="h-[8px] w-screen bg-slate-300"></div>
          </div>

          <div id="string" class="h-[24px] w-screen my-[8px] py-2 relative">
            <div class="h-[8px] w-screen bg-slate-300"></div>
          </div>

          <div id="string" class="h-[24px] w-screen my-[8px] py-2 relative">
            <div class="h-[8px] w-screen bg-slate-300"></div>
          </div>
        </div>
        <div class="h-10 w-screen my-6 text-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            v-if="this.isHidden == false"
            @click="hiddenState(), changeValue()"
          >
            start
          </button>
        </div>
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="(hidden = 0), recordAudio()"
          >
            RECORD
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            v-if="hidden == 0"
            @click="(hidden = 1), stop()"
          >
            STOPRECORDING
          </button>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounder"
            @click="stopListening()"
          >
            STOPLISTENING
          </button>
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
      timerCount: 3,
      recorder: null,
      chunks: [],
      hidden: 1,
      device: null,
      blobObj: null,
      starter: false,
      isHidden: false
    }
  },
  methods: {
    hiddenState(){
      this.isHidden = true
    },
    changeValue() {
      let timer = setInterval(() => {
        this.timerCount--
        console.log(this.timerCount)
        if (this.timerCount == 0) {
          clearInterval(timer)
          this.timerCount = null
          this.gamePlay()
        }
      }, 1000)
    },

    gamePlay() {
      this.playAudio()
      setTimeout(() => this.move(this.$refs.movin0), 430)
      setTimeout(() => this.move(this.$refs.movin1), 800)
      setTimeout(() => this.move(this.$refs.movin2), 1500)
      setTimeout(() => this.move(this.$refs.movin3), 2000)
    },
    playAudio() {
      var audio = new Audio(require("@/assets/audio/twinkle.mp3"))
      audio.play()
    },
      move(square) {
        let x = 97.5
        let pohyb = setInterval(() => {
          x = x - 0.1
          square.style.left = x + "vw"
          square.style.display = "block"
          if (square.style.left == 13 + "vw") square.style.backgroundColor = '#1d18c4'
          if (square.style.left < -15 + "vw") {
            clearInterval(pohyb)
            square.style.left = null
            square.style.display = null
          }
        }, 5)
      },
      // move(value) {
      //   let squares = [this.$refs.movin1]
      //   let x = 97.5
      //   let pohyb = setInterval(() => {
      //     x = x - 0.1
      //     squares.style.left = x + "vw"
      //     squares.style.display = "block"
      //     if (squares.style.left < -30 + "vw") {
      //       clearInterval(pohyb)
      //       squares.style.left = null
      //       squares.style.display = null
      //     }
      //   }, 5)
      // },
    recordAudio() {
      this.device = navigator.mediaDevices.getUserMedia({ audio: true });
      this.device.then((stream) => {
        this.recorder = new MediaRecorder(stream);
        this.recorder.ondataavailable = (e) => {
          this.chunks.push(e.data);
          if (this.recorder.state == "inactive") {
            let blob = new Blob(this.chunks, { type: "audio/wav" });
            // save to blobObj
            this.blobObj = blob;
            this.chunks = [];
            // emit to parent
            this.$emit("send-audio", this.blobObj);
            this.blobObj = null;
          }
        };
        // start
        this.recorder.start();
      });
      setInterval(() => {
        console.log(this.recorder.state);
      }, 2000);
    },
    stop() {
      // stop
      this.recorder.stop()
    },
    stopListening() {
      this.recorder.getAudioTracks().forEach((track) => {
        track.stop()
      });
    },

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
