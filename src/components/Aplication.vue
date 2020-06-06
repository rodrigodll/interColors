<template>
    <main>
        <div class="tools">
            <div>
                <input type="color" v-model="color1" />
                <input type="text" v-model="color1" />
            </div>
            <div>
                <div class="vertical-range"><input type="range" :min="min" :max="max" v-model="steps" /></div>
                <div class="steps">{{visualSteps}} {{visualStepsLabel}}</div>
            </div>
            <div>
                <input type="color" v-model="color2" />
                <input type="text" v-model="color2" />
            </div>
        </div>
        <div class="colors">
            <div class="color" v-for="color in colors" :style="setStyles(color)">{{colorName(color)}}</div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'degrade',
  props: ["visualSteps"]
}
let vm = new Vue({
  el: 'main',
  mixins: [vueMixinColorFunctions],
  data: {
    min: 3,
    max: 27,
    delta: 10,
    steps: 10,
    color1: '#0ebeff',
    color2: '#ff42b3',
  },
  computed: {
    colors () {
      return this.interpolateColors(this.color1, this.color2, this.steps)
    },
    visualSteps () {
      return (this.steps - 2)
    },
    visualStepsLabel () {
      return (this.visualSteps === 1 ? 'step' : 'steps')
    },
  },
  methods: {
    adjust (color) {
      const hex = this.rgbToHex(color[0], color[1], color[2])
      return this.foregroundAdjust(hex)
    },
    setStyles(color) {
      return `background: rgb(${color}); color: ${this.adjust(color)}`
    },
    colorName (color) {
      return this.rgbArrayToHex(color)
    },
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Work+Sans:300");
:root {
  --fg: #fff;
  --bg: #000;
}

.tools {
  flex: 1;
  padding: 2em;
  color: #fff;
}
.tools div {
  display: flex;
  position: relative;
}
.tools div + div {
  margin-top: 0.5em;
}
.tools .steps {
  position: absolute;
  top: 50%;
  left: 6em;
  transform: translate(0, -50%);
  padding: 0;
  margin: 0;
}

.colors {
  flex: 2;
  display: flex;
  flex-direction: column;
  font-size: 0.85em;
}
.colors .color {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 1em;
  transition: 300ms linear;
}

.vertical-range {
  display: flex;
  align-items: center;
  width: 9em;
  height: 9em;
  transform: rotate(-90deg);
}

input {
  margin: 0;
  padding: 0 0.5em;
  font-size: inherit;
  font-family: inherit;
  border: none;
  width: 7em;
  outline: none;
  border-radius: 0 1em 1em 0;
}
input[type=color] {
  padding: 0;
  width: 2em;
  height: 2em;
  border-radius: 1em 0 0 1em;
}
input[type=color]::-moz-color-swatch {
  border: none;
  border-radius: 1em;
  transform: scale(0.75);
}
input[type=color]::-webkit-color-swatch {
  border: none;
  border-radius: 1em;
}
input[type=color]::-webkit-color-swatch-wrapper {
  padding: 0.25em;
  border-radius: 1em;
}
input[type=range] {
  appearance: none;
  outline: none;
  display: inline-block;
  padding: 0;
  margin: 0;
  border: 0;
  width: 100%;
  height: 0.25em;
  border-radius: 1em;
  cursor: pointer;
  font-size: inherit;
  background: var(--fg);
}
input[type=range]::-moz-range-track {
  appearance: none;
  background: var(--fg);
  outline: none;
}
input[type=range]::-moz-focus-outer {
  border: 0;
}
input[type=range]::-moz-range-thumb {
  appearance: none;
  width: 1em;
  height: 1em;
  border: none;
  border-radius: 1em;
  box-shadow: 0 0 0 0.3em var(--bg);
  background: var(--fg);
  transform: scale(1);
  transition: transform 0.3s ease-out;
}
input[type=range]::-moz-range-thumb:focus, input[type=range]::-moz-range-thumb:active {
  appearance: none;
  transform: scale(0.85);
}
input[type=range]::-webkit-slider-thumb {
  appearance: none;
  width: 1em;
  height: 1em;
  border: none;
  border-radius: 1em;
  box-shadow: 0 0 0 0.3em var(--bg);
  background: var(--fg);
  transform: scale(1);
  transition: transform 0.3s ease-out;
}
input[type=range]::-webkit-slider-thumb:focus, input[type=range]::-webkit-slider-thumb:active {
  appearance: none;
  transform: scale(0.85);
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  background: #000;
  font-family: "Work Sans", sans-serif;
}

main {
  flex: 1;
  display: flex;
  font-size: calc(1em + 1vw);
}

@supports (-webkit-backdrop-filter: blur(2em)) {
  input[type=color] {
    display: none;
  }

  input {
    border-radius: 1em;
    padding: 0.25em 0.5em;
    width: 9em;
  }
}
</style>