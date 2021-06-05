$(document).ready(function(){
  var u_id = $('#u_id');
  var u_password = $('#u_password');
  var u_password2 = $('#u_password2');
  var u_name = $('#u_name');
  var u_email = $('#u_email');
  var val_id = '';
  var chk_id = /^[0-9a-z]+$/;
  var chk_pw = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;
  var chk_mail = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
  var msg = '';
  u_id.on('focus', function(){
    text_view('#u_id_chk','ID중복 및 유효성을 자동으로 감지합니다.','black');
    if(u_id.val() != ''){
      return u_id.val();
    }
  });
  u_id.on('blur', function(){
    val_id = $('#u_id').val();
    if(val_id == '' || val_id == 'null'){
      text_view('#u_id_chk','ID를 입력해주세요.','red');
    } else if(val_id.length < 4 || val_id.length > 12){
      text_view('#u_id_chk','ID는 최소 4자에서 최대 12자까지 입력해주세요.','red');
    }else {
      if(valChk(chk_id,val_id,'#u_id','ID는 영문 또는 숫자로 입력해주세요.') != false){
        $.post(
          'id_chk.php',{
            u_id : val_id
          }, function(data){
            console.log(data);
            if(data != 'success'){
              text_view('#u_id_chk','중복된 ID값이 존재합니다. 다른 ID를 이용해주세요.','red');
            } else {
              text_view('#u_id_chk','사용 가능한 ID 입니다.','blue');
            }
          }
        );
      }
    }
  });
  u_password.on('focus', function(){
    text_view('#u_password_chk','Password를 입력해주세요.','black');
    if(u_password.val() != ''){
      return u_password.val();
    }
  });
  u_password.on('blur',function(){
    val_id = $('#u_id').val();
    var pw_val = u_password.val();
    if(valChk(chk_pw,pw_val,'#u_password','영문, 숫자로 6~20자로 입력하세요.') != false){
      text_view('#u_password_chk','Password 확인을 입력해주세요.','blue');
      return true;
    }
  });
  u_password2.blur(function(){
    if(u_password.val() !== u_password2.val()){
      text_view('#u_password_chk','입력한 Password가 다릅니다. 다시 입력해주세요.','red');
      u_password2.val('');
      return false;
    } else if(u_password.val() == '' || u_password.val() == 'null' || u_password2.val() == '' || u_password2.val() == 'null'){
      text_view('#u_password_chk','Password를 입력해주세요.','red');
      return false;
    }
    text_view('#u_password_chk','Password 확인이 끝났습니다.','blue');
  });
  u_name.focus(function(){
      text_view('#u_name_chk','이름을 입력해주세요.','black');
  });
  u_name.on('blur', function(){
    if(u_name.val() == ''){
      text_view('#u_name_chk','이름은 반드시 입력해야하는 항목입니다.','red');
    }else {
        text_view('#u_name_chk','이름 입력이 끝났습니다.','blue');
    }
  });
  u_email.on('focus', function(){
    text_view('#u_email_chk','이메일을 입력해주세요.','black');
  });
  u_email.on('blur', function(){
    if(u_email.val() == ''){
      text_view('#u_email_chk','이메일은 반드시 입력해야하는 항목입니다.','red');
    } else {
      var email_chk = valChk(chk_mail,u_email.val(),'#u_email','올바른 이메일을 입력해주세요.');
      if(email_chk == true){
        text_view('#u_email_chk','이메일 입력이 끝났습니다.','blue');
      }
    }
  });
  var valChk = function(chk,val,tar,msg){
    if(chk.test(val) != true){
      $(tar+'_chk').text(msg).css('color','red');
      $(tar).val('');
      return false;
    } return true;
  };
});
