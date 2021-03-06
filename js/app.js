import {sitios} from './data.js';
import { directive  } from './vue-clickaway';
var app = new Vue({
  el: '#app',
  
  data: {
    visible: false,
    sitio: 'sit',
    sitioid: '',

    sitios: sitios



  },
  directives: {
    onClickaway: directive,
  },
  methods: {
    selecciona: function (id) {
      this.wenitas = id;
      this.sitio = this.sitios[id].nombre;
      this.sitioid = id;
      this.visible = false;

    },
    clickInput: function (){
      this.visible = true;
      this.sitio = '';
    },
    clickOut: function(){
      console.log('fuera');
      this.visible = false;
      this.sitio = '';
    }
  },
  computed: {


    sitiosFiltrados: function () {
      var a = this.sitio;
      return this.sitios.filter(function (element) {
        return element.nombre.match(a);
      });
    },
    disabled: function () {
      return this.sitio == '' ? true : false;
    }
    


  }
})

