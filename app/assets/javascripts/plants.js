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
    this.random_num = Math.floor(Math.random() * 14) + 1;
  }

  plantScore() {
    return this.difficulty * this.amount_of_water * this.frequency_of_water * this.amount_of_light / 10;
  }

  createCard() {
    return Plant.cardsTemplate(this);
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
      var plantObj = new Plant(response[i]);
      var plantCard = plantObj.createCard();
      $('#plants').append(plantCard);
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
