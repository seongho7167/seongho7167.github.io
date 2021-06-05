
  function page_func(page,search_condition,search_text){
    if(page==''){
      var page = 1;
    }
    var page = page;
    var search_condition = search_condition;
    var search_text = search_text;
    console.log(page);
    console.log(search_condition);
    console.log(search_text);
    $.ajax({
      url: './free_board/call_list.php',
      type: 'GET',
      data: {
        'page': page,
        'search_condition' : search_condition,
        'search_text' : search_text
      },
      dataType: 'json',
      success: function(data){
        console.log(data);
        var page_res = data[data.length-2];
        console.log(page_res);
        var search_data = data[data.length-1];
        console.log(search_data);
        $('#free_board').empty();
        var thead = '<thead><tr><th style="width:10%">글번호</th>'+'<th style="width:50%">제목</th>'+'<th style="width:15%">작성자</th>'+'<th style="width:15%">작성일</th>'+'<th style="width:10%">조회수</th></tr></thead>';
        var tbody='<tbody>';
        for( var i = 0 ; i < (data.length-2) ; i++ ){
          tbody += '<tr><td>'+Number(page_res.all_recode_cnt-((page_res.page-1)*page_res.one_page)-i)+'</td>'+'<td><a href="http://seongho7167.dothome.co.kr/php/free_board/free_board_view.php?bofr_uid='+data[i]['bofr_uid']+'&row_no='+Number(page_res.all_recode_cnt-((page_res.page-1)*page_res.one_page)-i)+'&page_num='+page_res.page+'" class="recode" hash_page="'+page_res.page+'">'+data[i]['bofr_title']+'</a></td>'+'<td>'+data[i]['bofr_mem_uid']+'</td>'+'<td>'+data[i]['bofr_date']+'</td>'+'<td>'+data[i]['bofr_hit']+'</td></tr>';
        }
        tbody += '</tbody>';
        $('#free_board').html(thead);
        $('#free_board thead').after(tbody);

        $('#paging').empty();
        if(page_res.page != 1){
          $('#paging').append('<li class="page" first_page data-page="1"><<</li>');
        }else {
          $('#paging').append('<li class="page disabled"><<</li>');
        }
        if(page_res.now_block != 1){
          $('#paging').append('<li class="page prev_page" data-page="'+page_res.prev_page+'"><</li>');
        }else {
          $('#paging').append('<li class="page disabled"><</li>');
        }
        for(var i = page_res.first_page; i <= page_res.last_page; i++){
          if(page_res.page == i){
            $('#paging').append('<li class="page active disabled">'+i+'</li>');
          }else {
            $('#paging').append('<li class="page" data-page="'+i+'">'+i+'</li>');
          }
        }
        if(page_res.now_block < page_res.all_block){
          $('#paging').append('<li class="page next_page" data-page="'+page_res.next_page+'">></li>');
        }else {
          $('#paging').append('<li class="page disabled">></li>');
        }
        if(page_res.page < page_res.all_page){
          $('#paging').append('<li class="page end_page" data-page="'+page_res.all_page+'">>></li>');
        }else {
          $('#paging').append('<li class="page disabled">>></li>');
        }
      },
      complete: function(data){
        var page_res = data.responseJSON;
        //console.log(page_res);
        $('#search_val').blur(function(){
          page = 1;
          search_condition = $('#search_select option:selected').val();
          search_text = $(this).val();
          page_func(page,search_condition, search_text);
        });
        $('.page').click(function(){
          if($(this).hasClass('disabled') != true){
  			    //console.log($(this).attr('data-page'));
            if($(this).attr('data-page')){
				var hash = $(this).attr('data-page');
				document.location.hash = "#"+hash;
      			  var page_num = $(this).attr('data-page');
      			  page = page_num;
      			  page_func(page,search_condition,search_text);
      		  }else {
      			  $('.first_page').click(function(){
        				page = 1;
        				page_func(page,search_condition,search_text);
      			  });
      			  $('.next_page').click(function(){
        				page = page_res[(page_res.length-1)]['next_page'];
        				page_func(page,search_condition,search_text);
      			  });
      			  $('.prev_page').click(function(){
        				page = page_res[(page_res.length-1)]['prev_page'];
        				page_func(page,search_condition,search_text);
      			  });
      			  $('.end_page').click(function(){
        				page = Number(page_res[(page_res.length-1)]['all_page']);
        				page_func(page,search_condition,search_text);
      			  });
      		  }
          } else {
            return false;
          }
        });
      }
    });
  }

  //해시뱅값을 남겨 뒤로가기 이벤트 발생시 해시값을 페이지 값으로 저장후 페이징 함수 호출
  window.onpageshow = function(event) {
    if(document.location.hash != ''){
      if ( event.persisted || (window.performance && window.performance.navigation.type == 2)) {
      // Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우
        var hash = document.location.hash.replace("#","");
        page = hash;
        search_condition='';
        search_text='';
        page_func(page,search_condition,search_text);
      }else if(window.performance.navigation.type == 1){
        var hash = document.location.hash.replace("#","");
        page = hash;
        search_condition='';
        search_text='';
        page_func(page,search_condition,search_text);
      }
    }else {
  	page_func();
    }
  };
  // 페이징후 뒤로가기 실행시 해시값인식하여 리스트 재출력
  window.onhashchange = function(event){
    var hash = document.location.hash.replace("#","");
    page = hash;
    search_condition='';
    search_text='';
    page_func(page,search_condition,search_text);
  }
