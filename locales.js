/* All translations are authored locally; no translation service or network calls. */
const UI = {
 en: {
  more:'More to explore',options:'options',guideTitle:'A menu to enjoy, your way.',guide1Title:'Find your category',guide1:'Browse rolls, hand rolls, starters and sweets.',guide2Title:'Choose your next bite',guide2:'Read the ingredients and look for the house favorites.',guide3Title:'Order with your server',guide3:'Check the minimum pieces per flavor in each section.',
  title:'Temak House Orlando · Menu', meta:'Explore the Temak House Orlando premium all-you-can-eat menu. Signature sushi rolls, hand rolls, nigiri and more.',
  skip:'Skip to menu',home:'Temak House Orlando home',experience:'The experience',language:'Select language',eyebrow:'PREMIUM ALL YOU CAN EAT',
  headline:'A little bold.<br>A lot of <em>flavor.</em>',intro:'Your favorites. A few new obsessions.<br>Find your next bite at Temak House.',explore:'Explore the menu',lunch:'Lunch',dinner:'Dinner',made:'Made to order.<br>Enjoy without limits.',
  scroll:'Scroll. Let the flavor flow.',visual:'Illustrative salmon sushi roll held by chopsticks, with tarê sauce poured as you scroll.',craft:'CRAFTED BITE BY BITE',sceneLabel:'THE FINISHING TOUCH',sceneTitle:'Made for this moment.',sceneText:'A roll. A little tarê. All the flavor.',illustration:'Illustrative image',
  categories:'Menu categories',collection:'THE TEMAK HOUSE COLLECTION',find:'Find your <em>favorite.</em>',best:'House best sellers',raw:'Raw or undercooked',favorite:'HOUSE FAVORITE',
  experienceEyebrow:'STAY A LITTLE. TASTE IT ALL.',experienceTitle:'Your table.<br><em>No limits.</em>',experienceBody:'Freshly prepared with high-quality ingredients and exceptional presentation. Enjoy unlimited selections crafted by our chefs.',under4:'Under 4 years old',ages:'Ages 4 to 10',priceNote:'An 18% gratuity is included in the final bill. A $2 charge per piece applies for excessive leftovers.',rawNote:'* Raw or undercooked. Kani is imitation crab.',allergy:'Please speak with your server about food allergies and dietary requirements.',footer:'Good food. Great company.',pdf:'Original PDF menu (English)',pause:'Pause animations',resume:'Resume animations',currency:'USD',
 },
 pt: {
  more:'Mais para experimentar',options:'opções',guideTitle:'Um cardápio para aproveitar do seu jeito.',guide1Title:'Encontre sua categoria',guide1:'Explore rolls, temakis, entradas e sobremesas.',guide2Title:'Escolha sua próxima peça',guide2:'Confira os ingredientes e os favoritos da casa.',guide3Title:'Peça à nossa equipe',guide3:'Veja o mínimo de peças por sabor em cada seção.',
  title:'Temak House Orlando · Cardápio',meta:'Explore o rodízio premium da Temak House Orlando. Rolls especiais, temakis, niguiris e muito mais.',
  skip:'Ir para o cardápio',home:'Temak House Orlando — início',experience:'A experiência',language:'Selecionar idioma',eyebrow:'RODÍZIO PREMIUM',
  headline:'Um toque ousado.<br>Muito <em>sabor.</em>',intro:'Seus favoritos. Novas paixões.<br>Encontre sua próxima escolha na Temak House.',explore:'Explorar o cardápio',lunch:'Almoço',dinner:'Jantar',made:'Preparado na hora.<br>Aproveite sem limites.',
  scroll:'Role a página. Deixe o sabor fluir.',visual:'Imagem ilustrativa de um roll de salmão segurado por hashis, com tarê caindo conforme a página é rolada.',craft:'CUIDADO EM CADA PEÇA',sceneLabel:'O TOQUE FINAL',sceneTitle:'Feito para este momento.',sceneText:'Um roll. Um toque de tarê. Muito sabor.',illustration:'Imagem ilustrativa',
  categories:'Categorias do cardápio',collection:'A SELEÇÃO TEMAK HOUSE',find:'Encontre seu <em>favorito.</em>',best:'Os mais pedidos da casa',raw:'Cru ou malpassado',favorite:'FAVORITO DA CASA',
  experienceEyebrow:'FIQUE MAIS. EXPERIMENTE TUDO.',experienceTitle:'Sua mesa.<br><em>Sem limites.</em>',experienceBody:'Pratos preparados na hora, com ingredientes de qualidade e apresentação especial. Aproveite as opções ilimitadas criadas pelos nossos chefs.',under4:'Menores de 4 anos',ages:'De 4 a 10 anos',priceNote:'Uma gorjeta de 18% está incluída na conta final. Há cobrança de US$ 2 por peça em caso de sobras excessivas.',rawNote:'* Cru ou malpassado. Kani é uma imitação de carne de caranguejo.',allergy:'Converse com a equipe sobre alergias e restrições alimentares.',footer:'Boa comida. Ótima companhia.',pdf:'Cardápio original em PDF (inglês)',pause:'Pausar animações',resume:'Retomar animações',currency:'USD',
 }
};
/* Named house rolls retain their proper names. Generic item names are localized. */
const MENU_PT = {
 signature:{title:'Rolls especiais',note:'Pedido mínimo: 5 peças por sabor',items:[
 ['Dragon','Camarão cozido, cream cheese e salmão maçaricado por cima.'],
 ['Lava Roll','Kani, cream cheese, patê de salmão, maionese picante e molho de enguia por cima.'],
 ['Orlando Magic','Camarão empanado, salada picante de kani, abacate, salmão, maionese Kewpie e molho de enguia por cima.'],
 ['Miami Heat','Tempurá de camarão, cream cheese e salmão, com abacate, maionese picante, molho de enguia e flocos crocantes por cima.'],
 ['Hura Spicy Mayo','Camarão cozido, cream cheese, salmão, kani, maionese picante e cebolinha por cima.'],
 ['Rainbow','Roll Califórnia coberto com atum, salmão e camarão.'],
 ['Passion Roll','Camarão cozido, cream cheese, salmão selado, molho de maracujá e flocos de tempurá por cima.'],
 ['Torch Salmon','Cream cheese, salmão, salmão maçaricado, alho-poró crocante e molho de enguia por cima.'],
 ['American Dream','Salmão, abacate e pepino, com salmão maçaricado e ovas por cima.'],
 ['Hillsboro','Atum picante, tempurá de camarão e abacate, com atum por cima.'],
 ['Fantasy Roll','Salmão, atum, peixe-prego e abacate, com flocos de tempurá e molho de enguia por cima.'],
 ['Dynamite Roll','Pepino, abacate, tempurá de camarão e salada de caranguejo, com sriracha e jalapeño por cima.'],
 ['Yellowtail Roll','Roll Califórnia com peixe-seriola e sriracha por cima.'],
 ['Eel Roll','Roll Califórnia com enguia, molho de enguia e cebolinha por cima.']
 ]},
 appetizers:{title:'Entradas',items:[
 ['Tartar de sushi','Kani (imitação de carne de caranguejo), maionese picante, ovas, cebolinha e molho de enguia, servido com chips de wonton.'],
 ['Sunomono','Fatias de pepino ao molho agridoce. Escolha: salmão, atum, peixe-prego, peixe-seriola, kani ou misto.'],
 ['Fusion Ceviche','Tilápia, manga, tomate grape, pepino, coentro, molho de limão e kimchi.'],
 ['Rolinhos primavera','Legumes, queijo ou carne bovina.'],
 ['Arroz crocante','Arroz crocante com atum picante, ovas e maionese da casa por cima.'],
 ['Taco de sushi','Alga crocante, arroz de sushi, salmão picante, ovas e maionese de missô por cima.'],
 ['Shimeji na manteiga','Shimeji temperado com manteiga, shoyu e cebolinha.'],
 ['Coxinha de salmão e camarão','Coxinha crocante recheada com salmão, camarão e cream cheese, com molho sweet chili.'],
 ['Croquete de salmão','Salmão e cream cheese empanados em farinha panko.'],
 ['Sake Ball','Salmão, cream cheese e molho de enguia.'],
 ['Shake House','Salmão maçaricado, camarão, cream cheese, geleia picante e molho de enguia.'],
 ['Tempurá de camarão','Camarão envolto em massa de tempurá e frito.'],
 ['Yakisoba','Macarrão com carne bovina, frango e legumes.'],
 ['Arroz frito','Com carne bovina e frango.'],
 ['Hibachi (Teppan)','Escolha sua proteína: carne bovina, salmão, camarão, polvo, picanha com farofa japonesa ou frango.'],
 ['Salada de algas',''],['Missoshiro',''],['Guioza de porco',''],['Batata frita',''],['Pastéis de salmão com queijo',''],['Edamame','Soja japonesa.']
 ]},
 classic:{title:'Rolls clássicos',note:'Pedido mínimo: 5 peças por sabor',items:[
 ['JB Roll','Arroz de sushi, cream cheese e sua escolha de salmão, tempurá de camarão, atum, kani ou pele de salmão.'],
 ['Roll de abacate','Arroz de sushi, abacate e sua escolha de salmão, tempurá de camarão, atum ou kani.'],
 ['Hossomaki','Alga por fora, arroz de sushi e sua escolha de salmão ou atum.'],
 ['Califórnia','Abacate, pepino e kani.'],
 ['Rolls picantes','Pepino, abacate, sriracha e sua escolha de salmão picante ou atum picante.'],
 ['Yum Yum Roll','Salmão grelhado, abacate, pepino, molho yum yum e flocos de tempurá.']
 ]},
 tempura:{title:'Tempurás',note:'Pedido mínimo: 5 peças por sabor',items:[
 ['Tempurá Philadelphia','Salmão e cream cheese.'],['Chef Crunchy','Salmão, kani, cream cheese e massa de rolinho primavera.'],['Croc Philadelphia','Massa de rolinho primavera, cream cheese e salmão.'],['Tempurá picante','Salmão e cream cheese, com salmão picante, cebolinha e molho de enguia por cima.'],['JB Tempurá','Salmão, kani, abacate e cream cheese.']
 ]},
 bites:{title:'Joys de salmão',note:'Salmão fresco envolvendo arroz de sushi · Mínimo de 4 peças por sabor',items:[
 ['Bit Joy Joy','Patê de salmão com cream cheese.'],['Bit Joy Toast','Salmão maçaricado com cream cheese.'],['Bit Joy Ebi','Salmão maçaricado, camarão cozido, cream cheese, molho de enguia e cebolinha.'],['Bit Joy Spicy Crispy','Salmão maçaricado com maionese picante, molho de enguia e flocos de tempurá por cima.'],['Bit Joy Passion Fruit','Cream cheese com calda de maracujá por cima.'],['Bit Joy Tempura','Salmão maçaricado, tempurá de camarão e geleia picante.'],['Bit Joy Kani','Salada de caranguejo com maionese picante e molho de enguia por cima.'],['Bit Joy Crispy Kale','Cream cheese com couve crocante por cima.'],['Bit Joy Honey Brie','Queijo brie com mel sobre uma base tostada.'],['Bit Joy Crispy Leek','Cream cheese com alho-poró crocante por cima.']
 ]},
 temakis:{title:'Temakis',note:'Enrolados à mão',items:[
 ['Salmão','Salmão, cebolinha e gergelim.'],['Especial Temak House','Cream cheese, salmão tostado e camarão empanado.'],['Atum','Atum, cebolinha e gergelim.'],['Phila Tempurá','Salmão e cream cheese, empanados e fritos.'],['I-Drive Hand Roll','Temaki aberto com atum fresco ou salmão, maionese picante, abacate, cebolinha e gergelim, envolto em alga nori crocante.'],['Salmão picante','Salmão, sriracha e cebolinha.'],['Salmão com abacate','Salmão, abacate e maionese picante.'],['Hamachi','Peixe-seriola, abacate, cebolinha e gergelim.'],['Pele de salmão','Pele de salmão e cream cheese.'],['Polvo picante','Polvo com maionese picante.'],['Kani','Kani (imitação de carne de caranguejo) e cream cheese.'],['Atum picante','Atum, sriracha e cebolinha.'],['Ebi Croc','Camarão empanado com cream cheese.'],['Phila House','Salmão com cream cheese, cebolinha e gergelim.'],['Ebi Phila','Salmão com cream cheese, camarão crocante, cebolinha e gergelim.']
 ]},
 nigiri:{title:'Niguiris e sashimis',note:'Niguiris especiais · Pedido mínimo: 2 peças',items:[
 ['Tuna Dona','Atum, queijo Prima Donna e teriyaki trufado.'],['Peixe-seriola com limão','Peixe-seriola fresco com raspas de limão.'],['Salmão Brulêe','Salmão com maionese Kewpie e molho de enguia, maçaricado.'],['Golden Salmon','Barriga de salmão, maionese de missô e ovas.'],['Niguiris do chef','4 peças selecionadas pelo chef.'],['Niguiris tradicionais','Salmão, atum, peixe-prego, enguia, camarão, kani ou polvo.'],['Sashimis','Salmão, salmão maçaricado, atum, peixe branco, kani, camarão, polvo ou peixe-seriola.']
 ]},
 carpaccios:{title:'Carpaccios da casa',items:[
 ['Tuna Nikkey','Atum selado, molho especial, flocos de tempurá, ovas e molho de gengibre e alho.'],['Salmão ao maracujá','Salmão com molho de maracujá.'],['Tuna Tiraditos','Molho cítrico, togarashi e jalapeño.'],['Nascar','Peixe branco, molho cítrico, ovas e maionese especial.'],['Salmão ao ponzu','Salmão ao molho ponzu.'],['Salmão picante','Ponzu, sriracha e togarashi.'],['Salmão trufado','Salmão com teriyaki trufado da casa.']
 ]},
 sweets:{title:'Sobremesas do rodízio',items:[
 ['Banana quente com Nutella',''],['Banana quente com doce de leite',''],['Romeu e Julieta',''],['Sweet House','Sorvete de baunilha com morango, Nutella e doce de leite.'],['Sorvete de queijo com goiabada','']
 ]}
};

const CATEGORY_INTROS = {
 en:{signature:'Our signature combinations, from torched salmon to crispy toppings.',appetizers:'Small beginnings, warm dishes and flavors to share.',classic:'The familiar combinations that always have a place at the table.',tempura:'Golden, crispy rolls served with a generous filling.',bites:'Fresh salmon wrapped around sushi rice, finished with your favorite topping.',temakis:'Hand-rolled nori with rice, fish and flavorful fillings.',nigiri:'Fish over rice, chef selections and sashimi cuts.',carpaccios:'Delicate slices with citrus, house sauces and finishing touches.',sweets:'A sweet finish to your all-you-can-eat experience.'},
 pt:{signature:'Combinações da casa, do salmão maçaricado às coberturas crocantes.',appetizers:'Entradas, pratos quentes e sabores para compartilhar.',classic:'As combinações conhecidas que sempre têm lugar à mesa.',tempura:'Rolls dourados e crocantes, com recheios generosos.',bites:'Salmão fresco envolvendo arroz de sushi, com a cobertura que você escolher.',temakis:'Alga enrolada à mão com arroz, peixes e recheios cheios de sabor.',nigiri:'Peixes sobre arroz, seleções do chef e cortes de sashimi.',carpaccios:'Fatias delicadas com toques cítricos e molhos da casa.',sweets:'Um final doce para a experiência do rodízio.'}
};
