<template>
  <div>
    <div v-if="!isReady">Loading...</div>
    <div v-else>
      <v-container>
        <v-data-table
          :headers="headers"
          class="elevation-1 px-4"
          :search="search"
          :items="getPackagesList"
          item-key="hits"
          :custom-filter="filterOnlyCapsText"
          @click:row="rowClick"
          id="table"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
            ></v-text-field>
          </template>
        </v-data-table>
      </v-container>
      <v-dialog v-model="dialog" width="500" v-if="modalData !== null">
        <v-card>
          <v-card-title
            style="color: white"
            class="text-h5 purple lighten-1 pb-4 mb-6"
          >
            Package Description
          </v-card-title>

          <v-card-text>
            <span
              style="
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.07em;
              "
              >hits</span
            >
            - {{ modalData.hits }}
          </v-card-text>
          <v-card-text>
            <span
              style="
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.07em;
              "
              >file manager</span
            >
            - {{ modalData.type }}
          </v-card-text>
          <v-card-text>
            <span
              style="
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.07em;
              "
              >package name</span
            >
            - {{ modalData.name }}
          </v-card-text>
          <v-card-text>
            <span
              style="
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.07em;
              "
              >tags</span
            >
            - {{ modalData.tags.latest }}
          </v-card-text>
          <v-card-text>
            <span
              style="
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.07em;
              "
              >Last 5 versions</span
            >
            - {{ modalData.versions }}
          </v-card-text>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isReady: false,
      search: "",
      dialog: false,
      formTitle: "Title",
      modalData: null,
    };
  },

  computed: {
    ...mapGetters("jsDelivr", ["getPackagesList"]),

    headers() {
      return [
        {
          text: "Hits",
          value: "hits",
        },
        {
          text: "Package Name",
          value: "name",
        },
        {
          text: "Package Type",
          value: "type",
        },
      ];
    },
  },

  mounted() {
    this.initPackages();
  },

  methods: {
    ...mapActions("jsDelivr", ["getPackagesMethod", "getPackageRunkMethod"]),

    async initPackages() {
      await this.getPackagesMethod();
      this.isReady = true;
    },

    async rowClick(item) {
      const data = await this.getPackageRunkMethod({
        type: item.type,
        name: item.name,
      });

      if (data) {
        this.modalData = {
          ...item,
          ...data,
        };

        this.modalData.versions = this.modalData.versions
          .slice(1, 6)
          .join(", ");
        this.dialog = true;
      }
    },

    filterOnlyCapsText(value, search) {
      return value.toString().toLowerCase().startsWith(search.toLowerCase());
    },
  },
};
</script>

<style lang="scss">
#table.v-data-table {
  min-height: calc(100vh - 132px);
  position: relative;
  padding-bottom: 60px;
}

#table .v-data-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>