/* Menu transcribed from Cardapio Orlando Oficial.pdf. Prices are USD. */
const MENU = [
{ id:'signature', title:'Signature rolls', note:'Minimum order: 5 pieces per flavor', items:[
['Dragon','Cooked shrimp, cream cheese, torched salmon on top.','0-1'],
['Lava Roll','Kani, cream cheese, salmon pâté, spicy mayo and eel sauce on top.','0-2',true],
['Orlando Magic','Breaded shrimp, spicy kani salad, avocado, salmon, kewpie and eel sauce on top.','0-6',true],
['Miami Heat','Shrimp tempura, cream cheese and salmon, avocado, spicy mayo, eel sauce and crumbs on top.','0-3',true],
['Hura Spicy Mayo','Cooked shrimp, cream cheese, salmon, kani, spicy mayo and scallions on top.','0-5'],
['Rainbow','California roll topped with tuna, salmon and shrimp.','0-4',false,true],
['Passion Roll','Cooked shrimp, cream cheese, seared salmon, passion fruit sauce and tempura flakes on top.'],
['Torch Salmon','Cream cheese, salmon, torched salmon, crispy leek and eel sauce on top.',null,true],
['American Dream','Salmon, avocado, cucumber, torched salmon and roe on top.'],
['Hillsboro','Spicy tuna, shrimp tempura, avocado and tuna on top.'],
['Fantasy Roll','Salmon, tuna, escolar, avocado, tempura crumbs and eel sauce on top.',null,true],
['Dynamite Roll','Cucumber, avocado, shrimp tempura, crab salad, sriracha and jalapeño on top.',null,false,true],
['Yellowtail Roll','California roll with yellowtail and sriracha on top.',null,false,true],
['Eel Roll','California roll with unagi, eel sauce and scallions on top.',null,false,true]
]},
{id:'appetizers',title:'Appetizers',items:[
['Sushi Tartare','Kani (imitation crab), spicy mayo, roe, scallions and eel sauce, served with wonton chips.','0-21',true],
['Sunomono','Cucumber slices in sweet and sour sauce. Choice of salmon, tuna, escolar, yellowtail, kani or mix.','0-17',false,true],
['Fusion Ceviche','Tilapia, mango, grape tomato, cucumber, cilantro, lime sauce and kimchi.','0-15',true,true],
['Spring Rolls','Vegetables, cheese or beef.','0-25'],
['Rice Crispy','Crispy rice, spicy tuna, roe and house mayo on top.','0-16',true,true],
['Sushi Taco','Crispy seaweed, sushi rice, spicy salmon, roe and miso mayo on top.','0-18',true],
['Buttered Shimeji','Seasoned shimeji mushrooms, butter, soy sauce and scallions.','0-19',true],
['Salmon & Shrimp Croquette','Crispy croquette (coxinha) filled with salmon, shrimp and cream cheese, with sweet chili.','0-20'],
['Salmon Croquette','Salmon, cream cheese and panko, breaded.','0-26',true],
['Sake Ball','Salmon, cream cheese and eel sauce.','0-23',false,true],
['Shake House','Torched salmon, shrimp, cream cheese, spicy jelly and eel sauce.','0-24',false,true],
['Shrimp Tempura','Shrimp, tempura flour, deep fried.','0-27'],
['Yakisoba','Lo mein with beef, chicken and vegetables.','0-28'],
['Fried Rice','Beef and chicken.','0-29'],
['Hibachi (Teppan)','Choose your protein: beef, salmon, shrimp, octopus, picanha with Japanese farofa, or chicken.','0-22'],
['Seaweed Salad',''],['Miso Soup',''],['Pork Gyoza',''],['French Fries',''],['Salmon Cheese Pastries','Pastéis.'],['Edamame','Japanese soybeans.']
]},
{id:'classic',title:'Classic rolls',note:'Minimum order: 5 pieces per flavor',items:[
['JB Roll','Sushi rice, cream cheese and your choice of salmon, shrimp tempura, tuna, kani or salmon skin.','0-7',true],
['Avocado Roll','Sushi rice, avocado and your choice of salmon, shrimp tempura, tuna or kani.','0-8',false,true],
['Hossomaki','Seaweed on the outside, sushi rice and your choice of salmon or tuna.','0-9',false,true],
['California','Avocado, cucumber and kani.',null,true],
['Spicy Rolls','Cucumber, avocado, sriracha and your choice of spicy salmon or spicy tuna.',null,false,true],
['Yum Yum Roll','Grilled salmon, avocado, cucumber, yum yum sauce and tempura crumbs.']
]},
{id:'tempura',title:'Tempura',note:'Minimum order: 5 pieces per flavor',items:[
['Tempura Philadelphia','Salmon and cream cheese.','0-11',true],
['Chef Crunchy','Salmon, kani, cream cheese and spring roll wrapper.',null,true],
['Croc Philadelphia','Spring roll wrap, cream cheese and salmon.'],
['Tempura Spicy','Salmon and cream cheese with spicy salmon, scallions and eel sauce on top.','0-13'],
['JB Tempura','Salmon, kani, avocado and cream cheese.']
]},
{id:'bites',title:'Salmon bites',note:'Joy’s · Fresh salmon wrapped over sushi rice · Minimum 4 pieces per flavor',items:[
['Bit Joy Joy','Salmon pâté with cream cheese.'],['Bit Joy Toast','Torched salmon with cream cheese.'],['Bit Joy Ebi','Torched salmon, cooked shrimp, cream cheese, eel sauce and scallions.'],['Bit Joy Spicy Crispy','Torched salmon with spicy mayo, eel sauce and tempura flakes on top.'],['Bit Joy Passion Fruit','Cream cheese topped with passion fruit syrup.'],['Bit Joy Tempura','Torched salmon, shrimp tempura and spicy jelly.'],['Bit Joy Kani','Crab salad topped with spicy mayo and eel sauce.'],['Bit Joy Crispy Kale','Cream cheese topped with crispy kale.'],['Bit Joy Honey Brie','Brie cheese with honey on a toasted base.'],['Bit Joy Crispy Leek','Cream cheese with crispy leek on top.']
]},
{id:'temakis',title:'Temakis',note:'Hand rolls',items:[
['Salmon','Salmon, scallions and sesame seeds.','1-9'],
['Special Temak House','Cream cheese, toasted salmon and breaded shrimp.','1-8',true],
['Tuna','Tuna, scallions and sesame seeds.','1-15'],
['Phila Tempura','Salmon and cream cheese, breaded and deep fried.','1-10'],
['I-Drive Hand Roll','Open-style hand roll with fresh tuna or salmon, spicy mayo, avocado, scallions and sesame seeds, wrapped in crisp nori.','1-11'],
['Salmon Spicy','Salmon, sriracha and scallions.'],['Salmon Avocado','Salmon, avocado and spicy mayo.'],['Hamachi','Yellowtail, avocado, scallions and sesame seeds.'],['Salmon Skin','Salmon skin and cream cheese.'],['Spicy Octopus','Octopus with spicy mayo.'],['Kani','Kani (imitation crab) and cream cheese.'],['Tuna Spicy','Tuna, sriracha and scallions.'],['Ebi Croc','Breaded shrimp with cream cheese.'],['Phila House','Salmon with cream cheese, scallions and sesame seeds.',null,true],['Ebi Phila','Salmon with cream cheese, crispy shrimp, scallions and sesame seeds.']
]},
{id:'nigiri',title:'Nigiri & sashimi',note:'Nigiri special · Minimum order: 2 pieces',items:[
['Tuna Dona','Tuna, Prima Donna cheese and truffle teriyaki.','1-1',true],
['Yellowtail Lemon','Fresh yellowtail with lemon zest.','1-2'],
['Salmon Brulêe','Salmon, kewpie mayo and eel sauce, torched.','1-3',true],
['Golden Salmon','Salmon belly, miso mayo and roe.','1-4'],
['Chef-Inspired Nigiri','4 pieces, chef selection.','1-5'],
['Regular Nigiri','Salmon, tuna, escolar, unagi, shrimp, kani or octopus.','1-6'],
['Sashimis','Salmon, torched salmon, tuna, white fish, kani, shrimp, octopus or yellowtail.','1-7']
]},
{id:'carpaccios',title:'House carpaccios',items:[
['Tuna Nikkey','Seared tuna, special sauce, tempura crumbs, roe and ginger garlic sauce.','1-12'],
['Salmon Passion Fruit','Salmon with passion fruit sauce.','1-13',true],
['Tuna Tiraditos','Citrus sauce, togarashi and jalapeño.'],['Nascar','White fish, citrus sauce, roe and special mayonnaise.'],['Salmon Ponzu','Salmon in ponzu sauce.',null,true],['Salmon Spicy','Ponzu, sriracha and togarashi.'],['Salmon Truffle','Salmon with truffle house teriyaki.']
]},
{id:'sweets',title:'AYCE sweets',items:[
['Hot Banana with Nutella',''],['Hot Banana with Dulce de Leche',''],['Romeo and Juliet',''],['Sweet House','Vanilla ice cream with strawberry, Nutella and dulce de leche.'],['Cheese Ice Cream with Guava','']
]}
];
