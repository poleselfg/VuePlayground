<template>
  <div class="test">
    <iframe
      class="video"
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/OrxmtDw4pVI?autoplay=1;controls=0;modestbranding"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video {
  border-radius: 50px;
  margin-top: 50px;
  filter: drop-shadow(0 0 0.99rem #42b883);
}
</style>
