$(function () {
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="messages-box" data-message-id=${message.id}>
          <div class="messages-box-top">
            <div class="messages-box-top-name">
              ${message.user_name}
            </div>
            <div class="messages-box-top-date">
              ${message.created_at}
            </div>
          </div>
          <div class="messages-box-text">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="messages-box-text" src="${message.image}">
          </div>
        </div>`
        return html;
      } else {
        let html =
        `<div class="messages-box" data-message-id=${message.id}>
          <div class="messages-box-top">
            <div class="messages-box-top-name">
              ${message.user_name}
            </div>
            <div class="messages-box-top-date">
              ${message.created_at}
            </div>
          </div>
          <div class="messages-box-text ">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
        return html;
      };
    }
  let reloadMessages = function() {
    let last_message_id = $('.messages-box:last').data("message-id");
    console.log(last_message_id)
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        //追加するHTMLの入れ物を作る
        let insertHTML = '';
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        //メッセージが入ったHTMLに、入れ物ごと追加
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
    setInterval(reloadMessages, 7000);
});