<?php
  include_once 'config.php';
  include_once 'conn.php';
  $con = new mysqli($servername, $user, $password, $dbname);

  $sql = "CREATE TABLE IF NOT EXISTS `board_free` (
    `b_num` int(11) unsigned NOT NULL auto_increment,
    `b_title` varchar(100) NOT NULL,
    `b_content` text NOT NULL,
    `b_date` datetime NOT NULL,
    `b_hit` int(11) unsigned NOT NULL,
    `b_id` varchar(20) not null,
    `b_password` varchar(100) not null,
    PRIMARY KEY (`b_num`)
    ) ENGINE=MYISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1";
  try{
    $con->query($sql);
    echo '자유게시판 데이터 테이블 생성 성공!';
  } catch(Exception $ex) {
    echo '자유게시판 데이터 테이블 생성 실패...ㅠ';
  }

  $sql = "CREATE TABLE IF NOT EXISTS `member` (
    `member_idx` bigint(20) unsigned NOT NULL auto_increment,
    `id` varchar(20) NOT NULL,
    `pw` varchar(40) NOT NULL,
    `email` varchar(80) NOT NULL,
    PRIMARY KEY (`member_idx`)
    ) ENGINE=MYISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1";
  try{
    $con->query($sql);
    echo '회원 데이터 테이블 생성 성공!';
  } catch(Exception $ex) {
    echo '회원 데이터 테이블 생성 실패...ㅠㅠ';
  }

  $sql = "CREATE TABLE IF NOT EXISTS `comment_free`(
    `co_num` int unsigned not null primary key auto_increment,
    `b_num` int unsigned not null,
    `co_order` int unsigned not null,
    `co_content` text not null,
    `co_id` varchar(20) not null,
    `co_password` varchar(100) not null
    ) ENGINE=MYISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1";
  try{
    $con->query($sql);
    echo '댓글 데이터 테이블 생성 성공!';
  } catch(Exception $ex) {
    echo '댓글 데이터 테이블 생성 실패...ㅠㅠ';
  }

  include_once 'close.php';
?>
