<template>
  <v-app dark>
    <div
      v-if="error.statusCode === 404"
      class="flex w-screen justify-center align-center"
    >
      <LazyNuxtImage
        src="https://media.istockphoto.com/id/1149316411/vector/concept-404-error-page-flat-cartoon-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=dLlOE7s6GuI4a5so_ipUFHeW9kaFWZVf-JTrFu5rAIk="
        sizes="sm:100vw md:50vw lg:50vw"
        quality="80"
        fit="cover"
        loading="lazy"
        width="700"
      />
    </div>
    <div v-else class="flex w-screen justify-center align-center">
      {{ otherError }}
    </div>
    <div class="flex w-screen justify-center align-center">
      <NuxtLink to="/"> Back to Home page </NuxtLink>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Error",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
