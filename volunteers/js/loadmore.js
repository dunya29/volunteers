jQuery(function($){
  $('#loadmore').click(function(){ // клик на кнопку
    // получаем нужные переменные
    let data = {
      'action': 'loadmore',
      'query': posts_vars,
      'page' : current_page,
      'count_posts' : count_posts
    };
    // подсчет элементов в блоке
    let $element = $('.events__grid--page');
    let numberOfChildren = $element.children().length;
    // отправляем Ajax запрос
    $.ajax({
      url:ajaxurl,
      data:data,
      type:'POST',
      success:function(data){
        if(data) {
          $('#loadmore').prev().prev().append(data); // добавляем новые посты
          current_page = current_page + 3; // записываем новый номер страницы
          if (numberOfChildren >= count_posts - 1) $("#loadmore").remove(); // если последняя страница, удаляем кнопку
        }
      }
    });
  });
});


