$(function () {
function buildHTML(message){
  if ( message.image ) {
    let html =
      `<div class="messages-box">
        <div class="messages-box-top">
          <div class="messages-box-top-name">
            ${message.user_name}
          </div>
          <div class="messages-box-top-date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="Message__content">
            ${message.content}
          </p>
          <img class="messages-box-text" src="${message.image}">
        </div>
      </div>`
    return html;
  } else {
    let html =
    `<div class="messages-box.">
      <div class="messages-box-top">
        <div class="messages-box-top-name">
          ${message.user_name}
        </div>
        <div class="messages-box-top-date">
          ${message.created_at}
        </div>
      </div>
      <div class="message">
        <p class="Message__content">
          ${message.content}
        </p>
      </div>
    </div>`
    return html;
  };
}
  $('.form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.messages').append(html);   
      $('.messages').animate({ scrollTop: $('.messages-box')[0].scrollHeight});
      $('form')[0].reset();
      $(".form__send").prop("disabled", false);
  })
    .fail(function() {
       alert("メッセージ送信に失敗しました");
    
    });
  });
})