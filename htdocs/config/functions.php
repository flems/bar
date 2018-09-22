<?php
function include_template($name, $data = '') {
  $name = $_SERVER['DOCUMENT_ROOT'].'/assets/templates/' . $name;
  $result = '';
  if (!file_exists($name)) {
    return $result;
  }

  ob_start();
  if($data) {
    extract($data);
  }
  require($name);

  $result = ob_get_clean();

  return $result;
}
