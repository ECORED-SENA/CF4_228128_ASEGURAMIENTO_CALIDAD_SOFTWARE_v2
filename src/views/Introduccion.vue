<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    div(style="background-color: #273A89").p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto: img(src='@/assets/curso/intro/1.png', alt='')
        .col
          p.mb-0.text-white En este componente formativo se exploran técnicas esenciales de validación de requisitos, como las revisiones, la creación de prototipos y la elaboración de casos de prueba, enfocándose en su aplicación práctica para asegurar que los requisitos cumplan con las necesidades y expectativas de las partes interesadas. Además, se distingue entre los requerimientos duraderos, aquellos que permanecen estables a lo largo del tiempo, y los volátiles, que son susceptibles a cambios debido a variaciones en el entorno de mercado, tecnológico o de la propia organización.


    .row.justify-content-center
      .col-xxl-7.col-xl-8
        p.mb-4 La aplicación de revisiones permite un análisis detallado de los requisitos por parte de un equipo, identificando posibles errores o ambigüedades en una fase temprana. Los prototipos ofrecen una visión tangible de cómo será el sistema o producto, facilitando la detección de malentendidos o expectativas no alineadas entre los desarrolladores y las partes interesadas. Los casos de prueba, por su parte, verifican que los requisitos se implementen correctamente, contribuyendo a una evaluación objetiva de la funcionalidad esperada.

        .rounded.p-3(style="background-color: #BAE9D9").mb-4
          p.mb-0 Este componente formativo se diseñó para fortalecer las habilidades en el desarrollo y validación de requisitos, con un enfoque práctico que prepara a los profesionales para enfrentar los desafíos de la ingeniería de requisitos en entornos dinámicos y complejos.

        p.mb-0 #[strong ¡Les deseamos éxitos en su proceso de aprendizaje y aplicación de estas técnicas fundamentales! ]

      .col-xxl-5.col-xl-4
        figure.d-none.d-xl-block
          img(src='@/assets/curso/intro/3.png', alt='')
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
