<template>
  <div>
    <section class="can-get-section mt-10">
      <v-container>
        <div class="d-flex justify-content-center mb-9">
          <h2 class="can-get-title">
            What Can You Do With $GET?
          </h2>
        </div>
        <v-row class="justify-content-center">
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <div class="can-get-desc d-flex">
              <div>
                <div class="pl-lg-10">
                  <div class="text-md-h4">
                    You can use <b>$GET</b> to:
                  </div>
                  <ul class="can-get-list text-h5">
                    <li><b>Vote</b> on platform decisions</li>
                    <li><b>Propose</b> new features</li>
                    <li><b>Shape</b> the future of GamaTrain</li>
                  </ul>
                </div>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            md="3"
            class="can-get-img-col"
          >
            <img
              class="can-get-img"
              src="/images/token/can.png"
              alt="What can you do with $GET token illustration"
            >
          </v-col>
        </v-row>
        <p class="can-get-footnote text-h4 mt-7 d-none d-md-block">
          As the ecosystem grows, <b>$GET</b> may also unlock exclusive tools,
          boost visibility for your content and grant access to new learning
          materials.
        </p>
      </v-container>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.can-get-section {
  width: 85%;
  margin: 0 auto;
}
.can-get-title {
  font-size: 24px;
  font-weight: 800;
  color: #24292f;
  text-align: center;
}
.can-get-desc {
  font-size: 16px;
  color: #24292f;
  line-height: 1.7;
}
.can-get-list {
  padding: 0;
  list-style: disc;
  padding-left: 25px;
  margin-top: 15px;
  padding-bottom: 10px;
}
.can-get-list li {
  margin-bottom: 0.7rem;
  font-size: 20px;
}
.can-get-footnote {
  color: #000000;
}
.can-get-img-col {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  order: -1;
}
.can-get-img {
  width: 160px;
  max-width: 100%;
}

@media (min-width: 600px) {
  .can-get-list {
    padding: 0;
    list-style: disc;
    padding-left: 55px;
    margin-top: 15px;
    padding-bottom: 10px;
  }
  .can-get-section {
    width: 75%;
    margin: 0 auto;
  }
  .can-get-img {
    width: 230px;
    max-width: 100%;
  }
  .can-get-title {
    font-size: 32px;
    font-weight: 700;
  }
  .can-get-desc {
    font-size: 20px;
    line-height: 1.7;
  }
  .can-get-img-col {
    order: 2;
  }
}
</style>
