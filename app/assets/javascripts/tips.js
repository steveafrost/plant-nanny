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

  });

  $(document).on('click', '#js-create-tip', function(event) {
    event.preventDefault();
    newTip = $('.tip_content:eq(1)').val();

  });
}
