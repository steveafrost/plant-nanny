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
    return this.difficulty * this.amount_of_water * this.frequency_of_water * this.amount_of_light / 10;
  }

  createCard() {
    var html = '<div class="col-sm-4"><div class="card"><div class="card-image">';
    html += `<img src="${this.randomPhoto()}" class="img-responsive">`;
    html += `<span class="card-title"><h3>${this.name} • ${this.plantScore()}</h3>`;
    html += '<i class="fa fa-info"></i>';
    html += `<a href="/plants/${this.id}" class="details">View Details</a>`;
    html += '<i class="fa fa-pencil-square-o text-xs-right"></i>';
    html += `<a href="/plants/${this.id}/tips/new">Leave Tip</a>`;
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
    $('#js-next').attr('data-id', this.id);
    $('#js-previous').attr('data-id', this.id);
  }
}

function loadPlantCards() {
  var currentPlants = $('.card').length;
  var endLoad = currentPlants + 6;

  $.get('/plants.json', function(response) {
    for (currentPlants; currentPlants < endLoad; currentPlants++) {
      var plant = response[currentPlants];
      var plant_obj = new Plant(plant.id, plant.name, plant.difficulty, plant.amount_of_light, plant.amount_of_water, plant.frequency_of_water, plant.fun_fact);
      $('#plants').append(plant_obj.createCard());
    }
  });
}

function loadPlantDetails(clickedPlant) {
  $.get(clickedPlant + '.json', function(response) {
    var plant = response;
    var plant_obj = new Plant(plant.id, plant.name, plant.difficulty, plant.amount_of_light, plant.amount_of_water, plant.frequency_of_water, plant.fun_fact);
    plant_obj.createDetail();
    loadTips(plant);
  });
}

function updatePlantDetails(clickedPlant) {
  var plant = clickedPlant;
  var plant_obj = new Plant(plant.id, plant.name, plant.difficulty, plant.amount_of_light, plant.amount_of_water, plant.frequency_of_water, plant.fun_fact);
  plant_obj.createDetail();
  loadTips(plant);
}


function attachListeners() {
  $('#js-more-plants').click(loadPlantCards);

  $('#plants').on('click', '.details', function(event) {
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
    var nextPlant = parseInt($('#js-next').attr('data-id')) + 1;
    $.get('/plants/' + nextPlant + '.json', function(plant) {
      var plant_obj = new Plant(plant.id, plant.name, plant.difficulty, plant.amount_of_light, plant.amount_of_water, plant.frequency_of_water, plant.fun_fact);
      updatePlantDetails(plant);
    });
  });

  $('#plant-details').on('click', '#js-previous', function() {
    var previousPlant = parseInt($('#js-previous').attr('data-id')) - 1;
    $.get('/plants/' + previousPlant + '.json', function(plant) {
      var plant_obj = new Plant(plant.id, plant.name, plant.difficulty, plant.amount_of_light, plant.amount_of_water, plant.frequency_of_water, plant.fun_fact);
      updatePlantDetails(plant);
    });
  });

  $('#overlay').on('click', function() {
    $('#plant-details').fadeOut(400);
    $('#overlay').fadeOut(400);
  });
}




$(function() {
  attachListeners();
  loadPlantCards();
});
