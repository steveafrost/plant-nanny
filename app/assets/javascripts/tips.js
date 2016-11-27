class Tip {
  constructor(attributes) {
    this.content = attributes.content;
    this.timestamp = attributes.created_at;
  }

  createTip() {

  }
}

function attachTipListeners() {

  $(document).one('click', '#js-add-tip', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $.get('/tips/new', function(response) {
      $('div#plant-tips').prepend(response);
    });
  });

  $(document).on('click', '#js-create-tip', function(event) {
    event.preventDefault();
    console.log($('#tip-content').val());
  });
}
