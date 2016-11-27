class Tip {
  constructor(attributes) {
    this.content = attributes.content;
    this.timestamp = attributes.created_at;
  }

  createTip() {
    Tip.tipsTemplateSource = $('#tips-template').html();
    Tip.tipsTemplate = Handlebars.compile(Tips.tipsTemplateSource);
  }
}

function loadTips(plantId) {
  $.get('/plants/' + plantId + '/tips', function(response) {
    $.each(response, function(index, tip) {
      var tipsObj = new Tip(response);
      var singleTip = tipsObj.createTip();
    });
  });
}

function attachTipListeners() {
  $(document).on('click', '#js-load-tips', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('#overlay').fadeIn(400);
    $('#tip-details').fadeIn(400);
    loadTipDetails($(this).attr('href'));
  });
}
