<script setup lang="ts">
import mapbox from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const map = ref(null);
const controls = ref<{
  bearing: number;
  center: {
    lat: number;
    lng: number
  };
  pitch: number;
  zoom: number;
}>({
  bearing: 0,
  center: {lng: -70.81447095562953, lat: 41.97431913275241},
  pitch: 47.5,
  zoom: 7.85
});

const { mapboxToken } = useRuntimeConfig().public;

onMounted(() => {
  const mb = new mapbox.Map({
    container: map.value!,
    accessToken: mapboxToken,
    style: 'mapbox://styles/mapbox/streets-v12',
    ...controls.value
  });
  mb.on('idle', () => {
    controls.value.bearing = mb.getBearing();
    controls.value.zoom = mb.getZoom();
    controls.value.center = mb.getCenter();
    controls.value.pitch = mb.getPitch();
  })
})
</script>
<template>
  <div>
    <div ref="map" style="width: 800px; height: 650px"/>
    <div style="white-space: pre; font-family: system-ui">
      {{ controls }}
    </div>
  </div>
</template>
