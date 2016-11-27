class Tip {
  constructor(attributes) {
    this.content = attributes.content;
    this.timestamp = attributes.created_at;
  }

  createTip(allTipsArray) {

  }
}

function loadTips(plantId) {
  $.get('/plants/' + plantId + '/tips', function(response) {
    tipsTemplateSource = $('#tips-template').html();
    tipsTemplate = Handlebars.compile(tipsTemplateSource);
    var allTips = tipsTemplate(response);
    $('#plants').append(allTips);

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
