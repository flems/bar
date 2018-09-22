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
  <?require($_SERVER['DOCUMENT_ROOT'].'/config/functions.php')?>
  <?require($_SERVER['DOCUMENT_ROOT'].'/assets/img/svg/symbol_sprite.php')?>


  <?php
  $production = include_template('productions.php');
  print_r($production);
  ?>




  <script src="/assets/js/vue.js" charset="utf-8"></script>
  <script src="/assets/js/vue-resource.js" charset="utf-8"></script>
  <script src="/assets/js/production.js" charset="utf-8"></script>
</body>
</html>
