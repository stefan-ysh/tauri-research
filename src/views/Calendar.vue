<template>
  <FullCalendar :options="calendarOptions">
    <template v-slot:eventContent="arg">
      <b>{{ arg.event.title }}</b>
    </template>
  </FullCalendar>
</template>

<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import listPlugin from "@fullcalendar/list";
const clickDate = (e) => {
  console.log("[ 1 ] >", e);
};
const calendarOptions = {
  plugins: [
    dayGridPlugin,
    interactionPlugin,
    timeGridPlugin,
    listPlugin,
    multiMonthPlugin,
  ],
  initialView: "dayGridMonth",
  themeSystem: "bootstrap5",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    // 逗号之间不能有空格，否则会生成空白按钮
    right: "multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay,listMonth",
    // multiMonthMaxColumns: 10, // force a single column
  },
  weekNumbers: true,
  height: "100%",
  dayMaxEvents: true, // allow "more" link when too many events
  // weekends: true, // initial value
  events: [
    { title: "event 1", date: "2023-03-19" },
    { title: "event 2", date: "2023-03-02" },
  ],
  selectable: true,
  dateClick: clickDate,
};
</script>

<style></style>
