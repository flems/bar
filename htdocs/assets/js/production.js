Vue.component('product-item' ,{
  template: '#product-item',
  props: ['name', 'sort', 'img'],
  methods: {
    openPopup: function() {
      console.log(this[this.name]);
      this.$emit("get-popup-info", this[this.name]);
    }
  },
  data: function(){
    return {
      Eldo: {
        img: '/assets/img/eldo.jpg',
        video: '<iframe src="https://www.youtube.com/embed/FFonLBYzHw8?rel=0" width="" height="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        sort: 'Темное пиво',
        name: 'Eldo',
        desc: '<b>Превосходное темное пиво, сваренное по всем мировым стандартам, обладающее насыщенным густым вкусом.</b><br> В основе рецептуры лежит использование особых пивных дрожжей. Они придают пиву его характерный вкус и аромат, а также долго не спадающей пены.',
        props: [
          'Состав: <br> вода питьевая очищенная, солод ячменный светлый, хмелепродукты.',
          'Алкоголь: 4,6% об.<br> Экстрактивность начального сусла: 11,0%<br> Пищевая ценность в 100 г пива: энергетическая ценность - 40,0 Ккал',
        ]
      },
      Selor: {
        img: '/assets/img/selor.jpg',
        video: '<iframe src="https://www.youtube.com/embed/aE25DZaRmsQ?rel=0" width="" height="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        sort: 'Светлое пиво',
        name: 'Selor',
        desc: '<b>Превосходное светлое пиво, сваренное по всем мировым стандартам, обладающее легким свежим вкусом.</b><br>В основе рецептуры лежит использование особых пивных дрожжей. Они придают пиву его характерный вкус и аромат, а также долго не спадающей пены.',
        props: [
          'Состав: <br>вода питьевая очищенная, солод ячменный светлый, хмелепродукты.',
          'Алкоголь: 4,6% об.<br> Экстрактивность начального сусла: 11,0%<br> Пищевая ценность в 100 г пива: энергетическая ценность - 40,0 Ккал',
        ]
      },
      Pirso: {
        img: '/assets/img/pirso.jpg',
        video: '<iframe src="https://www.youtube.com/embed/W2kKlb5JTcA?rel=0" width="" height="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        sort: 'Виски',
        name: 'Pirso',
        desc: '<b>Виски глубокого янтарного цвета с легкими полутонами красного дерева.</b> Шелковитый, гладкий, сбалансированный вкус виски наполнен приятной сладостью, тонами темных фруктов, винограда, апельсина, специй и дымка. Богатое, затяжное послевкусие.',
        props: [
          'Состав виски: <br>солод (пророщенное зерно), дрожжи и вода.',
          'ABV: 45%',
        ]
      },

    }
  }

})
Vue.component('product-popup' ,{
  template: '#product-popup',
  props: ['open', 'img', 'video', 'sort', 'name', 'desc', 'props',],
  methods: {
    closePopup: function(){
      this.$emit('change-popup-status', false)
    }
  }
})

var production = new Vue({
  el: "#production",
  data: {
    popupInfo: '',
    popupIsOpen: false,
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
    changePopupInfo: function(info){
        this.popupInfo = info;
        this.popupIsOpen = true;
    },
    setPopupStatus: function(status) {
      this.popupIsOpen = status
    }
  },
})
