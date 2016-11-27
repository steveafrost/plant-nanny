class Tip {
  constructor(attributes) {
    this.content = attributes.content;
  }

  createTip() {

  }
}

function attachTipListeners() {
  $(document).on('click', '#js-load-tips', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('#overlay').fadeIn(400);
    $('#all-tips').fadeIn(400);
    loadTips($(this).attr('href'));
  });
}
