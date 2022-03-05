/*
	메뉴id를 넣으면 자동으로 submenu를 펼쳐줌.

	2020.08.11 김형석 신규
	2021.06.02 양성호 수정(menu_target 없이 모든 페이지에서 서브메뉴를 보여줌, 대메뉴 클릭시 페이지이동후 중메뉴가 깨지는 현상 수정, admin_title 깨지는 현상 수정)
	2021.06.03 양성호 수정(대메뉴 클릭시 서브메뉴로 바로 이동시 admin_title, selector_menu css 적용되도록 수정)
*/

function opened_submenu2(target_menu_id) {
    var this_page_title = '';
    var main_title = '';
    var middle_title = '';
    var data_menu_tar = target_menu_id.substring(1);
    var sub_menu_html = $('.large_menu[data-menu="' + data_menu_tar + '"]').eq(0).html();
    if (target_menu_id == '#index') {
        //index화면에서는 서브메뉴, admin_title 을 지우고 admin_content를 중앙정렬함
        $('.sub_menu').css({
            'display': 'none',
            'width': '0'
        });
        $('.admin_content').css({
            'margin': '0'
        });
        $('.admin_title').css('display', 'none');
    } else {
        //index화면이 아닌 경우
        if (typeof sub_menu_html != 'undefined' && sub_menu_html != null && sub_menu_html != '') {
            //대메뉴 클릭시 서브메뉴 생성
            var sub_menu_html_arr = sub_menu_html.split('<d');
            var sub_menu_result_html = '';
            for (var move_none_i = 1; move_none_i < sub_menu_html_arr.length; move_none_i++) {
                if (sub_menu_html_arr[move_none_i].indexOf('move_none') !== -1) {
                    sub_menu_html_arr[move_none_i] = sub_menu_html_arr[move_none_i].replace('</dl>', '');
                    sub_menu_result_html += '<d' + sub_menu_html_arr[move_none_i] + '<i class=\'xi-angle-up-min\'></i>';
                } else {
                    sub_menu_result_html += '<d' + sub_menu_html_arr[move_none_i];
                }
            }
            if (target_menu_id !== '#index') {
                $('.sub_menu').html(sub_menu_result_html);
            }

            //대메뉴 클릭시 admin_title
            var menu_name = $('.large_menu[data-menu="' + data_menu_tar + '"]').eq(0).text();
            menu_name = menu_name.split('\n')[1];
            this_page_title = menu_name;

            //대메뉴 타겟페이지가 소메뉴와 동일할 경우 admin_title가 깨지지않도록 함
            if ($('.large_menu[data-menu="' + data_menu_tar + '"]').length == 0) {
                main_title = menu_name;
                this_page_title = $(target_menu_id).text();
            }
            if ($(target_menu_id).length == 1) {
                main_title = menu_name;
                middle_title = $(target_menu_id).find(target_menu_id).parent().html();
                this_page_title = $(target_menu_id).find(target_menu_id).text();
            }
        } else if (typeof sub_menu_html == 'undefined') {
            //서브메뉴 클릭시 서브메뉴 생성
            if ($(target_menu_id).parents().eq(0).hasClass('move_none')) {
                //소메뉴일 경우
                sub_menu_html = $(target_menu_id).parents().eq(1).html();
            } else {
                //중메뉴일 경우
                sub_menu_html = $(target_menu_id).parents().eq(0).html();
            }
            var sub_menu_html_arr = sub_menu_html.split('<d');
            for (var move_none_i = 1; move_none_i < sub_menu_html_arr.length; move_none_i++) {
                if (sub_menu_html_arr[move_none_i].indexOf('move_none') !== -1) {
                    sub_menu_html_arr[move_none_i] = sub_menu_html_arr[move_none_i].replace('</dl>', '');
                    sub_menu_result_html += '<d' + sub_menu_html_arr[move_none_i] + '<i class=\'xi-angle-up-min\'></i>';
                } else {
                    sub_menu_result_html += '<d' + sub_menu_html_arr[move_none_i];
                }
            }
            sub_menu_result_html = sub_menu_result_html.replace('undefined', '');

            $('.sub_menu').html(sub_menu_result_html);

            //서브메뉴 클릭시 admin_title
            this_page_title = $(target_menu_id).text();
            var menu_name = sub_menu_html.split('\n')[1];
            main_title = menu_name;
            middle_title = $.trim($(target_menu_id).parents('dl').html());
        }
        if ($(target_menu_id).prop('tagName') == 'DL') {
            $('.sub_menu > ' + target_menu_id).show();
            $('.sub_menu > ' + target_menu_id).css('text-decoration', 'underline');
            $('.sub_menu > ' + target_menu_id).css('background-color', sub_color);
            var sub_menu_depth = 2;
        } else {
            $('.sub_menu ' + target_menu_id).parent('dl').css({
                'background-color': sub_color,
                'color': main_color
            });
            $('.sub_menu > dl > ' + target_menu_id).siblings('dd').show();
            $('.sub_menu > dl > ' + target_menu_id).show();
            $('.sub_menu > dl > ' + target_menu_id).css('text-decoration', 'underline');
            $('.sub_menu > dl > ' + target_menu_id).css({
                'background-color': bg_color
            });
            $('.sub_menu > dl > ' + target_menu_id).siblings('dd').css('color', text_color);
            $('.sub_menu > dl > ' + target_menu_id).siblings('i').toggleClass('xi-angle-down-min');
            var sub_menu_depth = 3;
        }

        //admin_title 생성
        var admin_title = '';
        if (window.location.pathname.replace('/', '') != 'index') {
            if (typeof main_title != 'undefined' && main_title != null && main_title != '') {
                if (typeof middle_title != 'undefined' && middle_title != null && middle_title != '') {
                    admin_title = '<i id=\'index\' class=\'xi-home move_page\'></i> <i class=\'xi-angle-right-min\'></i>' + main_title.replace(/<dl\b[^<]*(?:(?!<\/dl>)<[^<]*)*<\/dl>/gi, '') + '<i class=\'xi-angle-right-min\'></i>' + middle_title.replace(/<.*>/gi, '') + '<i class=\'xi-angle-right-min\'></i>' + this_page_title;
                } else {
                    admin_title = '<i id=\'index\' class=\'xi-home move_page\'></i><i class=\'xi-angle-right-min\'></i>' + main_title.replace(/<dl\b[^<]*(?:(?!<\/dl>)<[^<]*)*<\/dl>/gi, '') + '<i class=\'xi-angle-right-min\'></i>' + this_page_title;
                }
            } else {
                admin_title = '<i id=\'index\' class=\'xi-home move_page\'></i><i class=\'xi-angle-right-min\'></i>' + this_page_title;
            }
        } else {
            admin_title = '<i id=\'index\' class=\'xi-home move_page\'></i>';
        }
        $('.admin_title').html(admin_title);
        $('.admin_title').css({
            'width': 'calc(100% - 120px)',
            'color': text_color,
            'opacity': '.75'
        });

        // 서브메뉴 접속자 사진
        var file_uid = sessionStorage.getItem('file_uid');
        var user_photo = '<div class="photo_box"><img class="user_photo" src="https://via.placeholder.com/150/No Photo" alt="사원 이미지"></div>';
        var type = '';
        if (file_uid != '' && file_uid != null && typeof file_uid != 'undefined') {
            user_photo = '<div class="photo_box"><img class="user_photo" src="./d/' + file_uid + '" alt="사원 이미지"></div>';
        }
        $('.sub_menu').prepend(user_photo);

        //서브메뉴 햄버거 버튼
        var collapsed_btn = '<div class="collapsed_box"><i class="xi-hamburger-back"></i><i class="xi-bars"></i></div>';
        $('.sub_menu').prepend(collapsed_btn);

        //description on/off 기능 버튼 default: 안보임
        var desc_btn = '<div id="desc_ck_box"><input type="checkbox" id="desc_ck" class="checkbox" /><label for="desc_ck">상세설명 <i class="xi-eye-off" style="font-size:20px;vertical-align:middle"></i></label></div>';
        $('.admin_title').after(desc_btn);
        $('#desc_ck_box').css({
            'width': '100px',
            'float': 'left',
            'color': text_color,
            'font-size': '15px',
            'margin': '10px 0',
            'opacity': '.75'
        });
        $('#desc_ck_box > label').css('cursor', 'pointer');
        $('#desc_ck_box > label').hover(function() {
            $('#desc_ck_box > label').css('color', main_color);
        }, function() {
            $('#desc_ck_box > label').css('color', text_color);
        });
        $('#desc_ck').css('display', 'none');
        $('.description_html').css('display', 'none');
        $('#desc_ck_box > label').click(function() {
            if ($('#desc_ck').is(':checked')) {
                $(this).html('상세설명 <i class="xi-eye-off" style="font-size:20px;vertical-align:middle"></i>');
                $('.description_html').css('display', 'none');
            } else {
                $(this).html('상세설명 <i class="xi-eye" style="font-size:20px;vertical-align:middle"></i>');
                $('.description_html').css('display', 'block');

            }
        });
        // 서브메뉴 하단 아이콘
        // $('.sub_menu').append('<div class="sub_bottom_icon_box"><i class="xi-bell"></i><i class="xi-cog"></i><i id="logout" class="xi-log-out move_page"></i></div>');
        // $('.sub_menu > .sub_bottom_icon_box > i').hover(function(){
        // 	$(this).css('color',main_color);
        // }, function(){
        // 	$(this).css('color',text_color);
        // });



    }

}
