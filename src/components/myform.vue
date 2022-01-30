<template>
  <div>
    <form action="" class="card bordered">
    <h1>Contact Me</h1>
    <!-- input -->
    <div class="form-control">
      <h2>Your Email</h2>
      <input type="text" placeholder="Yishin@gmail.com" class="input input-bordered">
    </div>
    <!-- label -->
    <div class="p-6 card bordered">
      <h2>Do you want to receive latest news?</h2>
      <label class="cursor-pointer label opt bg-base-200">
      <span class="label-text">Yes</span>
      <input type="radio" class="radio" value="Yes" name="opt">
      </label>
      <label class="cursor-pointer label opt bg-base-200">
      <span class="label-text">No</span>
      <input type="radio" class="radio" value="No" name="opt">
      </label>
    </div>
    <!-- select -->
    <div>
      <select class="select select-bordered w-full">
      <option disabled="disabled" selected="selected">I feel...</option>
      <option>Nice</option>
      <option>Mmm... not bad</option>
      <option>Need to improve!</option>
      </select>
    </div>
    <!-- texarea -->
    <div class="p-10 card bg-base-200">
      <div class="form-control">
        <h2>{{ title }}</h2>
        <inputcomponent :text="title" @TextChange="ChangeMainText" v-model="ChangeText"></inputcomponent>
      </div>
    </div>
    <button class="btn">Submit</button>
    </form>
  </div>
</template>

<script>
import inputcomponent from './inputcomponent/input.vue'

export default {
  name: 'myform',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    inputcomponent
  },
  methods: {
    ChangeMainText (val) {
      this.title = val
    }
  },
  computed: {
    ChangeText: {
      get () {
        return this.title
      },
      set (val) {
        // console.log(val)
        this.$emit('update: title', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
  // border: 1px solid green;
  font-size: 30px;
  margin-top: 20px;
}
form{
  // border: 1px solid red;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 100px;
  div{
    width: 90%;
    margin: 0 auto;
    .opt,
    .input{
      margin: 10px 0;
      border-radius: 10px;
    }
    h2{
      margin: 20px auto;
    }
  }
  .btn{
    width: 200px;
    margin: 0 auto 50px;
  }
}
</style>
