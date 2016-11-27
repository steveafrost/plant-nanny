class Tip {
  constructor(attributes) {
    this.content = attributes.content;
    this.timestamp = attributes.created_at;
  }

  createTip() {

  }
}

function attachTipListeners() {

  $(document).on('click', '#js-add-tip', function(event) {
    event.preventDefault();
    event.stopPropagation();
    var form = '<form>Whats your tip?<input field="text"></input></form>';
    $('div#plant-tips').prepend(form);
  });

  $(document).on('click', '#js-load-tips', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('#overlay').fadeIn(400);
    $('#all-tips').fadeIn(400);
    loadTips($(this).attr('href'));
  });
}
