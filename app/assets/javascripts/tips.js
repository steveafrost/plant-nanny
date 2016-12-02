class Tip {
  constructor(attributes) {
    this.content = attributes.content;
    this.timestamp = attributes.created_at;
  }

  createTip() {

  }
}



function attachTipListeners() {


  $(document).on('submit', '.new-tip', function(event) {
    event.preventDefault();

    var new_tip = $('.tip-content:eq(1)').val();
    if (new_tip === '') {
      return $('.error:eq(1)').html('<h5 class="error">You cannot leave a blank tip<h5>');
    }

    $.ajax({
      type: "POST",
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        $('.error:eq(1)').html('');
        $('.tip-content:eq(1)').val('');
        $('div#plant-tips').append(response);
      }
    });
  });

}
