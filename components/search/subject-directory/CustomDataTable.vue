<template>
  <!-- Desktop View (large screens) -->
  <v-data-table
    v-if="!isMobile && !isTablet"
    :headers="headers"
    :items="items"
    class="elevation-0 custom-table"
    disable-pagination
    hide-default-footer
    :item-class="rowClass"
  >
    <template v-slot:[`header.text`]="{ header }">
      <v-icon small class="mr-1">mdi-arrow-down-drop-circle</v-icon>
      {{ header.text }}
    </template>

    <!-- Column Classification -->
    <template v-slot:[`item.name`]="{ item }">
      <span class="font-weight-normal text--primary-gray-600">{{
        item.variant && item.variant != "0"
          ? item.test_type_title + item.variant
          : item.test_type_title
      }}</span>
    </template>

    <!-- Column Year -->
    <template v-slot:[`item.year`]="{ item }">
      <span class="font-weight-normal text--primary-gray-600">{{
        item.edu_year
      }}</span>
    </template>

    <!-- Column Month -->
    <template v-slot:[`item.term`]="{ item }">
      <span class="font-weight-normal text--primary-gray-600">{{
        $moment()
          .month(Number(item.edu_month) - 1)
          .format("MMMM")
      }}</span>
    </template>

    <!-- Column Download Files -->
    <template v-slot:[`item.downloadFilesContains`]="{ item }">
      <div class="d-flex flex-wrap justify-content-center">
        <v-chip
          v-if="item.q_file"
          @click="startDownload(`q_pdf`, item)"
          small
          class="ma-1 chip-pill"
          color="#FEF3F2"
          text-color="#F04438"
          >qp</v-chip
        >
        <v-chip
          v-else
          small
          class="ma-1 chip-pill"
          color="#F2F4F7"
          text-color="#D0D5DD"
          >qp</v-chip
        >

        <v-chip
          v-if="item.a_file"
          @click="startDownload(`a_file`, item)"
          small
          class="ma-1 chip-pill"
          color="#ECFDF3"
          text-color="#12B76A"
          >ms</v-chip
        >
        <v-chip
          v-else
          small
          class="ma-1 chip-pill"
          color="#F2F4F7"
          text-color="#D0D5DD"
          >ms</v-chip
        >

        <v-chip
          v-if="item.sf_file"
          @click="startDownload(`sf_file`, item)"
          small
          class="ma-1 chip-pill"
          color="#FFFAEB"
          text-color="#F79009"
          >sf</v-chip
        >
        <v-chip
          v-else
          small
          class="ma-1 chip-pill"
          color="#F2F4F7"
          text-color="#D0D5DD"
          >sf</v-chip
        >

        <v-chip
          v-if="item.in_file"
          @click="startDownload(`in_file`, item)"
          small
          class="ma-1 chip-pill"
          color="#FCF6F3"
          text-color="#8F4949"
          >in</v-chip
        >
        <v-chip
          v-else
          small
          class="ma-1 chip-pill"
          color="#F2F4F7"
          text-color="#D0D5DD"
          >in</v-chip
        >
      </div>
    </template>

    <!-- Column ExamHub -->
    <template v-slot:[`item.examHubIcon`]="{ item }">
      <v-chip
        class="d-flex align-center justify-center v-chip--link"
        color="#F9F5FF"
        link
        v-if="item.exam_id"
        v-for="(exam, index) in safeParseArray(item.exam_id)"
        :key="index"
        :to="`/exam/${exam}`"
        :disabled="!item.exam_id"
      >
        <v-icon color="#7F56D9"> mdi-clipboard-text-outline </v-icon>
      </v-chip>
      <v-chip
        v-if="!item.exam_id"
        class="d-flex align-center justify-center v-chip--link"
        color="#F9F5FF"
        :disabled="true"
      >
        <v-icon color="#7F56D9"> mdi-clipboard-text-outline </v-icon>
      </v-chip>
    </template>
  </v-data-table>

  <!-- Tablet & Mobile Views -->
  <div
    v-else
    class="mobile-data-table-wrapper"
    :class="{ 'tablet-view': isTablet }"
  >
    <!-- Mobile/Tablet Headers -->
    <div class="mobile-headers">
      <div
        class="mobile-header-item"
        v-for="(header, index) in mobileHeaders"
        :key="index"
      >
        <div class="d-flex align-center">
          {{ header.text }}
          <v-icon small>mdi-menu-down</v-icon>
        </div>
      </div>
    </div>

    <div class="mobile-content">
      <v-data-table
        :items="items"
        class="elevation-0 mobile-table-cards"
        hide-default-header
        hide-default-footer
        disable-pagination
      >
        <template v-slot:item="{ item, index }">
          <div class="mobile-card">
            <div class="paper-info">
              <!-- Display paper info directly -->
              <span class="paper-info-part">{{
                item.variant && item.variant != "0"
                  ? item.test_type_title + item.variant
                  : item.test_type_title
              }}</span>
            </div>
            <div class="paper-info">
              <span class="paper-info-part">{{ item.edu_year }}</span>
            </div>
            <div class="paper-info">
              <span class="paper-info-part">{{
                $moment()
                  .month(Number(item.edu_month) - 1)
                  .format("MMMM")
              }}</span>
            </div>
            <div class="paper-chips">
              <!-- QP Chip -->
              <v-chip
                v-if="item.q_file"
                @click="startDownload(`q_pdf`, item)"
                x-small
                class="chip-pill"
                color="#FEF3F2"
                text-color="
                  #F04438"
                >qp</v-chip
              >
              <v-chip
                v-else
                x-small
                class="chip-pill"
                color="#F2F4F7"
                text-color="#D0D5DD"
                >qp</v-chip
              >
              <!-- MS Chip -->
              <v-chip
                v-if="item.a_file"
                @click="startDownload(`a_file`, item)"
                x-small
                class="chip-pill"
                color="#ECFDF3"
                text-color="
                 #12B76A
                "
                >ms</v-chip
              >
              <v-chip
                v-else
                x-small
                class="chip-pill"
                color="#F2F4F7"
                text-color="#D0D5DD"
                >ms</v-chip
              >
              <!-- SF Chip -->
              <v-chip
                v-if="item.sf_file"
                @click="startDownload(`sf_file`, item)"
                x-small
                class="chip-pill"
                color="#FFFAEB"
                text-color="
#F79009
                "
                >sf</v-chip
              >
              <v-chip
                v-else
                x-small
                class="chip-pill"
                color="#F2F4F7"
                text-color="#D0D5DD"
                >sf</v-chip
              >
              <!-- IN Chip -->
              <v-chip
                v-if="item.in_file"
                @click="startDownload(`in_file`, item)"
                x-small
                class="chip-pill"
                color="#FCF6F3"
                text-color="
                  #8F4949
                "
                >in</v-chip
              >
              <v-chip
                v-else
                x-small
                class="chip-pill"
                color="#F2F4F7"
                text-color="#D0D5DD"
                >in</v-chip
              >
              <!-- ExamHub Chip -->
              <v-chip
                class="exam-hub-chip"
                color="#F9F5FF"
                link
                x-small
                v-if="item.exam_id"
                v-for="(exam, index) in safeParseArray(item.exam_id)"
                :key="index"
                :to="`/exam/${exam}`"
                :disabled="!item.exam_id"
              >
                <v-icon x-small color="#7F56D9">
                  mdi-clipboard-text-outline
                </v-icon>
              </v-chip>
              <v-chip
                v-if="!item.exam_id"
                class="exam-hub-chip"
                color="#F9F5FF"
                x-small
                :disabled="true"
              >
                <v-icon x-small color="#7F56D9">
                  mdi-clipboard-text-outline
                </v-icon>
              </v-chip>
            </div>
            <div class="separator" v-if="index < items.length - 1"></div>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomDataTable",
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    timeline: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isMobile: false,
      isTablet: false,
      mobileHeaders: [
        { text: "Classification", value: "classification" },
        { text: "Year", value: "year" },
        { text: "Term", value: "term" },
      ],
    };
  },
  computed: {},
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    rowClass(_item, index) {
      if ((index + 1) % 3 === 0) {
        return "my-4";
      }
      return "";
    },
    checkScreenSize() {
      const width = window.innerWidth;
      this.isMobile = width < 768;
      this.isTablet = width >= 768 && width < 960;
    },
    safeParseArray(stringList) {
      try {
        const parsed = JSON.parse(stringList);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    },
    startDownload(type, item) {
      let apiUrl = "";
      if (type === "q_word") apiUrl = `/api/v1/tests/download/${item.id}/word`;
      if (type === "q_pdf") apiUrl = `/api/v1/tests/download/${item.id}/pdf`;
      if (type === "a_file")
        apiUrl = `/api/v1/tests/download/${item.id}/answer`;
      if (type === "sf_file")
        apiUrl = `/api/v1/tests/download/${item.id}/extra/${item.sf_file_id}`;
      if (type === "in_file")
        apiUrl = `/api/v1/tests/download/${item.id}/extra/${item.in_file_id}`;
      this.$axios
        .$get(apiUrl, {
          headers: {
            Authorization: `${this.$auth.strategy.token.get()}`,
          },
        })
        .then((response) => {
          var FileSaver = require("file-saver");
          FileSaver.saveAs(response.data.url, response.data.name);
        })
        .catch((err) => {
          if (err.response.status == 400) {
            if (
              err.response.data.status == 0 &&
              err.response.data.error == "creditNotEnough"
            ) {
              this.$toast.info("No enough credit");
            }
          }
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
/* Desktop Styles */
.custom-table >>> .v-data-table {
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
}

.custom-table >>> .v-data-table-header th {
  background-color: var(--primary-grey-100, #f2f4f7);
  color: #344054;
  font-family: Inter;
  font-size: 1.3rem !important;
  font-style: normal;
  font-weight: 500;
  line-height: 2.6rem;
  border-bottom: unset !important;
}
.custom-table >>> .v-data-table-header th:nth-child(4) {
  align-items: center !important;
  text-align: center !important;
}
.custom-table >>> .v-data-table-header th:nth-child(5) {
  align-items: center !important;
  text-align: center !important;
}

.custom-table >>> .v-data-table__wrapper > table > tbody > tr:hover {
  background-color: #f9f5ff9f !important;
  cursor: pointer;
  border: unset !important;
}

.custom-table >>> .v-data-table__wrapper > table > tbody > tr td:first-child {
  padding-left: 16px;
}
.custom-table >>> .v-data-table__wrapper > table > tbody > tr td:nth-child(2),
.custom-table >>> .v-data-table__wrapper > table > tbody > tr td:nth-child(3) {
  font-family: Inter !important;
  font-weight: 400 !important;
  color: #475467 !important;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0%;
}
.custom-table >>> .v-data-table__wrapper > table > tbody > tr td:last-child {
  text-align: center !important;
}
.custom-table
  >>> .v-data-table__wrapper
  > table
  > tbody
  > tr
  td:last-child
  > span {
  margin-inline: auto !important;
}

::v-deep .v-data-table__wrapper > table > tbody > tr > td {
  padding-block: 1.2rem !important;
}

::v-deep .v-data-table__wrapper > table > tbody > tr > td:first-child > span {
  font-family: Inter !important;
  font-weight: 300 !important;
  font-size: 1.4rem !important;
  line-height: 26px !important;
  letter-spacing: 0% !important;
}

::v-deep .v-data-table__wrapper > table > tbody > tr:nth-child(3)::after {
  content: "";
  display: table-column;
  width: 100%;
}

.v-chip--link {
  padding: 0;
  width: 30px !important;
  height: 30px !important;
  border-radius: 100%;
  cursor: pointer;
  display: inline-block !important;
}

.chip-pill {
  min-width: 30px;
  height: 24px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

/* Mobile and Tablet Styles */
.mobile-data-table-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  margin-block: 1rem;
}

/* Tablet-specific styles */
.tablet-view {
  font-size: 14px;
}

.tablet-view .mobile-headers {
  width: calc(100% - 80px); /* Adjust for timeline width */
}

.tablet-view .mobile-card {
  padding: 14px 18px;
}

.tablet-view .paper-info-part {
  font-size: 15px;
}

.tablet-view .chip-pill {
  min-width: 35px;
  height: 28px;
}

.tablet-view .timeline-container {
  width: 80px;
  display: flex;
  flex-direction: column;
}

.tablet-view .year-marker {
  height: auto;
  margin-bottom: 160px; /* Adjust spacing for tablet view */
}

/* Mobile headers */
.mobile-headers {
  display: flex;
  gap: 2rem;
  padding: 12px 12px;
  background-color: #f2f4f7;
  width: calc(100%);
  border-bottom: 1px solid #eaecf0;
}

.mobile-header-item {
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #344054;
  display: flex;
  align-items: center;
  font-family: Inter;
}

.mobile-content {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
}

.mobile-table-cards {
  flex-grow: 1;
  background-color: white !important;
  width: calc(100% - 80px); /* Adjust for the timeline width */
}

/* Styling the v-data-table for mobile card view */
::v-deep .mobile-table-cards > .v-data-table__wrapper > table > tbody > tr {
  display: block;
  padding: 0;
}

::v-deep
  .mobile-table-cards
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover {
  background-color: transparent !important;
}

::v-deep
  .mobile-table-cards
  > .v-data-table__wrapper
  > table
  > tbody
  > tr
  > td {
  display: block;
  height: auto !important;
  padding: 0 !important;
  border-bottom: none !important;
}

.mobile-card {
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
}

.paper-info {
  margin-bottom: 12px;
}

.paper-info-part {
  font-size: 14px;
  font-weight: 400;
  color: #344054;
  line-height: 1.5;
}

.paper-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.exam-hub-chip {
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.separator {
  height: 1px;
  background-color: #f2f4f7;
  margin-top: 12px;
}

/* Timeline Styles */
.timeline-container {
  position: relative;
  width: 80px;
  flex-shrink: 0;
}

.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 35px;
  width: 2px;
  background-color: #f2f4f7;
}

.year-marker {
  position: relative;
  margin-bottom: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: auto; /* Changed from 0 to auto to ensure visibility */
}

.year-marker:first-child {
  margin-top: 20px;
}

.year-label {
  position: absolute;
  right: 0;
  bottom: 3rem;
  min-width: 60px;
  text-align: center;
  background-color: #f2f4f7;
  border-radius: 5px;
  padding: 0.5em;
  min-width: 48px;
  min-height: fit-content;
}

.year {
  color: #344054;
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
}

.sub-label {
  font-size: 12px;
  color: #667085;
  line-height: 18px;
}
.year-markers {
  z-index: 10;
  position: relative;
  right: 0.7em;
}
.year-marker:first-child > .year-label,
.year-marker:last-child > .year-label {
  background-color: transparent !important;
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
}
.year-marker:first-child > .year-label > .year,
.year-marker:last-child > .year-label > .year {
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
}

@media screen and (max-width: 960px) {
  .v-chip--link {
    width: 30px !important;
    display: flex !important;
  }
}
</style>
