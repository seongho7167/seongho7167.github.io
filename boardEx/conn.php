<?php
  $servername = $DB['host'];
  $dbname = $DB['db'];
  $user = $DB['user'];
  $password = $DB['pw'];

  $con = new mysqli($servername, $user, $password, $dbname);
?>
