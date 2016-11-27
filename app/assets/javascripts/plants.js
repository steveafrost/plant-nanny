class Plant {
  constructor(attributes) {
    this.id = attributes.id;
    this.name = attributes.name;
    this.difficulty = attributes.difficulty;
    this.amount_of_light = attributes.amount_of_light;
    this.amount_of_water = attributes.amount_of_water;
    this.frequency_of_water = attributes.frequency_of_water;
    this.fun_fact = attributes.fun_fact;
    this.tips = attributes.tips;
  }

  randomPhoto() {
    var random_num = Math.floor(Math.random() * 14) + 1;
    return `assets/random/${random_num}.jpg`;
  }

  plantScore() {
    return this.difficulty * this.amount_of_water * this.frequency_of_water * this.amount_of_light / 10;
  }

  createCard() {
    var html = '<div class="col-sm-4"><div class="card"><div class="card-image">';
    html += `<img src="${this.randomPhoto()}" class="img-responsive">`;
    html += `<span class="card-title"><h3>${this.name} • ${this.plantScore()}</h3>`;
    html += '<i class="fa fa-info"></i>';
    html += `<a href="/plants/${this.id}" class="plant-details">View Details</a>`;
    html += '<i class="fa fa-pencil-square-o text-xs-right"></i>';
    html += `<a href="/plants/${this.id}" class="tip-details">Leave Tip</a>`;
    html += '</span></div></div></div>';
    return html;
  }

  createDetail() {
    $('#plant-name').text(this.name);
    $('.fa-line-chart').text(this.difficulty);
    $('.fa-sun-o').text(this.amount_of_light);
    $('.fa-tint').text(this.amount_of_water);
    $('.fa-clock-o').text(this.frequency_of_water);
    $('#plant-fun-fact').text(this.fun_fact);
    $('#js-next').attr('data-id', this.id + 1);
    $('#js-previous').attr('data-id', this.id - 1);
    loadTips(this.tips);
  }
}

$(function() {
  Plant.cardsTemplateSource = $('#plant-card-template').html();
  Plant.cardsTemplate = Handlebars.compile(Plant.cardsTemplateSource);
});

function loadPlantCards() {
  var i = $('.card').length;
  var endLoad = i + 6;

  $.get('/plants.json', function(response) {
    for (i; i < endLoad; i++) {
      var plant_obj = new Plant(response[i]);
      $('#plants').append(plant_obj.createCard());
    }
  });
}

function loadPlantDetails(clickedPlant) {
  $.get(clickedPlant + '.json', function(response) {
    var plant_obj = new Plant(response);
    plant_obj.createDetail();
  });
}

function attachPlantListeners() {
  $('#js-more-plants').click(loadPlantCards);

  $('#plants').on('click', '.plant-details', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('#overlay').fadeIn(400);
    $('#plant-details').fadeIn(400);
    loadPlantDetails($(this).attr('href'));
  });

  $('#plants').on('mouseover', '.card-image', function() {
    $(this).css('background', 'rgba(0, 0, 0, 0.4)');
  });

  $('#plants').on('mouseout', '.card-image', function() {
    $(this).css('background', '');
  });

  $('#plant-details').on('click', '#js-next', function() {
    var nextPlant = $('#js-next').attr('data-id');
    $.get('/plants/' + nextPlant + '.json', function(response) {
      var plant_obj = new Plant(response);
      plant_obj.createDetail();
    });
  });

  $('#plant-details').on('click', '#js-previous', function() {
    var previousPlant = $('#js-previous').attr('data-id');
    $.get('/plants/' + previousPlant + '.json', function(response) {
      var plant_obj = new Plant(response);
      plant_obj.createDetail();
    });
  });

  $('#overlay').on('click', function() {
    $('#plant-details').fadeOut(400);
    $('#tip-details').fadeOut(400);
    $('#overlay').fadeOut(400);
  });
}
