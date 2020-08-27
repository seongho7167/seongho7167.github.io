  $(document).ready(function(){
    var action='';
    $('#commentView').delegate('.comt', 'click', function(){
      //현재 위치에서 가장 가까운 commentSet 클래스를 변수에 저장한다
      console.log('연결완료');
      var thisParent = $(this).parents('.commentSet');

      //현재 작성 내용을 변수에 넣고, active 클래스 추가
      var commentSet = thisParent.html();
      thisParent.addClass("active");

      //취소 버튼
      var commentBtn = '<a href="#" class="addComt cancel">취소</a>';

      //버튼 삭제 & 추가
      $('.comt').hide();
      $(this).parents('.commentBtn').append(commentBtn);

      //commentInfo 의 ID를 가져온다
      var co_Num = thisParent.attr('id');

      //전체 길이에서 3("co_")를 뺀 나머지가 co_num
      co_Num = co_Num.substr(3, co_Num.length);

      //변수 초기화
      var comment = '';
      var co_Id = '';
      var co_Content = '';

      if($(this).hasClass('write')){
        //댓글 쓰기
        action='w';
        //ID영역 출력
        co_Id='<input type="text" name="co_Id" id="co_Id">';
      }else if($(this).hasClass('modify')){
        //댓글 수정
        action='u';

        co_Id = thisParent.find('.co_Id').text();
        var co_Content = thisParent.find('.commentContent').text();

      }else if($(this).hasClass('delete')){
        //댓글 삭제
        action='d';
      }
      comment += '<div class="writeComment">';
      comment += '<input type="hidden" name="w" value="'+action+'">';
      comment += '<input type="hidden" name="co_Num" value="'+co_Num+'">';
      comment += '<table>';
      comment += '<tbody>';
      if(action !== 'd'){
        comment += '<tr>';
        comment += '<th scope="row"><label for="co_Id">아이디</label></th>';
        comment += '<td>'+co_Id+'</td>';
        comment += '</tr>';
      }
      comment += '<tr>';
      comment += '<th scope="row"><label for="coPassword">비밀번호</label></th>';
      comment += '<td><input type="password" name="co_Password" id="coPassword"></td>';
      comment += '</tr>';
      if(action !=='d'){
        comment += '<tr>';
        comment += '<th scope="row"><label for="coContent">내용</label></th>';
        comment += '<td><textarea name="coContent" id="co_Content">'+co_Content+'</textarea></td>';
        comment += '</tr>';
      }
      comment += '</tbody>';
      comment += '</table>';
      comment += '<div class="btnSet">';
      comment += '<input type="submit" value="확인">';
      comment += '</div>';
      comment += '</div>';

      thisParent.after(comment);
      return false;
    });
    $('#commentView').delegate('.cancel', 'click', function(){
      $('.writeComment').remove();
      $('.commentSet.active').removeClass('active');
      $('.addComt').remove();
      $('.comt').show();
      return false;
    });
  });
