<template>
  <v-app>
    <TheHeader />
    <v-main>
      <ContentSection />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import ContentSection from "@/components/ContentSection";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",

  components: {
    ContentSection,
    TheHeader,
    TheFooter,
  },

  data() {
    return {
      search: "",
      select: "",
    };
  },
};
</script>

<style lang="scss">
</style>