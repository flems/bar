<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>

  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/production.css">
</head>
<body>
  <?include $_SERVER['DOCUMENT_ROOT'].'/assets/img/svg/symbol_sprite.php'?>



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
        ></product-item>
        <product-popup>
        </product-popup>
      </div>
    </div>
  </section>


  <?php include $_SERVER['DOCUMENT_ROOT'].'/templates.php';?>
  <script src="/assets/js/main.js" charset="utf-8"></script>
  <script src="/assets/js/vue.js" charset="utf-8"></script>
  <script src="/assets/js/vue-resource.js" charset="utf-8"></script>
  <script src="/assets/js/production.js" charset="utf-8"></script>
</body>
</html>
