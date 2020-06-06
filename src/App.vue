<template>
  <div id="app">
    <main>
      <div class="tools">
        <div>
          <input type="color" v-model="color1" v-bind:style="{ background: color1 }"/>
          <input type="text" v-model="color1" :style="{ borderColor: color1 }"/>
        </div>
        <div>
          <div class="vertical-range">
            <input type="range" :min="min" :max="max" v-model="steps" :style="setStyleRange(color1, color2)" />
          </div>
          <div class="steps" v>{{visualSteps}} {{visualStepsLabel}}</div>
        </div>
        <div>
          <input type="color" v-model="color2" v-bind:style="{ background: color2 }"/>
          <input type="text" v-model="color2" :style="{ borderColor: color2 }"/>
        </div>
      </div>
      <div class="colors">
        <button class="color" v-for="color in colors" :style="setStyles(color)" v-bind:key="color">&nbsp;{{colorName(color)}}</button>
      </div>

    </main>
      <h1>teste</h1>
      <h1>teste</h1>
      <h1>teste</h1>
      <h1>teste</h1>
      <h1>teste</h1>
      <h1>teste</h1>
      <h1>teste</h1>
      <h1>teste</h1>
  </div>
</template>

<script>
const vueMixinColorFunctions = {
  created: function () {
    // console.log('color mixin called')
  },
  methods: {
    randomHex () {
      return '#' + ( '00' + Math.floor( Math.random() * 16777216 ).toString(16) ).substr(-6)
    },
    hexArray (hex) {
      return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    },
    rgbObjectFromHex (hex) {
      var result = this.hexArray(hex)
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
      } : null;
    },
    rgbArrayFromHex (hex) {
      const rgb = this.rgbObjectFromHex(hex)
      return [rgb.r, rgb.g, rgb.b]
    },
    hslObjectFromHex (hex) {
      const hsl = {}
      const rgb = this.rgbObjectFromHex(hex)

      rgb.r /= 255, rgb.g /= 255, rgb.b /= 255
      let max = Math.max(rgb.r, rgb.g, rgb.b)
      let min = Math.min(rgb.r, rgb.g, rgb.b)
      
      hsl.l = (max + min) / 2

      if ( max == min ) {
        hsl.h = hsl.s = 0 // achromatic
      } else {
        let d = max - min
        
        hsl.s = hsl.l > 0.5 ? (d / (2 - max - min)) : (d / (max + min))

        switch(max) {
          case rgb.r: 
            hsl.h = (rgb.g - rgb.b) / d + (rgb.g < rgb.b ? 6 : 0)
            break
          case rgb.g: 
            hsl.h = (rgb.b - rgb.r) / d + 2
            break
          case rgb.b:
            hsl.h = (rgb.r - rgb.g) / d + 4
            break
        }
        
        hsl.h /= 6;
      }
      
      return {
        h: Math.round(hsl.h * 360),
        s: Math.round(hsl.s * 100),
        l: Math.round(hsl.l * 100),
      }
    },
    hslArrayFromHex (hex) {
      const hsl = this.hslObjectFromHex(hex)
      return [hsl.h, hsl.s, hsl.l]
    },
    hexToRgb (hex) {
      const rgb = this.rgbObjectFromHex(hex)
      return `rgb(${rgb.r},${rgb.g},${rgb.b})`
    },
    hexToHsl (hex) {
      const hsl = this.hslObjectFromHex(hex)
      return `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`
    },
    rgbChannelToHex (channel) {
      const hex = channel.toString(16)
      return hex.length == 1 ? `0${hex}` : hex
    },
    rgbToHex (r, g, b) {
      return `#${this.rgbChannelToHex(r)}${this.rgbChannelToHex(g)}${this.rgbChannelToHex(b)}`
    },
    rgbArrayToHex (color) {
      return this.rgbToHex(color[0], color[1], color[2]) 
    },
    hslToRgbObject (h, s, l) {
      var r, g, b;

      if(s == 0){
        r = g = b = l; // achromatic
      } else {
        var hue2rgb = function hue2rgb(p, q, t){
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
      }
      
      return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
      }
    },
    hslToRgb (h, s, l) {
      const rgb = this.hslToRgbObject(h, s, l)
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    },
    hslToHex (h, s,  l) {
      const rgb = this.hslToRgbObject(h, s, l)
      return this.rgbToHex(rgb.r, rgb.g, rgb.b)
    },
    brightness (hex) {
      const rgb = this.rgbObjectFromHex(hex)
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
    },
    foregroundAdjust (hex, test, lightHex, darkHex) {
      console.log(hex, test, lightHex, darkHex)
      test = test || 154
      lightHex = lightHex || '#fff'
      darkHex = darkHex || '#000'
      return this.brightness(hex) < test ? lightHex : darkHex
    },
    interpolateColor (color1, color2, factor) {
      if (arguments.length < 3) { 
        factor = 0.5
      }
      const result = color1.slice()
      
      for (var i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]))
      }
      console.log('result >>', result)
      return result
    },
    interpolateColors (color1, color2, steps) {
      let stepFactor = 1 / (steps - 1)
      let interpolatedColorArray = []

      color1 = this.rgbArrayFromHex(color1).map(Number)
      color2 = this.rgbArrayFromHex(color2).map(Number)

      for (var i = 0; i < steps; i++) {
        interpolatedColorArray.push(this.interpolateColor(color1, color2, stepFactor * i))
      }

      return interpolatedColorArray
    }
  },
}
export default {
  el: 'main',
  mixins: [vueMixinColorFunctions],
  data() {
    return{
      min: 3,
      max: 11,
      delta: 7,
      steps: 7,
      color1: '#491b8d',
      color2: '#0cc6c6',
    }
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
    setStyleRange(color1, color2) {
      return `background: linear-gradient(90deg, ${color1}, ${color2})`
    },
    colorName (color) {
      return this.rgbArrayToHex(color)
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Work+Sans:300");
:root {
  --fg: #f4f2fb;
  --bg: #343040;
}

.tools {
  flex: 1;
  padding: 2em;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tools div {
  display: flex;
  position: relative;
}
.tools div:first-child {
  flex-direction: row-reverse;
}
.tools div:first-child input[type=color]{
  border-radius: 0 0.2em 0.2em 0;
}

.tools .steps {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 60%);
  padding: 0;
  margin: 0;
  color: #817a90;
}

.colors {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px;
  background: white;
  border-radius: 3px;
  display: flex;
  align-items: initial;
  justify-content: center;
}
.colors .color {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 1em;
  transition: 300ms linear;
  height: 150px;
  text-align: center;
  font-size: 1.2rem;
  justify-content: center;
  border: 0;
}
.colors .color:hover {
  box-shadow: rgba(0, 0, 0, 0.05) -10px -10px 10px inset;
}
.colors .color:focus {
  outline: 0;
}

.vertical-range {
  display: flex;
  align-items: center;
  width: 9em;
}

input {
  margin: 0;
  padding: 0 0.5em;
  font-size: inherit;
  font-family: inherit;
  border: none;
  width: 7em;
  outline: none;
  border-radius: 0 0.2em 0.2em 0;
  color: #70688a;
  background: var(--lg);
}
input[type="text"] {
  border-width: 1px;
  border-style: solid;
}
input[type=color] {
  padding: 0;
  width: 2em;
  height: 2em;
  border-radius: 0.2em 0 0 0.2em;
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
  border-radius: 0;
  cursor: pointer;
  font-size: inherit;
  background: var(--fg);
  z-index: 1;
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
  background: #f4f2fb;
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
  background: #333040;
  background: #f4f2fb;
  font-family: "Work Sans", sans-serif;
  min-width: 600px;
}

main {
  flex: 1;
  display: flex;
  font-size: calc(1em + 1vw);
  width: 100vw;
  flex-direction: column;
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
