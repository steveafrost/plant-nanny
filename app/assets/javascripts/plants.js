class Plant {
  constructor(attributes) {
    this.id = attributes.id;
    this.name = attributes.name;
    this.difficulty = attributes.difficulty;
    this.amountOfLight = attributes.amount_of_light;
    this.amountOfWater = attributes.amount_of_water;
    this.frequencyOfWater = attributes.frequency_of_water;
    this.funFact = attributes.fun_fact;
    this.tips = attributes.tips;
    this.randomNum = Math.floor(Math.random() * 14) + 1;
    this.idMinus = this.id - 1;
    this.idPlus = this.id + 1;
  }

  // can use this in Handlebars if we can figure out conditional for idPlus to hide itself if it's higher than number of Plants in database
  removeNextOrPrevious() {
    this.idMinus = 0 ? this.idMinus = false : this.idMinus;
  }

  plantScore() {
    return this.difficulty * this.amountOfWater * this.frequencyOfWater * this.amountOfLight / 10;
  }

  createCard() {
    Plant.cardsTemplateSource = $('#plant-card-template').html();
    Plant.cardsTemplate = Handlebars.compile(Plant.cardsTemplateSource);
    var plantCard = Plant.cardsTemplate(this);
    $('#plants').append(plantCard);
  }

  createDetail() {
    Plant.detailsTemplateSource = $('#plant-details-template').html();
    Plant.detailsTemplate = Handlebars.compile(Plant.detailsTemplateSource);
    var plantDetails = Plant.detailsTemplate(this);
    $('.container-fluid').append(plantDetails);
  }

  createTipForm() {
    Plant.tipFormSource = $("#new-tip-template").html();
    Plant.tipFormtemplate = Handlebars.compile(Plant.tipFormSource);
    var tipForm = Plant.tipFormtemplate(this);
    $('div#plant-tips').prepend(tipForm);
  }
}

function loadPlantCards() {
  var i = $('.card').length;
  var endLoad = i + 6;

  $.get('/plants.json', function(response) {
    for (i; i < endLoad; i++) {
      var plantObj = new Plant(response[i]);
      var plantCard = plantObj.createCard();
    }
  });
}

function loadPlantDetails(plantId) {
  $.get('/plants/' + plantId + '.json', function(response) {
    $('.plant-details').remove();
    var plantObj = new Plant(response);
    var plantDetails = plantObj.createDetail();
    var tipForm = plantObj.createTipForm();
  });
}

function attachPlantListeners() {
  $('#js-more-plants').click(loadPlantCards);

  $(document).on('click', '#js-load-plant-details', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('#overlay').fadeIn(400);
    $('.plant-details').fadeIn(400);
    loadPlantDetails($(this).attr('href'));
  });

  $(document).on('mouseover', '.card-image', function() {
    $(this).css('background', 'rgba(0, 0, 0, 0.4)');
  });

  $(document).on('mouseout', '.card-image', function() {
    $(this).css('background', '');
  });

  $(document).on('click', '#js-next', function() {
    var nextPlant = $('#js-next').attr('data-id');
    loadPlantDetails(nextPlant);
  });

  $(document).on('click', '#js-previous', function() {
    var previousPlant = $('#js-previous').attr('data-id');
    loadPlantDetails(previousPlant);
  });

  $(document).on('click', '#overlay', function() {
    $('div.plant-details').fadeOut(400);
    $('div#all-tips.row').fadeOut(400);
    $('#overlay').fadeOut(400);
  });
}
