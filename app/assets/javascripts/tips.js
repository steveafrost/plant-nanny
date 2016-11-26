var Tip = function(content) {
  this.content = content;


};

function loadTips(plantJSON) {
  $('#plant-tips').empty();
  $.each(plantJSON.tips, function(index, tip) {
    $('#plant-tips').append(assembleTipsHTML(tip));
  });
}

function assembleTipsHTML(tip) {
  html = '<blockquote>';
  html += `<p>${tip.content}</p>`;
  html += '</blockquote>';
  return html;
}
