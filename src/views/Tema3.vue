<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas para la gestión de requisitos
    p.mb-5(data-aos='fade-right') En la actualidad, existe una variedad de herramientas para ser utilizadas específicamente en la gestión de requisitos, la utilización de estas ayuda a mejorar la calidad del desarrollo de un proyecto y permite un mayor control en el mantenimiento, previniendo posibles errores durante la ejecución del proyecto (Sevilla, 2021).
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        p Las herramientas de gestión de requisitos variarán según las metodologías de proyecto y los objetivos, la manera en la cual se aborden los requisitos también dependerá según la metodología. Por ejemplo, algunos equipos usan otra palabra para requisitos como #[b “historias de usuarios”], #[b “requisitos de productos”] o, simplemente, #[b “características”].
      .col-lg-6.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/19.png', alt='')
    p.fw-bold Existen herramientas básicas de requerimientos y herramientas complejas, las cuales se explican a continuación:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .p-5.h-100.card1(style="background-color: #00104E")
          img(src='@/assets/curso/temas/20.svg', alt='' style="width: 73px").mb-4
          .titulo-card.d-inline-block(style="background-color: #3EE2A8").p-1.px-3.mb-3
            h4.d-inline-block.mb-0 Herramientas básicas:
          p.text-white Se manejan en la planeación de gestión de requisitos muy básica y se pueden utilizar las hojas de cálculo, o una plantilla de documento en Word; es difícil su utilización cuando se trata de actualización con varias personas y el manejo de las versiones de los documentos.
      .col-lg-6.mb-lg-0.mb-3
        .p-5.h-100.card1(style="background-color: #3EE2A8")
          img(src='@/assets/curso/temas/21.svg', alt='' style="width: 73px").mb-4
          .titulo-card.d-inline-block(style="background-color: #00104E").p-1.px-3.mb-3
            h4.d-inline-block.mb-0.text-white Herramientas complejas:
          p Para una planificación de gestión de requisitos más compleja, se necesita un sistema de software completo para administrar las relaciones entre los requisitos, analizar el impacto de cualquier cambio, administrar las aprobaciones y demás aspectos.
    p.mb-5(data-aos='fade-right').fw-bold De acuerdo con el mismo autor, las herramientas de gestión de requisitos se caracterizan por las siguientes propiedades:
    .fondo-3.mn.p-5.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.png', alt='')
        .col-lg-6
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 Gestión de requisitos basados en modelos de información como por ejemplo casos de uso o historias de usuario.

            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 #[b Organización de requisitos:] es fácil agrupar el conjunto de requisitos y determinar su orden.
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 #[b Acceso y gestión multiusuario:] múltiples personas pueden participar en los procesos de construcción o modificación de requisitos.
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 #[b Gestión de la trazabilidad:] se puede ver a nivel histórico los cambios realizados en los requisitos con su marca de tiempo y usuarios involucrados.
    p.mb-5(data-aos='fade-right').fw-bold Las siguientes herramientas principalmente ayudan a documentar, analizar, buscar, priorizar y trazar los requisitos:
    .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 2.
            span Herramientas de gestión de requisitos
          .tabla-a.color-acento-contenido.mb-5
            table
              caption Nota: Tomada de Sevilla (2021).
              thead
                tr
                  th(style="background-color: #273A89" ).text-white.fst-italic  Requirements Management Tool
                  th(style="background-color: #273A89" ).text-white.fst-italic Company
                  th(style="background-color: #273A89" ).text-white URL
              tbody.fst-italic
                tr.bg-white
                  td IBM Rational DOORS
                  td IBM Rational DOORS
                  td 
                    a(href="http://www-03.ibm.com/software/products/en/ratidoor", target="_blank", rel="noopener noreferrer") http://www-03.ibm.com/software/products/en/ratidoor
                  
                tr.bg-white
                  td Visure Requirements
                  td Visure Solutions
                  td 
                    a(href="http://www.visuresolutions.com/products/index.php", target="_blank", rel="noopener noreferrer") hhttp://www.visuresolutions.com/products/index.php
                  
                tr.bg-white
                  td Jama
                  td Dassault Systèmes
                  td 
                    a(href="http://www.3ds.com/products-services/catia/capabilities/systems-engineering/requirements-engineering/reqtify/", target="_blank", rel="noopener noreferrer") http://www.3ds.com/products-services/catia/capabilities/systems-engineering/requirements-engineering/reqtify/
    .fondo-3.p-5.mn
      p.mb-5(data-aos='fade-right') #[span.resalte La norma ISO 24766 (#[em Information Technology - Guide for Requirements Tool Capabilites)]] ayuda a seleccionar una herramienta adecuada de gestión de requisitos, pues la misma proporciona una orientación sobre los aportes de estas herramientas.
        br
        br
        |Aparte de las herramientas nombradas anteriormente, existen otras entre las que se encuentran las libres y comerciales; a continuación, se indican las más conocidas.
      TabsB.color-acento-contenido.mb-5
        .py-4.py-md-5.bg-white.px-5(titulo="Herramientas comerciales" :icono="require('@/assets/curso/temas/23.svg')")
          p Actualmente, se usan distintas herramientas de uso comercial que cubren las necesidades elementales en la gestión de requisitos. Algunas de estas son:
          .tabla-a.color-acento-botones.mb-5
            table
              thead.border-0
                tr.bg-white.text-center
                  th: img.m-auto(src='@/assets/curso/temas/24.png', alt='' style="width: 70px")
                  th: img.m-auto(src='@/assets/curso/temas/25.png', alt='' style="width: 124px")
                  th: img.m-auto(src='@/assets/curso/temas/26.png', alt='' style="width: 241px")
                  
              tbody
                tr
                  td Aplicación de gestión de requisitos para optimizar la comunicación la colaboración y la verificación de requisitos.
                  td Herramienta de administración de requisitos que permite crear y compartir basado en documentos potenciados.
                  td Herramienta de administración de requisitos que permite visibilidad y control.
        .py-4.py-md-5.bg-white.px-5(titulo="Herramientas libres" :icono="require('@/assets/curso/temas/23.svg')")
          p También existen herramientas de uso libre para realizar las actividades pertinentes a la gestión de requisitos. Algunas son:
          .tabla-a.color-acento-botones.mb-5
            table
              thead.border-0
                tr.bg-white.text-center
                  th: img.m-auto(src='@/assets/curso/temas/27.png', alt='' style="width: 139px")
                  th: img.m-auto(src='@/assets/curso/temas/28.png', alt='' style="width: 134px")
                  th: img.m-auto(src='@/assets/curso/temas/29.png', alt='' style="width: 100px")
                  
              tbody
                tr
                  td Herramienta de requisitos automatizada.
                  td Totalmente desarrollada para la elicitación de requisitos.
                  td Permite la descripción avanzada de diversos tipos de requisitos y garantiza la trazabilidad entre todos los documentos relacionados con la ingeniería de requisitos (funcionalidades, requisitos, casos de uso, casos de prueba).

              


</template>

<script>
export default {
  name: 'Tema3',
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
