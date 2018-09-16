<template id="product-item">
  <div class="production__item product">
    <div class="product__img" :class="'product__img_' + name.toLowerCase()">
      <img :src="img" alt="">
    </div>
    <div class="product__info">
      <p class="product__sort">{{ sort }}</p>
      <p class="product__name" :class="'product__name_' + name.toLowerCase()">{{ name }}</p>
    </div>
  </div>
</template>

<template id="product-popup">
  <div class="product-popup product-popup_active">
    <div class="product-popup__content">
      <div class="product-popup__wrapper">
        <div class="product-popup__img">
          <img src="/assets/img/selor.jpg" alt="" >
        </div>
        <div class="product-popup__info">
          <div class="product-popup__title">
            <div class="product-popup__title-sort">Темное пиво</div>
            <div class="product-popup__title-name">Eldo</div>
          </div>
          <p class="product-popup__decription">
            <b>Превосходное темное пиво, сваренное по всем мировым стандартам, обладающее насыщенным густым вкусом.</b><br>
            В основе рецептуры лежит использование особых пивных дрожжей. Они придают пиву его характерный вкус и аромат, а также долго не спадающей пены.
          </p>
          <p class="product-popup__props">
            Состав: <br> вода питьевая очищенная, солод ячменный светлый, хмелепродукты.
          </p>
          <p class="product-popup__props">
            Алкоголь: 4,6% об.<br>
            Экстрактивность начального сусла: 11,0%<br>
            Пищевая ценность в 100 г пива: энергетическая ценность - 40,0 Ккал
          </p>
          <button type="button" class="product-popup__btn">
            <svg class="svg-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cross-out"></use></svg>
            <span>Закрыть</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
