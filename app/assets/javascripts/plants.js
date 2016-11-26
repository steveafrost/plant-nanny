class Plant {
  constructor(id, name, difficulty, a_of_l, a_of_w, f_of_w, fun_fact) {
    this.id = id;
    this.name = name;
    this.difficulty = difficulty;
    this.amount_of_light = a_of_l;
    this.amount_of_water = a_of_w;
    this.frequency_of_water = f_of_w;
    this.fun_fact = fun_fact;
  }

  randomPhoto() {
    var random_num = Math.floor(Math.random() * 14) + 1;
    return `assets/random/${random_num}.jpg`;
  }

  plantScore() {
    return this.difficulty * this.amount_of_water * this.frequency_of_water * amount_of_light / 10;
  }

  plantCard() {
    var html = '<div class="col-sm-4"><div class="card"><div class="card-image">';
    html += `<img src="${this.randomPhoto()}" class="img-responsive">`;
    html += `<span class="card-title"><h3>${this.name}</h3>`;
    html += '<i class="fa fa-info"></i>';
    html += `<a href="/plants/${this.id}" class="details">View Details</a>`;
    html += '<i class="fa fa-pencil-square-o text-xs-right"></i>';
    html += `<a href="/plants/${this.id}/tips/new">Leave Tip</a>`;
    html += '</span></div></div></div>';
    return html;
  }

  plantDetails() {

  }
}

function loadPlantCards() {
  var currentPlants = $('.card').length;
  var endLoad = currentPlants + 6;

  $.get('/plants.json', function(response) {
    for (currentPlants; currentPlants < endLoad; currentPlants++) {
      var plant = response[currentPlants];
      var plant_obj = new Plant(plant.id, plant.name, plant.difficulty, plant.amount_of_light, plant.amount_of_water, plant.frequency_of_water, plant.fun_fact);
      $('#plants').append(plant_obj.plantCard());
    }
  });
}

function loadPlantDetails(plantPath) {
  $('#plant-details').fadeToggle(400);
  $.get(plantPath + '.json', function(response) {
    $('#plant-name').text(response.name);
    $('.fa-line-chart').text(response.difficulty);
    $('.fa-sun-o').text(response.amount_of_light);
    $('.fa-tint').text(response.amount_of_water);
    $('.fa-clock-o').text(response.frequency_of_water);
    $('#plant-fun-fact').text(response.fun_fact);
    $('#js-next').attr('data-id', response.id);
    $('#js-previous').attr('data-id', response.id);
    loadTips(response);
  });
}

function updatePlantDetails(data) {
  $('#plant-name').text(data.name);
  $('.fa-line-chart').text(data.difficulty);
  $('.fa-sun-o').text(data.amount_of_light);
  $('.fa-tint').text(data.amount_of_water);
  $('.fa-clock-o').text(data.frequency_of_water);
  $('#plant-fun-fact').text(data.fun_fact);
  $('#js-next').attr('data-id', data.id);
  $('#js-previous').attr('data-id', data.id);
  loadTips(data);
}


function attachListeners() {
  $('#js-more-plants').click(loadPlantCards);

  $('#plants').on('click', '.details', function(event) {
    var plantPath = $(this).attr('href');
    event.preventDefault();
    event.stopPropagation();
    $('#overlay').fadeToggle(400);
    loadPlantDetails(plantPath);
  });

  $('#plants').on('mouseover', '.card-image', function() {
    $(this).css('background', 'rgba(0, 0, 0, 0.4)');
  });

  $('#plants').on('mouseout', '.card-image', function() {
    $(this).css('background', '');
  });

  $('#plant-details').on('click', '#js-next', function() {
    var nextPlant = parseInt($('#js-next').attr('data-id')) + 1;
    $.get('/plants/' + nextPlant + '.json', function(response) {
      updatePlantDetails(response);
    });
  });

  $('#plant-details').on('click', '#js-previous', function() {
    var previousPlant = parseInt($('#js-previous').attr('data-id')) - 1;
    $.get('/plants/' + previousPlant + '.json', function(response) {
      updatePlantDetails(response);
    });
  });

  $('#plant-details').on('click', '#js-view-tips', function() {
    var plantId = $(this).attr('data-id');
    loadTips(plantId);
  });

  $('#overlay').on('click', function() {
    $('#plant-details').fadeToggle(400);
    $('#overlay').fadeToggle(400);
  });
}




$(function() {
  attachListeners();
  loadPlantCards();
});
