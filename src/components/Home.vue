<template>
    <div class="Home">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>

      <h2>Amet sit</h2>
      <p>
        Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>

</template>

<!-- Sass, via style-elementet -->
<style scoped lang="scss">
$bgcolor: rgb(35, 97, 117);
$textcolor: rgb(229, 229, 240);
$fontsize: 15px;

.Home {
  padding: 20px;
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
 
  display:flexbox;
  margin: 0 auto;
  text-align: center;
}
</style>
