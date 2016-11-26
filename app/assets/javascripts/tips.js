class Tip {
  constructor(content, created_at) {
    this.content = content;
    this.timestamp = created_at;
  }

  createTip() {
    var html = '<blockquote>';
    html += `<p>${this.content}</p>`;
    html += '</blockquote>';
    return html;
  }
}

function loadTips(plantTips) {
  debugger
  $('#plant-tips').empty();
  $.each(plantTips.tips, function(index, tip) {
    var tip_obj = new Tip(tip.content, tip.created_at);
    $('#plant-tips').append(tip_obj.createTip());
  });
}
