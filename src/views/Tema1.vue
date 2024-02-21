<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Validación de requerimientos
    p.mb-5(data-aos='fade-right') La validación de los requerimientos busca ratificar que los requerimientos realmente están especificando lo que el cliente desea y necesita. Este proceso es muy importante, pues un error en un documento de requerimientos puede ocasionar el desgaste importante de muchos recursos si estos errores son detectados en etapas más avanzadas del proyecto como diseño, construcción o despliegue a producción. Los costos asociados para el arreglo de problemas en los requerimientos siempre van a ser menores que en otras etapas, ya que un error en los requerimientos se propaga en cascada en todas las fases subsiguientes del ciclo de vida.
    .p-4(style="background-color: #BAE9D9").mb-5
      .p-5.bg-white
        p.fw-bold Según Sommerville (2011), en el proceso de validación de requerimientos se llevan a cabo las siguientes verificaciones:
        .row.justify-content-center.align-items-center
          .col-lg-5.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/1.svg', alt='')
          .col-lg-7(data-aos="fade-left")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Verificación de validez: los requerimientos son razonables e identifican realmente todas las funciones necesarias para cumplir con las necesidades del cliente.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Verificación de consistencia: los requerimientos no presentan contradicciones.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Verificaciones de completitud: se incluyen todas las funcionalidades y restricciones definidas por los usuarios del sistema.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Verificaciones de realismo: los requerimientos son realizables de acuerdo con la tecnología existente, el presupuesto y los tiempos definidos.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Verificabilidad: es posible demostrar la realización de cada requerimiento y que hace lo que debe hacer. Es decir, existe una forma clara en la que se le pueda realizar pruebas.

    p.mb-5(data-aos='fade-right').fw-bold Existen varias técnicas que pueden usarse para la validación de requisitos, como se puede revisar a continuación.
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Revisiones de requerimientos
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p Las revisiones de los requerimientos es un proceso manual que involucra la participación de personas de parte de la organización constructora del software así como la de los clientes. Por lo general, en este proceso se revisa el documento de requerimientos tratando de encontrar alguna anomalía y/u omisiones en la escritura de estos.
        .p-4(style="background-color: #BAE9D9 ")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2.svg', alt='')
            .col-lg-10
              p.mb-0(data-aos='fade-right') Esta revisión se puede realizar de manera informal o formal (Sommerville, 2011). En una revisión informal, se requiere verificar, con tantos stakeholders como sea posible, el documento generado para recibir confirmación por parte de ellos de que lo escrito sí refleja su deseo. Esta revisión informal permite, de manera muy sencilla, detectar muchos problemas antes de establecer cualquier formalismo de revisión.
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/3.png', alt='')
    .fondo-1.p-4
      p(data-aos='fade-right') En una revisión formal, el equipo de desarrollo debe introducir al cliente por cada uno de los requerimientos establecidos y explicando cada una de sus implicaciones. El equipo encargado de la revisión deberá verificar cada requerimiento de forma individual y realizar el análisis de conjunto. #[b Además, en el proceso de verificación debe resolverse cada una de las siguientes preguntas:]
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/4.svg', alt='')
        .col-lg-11
          p.mb-0 #[b Verificabilidad:] ¿Es posible probar este requerimiento en la realidad?
            br
            | #[b Comprensibilidad:] ¿Es claro lo que expresa este requerimiento para las personas que lo van a usar?
            br
            | #[b Rastreabilidad:] ¿Es posible observar el origen del requerimiento y también evaluar los cambios que pueden generar en el sistema?
            br
            | #[b Adaptabilidad:] ¿El cambio en el requerimiento impacta o no a gran escala sobre otros requerimientos?
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.gradient-box.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/5.svg")
              .col-10
                .row.justify-content-between.align-items-center
                  .col-9.mb-0.mb-sm-0.text-white
                    h3.mb-1 Infografía - Validación de requerimientos
                    p.text-small La validación de los requerimientos busca ratificar que los requerimientos realmente están especificando lo que el cliente desea y necesita.
                  .col.mb-3.mb-sm-0
                    a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
                      span(style="color: #12263F") Descargar 
                      i.fas.fa-file-download(style="color: #12263F")
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Construcción de prototipos
    p.mb-5(data-aos='fade-right') Haga un chequeo del siguiente video para adentrarse en las generalidades y aspectos clave de la construcción de prototipos:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .p-4(style="background-color: #DEE1ED").mb-5
      p.fw-bold Por otra parte, el uso inadecuado de los prototipos también puede generar algunos riesgos, entre los que se encuentran:
      .row.justify-content-center.align-items-center
        .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/6.svg', alt='')
        .col-lg-11
          ul.lista-ul
            li
              i.fas.fa-circle.fa-xs
              | El prototipado puede estimular un número excesivo de cambios de peticiones.

            li
              i.fas.fa-circle.fa-xs
              | Los prototipos operativos pueden inducir a pensar a la directiva y a los clientes que el producto final está prácticamente dispuesto para su salida al mercado.
            li
              i.fas.fa-circle.fa-xs
              | Los prototipos pueden encarecer el producto.
    .p-4(style="background-color: #BAE9D9").mb-5
      .p-5.bg-white
        .row.justify-content-center.align-items-center
          .col-lg-5.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/7.svg', alt='')
          .col-lg-7(data-aos="fade-left")
            .cajon-b.color-acento-contenido.p-3
              p.mb-0 Para la fase de verificación de requisitos se recomienda el uso de prototipos de baja fidelidad (presentación de escenarios con maquetas estáticas) y de tipo exploratorio (prototipos no reutilizables, usados únicamente para la clarificación e identificación de requerimientos).
                br
                br
                |Aunque un prototipo podría ser una sencilla representación gráfica del sistema en papel o la representación de interfaces del sistema usando herramientas de ofimática, existen varias herramientas gratuitas y de pago que facilitan la construcción de prototipos, algunas de ellas solo requieren un registro de correo electrónico para acceder a sus funcionalidades directamente desde el navegador, y otras requieren la descarga e instalación en el equipo donde se planean construir los prototipos.
    p.mb-5(data-aos='fade-right').fw-bold Algunas herramientas recomendadas son las siguientes:
    .row.justify-content-center.mb-lg-3
      .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/8.png', alt='')
      .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/9.png', alt='')
      .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/10.png', alt='')
      .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/11.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/12.png', alt='')
      .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/13.png', alt='')
      .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/14.png', alt='')
      .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/15.png', alt='')
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Generación de casos de prueba
    .fondo-2.p-5.mn
      p.mb-5(data-aos='fade-right') Desarrollar pruebas para los requerimientos permite evidenciar problemas antes de escribir cualquier línea de código. Normalmente, si es complejo construir un caso de prueba para un requerimiento esto es un indicio de que el requerimiento, puede ser difícil de implementar, por lo que debería considerarse.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.mb-lg-0.mb-3
          .cajon-b.color-acento-contenido.p-3.mb-5
            p.mb-0 #[b La validación de requisitos por casos de prueba requiere el desarrollo de cuatros fases:] i) planeación de la prueba. Aquí se define la estrategia a utilizar, el alcance de la prueba a realizar y los tiempos requeridos para el desarrollo de la prueba; ii) diseño de los casos de prueba; iii) ejecución de los casos de prueba y iv) elaboración del informe final de la prueba donde se describen los aspectos más importantes y hallazgos de la ejecución de la prueba (Pantaleo, 2018).
              br
              br
              | #[b De otra parte, el diseño de un caso de prueba requiere:] i) la construcción de un instrumento donde se debe detallar para cada requerimiento si existen precondiciones, es decir, si se requieren de actividades o valores previos para poder iniciar la ejecución del requerimiento; ii) identificar los pasos a seguir para la validación de un requisito y iii) los resultados esperados de la realización de cada paso.
        .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/16.png', alt='')
      p.mb-5(data-aos='fade-right').fw-bold La siguiente es la estructura que lleva el instrumento de registro de caso de prueba:
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1.
            span Formato de caso de prueba
          .tabla-a.color-acento-contenido.mb-5
            table
              caption Nota: Adaptado de Pantaleo (2018).
              thead
                tr
                  th(style="background-color: #273A89", colspan="2" ).text-white Encabezado 1
              tbody
                tr.bg-white
                  td Objetivo del caso de prueba
                  td 
                  
                tr.bg-white
                  td Identificador
                  td 
                  
                tr.bg-white
                  td Nombre o identificador del requerimiento
                  td 
                  
                tr.bg-white
                  td Precondiciones
                  td 
                  
                tr.bg-white.fw-bold
                  td Pasos
                  td Resultados esperados
                  
                tr.bg-white
                  td 1
                  td 1
                  
                tr.bg-white
                  td 2
                  td 2
                  
                tr.bg-white
                  td 3
                  td 3
                  







</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
