<template>
  <div>
    <div class="bg-red container-fluid" style="overflow:hidden;">
      <div class="header circle-pattern">
        <div id="banner">
          <h1 class="pl-5 pr br-top text-offwhite title">
            Our Approach.
          </h1>
        </div>
      </div>
    </div>
    <div class="container-fluid" style="padding-top: 18vw;">
      <div class="row pl pr">
        <div class="col-12">
          <h2 class="poppins" style="line-height:85%;">
            Simple<br />
            done right.
          </h2>
          <hr />
        </div>
      </div>
      <div class="row pl pr pb">
        <div class="col-7">
          <p>
            Objectives inform students the learning outcomes of the class. What
            will they know? What will they be able to do? Why is this important
            to know? It's an effective way to assess their learning progress.
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <img
          class="scale-crop"
          src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?cs=srgb&dl=pexels-pixabay-273230.jpg&fm=jpg"
        />
      </div>
    </div>

    <div class="container-fluid bg-mustard" style="padding-top: 18vw;">
      <div class="row pl pr">
        <div class="col-12">
          <h2
            class="text-white libre"
            style="font-size:19vw; line-height:65%; letter-spacing:-1.7vw;"
          >
            user centred
          </h2>
          <hr />
        </div>
      </div>
      <div class="row pl pr">
        <div class="col-7">
          <p>
            We implement user-centered design (UCD) that focus on putting users
            at the center of product design and development.
          </p>
        </div>
      </div>
      <div class="row pl pr pb">
        <div class="col-12">
          <Accordion />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
hr {
  background-color: black;
  margin: 4vw 0;
  height: 0.5vw;
  width: 10vw;
}
h2 {
  font-size: 13vw;
  font-weight: 800;
  line-height: 75%;
  letter-spacing: -0.8vw;
  color: #222;
}

.title {
  font-size: 26vw;
  line-height: 60%;
  letter-spacing: -2.6vw;
  font-family: "Libre Baskerville", "Poppins", Tiro Bangla, Georgia,
    "Times New Roman", Times, serif;
  font-weight: 700;
  text-transform: lowercase;
  margin: 0 0 5vw 0;
}

p {
  margin: 0 0 5vw 0;
  font-size: 180%;
  line-height: 40px;
}
</style>
