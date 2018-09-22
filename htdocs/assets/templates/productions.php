<section class="production" id="production">
  <div class="production__wrapper">
    <h1 class="production__title production__title_level_1">Пиво и виски</h1>
    <h2 class="production__title production__title_level_2">собственного производства</h2>
    <div class="production__list">
      <product-item
        v-for="product in production"
        :name = product.name
        :sort = product.sort
        :img = product.img
        @get-popup-info = "changePopupInfo"
      >
      </product-item>
      <product-popup
        :img = "popupInfo.img"
        :video = "popupInfo.video"
        :name = "popupInfo.name"
        :sort = "popupInfo.sort"
        :props = "popupInfo.props"
        :open = "popupIsOpen"
        :desc = "popupInfo.desc"
        @change-popup-status = "setPopupStatus"

      ></product-popup>

    </div>
  </div>
</section>

<template id="product-item">
  <div class="production__item product">
    <div class="product__img" :class="'product__img_' + name.toLowerCase()">
      <img :src="img" alt="" @click="openPopup">
    </div>
    <div class="product__info">
      <p class="product__sort">{{ sort }}</p>
      <p class="product__name" :class="'product__name_' + name.toLowerCase()">{{ name }}</p>
    </div>
    <slot></slot>
  </div>
</template>

<template id="product-popup">
  <div class="product-popup"  :class="{ 'product-popup_active': open }">
    <div class="product-popup__content">
      <div class="product-popup__wrapper">
        <div class="product-popup__media">
          <img class="product-popup__img" :src="img" alt="" >
          <div class="product-popup__video" v-html="video"></div>
        </div>
        <div class="product-popup__info">
          <div class="product-popup__title">
            <div class="product-popup__title-sort">{{ sort }}</div>
            <div class="product-popup__title-name">{{ name }}</div>
          </div>
          <p class="product-popup__decription" v-html="desc"></p>
          <p class="product-popup__props" v-for="prop in props" v-html="prop"></p>
          <button type="button" class="product-popup__btn" @click="closePopup">
            <svg class="svg-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cross-out"></use></svg>
            <span>Закрыть</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
