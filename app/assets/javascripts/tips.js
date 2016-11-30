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
    url = this.action;
    data = {
      'authenticity_token': $('input[name="authenticity_token"]').val(),
      'tip': {
        'content': $('.tip_content:eq(1)').val()
      },
      'plant_id': 1
    };

    $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function(response) {
        $('.tip_content:eq(1)').val('');
        $('div#plant-tips').append(response);
      }
    });
  });

}
