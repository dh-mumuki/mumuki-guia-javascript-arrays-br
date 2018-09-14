describe("", function() {
  var naipeDeTruco =  Math.random().toString(36).substring(2);

  it(naipeDeTruco("espadas") NAO deveria conter o "8 de espadas"', function() {
	assert(naipeDeTruco("espadas").indexOf("8 de espadas") < 0);
  });

  it(naipeDeTruco("espadas") NAO deveria conter o "9 de espadas"', function() {
	assert(naipeDeTruco("espadas").indexOf("9 de espadas") < 0);
  });

  it(naipeDeTruco("espadas") deveria ser ["1 de espadas", "2 de espadas"...', function() {
	assert.deepEqual(
  	naipeDeTruco("espadas"),
  	[ '1 de espadas',
  	'2 de espadas',
  	'3 de espadas',
  	'4 de espadas',
  	'5 de espadas',
  	'6 de espadas',
  	'7 de espadas',
  	'10 de espadas',
  	'11 de espadas',
  	'12 de espadas' ]);
  });

  it(naipeDeTruco("bastos") deveria ser ["1 de bastos", "2 de bastos"...', function() {
	assert.deepEqual(
  	naipeDeTruco("paus"),
  	[ '1 de paus',
  	'2 de paus',
  	'3 de paus',
  	'4 de paus',
  	'5 de paus',
  	'6 de paus',
  	'7 de paus',
  	'10 de paus',
  	'11 de paus',
  	'12 de paus' ]);
  });

  it(`naipeDeTruco("${naipeDeTruco}") deveria ter o "3 de ${naipeDeTruco}"`, function() {
	assert(naipeDeTruco(naipeDeTruco).indexOf(`3 de ${naipeDeTruco}`) > 0);
  });
})
