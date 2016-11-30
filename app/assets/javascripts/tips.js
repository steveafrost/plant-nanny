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

  $(document).on('submit', '.new_tip', function(event) {
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        $('.tip_content:eq(1)').val('');
        $('div#plant-tips').append(response);
      }
    });
  });

}
