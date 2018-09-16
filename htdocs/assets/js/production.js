Vue.component('product-item' ,{
  template: '#product-item',
  props: ['name', 'sort', 'img']
})
Vue.component('product-popup' ,{
  template: '#product-popup',
  props: ['name', 'sort', 'img']
})

var production = new Vue({
  el: "#production",
  data: {
    production: [
      {
        name: 'Eldo',
        sort: 'Темное пиво',
        img: '/assets/img/eldo.jpg',
      },
      {
        name: 'Selor',
        sort: 'Светлое пиво',
        img: '/assets/img/selor.jpg',
      },
      {
        name: 'Pirso',
        sort: 'Виски',
        img: '/assets/img/pirso.jpg',
      },
    ],
  },
  methods: {
    openPopup: function(){
      
    }
  }
})
