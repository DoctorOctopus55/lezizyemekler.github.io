// Tarif verileri ali can doldur
    const yemekler = [
    {
      "id": 1,
      "origin": "Adana",
      "title": "Adana Kebab",
      "image": "food/01.jpg",
      "description": "Spicy minced lamb grilled on skewers, a signature dish of Adana.",
      "ingredients": ["Lamb", "Red pepper", "Salt", "Black pepper", "Spices"],
      "recipe": "Mix lamb with red pepper, salt, black pepper, and spices. \nKnead well until fully blended. \nMold onto flat skewers tightly. \nGrill over hot charcoal, turning often. \nServe hot with bread. Done!"
    },
    {
      "id": 2,
      "origin": "Adiyaman",
      "title": "Cig Kofte",
      "image": "food/02.jpg",
      "description": "A spicy, kneaded bulgur mixture served raw, traditional in Adiyaman.",
      "ingredients": ["Bulgur", "Tomato paste", "Pepper paste", "Olive oil", "Red pepper", "Spices"],
      "recipe": "Place bulgur in a bowl and moisten slightly. \nAdd tomato paste, pepper paste, olive oil, red pepper, and spices. \nKnead by hand for 20-30 minutes until smooth. \nShape into small ovals. \nServe cold with lettuce or lemon. Done!"
    },
    {
      "id": 3,
      "origin": "Afyonkarahisar",
      "title": "Kaymakli Ekmek Kadayifi",
      "image": "food/03.jpg",
      "description": "A rich bread dessert soaked in syrup, topped with creamy kaymak, famous in Afyonkarahisar.",
      "ingredients": ["Bread", "Sugar", "Water", "Butter"],
      "recipe": "Boil sugar and water to make syrup. \nPlace bread in a tray and pour syrup over. \nLet it soak until fully absorbed. \nMelt butter and drizzle on top. \nServe warm with a dollop of yogurt instead of kaymak. Done!"
    },
    {
      "id": 4,
      "origin": "Agri",
      "title": "Abdigor Kofte",
      "image": "food/04.jpg",
      "description": "A meatball dish kneaded with spices, traditional in Agri region.",
      "ingredients": ["Beef", "Onion", "Garlic", "Black pepper", "Salt", "Spices"],
      "recipe": "Finely mince beef with onion and garlic. \nAdd salt, black pepper, and spices. \nKnead until it forms a smooth paste. \nShape into large meatballs. \nBoil or steam until cooked through. Done!"
    },
    {
      "id": 5,
      "origin": "Amasya",
      "title": "Bakla Dolmasi",
      "image": "food/05.jpg",
      "description": "Stuffed broad beans dish, a local favorite from Amasya.",
      "ingredients": ["Onion", "Olive oil", "Rice", "Tomato paste", "Parsley", "Spices"],
      "recipe": "Saute chopped onion in olive oil. \nAdd rice, tomato paste, parsley, and spices. \nMix well and let it cool. \nFill bean pods with mixture. \nSteam until tender. \nServe warm. Done!"
    },
    {
      "id": 6,
      "origin": "Ankara",
      "title": "Ankara Tava",
      "image": "food/06.jpg",
      "description": "A baked lamb and noodle dish, famous in Ankara.",
      "ingredients": ["Lamb", "Onion", "Tomato", "Pasta", "Butter", "Salt"],
      "recipe": "Saute chopped onion in butter. \nAdd diced lamb and cook until browned. \nAdd tomatoes and salt. \nSimmer until meat is tender. \nStir in cooked pasta. \nBake briefly and serve hot. Done!"
    },
    {
      "id": 7,
      "origin": "Antalya",
      "title": "Gozleme",
      "image": "food/07.jpg",
      "description": "Thin flatbread filled with savory ingredients, grilled on a pan.",
      "ingredients": ["Flour", "Cheese", "Parsley", "Olive oil", "Salt", "Water"],
      "recipe": "Mix flour, salt, and water into a dough. \nRoll out thin sheets. \nFill with cheese and chopped parsley. \nFold and seal edges. \nCook on oiled pan until golden. \nServe warm. Done!"
    },
    {
      "id": 8,
      "origin": "Artvin",
      "title": "Mahluta Corbasi",
      "image": "food/08.jpg",
      "description": "A hearty lentil-based soup popular in the Black Sea region.",
      "ingredients": ["Bulgur", "Onion", "Olive oil", "Carrots", "Salt", "Spices"],
      "recipe": "Saute chopped onion and carrots in olive oil. \nAdd bulgur, water, salt, and spices. \nSimmer until ingredients soften. \nMash lightly or blend for smooth texture. \nServe hot with lemon juice if desired. Done!"
    },
    {
      "id": 9,
      "origin": "Aydin",
      "title": "Cokertme Kebab",
      "image": "food/09.jpg",
      "description": "Thin fried potatoes topped with meat, yogurt, and sauce.",
      "ingredients": ["Beef", "Potatoes", "Yogurt", "Tomato paste", "Garlic", "Salt"],
      "recipe": "Fry thin potato slices until crisp. \nGrill sliced beef with salt. \nMix yogurt with crushed garlic. \nPlace potatoes on plate. \nTop with beef, yogurt, and tomato sauce. Done!"
    },
    {
      "id": 10,
      "origin": "Balikesir",
      "title": "Hoslok",
      "image": "food/10.jpg",
      "description": "A sweet cookie-like treat from Balikesir, simple and buttery.",
      "ingredients": ["Flour", "Sugar", "Butter", "Eggs"],
      "recipe": "Mix softened butter with sugar. \nAdd eggs and flour to form dough. \nShape into small rounds. \nBake until light golden. \nCool slightly and serve. Done!"
    },
    {
      "id": 74,
      "origin": "Bartin",
      "title": "Pumpum Corbasi",
      "image": "food/74.jpg",
      "description": "A traditional soup made with flour and butter, simple yet comforting from Bartin.",
      "ingredients": ["Flour", "Butter", "Water", "Salt"],
      "recipe": "Melt butter in a pot. \nAdd flour and stir until golden. \nSlowly add water while stirring. \nSimmer until slightly thickened. \nSeason with salt. Done!"
    },
    {
      "id": 72,
      "origin": "Batman",
      "title": "Icli Kofte",
      "image": "food/72.jpg",
      "description": "Deep-fried bulgur shells stuffed with spiced meat, a popular dish in Batman.",
      "ingredients": ["Bulgur", "Beef", "Onion", "Spices", "Salt", "Olive oil"],
      "recipe": "Soak bulgur and mix into dough. \nPrepare filling with minced beef, onion, and spices. \nShape dough into balls, fill with meat, and seal. \nFry in hot oil until golden. \nServe warm. Done!"
    },
    {
      "id": 69,
      "origin": "Bayburt",
      "title": "Galacos",
      "image": "food/69.jpg",
      "description": "A local dumpling-style dish made with flour and yogurt from Bayburt.",
      "ingredients": ["Flour", "Yogurt", "Garlic", "Butter", "Salt"],
      "recipe": "Prepare a stiff dough with flour and water. \nShape into small dumplings. \nBoil in salted water. \nTop with garlic yogurt and melted butter. \nServe hot. Done!"
    },
    {
      "id": 11,
      "origin": "Bilecik",
      "title": "Borek",
      "image": "food/11.jpg",
      "description": "Layered pastry with cheese filling, commonly prepared in Bilecik.",
      "ingredients": ["Flour", "Cheese", "Olive oil", "Eggs", "Salt", "Water"],
      "recipe": "Prepare dough with flour, water, and salt. \nRoll into thin sheets. \nLayer with cheese mixture. \nBrush with egg and olive oil. \nBake until golden. \nServe warm. Done!"
    },
    {
      "id": 12,
      "origin": "Bingol",
      "title": "Sirik",
      "image": "food/12.jpg",
      "description": "A meat and bulgur ball dish simmered in broth, traditional in Bingol.",
      "ingredients": ["Bulgur", "Beef", "Onion", "Salt", "Spices", "Water"],
      "recipe": "Mix bulgur with minced meat, onion, and spices. \nForm small balls. \nBoil in salted water until cooked. \nServe hot with broth. Done!"
    },
    {
      "id": 13,
      "origin": "Bitlis",
      "title": "Bitlis Kofte",
      "image": "food/13.jpg",
      "description": "A hearty meatball dish with cracked wheat from Bitlis.",
      "ingredients": ["Beef", "Bulgur", "Onion", "Garlic", "Spices", "Salt"],
      "recipe": "Mix bulgur with minced meat, onion, garlic, and spices. \nShape into oval patties. \nBoil or steam until cooked through. \nServe hot. Done!"
    },
    {
      "id": 14,
      "origin": "Bolu",
      "title": "Kedi Batmaz",
      "image": "food/14.jpg",
      "description": "A dense cornmeal dish, often served with yogurt in Bolu.",
      "ingredients": ["Cornmeal", "Water", "Salt", "Yogurt"],
      "recipe": "Boil water with salt. \nAdd cornmeal slowly while stirring. \nCook until thick and firm. \nServe sliced with yogurt. Done!"
    },
    {
      "id": 15,
      "origin": "Burdur",
      "title": "Burdur Kebabi",
      "image": "food/15.jpg",
      "description": "Oven-roasted minced meat skewers, a specialty of Burdur.",
      "ingredients": ["Beef", "Salt", "Black pepper", "Spices"],
      "recipe": "Mix ground beef with salt and spices. \nMold onto skewers. \nRoast in oven until browned. \nServe with bread. Done!"
    },
    {
      "id": 16,
      "origin": "Bursa",
      "title": "Iskender Kebab",
      "image": "food/16.jpg",
      "description": "Slices of doner meat over bread with tomato sauce and yogurt.",
      "ingredients": ["Beef", "Bread", "Tomato paste", "Butter", "Yogurt", "Salt"],
      "recipe": "Grill doner-style beef. \nPlace over bread slices. \nTop with tomato paste sauce and melted butter. \nAdd yogurt on the side. \nServe hot. Done!"
    },
    {
      "id": 17,
      "origin": "Canakkale",
      "title": "Tumbi",
      "image": "food/17.jpg",
      "description": "A local vegetable and bulgur dish from Canakkale.",
      "ingredients": ["Bulgur", "Onion", "Tomato", "Green pepper", "Olive oil", "Salt"],
      "recipe": "Saute onion and green pepper in olive oil. \nAdd chopped tomato and bulgur. \nPour water and season with salt. \nSimmer until bulgur is soft. \nServe warm. Done!"
    },
    {
      "id": 18,
      "origin": "Cankiri",
      "title": "Cankiri Yogurtlu Et",
      "image": "food/18.jpg",
      "description": "Boiled meat topped with yogurt and butter sauce, a classic from Cankiri.",
      "ingredients": ["Beef", "Yogurt", "Garlic", "Butter", "Salt"],
      "recipe": "Boil beef until tender. \nMix yogurt with crushed garlic and salt. \nPlace meat on plate. \nTop with garlic yogurt. \nDrizzle with melted butter. Done!"
    },
    {
      "id": 19,
      "origin": "Corum",
      "title": "Corum Iskilip Dolmasi",
      "image": "food/19.jpg",
      "description": "A rice and meat dish cooked in layered fashion, traditional in Corum.",
      "ingredients": ["Beef", "Rice", "Onion", "Butter", "Salt", "Black pepper"],
      "recipe": "Saute chopped onion in butter. \nLayer beef and rice in pot. \nAdd salt and black pepper. \nPour in water. \nCover and simmer until cooked. Done!"
    },
    {
      "id": 20,
      "origin": "Denizli",
      "title": "Denizli Tandir",
      "image": "food/20.jpg",
      "description": "Slow-cooked lamb traditionally prepared in a clay oven.",
      "ingredients": ["Lamb", "Salt", "Spices"],
      "recipe": "Rub lamb with salt and spices. \nPlace in covered clay pot. \nBake at low temperature for hours. \nServe tender with bread. Done!"
    },
    {
      "id": 21,
      "origin": "Diyarbakir",
      "title": "Meftune",
      "image": "food/21.jpg",
      "description": "A tangy stew with meat and eggplants from Diyarbakir.",
      "ingredients": ["Beef", "Eggplant", "Onion", "Tomato paste", "Garlic", "Lemon juice"],
      "recipe": "Saute onion and garlic. \nAdd meat and cook until browned. \nAdd tomato paste and lemon juice. \nAdd eggplants. \nSimmer until all is soft. Done!"
    },
    {
      "id": 81,
      "origin": "Duzce",
      "title": "Melenguccegi Tatlisi",
      "image": "food/81.jpg",
      "description": "A local dessert made with dough, walnuts, and syrup.",
      "ingredients": ["Flour", "Walnuts", "Butter", "Sugar", "Water"],
      "recipe": "Prepare dough and roll thin. \nFill with ground walnuts and fold. \nBake until golden. \nPour hot syrup over. \nCool and serve. Done!"
    },
    {
      "id": 22,
      "origin": "Edirne",
      "title": "Kavala Kurabiyesi",
      "image": "food/22.jpg",
      "description": "Almond-based cookies, soft and powdered, known in Edirne.",
      "ingredients": ["Flour", "Butter", "Sugar", "Nuts", "Eggs"],
      "recipe": "Mix butter and sugar. \nAdd eggs and chopped nuts. \nFold in flour. \nShape and bake. \nSprinkle with powdered sugar. Done!"
    },
    {
      "id": 23,
      "origin": "Elazig",
      "title": "Harput Koftesi",
      "image": "food/23.jpg",
      "description": "Meatballs with bulgur and tomato sauce from Elazig.",
      "ingredients": ["Beef", "Bulgur", "Tomato paste", "Onion", "Spices", "Salt"],
      "recipe": "Mix bulgur and minced beef. \nAdd onion and spices. \nShape into balls. \nSimmer in tomato paste sauce. \nServe warm. Done!"
    },
    {
      "id": 24,
      "origin": "Erzincan",
      "title": "Kesme Corbasi",
      "image": "food/24.jpg",
      "description": "Homemade noodle soup with yogurt and mint.",
      "ingredients": ["Flour", "Yogurt", "Mint", "Butter", "Salt", "Water"],
      "recipe": "Make dough and cut into noodles. \nBoil in salted water. \nMix yogurt with mint and add. \nTop with melted butter. \nServe hot. Done!"
    },
    {
      "id": 25,
      "origin": "Erzurum",
      "title": "Cag Kebab",
      "image": "food/25.jpg",
      "description": "Rotisserie-style lamb slices, a specialty of Erzurum.",
      "ingredients": ["Lamb", "Salt", "Black pepper", "Spices"],
      "recipe": "Marinate lamb with salt, pepper, and spices. \nSkewer and roast slowly. \nSlice and serve in lavash. Done!"
    },
    {
      "id": 26,
      "origin": "Eskisehir",
      "title": "Cigborek",
      "image": "food/26.jpg",
      "description": "Deep-fried pastries with a raw meat filling.",
      "ingredients": ["Flour", "Beef", "Onion", "Salt", "Black pepper", "Water"],
      "recipe": "Prepare dough with flour and water. \nFill with raw beef and onion mix. \nSeal and deep-fry until golden. \nServe hot. Done!"
    },
    {
      "id": 27,
      "origin": "Gaziantep",
      "title": "Ali Nazik",
      "image": "food/27.jpg",
      "description": "Smoked eggplant puree topped with sauteed meat, a famous dish from Gaziantep.",
      "ingredients": ["Eggplant", "Beef", "Yogurt", "Garlic", "Butter", "Salt"],
      "recipe": "Roast and peel eggplants. \nMash with yogurt, garlic, and salt. \nSaute beef in butter with salt. \nSpread eggplant mix on plate. \nTop with meat and serve. Done!"
    },
    {
      "id": 28,
      "origin": "Giresun",
      "title": "Karalahana Corbasi",
      "image": "food/28.jpg",
      "description": "A black cabbage soup, hearty and traditional in Giresun.",
      "ingredients": ["Onion", "Carrots", "Green pepper", "Cornmeal", "Olive oil", "Salt", "Water"],
      "recipe": "Saute onion, carrots, and pepper in olive oil. \nAdd chopped black cabbage and water. \nStir in cornmeal. \nSimmer until tender. \nServe hot. Done!"
    },
    {
      "id": 29,
      "origin": "Gumushane",
      "title": "Siron",
      "image": "food/29.jpg",
      "description": "Rolled pastry slices topped with yogurt and butter, common in Gumushane.",
      "ingredients": ["Flour", "Yogurt", "Butter", "Garlic", "Salt"],
      "recipe": "Prepare and bake thin dough. \nRoll and slice into pieces. \nPlace in tray. \nTop with garlic yogurt. \nDrizzle melted butter over. Done!"
    },
    {
      "id": 30,
      "origin": "Hakkari",
      "title": "Doledol",
      "image": "food/30.jpg",
      "description": "A baked bulgur and meat dish from Hakkari.",
      "ingredients": ["Bulgur", "Beef", "Onion", "Spices", "Salt", "Olive oil"],
      "recipe": "Saute onion and beef in olive oil. \nAdd bulgur, salt, and spices. \nTransfer to baking dish. \nBake until set. \nSlice and serve. Done!"
    },
    {
      "id": 31,
      "origin": "Hatay",
      "title": "Tepsi Kebabi",
      "image": "food/31.jpg",
      "description": "Spiced minced meat pressed into a tray and oven-baked, from Hatay.",
      "ingredients": ["Beef", "Onion", "Garlic", "Red pepper", "Tomato", "Salt", "Spices"],
      "recipe": "Mix minced beef with chopped onion, garlic, tomato, and spices. \nPress into tray. \nBake until golden. \nSlice and serve hot. Done!"
    },
    {
      "id": 32,
      "origin": "Isparta",
      "title": "Kabune",
      "image": "food/32.jpg",
      "description": "A pilaf with beef and onion, a well-known Isparta dish.",
      "ingredients": ["Beef", "Onion", "Rice", "Butter", "Salt", "Water"],
      "recipe": "Boil beef until soft. \nSaute onion in butter. \nAdd rice and stir. \nPour in beef broth and meat. \nSimmer until rice is done. Done!"
    },
    {
      "id": 34,
      "origin": "Istanbul",
      "title": "Saray Usulu Pilic",
      "image": "food/34.jpg",
      "description": "Ottoman-style chicken cooked with butter and rice.",
      "ingredients": ["Chicken", "Butter", "Rice", "Salt", "Black pepper", "Water"],
      "recipe": "Boil chicken with salt. \nSaute rice in butter. \nAdd chicken broth. \nPlace chicken pieces on top. \nSimmer until rice is cooked. Done!"
    },
    {
      "id": 35,
      "origin": "Izmir",
      "title": "Izmir Kofte",
      "image": "food/35.jpg",
      "description": "Meatballs baked with potatoes and tomato sauce, iconic to Izmir.",
      "ingredients": ["Beef", "Potatoes", "Tomato paste", "Onion", "Salt", "Spices"],
      "recipe": "Mix beef with onion and spices. \nShape into koftes. \nFry potatoes lightly. \nPlace in tray with koftes. \nTop with tomato paste sauce. \nBake until done. Done!"
    },
    {
      "id": 46,
      "origin": "Kahramanmaras",
      "title": "Kagit Kebabi",
      "image": "food/46.jpg",
      "description": "Meat and vegetables cooked in parchment, a specialty from Kahramanmaras.",
      "ingredients": ["Lamb", "Tomato", "Green pepper", "Onion", "Spices", "Salt"],
      "recipe": "Combine lamb, chopped vegetables, salt, and spices. \nWrap in parchment paper. \nBake until tender. \nServe in paper. Done!"
    },
    {
      "id": 78,
      "origin": "Karabuk",
      "title": "Cevizli Yufka",
      "image": "food/78.jpg",
      "description": "Thin pastry with walnut filling, traditional in Karabuk.",
      "ingredients": ["Flour", "Walnuts", "Butter", "Sugar", "Water"],
      "recipe": "Prepare yufka sheets. \nFill with ground walnuts. \nRoll and place in tray. \nBake until crisp. \nPour syrup over. Done!"
    },
    {
      "id": 70,
      "origin": "Karaman",
      "title": "Bugu Kebab",
      "image": "food/70.jpg",
      "description": "Slow-cooked lamb with vegetables, a traditional dish from Karaman.",
      "ingredients": ["Lamb", "Onion", "Carrots", "Potatoes", "Salt", "Spices"],
      "recipe": "Chop vegetables and place in pot. \nAdd lamb pieces, salt, and spices. \nCover and cook slowly over low heat. \nSimmer until meat is tender. \nServe hot. Done!"
    },
    {
      "id": 36,
      "origin": "Kars",
      "title": "Kars Kaz Eti",
      "image": "food/36.jpg",
      "description": "Roasted goose served with bulgur pilaf, a famous specialty of Kars.",
      "ingredients": ["Goose", "Bulgur", "Onion", "Butter", "Salt", "Black pepper"],
      "recipe": "Roast goose until skin is crisp. \nSaute onion in butter. \nAdd bulgur, salt, and pepper. \nPour in broth and simmer. \nServe with sliced goose. Done!"
    },
    {
      "id": 37,
      "origin": "Kastamonu",
      "title": "Etli Ekmek",
      "image": "food/37.jpg",
      "description": "Flatbread topped with minced meat mixture, common in Kastamonu.",
      "ingredients": ["Flour", "Beef", "Onion", "Tomato paste", "Green pepper", "Spices"],
      "recipe": "Prepare dough and roll into flat rounds. \nMix minced meat with vegetables and spices. \nSpread on dough. \nBake until edges are crisp. \nSlice and serve. Done!"
    },
    {
      "id": 38,
      "origin": "Kayseri",
      "title": "Manti",
      "image": "food/38.jpg",
      "description": "Tiny meat-filled dumplings served with yogurt and butter sauce.",
      "ingredients": ["Flour", "Beef", "Onion", "Yogurt", "Butter", "Garlic", "Salt"],
      "recipe": "Prepare dough and cut into small squares. \nFill with minced meat and onion. \nPinch to seal. \nBoil until cooked. \nServe with garlic yogurt and butter sauce. Done!"
    },
    {
      "id": 79,
      "origin": "Kilis",
      "title": "Kilis Tava",
      "image": "food/79.jpg",
      "description": "Minced meat baked in tray with vegetables, a specialty from Kilis.",
      "ingredients": ["Beef", "Tomato", "Green pepper", "Onion", "Spices", "Salt"],
      "recipe": "Mix all ingredients. \nPress into baking tray. \nBake until meat is browned. \nSlice and serve hot. Done!"
    },
    {
      "id": 71,
      "origin": "Kirikkale",
      "title": "Kirikkale Kesme Corbasi",
      "image": "food/71.jpg",
      "description": "Homemade noodle soup with simple ingredients, common in Kirikkale.",
      "ingredients": ["Flour", "Water", "Butter", "Mint", "Salt"],
      "recipe": "Make dough and cut into small noodles. \nBoil in salted water. \nAdd butter and dried mint. \nSimmer briefly. \nServe warm. Done!"
    },
    {
      "id": 39,
      "origin": "Kirklareli",
      "title": "Papara",
      "image": "food/39.jpg",
      "description": "A dish made with old bread, butter, and yogurt, traditional in Kirklareli.",
      "ingredients": ["Bread", "Butter", "Yogurt", "Garlic", "Salt"],
      "recipe": "Cube bread and toast in butter. \nMix yogurt with garlic and salt. \nPour over bread. \nServe immediately. Done!"
    },
    {
      "id": 40,
      "origin": "Kirsehir",
      "title": "Kesme Asi",
      "image": "food/40.jpg",
      "description": "A hearty soup with noodles and chickpeas from Kirsehir.",
      "ingredients": ["Flour", "Onion", "Butter", "Water", "Salt", "Spices"],
      "recipe": "Prepare noodles from flour and water. \nSaute onion in butter. \nAdd noodles, water, and spices. \nSimmer until cooked. \nServe hot. Done!"
    },
    {
      "id": 41,
      "origin": "Kocaeli",
      "title": "Pismaniye",
      "image": "food/41.jpg",
      "description": "Sweet floss-like dessert made from flour and sugar, famous in Kocaeli.",
      "ingredients": ["Flour", "Sugar", "Butter"],
      "recipe": "Roast flour in butter until golden. \nMelt sugar to syrup. \nMix both by pulling into strands. \nCool and shape into balls. Done!"
    },
    {
      "id": 42,
      "origin": "Konya",
      "title": "Konya Etli Ekmek",
      "image": "food/42.jpg",
      "description": "Thin flatbread topped with seasoned minced meat, iconic to Konya.",
      "ingredients": ["Flour", "Beef", "Onion", "Tomato", "Spices", "Salt"],
      "recipe": "Prepare dough and roll thin. \nMix beef with chopped vegetables and spices. \nSpread on dough. Bake until crispy. \nSlice and serve. Done!"
    },
    {
      "id": 43,
      "origin": "Kutahya",
      "title": "Sini Mantisi",
      "image": "food/43.jpg",
      "description": "Tray-baked dumplings with yogurt and tomato sauce, from Kutahya.",
      "ingredients": ["Flour", "Beef", "Onion", "Yogurt", "Butter", "Tomato paste", "Salt"],
      "recipe": "Prepare dough and cut into squares. \nFill with meat and seal. \nArrange in tray. \nBake until golden. \nServe with yogurt and tomato butter sauce. Done!"
    },
    {
      "id": 44,
      "origin": "Malatya",
      "title": "Anali Kizli",
      "image": "food/44.jpg",
      "description": "Soup with bulgur meatballs and chickpeas, traditional in Malatya.",
      "ingredients": ["Bulgur", "Beef", "Onion", "Tomato paste", "Spices", "Salt"],
      "recipe": "Make large stuffed and small plain meatballs from bulgur. \nSaute onion and tomato paste. \nAdd meatballs, water, and spices. \nSimmer until cooked. \nServe hot. Done!"
    },
    {
      "id": 45,
      "origin": "Manisa",
      "title": "Manisa Kebabi",
      "image": "food/45.jpg",
      "description": "Kebab with meat, tomato sauce, and yogurt, a specialty from Manisa.",
      "ingredients": ["Beef", "Tomato paste", "Butter", "Yogurt", "Bread", "Salt"],
      "recipe": "Grill meat pieces. \nPlace on bread. \nTop with tomato butter sauce. \nServe with yogurt. \nGarnish and serve hot. Done!"
    },
    {
      "id": 47,
      "origin": "Mardin",
      "title": "Irok",
      "image": "food/47.jpg",
      "description": "A deep-fried bulgur shell stuffed with spiced meat, from Mardin.",
      "ingredients": ["Bulgur", "Beef", "Onion", "Spices", "Salt", "Sunflower oil"],
      "recipe": "Prepare shell from bulgur and water. \nStuff with meat and spices. \nShape and seal. \nDeep fry until golden. \nServe warm. Done!"
    },
    {
      "id": 33,
      "origin": "Mersin",
      "title": "Tantuni",
      "image": "food/33.jpg",
      "description": "Sauteed beef wrap with spices and vegetables, famous in Mersin.",
      "ingredients": ["Beef", "Onion", "Tomato", "Parsley", "Spices", "Bread"],
      "recipe": "Saute finely chopped beef in spices. \nWarm bread. \nFill with beef, onion, tomato, and parsley. \nWrap and serve hot. Done!"
    },
    {
      "id": 48,
      "origin": "Mugla",
      "title": "Cokertme Kebabi",
      "image": "food/48.jpg",
      "description": "Thin fries topped with yogurt and sauteed meat from Mugla.",
      "ingredients": ["Beef", "Potatoes", "Yogurt", "Garlic", "Butter", "Salt"],
      "recipe": "Fry thin potato strips. \nSaute beef with butter and salt. \nSpread yogurt on plate. \nAdd fries and meat on top. \nServe warm. Done!"
    },
    {
      "id": 49,
      "origin": "Mus",
      "title": "Hez Dolmasi",
      "image": "food/49.jpg",
      "description": "Stuffed cabbage with rice and spices, traditional in Mus.",
      "ingredients": ["Cabbage", "Rice", "Onion", "Tomato paste", "Spices", "Salt"],
      "recipe": "Boil cabbage leaves. \nMix rice with onion, tomato paste, and spices. \nWrap in leaves. \nPlace in pot with water. \nSimmer until tender. Done!"
    },
    {
      "id": 50,
      "origin": "Nevsehir",
      "title": "Testi Kebabi",
      "image": "food/50.jpg",
      "description": "Meat and vegetables cooked in sealed clay pot, unique to Nevsehir.",
      "ingredients": ["Beef", "Tomato", "Green pepper", "Onion", "Garlic", "Salt"],
      "recipe": "Fill clay pot with ingredients. \nSeal and bake in oven. \nBreak pot at table. \nServe hot with bread. Done!"
    },
    {
      "id": 51,
      "origin": "Nigde",
      "title": "Nigde Tava",
      "image": "food/51.jpg",
      "description": "Meat and vegetable stew baked in tray, typical for Nigde.",
      "ingredients": ["Lamb", "Tomato", "Green pepper", "Onion", "Salt", "Spices"],
      "recipe": "Chop all ingredients. \nMix with spices. \nSpread in baking tray. \nBake until meat is tender. \nServe hot. Done!"
    },
    {
      "id": 52,
      "origin": "Ordu",
      "title": "Misir Ekmegi",
      "image": "food/52.jpg",
      "description": "Cornbread made with cornmeal and yogurt, traditional in Ordu.",
      "ingredients": ["Cornmeal", "Yogurt", "Butter", "Salt", "Water"],
      "recipe": "Mix all ingredients. \nPour into greased pan. \nBake until golden. \nCool slightly and slice. \nServe warm. Done!"
    },
    {
      "id": 80,
      "origin": "Osmaniye",
      "title": "Etli Kabak Dolmasi",
      "image": "food/80.jpg",
      "description": "Zucchini stuffed with spiced ground meat and rice, a local Osmaniye specialty.",
      "ingredients": ["Zucchini", "Beef", "Rice", "Onion", "Tomato paste", "Spices", "Salt"],
      "recipe": "Hollow out zucchini. \nMix beef, rice, onion, tomato paste, and spices. \nFill zucchini. \nPlace in pot with water. \nSimmer until tender. Done!"
    },
    {
      "id": 53,
      "origin": "Rize",
      "title": "Laz Boregi",
      "image": "food/53.jpg",
      "description": "Sweet layered pastry with semolina custard, a dessert from Rize.",
      "ingredients": ["Flour", "Butter", "Sugar", "Eggs", "Milk", "Semolina"],
      "recipe": "Prepare phyllo sheets. \nCook semolina custard. \nLayer sheets with custard. \nBake until golden. \nPour syrup and serve. Done!"
    },
    {
      "id": 54,
      "origin": "Sakarya",
      "title": "Islama Kofte",
      "image": "food/54.jpg",
      "description": "Grilled meatballs served with broth-soaked bread, a staple in Sakarya.",
      "ingredients": ["Beef", "Bread", "Onion", "Garlic", "Salt", "Black pepper"],
      "recipe": "Mix beef with onion, garlic, salt, and pepper. \nShape into meatballs. \nGrill meatballs and bread. \nDip bread in broth. \nServe together. Done!"
    },
    {
      "id": 55,
      "origin": "Samsun",
      "title": "Bafra Pidesi",
      "image": "food/55.jpg",
      "description": "Boat-shaped pastry filled with minced meat, famous in Samsun.",
      "ingredients": ["Flour", "Beef", "Onion", "Tomato paste", "Salt", "Spices"],
      "recipe": "Prepare dough and shape like a boat. \nFill with seasoned beef mix. \nBake until crispy. \nServe hot. Done!"
    },
    {
      "id": 56,
      "origin": "Siirt",
      "title": "Perde Pilavi",
      "image": "food/56.jpg",
      "description": "Stuffed rice pilaf encased in dough and baked, traditional in Siirt.",
      "ingredients": ["Rice", "Chicken", "Onion", "Butter", "Salt", "Spices", "Flour"],
      "recipe": "Cook rice with chicken, onion, and spices. \nLine mold with dough. \nFill with pilaf. \nSeal and bake until golden. Done!"
    },
    {
      "id": 57,
      "origin": "Sinop",
      "title": "Sinop Mantisi",
      "image": "food/57.jpg",
      "description": "Larger dumplings served with garlic yogurt and butter, from Sinop.",
      "ingredients": ["Flour", "Beef", "Onion", "Yogurt", "Butter", "Garlic", "Salt"],
      "recipe": "Make dough and cut into squares. \nFill with meat and seal. \nBoil until soft. \nTop with garlic yogurt and butter. Done!"
    },
    {
      "id": 58,
      "origin": "Sivas",
      "title": "Sivas Koftesi",
      "image": "food/58.jpg",
      "description": "Grilled meatballs with bulgur, unique to Sivas.",
      "ingredients": ["Beef", "Bulgur", "Onion", "Salt", "Spices"],
      "recipe": "Soak bulgur and mix with beef. \nAdd onion, salt, and spices. \nShape into patties. \nGrill and serve. Done!"
    },
    {
      "id": 63,
      "origin": "Sanliurfa",
      "title": "Urfa Cig Kofte",
      "image": "food/63.jpg",
      "description": "Raw bulgur mix with spices and tomato, traditionally kneaded by hand.",
      "ingredients": ["Bulgur", "Tomato paste", "Red pepper", "Garlic", "Olive oil", "Spices"],
      "recipe": "Mix bulgur, pastes, garlic, and spices. \nKnead until soft. \nShape into small logs. \nServe with lettuce and lemon. Done!"
    },
    {
      "id": 73,
      "origin": "Sirnak",
      "title": "Serbidev",
      "image": "food/73.jpg",
      "description": "Lamb cooked in its own fat with spices, traditional in Sirnak.",
      "ingredients": ["Lamb", "Salt", "Spices"],
      "recipe": "Cut lamb into small pieces. \nPlace in pot with salt and spices. \nCook slowly in its own fat. \nServe hot. Done!"
    },
    {
      "id": 59,
      "origin": "Tekirdag",
      "title": "Tekirdag Koftesi",
      "image": "food/59.jpg",
      "description": "Famous grilled meatballs seasoned uniquely, from Tekirdag.",
      "ingredients": ["Beef", "Onion", "Garlic", "Bread Crumbs", "Salt", "Black pepper"],
      "recipe": "Mix all ingredients well. \nShape into meatballs. \nGrill until cooked through. \nServe hot with side salad. Done!"
    },
    {
      "id": 60,
      "origin": "Tokat",
      "title": "Tokat Kebab",
      "image": "food/60.jpg",
      "description": "Meat and vegetables roasted together in a special Tokat oven.",
      "ingredients": ["Lamb", "Potatoes", "Eggplant", "Green pepper", "Tomato", "Salt", "Olive oil"],
      "recipe": "Slice vegetables and meat. \nLayer in tray with olive oil and salt. \nRoast until tender. \nServe hot. Done!"
    },
    {
      "id": 61,
      "origin": "Trabzon",
      "title": "Hamsi Pilavi",
      "image": "food/61.jpg",
      "description": "Anchovy layered rice dish from Trabzon.",
      "ingredients": ["Rice", "Anchovy", "Onion", "Parsley", "Butter", "Salt", "Black pepper"],
      "recipe": "Clean anchovies. \nSaute onion in butter. \nMix with rice, parsley, salt, and pepper. \nLayer anchovies and rice in pan. \nBake until golden. Done!"
    },
    {
      "id": 62,
      "origin": "Tunceli",
      "title": "Gulik",
      "image": "food/62.jpg",
      "description": "Meat and bulgur dish with wild herbs, traditional in Tunceli.",
      "ingredients": ["Bulgur", "Beef", "Onion", "Wild herbs", "Butter", "Salt"],
      "recipe": "Boil meat until soft. \nAdd bulgur, herbs, and onion. \nCook with butter and salt. \nSimmer until thick. \nServe warm. Done!"
    },
    {
      "id": 64,
      "origin": "Usak",
      "title": "Tarhana Corbasi",
      "image": "food/64.jpg",
      "description": "Fermented tarhana soup, a warming traditional meal.",
      "ingredients": ["Tarhana", "Tomato paste", "Butter", "Garlic", "Salt", "Water"],
      "recipe": "Mix tarhana with water. \nCook with tomato paste, butter, and garlic. \nSimmer until thick. \nServe hot. Done!"
    },
    {
      "id": 65,
      "origin": "Van",
      "title": "Murtuga",
      "image": "food/65.jpg",
      "description": "Egg and flour-based breakfast dish from Van.",
      "ingredients": ["Flour", "Butter", "Eggs", "Salt"],
      "recipe": "Roast flour in butter. \nAdd eggs and salt. \nCook until set. \nServe hot. Done!"
    },
    {
      "id": 77,
      "origin": "Yalova",
      "title": "Yalova Corbasi",
      "image": "food/77.jpg",
      "description": "Soup made with lamb, rice, and vegetables from Yalova.",
      "ingredients": ["Lamb", "Rice", "Carrots", "Onion", "Butter", "Salt"],
      "recipe": "Boil lamb with vegetables. \nAdd rice and butter. \nSimmer until soft. \nServe warm. Done!"
    },
    {
      "id": 66,
      "origin": "Yozgat",
      "title": "Arabasi",
      "image": "food/66.jpg",
      "description": "Spicy chicken soup served with cold starch dough.",
      "ingredients": ["Chicken", "Flour", "Butter", "Red pepper", "Salt", "Water"],
      "recipe": "Cook chicken with butter and pepper. \nPrepare starch dough separately. \nServe soup with dough pieces. Done!"
    },
    {
      "id": 67,
      "origin": "Zonguldak",
      "title": "Uveyik Pilavi",
      "image": "food/67.jpg",
      "description": "Rice dish with green lentils and bulgur, from Zonguldak.",
      "ingredients": ["Bulgur", "Green lentils", "Onion", "Butter", "Salt"],
      "recipe": "Boil lentils. \nSaute onion in butter. \nAdd bulgur and lentils. \nSimmer with water. \nServe warm. Done!"
    },
    {
      "id": 68,
      "origin": "Aksaray",
      "title": "Soganli Yahni",
      "image": "food/68.jpg",
      "description": "Meat stew with whole onions, traditional in Aksaray.",
      "ingredients": ["Beef", "Onion", "Tomato paste", "Butter", "Salt", "Spices"],
      "recipe": "Brown meat in butter. \nAdd whole onions and paste. \nSeason and add water. \nSimmer until tender. \nServe hot. Done!"
    },
    {
      "id": 76,
      "origin": "Igdir",
      "title": "Bozartma",
      "image": "food/76.jpg",
      "description": "Lamb stew with onion and spices, a traditional Igdir dish.",
      "ingredients": ["Lamb", "Onion", "Salt", "Black pepper", "Butter"],
      "recipe": "Cut lamb into chunks. \nSaute in butter until browned. \nAdd sliced onions, salt, and pepper. \nCover and simmer on low heat. \nCook until meat is tender. \nServe hot. Done!"
    },
    {
    "id": 40,
    "origin": "Kirsehir",
    "title": "Kirsehir Kesme Asi",
    "image": "food/40.jpg",
    "description": "A hearty soup with noodles and chickpeas from Kirsehir.",
    "ingredients": ["Flour", "Onion", "Butter", "Water", "Salt", "Spices"],
    "recipe": "Prepare noodles from flour and water. \nSaute onion in butter. \nAdd noodles, water, and spices. \nSimmer until cooked. \nServe hot. Done!"
  },
  {
    "id": 75,
    "origin": "Ardahan",
    "title": "Hengel",
    "image": "food/75.jpg",
    "description": "Flat dumplings served with yogurt and garlic butter, traditional in Ardahan.",
    "ingredients": ["Flour", "Eggs", "Salt", "Yogurt", "Garlic", "Butter"],
    "recipe": "Prepare dough with flour, eggs, and salt. \nRoll and cut into squares. \nBoil in salted water until tender. \nTop with garlic yogurt. \nDrizzle with melted butter. Done!"
  }
  ]; 

// HTML elemanları
const cityContainer = document.querySelector('main.city-container');
const recipeDisplay = document.getElementById('recipe-display');

// Türkiye illeri (sıra ve isimler)
const cityList = [
  "Adana","Adiyaman","Afyonkarahisar","Agri","Amasya","Ankara","Antalya","Artvin","Aydin","Balikesir",
  "Bilecik","Bingol","Bitlis","Bolu","Burdur","Bursa","Canakkale","Cankiri","Corum","Denizli",
  "Diyarbakir","Edirne","Elazig","Erzincan","Erzurum","Eskisehir","Gaziantep","Giresun","Gumushane","Hakkari",
  "Hatay","Isparta","Mersin","Istanbul","Izmir","Kars","Kastamonu","Kayseri","Kirklareli","Kirsehir",
  "Kocaeli","Konya","Kutahya","Malatya","Manisa","Kahramanmaras","Mardin","Mugla","Mus","Nevsehir",
  "Nigde","Ordu","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas","Tekirdag","Tokat",
  "Trabzon","Tunceli","Sanliurfa","Usak","Van","Yozgat","Zonguldak","Aksaray","Bayburt","Karaman",
  "Kirikkale","Batman","Sirnak","Bartin","Ardahan","Igdir","Yalova","Karabuk","Kilis","Osmaniye","Duzce"
];

// Diziyi belirtilen büyüklükte parçalara böler
function chunkArray(arr, size) {
  const result = []; // Bölünmüş parçaları tutacak dizi
  for(let i = 0; i < arr.length; i += size) {
    // arr dizisinden i'den i+size'a kadar bir parça al ve result'a ekle
    result.push(arr.slice(i, i + size));
  }
  return result; // Bölünmüş dizi parçalarını döndür
}

// Şehir butonlarını oluşturur ve sayfaya ekler
function createCityButtons() {
  const groups = chunkArray(cityList, 20); // cityList dizisini 20'şer elemanlık gruplara ayır
  groups.forEach(group => {
    const groupDiv = document.createElement('div'); // Her grup için bir div oluştur
    groupDiv.classList.add('city-group'); // div'e class ekle (grid yapısı için)
    group.forEach(city => {
      const btn = document.createElement('button'); // Buton oluştur
      btn.classList.add('city-button'); // Butona stil için class ekle
      const index = cityList.indexOf(city) + 1; // Şehrin listedeki sıra numarası (1 bazlı)
      const paddedIndex = index.toString().padStart(2, '0'); // 01, 02 gibi iki haneli plaka kodu yap
      btn.textContent = paddedIndex + ' ' + city; // Buton yazısı: plaka + şehir adı
      btn.dataset.city = city; // Butona veri-özellik olarak şehir adı ekle

      // Butonun arka planına şehir plaka numarasına göre görsel ekle
      btn.style.backgroundImage = `url('food/${paddedIndex}.jpg')`;
      btn.style.backgroundSize = 'cover'; // Görsel butonu kaplasın
      btn.style.backgroundPosition = 'center'; // Görsel ortalı olsun
      btn.style.color = '#fff'; // Yazı rengini beyaz yap, okunabilirlik için

      // Butona tıklanınca o şehrin tarifini gösteren fonksiyonu çağır
      btn.addEventListener('click', () => openCityRecipe(city));
      groupDiv.appendChild(btn); // Butonu gruba ekle
    });
    cityContainer.appendChild(groupDiv); // Grubu ana konteynıra ekle
  });
}

// Seçilen şehir adına göre yemek tarifini gösterir
function openCityRecipe(cityName) {
  // cityName'e göre yemekler dizisinde arama yap
  const yemek = yemekler.find(y => y.origin.toLowerCase() === cityName.toLowerCase());
  if (yemek) {
    // Yemek bulunursa detayları HTML olarak göster
    recipeDisplay.innerHTML = `
      <h2>${yemek.title} (${yemek.origin})</h2>
      <img src="${yemek.image}" alt="${yemek.title}" />
      <p><em>${yemek.description}</em></p>
      <strong>Ingredients:</strong> ${yemek.ingredients.join(', ')}<br/>
      <strong>Recipe:</strong><pre>${yemek.recipe}</pre>
    `;
    // Tarif gösterildikten sonra sayfayı tarif alanının altına kaydır (smooth animasyonla)
    recipeDisplay.scrollIntoView({ behavior: 'smooth', block: 'end' });
  } else {
    // Tarif bulunamazsa uyarı mesajı göster
    recipeDisplay.innerHTML = `<p>Bu ile ait yemek bulunamadı.</p>`;
  }
}

// Sayfa tamamen yüklendiğinde butonları oluştur
window.addEventListener('DOMContentLoaded', () => {
  createCityButtons();
});

recipes.forEach(recipe => {
  console.log(recipe.origin+"\n");
});
