<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
        <tr>
          <!-- <th title="Label">Label</th>
          <th title="BART-label">BART-label</th> -->
          <th title="Name">Name</th>
          <th title="Operator">Operator</th>
          <th title="Owner">Owner</th>
          <th title="Station Type">Station Type</th>
          <th title="Status">Status</th>
          <th title="Dates established in area">
            Dates established in area
          </th>
          <th title="Seasonal/Year-Round/Extended Season">
            Seasonal/Year-Round/Extended Season
          </th>
          <th title="Latitude">Latitude</th>
          <th title="Longitude">Longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(buoy, index) in resources.buoy.data" v-bind:key="index">
          <!-- <td>{{ buoy.label }}</td>
          <td>{{ buoy.BART_label }}</td> -->
          <td>{{ buoy.name }}</td>
          <td>{{ buoy.operator }}</td>
          <td>{{ buoy.owner }}</td>
          <td>{{ buoy.station_type }}</td>
          <td>{{ buoy.status }}</td>
          <td>{{ buoy.dates_stabilisehd }}</td>
          <td>{{ buoy.season }}</td>
          <td>{{ buoy.latitude }}</td>
          <td>{{ buoy.longitude }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['resources'])
  }
}
</script>
