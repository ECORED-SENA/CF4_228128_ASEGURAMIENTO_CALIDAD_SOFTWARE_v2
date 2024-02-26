<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requerimientos duraderos y volátiles
    p.mb-5(data-aos='fade-right') Los requerimientos de un proyecto inevitablemente sufren variaciones en el tiempo y puede ser por varios motivos entre los que se podrían destacar cambios en las políticas gubernamentales, sociales, económicas o, sencillamente, por solicitudes de los clientes.
      br
      br
      | #[b Según Sommerville (2011), dependiendo de la perspectiva evolutiva de los requerimientos, estos se pueden clasificar en dos grupos:]
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .p-5(style="background-color: #00104E")
          img(src='@/assets/curso/temas/17.svg', alt='').m-auto
          .titulo-card.d-inline-block(style="background-color: #3EE2A8").p-1.px-3.mb-3
            h4.d-inline-block.mb-0 Requerimientos duraderos:
          .texto-card
            p.text-white Son relativamente estables y normalmente se derivan de las actividades principales de la organización y están directamente relacionados con el dominio del sistema (Easterbrook, 1993). Por ejemplo, en un sistema académico los requerimientos relacionados con la gestión de estudiantes, profesores y grupos hacen parte del dominio y, seguramente, el modelo de negocio asociado a estos requerimientos no van a cambiar mucho en el tiempo.
      .col-lg-6.mb-lg-0.mb-3
        .p-5(style="background-color: #3EE2A8")
          img(src='@/assets/curso/temas/18.svg', alt='').m-auto
          .titulo-card.d-inline-block(style="background-color: #00104E").p-1.px-3.mb-3
            h4.d-inline-block.mb-0.text-white Requerimientos volátiles:
          .texto-card
            p Son los que, muy probablemente, cambian durante el proceso del desarrollo del sistema o después que este entra en funcionamiento. Por ejemplo, en un sistema académico un requerimiento asociado al proceso de pago de pensión podría definirse de forma manual en un principio; es decir, la secretaria una vez reciba el dinero o los recibos de pago registra el pago en el sistema, más adelante si la institución educativa adquiere un servicio de pasarela de pagos en línea el requerimiento podría modificarse totalmente.
    .p-5(style="background-color: #DEE1ED")
      p.fw-bold Los requerimientos volátiles según Sommerville (2011) se clasifican en:
      .row.justify-content-center.align-items-center
        .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/5.svg', alt='')
        .col-lg-11
          ul.lista-ul
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 #[b Requerimientos cambiantes:] cambian de acuerdo con el entorno, por ejemplo: una pandemia.

            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 #[b Requerimientos emergentes:] surgen como producto de un mejor entendimiento del sistema, por ejemplo, al estructurar el diseño de las interfaces del sistema puede ser que se requieran adicionar componentes que no estaban contemplados.
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 #[b Requerimientos consecuentes:] son resultado de la puesta en marcha de un sistema. Generalmente la adopción de un nuevo sistema involucra el cambio de procesos e incluso roles dentro de la organización que, a la vez, puede influir en cambios en los requerimientos del sistema.
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 #[b Requerimientos de compatibilidad:] dependen de otros sistemas o procesos, cuando estos cambian generalmente producen también cambios en los requerimientos dependientes.

















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
