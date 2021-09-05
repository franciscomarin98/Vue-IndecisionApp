<template>
  <img v-if="img" :src="img" alt="bg" />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input type="text" v-model="question" placeholder="Hazme una pregunta" />
    <p>Recuerda terminar con un signo de interrogación (?)</p>
    <div v-if="isValidQuestion">
      <h1>{{ question }}</h1>
      <h2>{{ answer }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Indecision",
  data() {
    return {
      question: null,
      answer: null,
      img: null,
      isValidQuestion: false
    };
  },
  methods: {
    async getAnswer() {
      this.answer = "Pensando...";
      const response = await fetch("https://yesno.wtf/api");
      const { answer, image } = await response.json();
      this.answer = answer;
      this.img = image;
    }
  },
  watch: {
    question(newValue) {
      this.isValidQuestion = false;
      if (!newValue.includes("?")) return;
      this.isValidQuestion = true;
      this.getAnswer();
    }
  }
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  width: 100vw;
  object-fit: cover;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin-bottom: 2rem;
}

input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
