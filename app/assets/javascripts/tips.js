class Tip {
  constructor(attributes) {
    this.content = attributes.content;
    this.timestamp = attributes.created_at;
  }

  createTip() {
    Tip.tipsTemplateSource = $('#tips-template').html();
    Tip.tipsTemplate = Handlebars.compile(Tip.tipsTemplateSource);
    var tip = Tip.tipsTemplate(this);
    $('#all-tips').append(tip);
  }
}

function loadTips(plantId) {
  $.get('/plants/' + plantId + '/tips', function(response) {
    $.each(response, function(index, tip) {
      var tipsObj = new Tip(tip);
      var singleTip = tipsObj.createTip();
    });
  });
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
