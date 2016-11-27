class Tip {
  constructor(attributes) {
    this.content = attributes.content;
    this.timestamp = attributes.created_at;
  }
}

Tip.prototype.createTip = function() {
  var html = '<blockquote>';
  html += `<p>${this.content}</p>`;
  html += '</blockquote>';
  return html;
};

function loadTips(plantTips) {
  $('#plant-tips').empty();
  $.each(plantTips, function(index, tip) {
    var tip_obj = new Tip(tip);
    $('#plant-tips').append(tip_obj.createTip());
  });
}

function loadTipDetails(plantId) {
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
