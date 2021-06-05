$(document).ready(function(){
	$('#u_id').keyup(function(){
		var val_id = $('#u_id').val();
		console.log(val_id);
		if(val_id == ''){
			text_view('#u_id_chk','ID를 입력해주세요.','black');
		} else {
			$.post(
			  'id_chk.php',{
				u_id : val_id
			  }, function(data){
				console.log(data);
				if(data != 'success'){
				  text_view('#u_id_chk','ID입력 완료','blue');
				} else {
				  text_view('#u_id_chk','존재하지 않는 ID 입니다.','red');
				}
			  }
			);
		}
	});
});
