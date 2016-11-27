class Tip {
  constructor(attributes) {
    this.content = attributes.content;
    this.timestamp = attributes.created_at;
  }
}

Tip.prototype.createTip = function(first_argument) {
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

function loadTipDetails(clickedPlant) {
  $.get(clickedPlant + '.json', function(response) {
    var tips = response.tips;
    loadTips(tips);
  });
}

function attachTipListeners() {
  $('#plants').on('click', '#js-load-tip-details', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('#overlay').fadeIn(400);
    $('#tip-details').fadeIn(400);
    loadTipDetails($(this).attr('href'));
  });
}
