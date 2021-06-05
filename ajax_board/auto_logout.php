<?php
  if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 1800)) {
    // last request was more than 30 minutes ago
    session_unset();     // unset $_SESSION variable for the run-time
    session_destroy();   // destroy session data in storage
  }
  $_SESSION['LAST_ACTIVITY'] = time(); // update last activity time stamp

  if (!isset($_SESSION['CREATED'])) {
      $_SESSION['CREATED'] = time();
  } else if (time() - $_SESSION['CREATED'] > 1800) {
      // session started more than 30 minutes ago
      session_regenerate_id(true);    // change session ID for the current session and invalidate old session ID
      $_SESSION['CREATED'] = time();  // update creation time
  }

  if ($HTTP_COOKIE_VARS[SESSION_CHECK] == "")
  {
  setcookie("SESSION_CHECK", "Y", 0, "/");
  $PHPSESSID=session_id();
  setcookie("PHPSESSID", $PHPSESSID, 0,"/");
  }
?>
