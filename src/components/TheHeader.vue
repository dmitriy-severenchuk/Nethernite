<template>

    <v-app-bar app color="#8E24AA" dark height="80">
      <v-container d-flex>
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-5"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
          <h1
            style="font-size: 30px; font-weight: 700; letter-spacing: 0.1em;"
          >
            NETHERNITE
          </h1>
        </div>

        <v-spacer></v-spacer>

        <!-- <div style="width: 300px">
          <v-autocomplete
            v-model="select"
            :search-input.sync="search"
            cache-items
            class="px-0"
            flat
            hide-no-data
            hide-details
            label="search..."
            solo-inverted
          ></v-autocomplete>
        </div> -->
      </v-container>
    </v-app-bar>

</template>

<script>
export default {};
</script>