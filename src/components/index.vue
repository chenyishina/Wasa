<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200">
      <div class="card card-inside glass lg:card-side text-neutral-content">
        <figure class="p-6"><img src="../assets/graduate2.jpg" style="width: 100%;" class="rounded-lg shadow-lg"></figure>
        <div class="card-body">
        <h2 class="card-title">Yi Shin Chen</h2>
        <p>I graduated fom Fashion Design Department. Like to discover design form my life. Even a small thing, all of them are meaningful! <br><br>To be patient, be careful, stay curious and never give up!</p>
          <div class="card-actions">
            <a href="https://issuu.com/yishinchen/docs"><button class="btn btn-neutral-focus">My profolio</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      members: []
    }
  },
  props: {
    msg: String
  },
  mounted () {
    this.axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8', {
    }).then((response) => {
      // console.log(response.data)
      this.members = response.data
      for (let i = 0; i < this.members.length; i++) {
        this.name.push(this.members[i].name)
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1{
  font-size: 30px;
  margin: 20px auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
.card-inside{
  // border: 1px solid red;
  width: 80%;
  .card-body{
    justify-content: center;
    .card-actions{
      justify-content: center;
    }
  }
}
</style>
