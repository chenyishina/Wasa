<template>
  <div class="about">
    <h1>ABOUT</h1>
    <div class="about-box">
      <ul class="steps steps-vertical">
        <li class="step">
          <div class="card lg:card-side card-bordered">
            <figure>
              <img src="../assets/work1.jpg">
            </figure>
            <div class="card-body bg-neutral">
              <h2 class="card-title">Education</h2>
              <p>I graduated from the Fashion Design Department of Taipei Shih-chien University, even if i don't have 1% talent, but I always put in 99% efforts. I can't decided my accivement, but i can decided how much i learn. Relying on my full-time learning and hard work,I won several scholarships during school and was able to graduate with good grades!</p>
              <div class="card-actions">
                <a href="https://issuu.com/yishinchen/docs/shin_s_university_portfolio"><button class="btn bg-base-100">My profolio</button></a>
              </div>
            </div>
          </div>
        </li>
        <li class="step">
          <div class="card lg:card-side card-bordered">
            <figure>
              <img src="../assets/work2.jpg">
            </figure>
            <div class="card-body bg-neutral">
              <h2 class="card-title">Work</h2>
              <p>After graduation, i entered a Fashion Design Company as an assistant, I had to deal with orders from main designer, and also had to design clothing, shoes, accessories, etc. During my work, i need to create a lot of drawing works, so i spent my time to learn and try, and those products luckily sold good!</p>
              <div class="card-actions">
                <a href="https://issuu.com/yishinchen/docs/shin"><button class="btn bg-base-100">My profolio</button></a>
              </div>
            </div>
          </div>
        </li>
        <li class="step">
          <div class="card lg:card-side card-bordered">
            <figure>
              <img src="../assets/work3.jpg">
            </figure>
            <div class="card-body bg-neutral">
              <h2 class="card-title">Now</h2>
              <p>Looking for links related to design now, I start my trip to learn the front-end of the web. Starting from scratch is difficult, but exciting. It brings me different design directions and thinking. I need to understand the usage habits of the user side. How to become "better" from "good"!</p>
              <div class="card-actions">
                <a href="https://chenyishina.github.io/yishinchen/home/home.html"><button class="btn bg-base-100">My work1</button></a>
                <a href="https://tibamef2e.com/tfd104/g6/dist/index.html"><button class="btn bg-base-100">My work2</button></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <myform :title.sync= "Maintitle"/>
    <footercomponent/>
  </div>
</template>

<script>
import myform from '../components/myform.vue'
import footercomponent from '../components/footercomponent.vue'

export default {
  data () {
    return {
      Maintitle: 'I want to say...'
    }
  },
  components: {
    myform,
    footercomponent
  }
}
</script>

<style lang="scss" scoped>
  h1{
    // border: 1px solid green;
    font-size: 30px;
    margin-top: 20px;
  }
  li{
    height: auto;
  }
  .about-box{
    // border: 1px solid red;
    max-width: 1000px;
    margin: 0 auto;
    .steps{
      // border: 1px solid blue;
      width: 90%;
      .step{
        gap: 2rem;
      }
      .card{
        margin: 20px auto;
        .card-actions{
          justify-content: end;
        }
        figure{
          height: auto;
          flex-basis: 60%;
        }
        .card-body{
          flex-basis: 40%;
        }
        img{
          height: 100%;
          max-width: 100%;
        }
      }
    }
  }
</style>
