//This is only for the demo purposes

import JapanesePorkCutlet from "@assets/images/demo/recipe-covers/japanese-pork-cutlet.jpg";
import CocaColaWings from "@assets/images/demo/recipe-covers/coca-cola-wings.jpg";
import PizzaDiavola from "@assets/images/demo/recipe-covers/pizza-diavola.jpg";
import RoastedPorkBelly from "@assets/images/demo/recipe-covers/roasted-pork-belly.jpg";
import SteamedChineseCabbageInSupremeSoup from "@assets/images/demo/recipe-covers/steamed-chinese-cabbage-in-supreme-soup.jpg";
import MapoTofu from "@assets/images/demo/recipe-covers/mapo-tofu.jpg";

export const recipeList = [
  {
    id: 100361496,
    title: "Japanese-style Fried Pork Cutlet",
    coverImg: JapanesePorkCutlet,
    tags: ["Japanese"],
    creator: {
      firstName: "Test",
      lastName: "User",
      username: "testuser",
      avatar: null,
    },
    likes: 200,
  },
  {
    id: 1000229,
    title: "Coca Cola Chicken Wings",
    coverImg: CocaColaWings,
    tags: ["Chinese"],
    creator: {
      firstName: "Test",
      lastName: "User",
      username: "testuser",
      avatar: null,
    },
    likes: 666,
  },
  {
    id: 104641037,
    title: "Pizza Diavola",
    coverImg: PizzaDiavola,
    tags: ["Italian"],
    creator: {
      firstName: "Test",
      lastName: "User",
      username: "testuser",
      avatar: null,
    },
    likes: 123,
  },
  {
    id: 100027300,
    title: "Roasted Pork Belly",
    coverImg: RoastedPorkBelly,
    tags: ["Italian"],
    creator: {
      firstName: "Gordan",
      lastName: "Ramsay",
      username: "gordan",
      avatar: null,
    },
    likes: 999,
  },
  {
    id: 10660918,
    title: "Steamed Chinese Cabbage in Supreme Soup",
    coverImg: SteamedChineseCabbageInSupremeSoup,
    tags: ["Chinese"],
    creator: {
      firstName: "Gan",
      lastName: "Wang",
      username: "gang",
      avatar: null,
    },
    likes: 1996,
  },
  {
    id: 78140,
    title: "Mapo Tofu",
    coverImg: MapoTofu,
    tags: ["Chinese"],
    creator: {
      firstName: "Artoria",
      lastName: "Pendragon",
      username: "saber",
      avatar: null,
    },
    likes: 592,
  },
];

import JapanesePorkCutletStep1 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step1.jpg";
import JapanesePorkCutletStep2 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step2.jpg";
import JapanesePorkCutletStep3 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step3.jpg";
import JapanesePorkCutletStep4 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step4.jpg";
import JapanesePorkCutletStep5 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step5.jpg";
import JapanesePorkCutletStep6 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step6.jpg";
import JapanesePorkCutletStep7 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step7.jpg";
import JapanesePorkCutletStep8 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step8.jpg";
import JapanesePorkCutletStep9 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step9.jpg";
import JapanesePorkCutletStep10 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step10.jpg";
import JapanesePorkCutletStep11 from "@assets/images/demo/recipe-steps/japanese-pork-cutlet/step11.jpg";

const japanesePorkCutlet = {
  coverImg: recipeList[0].coverImg,
  title: recipeList[0].title,
  creator: recipeList[0].creator,
  desc: "The preparation time is 10 minutes, the cooking time is 20 minutes, bringing the total time to 30 minutes. A friend on Weibo pointed out that the sauce at the end was incorrect; however, this is the image provided on Ms. Nami's blog. In fact, after three years in Japan, I have yet to distinguish between takoyaki, okonomiyaki, and Japanese yakisoba sauce; they all taste remarkably similar! Additionally, a friend expressed the curiosity of how to slice cabbage so finely. In Japanese, this cutting technique is called 'sengiri', meaning to cut into a thousand strips.",
  ingredients: {
    Breadcrumb: "3/4 cup",
    "Olive Oil": "1 tbsp",
    "Pork Chop": "2 pieces",
    Pepper: "1 tbsp",
    Flour: "2 cups",
    Egg: "1 ",
    "Black Sesame": "1 tbsp",
    "Japanese Stir Fry Sauce": "2 tbsp",
  },
  steps: [
    {
      stepNum: 1,
      img: JapanesePorkCutletStep1,
      desc: "Preheat the oven to 200 degrees in advance, then start preparing.",
    },
    {
      stepNum: 2,
      img: JapanesePorkCutletStep2,
      desc: "Pour the breadcrumbs into a frying pan, add the olive oil, and cook over medium heat until the breadcrumbs turn golden brown. Then transfer the breadcrumbs to another plate to cool and set aside.",
    },
    {
      stepNum: 3,
      img: JapanesePorkCutletStep3,
      desc: "After removing the excess fat, use a knife to gently make shallow cuts on the pork chop (Nami-san explained that because the elasticity of fat and lean meat is different, their shrinkage rate is different during cooking, sounds so sophisticated... This will help the pork chop stay flat and beautiful while cooking!!)",
    },
    {
      stepNum: 4,
      img: JapanesePorkCutletStep4,
      desc: "Using a meat mallet to pound the meat... (What kind of translation is this, it sounds terrible)... Nami-san said that if there is no meat mallet, using the back of an ordinary knife will do, then use your hands to shape the meat.",
    },
    {
      stepNum: 5,
      img: JapanesePorkCutletStep5,
      desc: "Sprinkle salt and fresh pepper on the steak.",
    },
    {
      stepNum: 6,
      img: JapanesePorkCutletStep6,
      desc: "Coat the pork chop with flour, then shake off the excess powder, then coat with whole egg liquid, and finally coat with the toasted breadcrumbs from step 2.",
    },
    {
      stepNum: 7,
      img: JapanesePorkCutletStep7,
      desc: "Move the pork chops to the baking tray, 200 degrees for 20 minutes.",
    },
    {
      stepNum: 8,
      img: JapanesePorkCutletStep8,
      desc: "Cut the grilled pork chop open (Nami-san said to saw the pork chop back and forth like a saw, so that the breadcrumbs won’t fall off~)",
    },
    {
      stepNum: 9,
      img: JapanesePorkCutletStep9,
      desc: "This step is to make the sauce by crushing the sesame seeds and adding them to the fried noodle sauce.",
    },
    {
      stepNum: 10,
      img: JapanesePorkCutletStep10,
      desc: "It should look something like this, Japanese supermarkets in the country should have it ~~~ it might also be written as (お好み焼き酱)",
    },
    {
      stepNum: 11,
      img: JapanesePorkCutletStep11,
      desc: "The method of shredding is probably to cut it in half, then cut it in half again, remove the core, and then shred them all together... It's really challenging for my skills; I'm completely incompetent.",
    },
  ],
};

import CocaColaWingsStep1 from "@assets/images/demo/recipe-steps/coca-cola-wings/step1.jpg";
import CocaColaWingsStep2 from "@assets/images/demo/recipe-steps/coca-cola-wings/step2.jpg";
import CocaColaWingsStep3 from "@assets/images/demo/recipe-steps/coca-cola-wings/step3.jpg";
import CocaColaWingsStep4 from "@assets/images/demo/recipe-steps/coca-cola-wings/step4.jpg";
import CocaColaWingsStep5 from "@assets/images/demo/recipe-steps/coca-cola-wings/step5.jpg";
import CocaColaWingsStep6 from "@assets/images/demo/recipe-steps/coca-cola-wings/step6.jpg";
import CocaColaWingsStep7 from "@assets/images/demo/recipe-steps/coca-cola-wings/step7.jpg";

const cocaColaWings = {
  coverImg: recipeList[1].coverImg,
  title: recipeList[1].title,
  creator: recipeList[1].creator,
  desc: "",
  ingredients: {
    "Chicken Wings": "8 pieces",
    "Coca-Cola": "1 can",
    Salt: "1 tbsp",
    "Cooking Wine": "1 tbsp",
    "Dark Soy Sauce": "7ml",
    "Regular Soy Sauce": "10ml",
    Ginger: "5 slices",
  },
  steps: [
    {
      stepNum: 1,
      img: CocaColaWingsStep1,
      desc: "Make cuts on the raw chicken wings, or use toothpicks to poke 6 small holes on each side of each wing. This will allow them to absorb more flavor. Marinate with one tablespoon of dark soy sauce (5ml) and two tablespoons of cooking wine (10ml) for at least two hours. [If you're short on time, you can skip marinating, but you must make cuts and poke holes, otherwise it won't absorb flavor easily.]",
    },
    {
      stepNum: 2,
      img: CocaColaWingsStep2,
      desc: "Put cold water and slices of green onions and ginger in the pot, add the chicken wings and bring to a boil with the cold water. There is no need to cook thoroughly; just turn off the heat when you see a lot of scum and take them out. Rinse each wing with warm water to remove the scum, then drain.",
    },
    {
      stepNum: 3,
      img: CocaColaWingsStep3,
      desc: "Use kitchen paper to dry, and if there are stray hairs, you can pluck them clean at this time.",
    },
    {
      stepNum: 4,
      img: CocaColaWingsStep4,
      desc: "Using a non-stick pan, applying ginger slices to the pan can prevent chicken wings from sticking.",
    },
    {
      stepNum: 5,
      img: CocaColaWingsStep5,
      desc: "(No need to add oil, the chicken wings will release oil on their own) Fry the chicken wings over low heat until golden brown, shaking the pan to prevent sticking.",
    },
    {
      stepNum: 6,
      img: CocaColaWingsStep6,
      desc: "One can of cola, one tablespoon of cooking wine, one tablespoon of dark soy sauce, two tablespoons of light soy sauce, and add half a stick of cinnamon and one star anise for better flavor. No water needed. When the soup reduces to about a bowl of liquid, taste the saltiness; if needed, add a small amount of salt. This way, it's less likely to go wrong.",
    },
    {
      stepNum: 7,
      img: CocaColaWingsStep7,
      desc: "Simmer until the sauce thickens; as shown in the picture, almost all the sauce is coating the chicken wings, leaving about three spoonfuls of sauce left. Take it out of the pot.",
    },
  ],
};

const pizza = {
  coverImg: recipeList[2].coverImg,
  title: recipeList[2].title,
  creator: recipeList[2].creator,
  desc: "",
  ingredients: {
    "Italian Flour": "300g",
    Water: "180g",
    "Olive Oil": "12g",
    Salt: "8g",
    Yeast: "4g",
    Marinara: "50ml",
    "Mozzarella Cheese": "100g",
    "Parmesan Cheese": "40g",
    "Basil Leaves": "2 tablets",
    Salami: "6 tablets",
  },
  steps: [
    {
      stepNum: 1,
      img: "",
      desc: "Mix all the dough ingredients (try to avoid direct contact with the salt from yeast), knead it into a smooth surface that is not sticky, it can be divided into about three pizza doughs, cover with a towel and leave it in a dark place at room temperature at about 25 degrees for 3 hours. For a better taste, you can also mix the dough the day before and put it in a crisper box, put it in the refrigerator to keep it fresh overnight, and take it out three hours before making pizza.",
    },
    {
      stepNum: 2,
      img: "",
      desc: "Preheat the oven to 220°C; Shred the mozzarella and Parmesan cheese",
    },
    {
      stepNum: 3,
      img: "",
      desc: "Try to pull the dough by hand, if you really can't do it, use a rolling pin, because the dough is elastic, so you need some patience, don't rush to take your time.",
    },
    {
      stepNum: 4,
      img: "",
      desc: "Try to be as thin as possible, but be careful not to break the crust, the thickness should be about 0.5 mm.",
    },
    {
      stepNum: 5,
      img: "",
      desc: "Take out the baking sheet to prevent sticking to the bottom, and sprinkle flour evenly on the bottom of the baking sheet.",
    },
    {
      stepNum: 6,
      img: "",
      desc: " stole a little lazy, this time I used Marinara (Italian tomato sauce) for cooking pasta bought at the supermarket, chopped an appropriate amount of basil leaves, and mixed with the sauce (the lazy way is to buy ready-made pasta at the supermarket, tomato sauce for pasta is fine).",
    },
    {
      stepNum: 7,
      img: "",
      desc: "Spread the dough flat on a baking sheet, sprinkle with an appropriate amount of sea salt, and spread the Italian tomato sauce evenly with a spoon, not too much, leaving a thumbs apart.",
    },
    {
      stepNum: 8,
      img: "",
      desc: "Spread evenly with mozzarella and Parmesan cheese, sprinkle with basil leaves, and sprinkle with sea salt.",
    },
    {
      stepNum: 9,
      img: "",
      desc: "Spread salami and garlic cloves, drizzle with an appropriate amount of olive oil and send it to the oven, turning the oven temperature to 240°C.",
    },
    {
      stepNum: 10,
      img: "",
      desc: "In about 8-10 minutes, the pizza is ready to bake, enjoy it hot.",
    },
  ],
};

const porkBelly = {
  coverImg: recipeList[3].coverImg,
  title: recipeList[3].title,
  creator: recipeList[3].creator,
  desc: "",
  ingredients: {
    Cardamom: "1 tbsp",
    "Fennel Seeds": "1 tbsp",
    "Pork Belly": "1kg",
    Salt: "1 tbsp",
    Pepper: "1 tbsp",
    "Fennel Head": "1",
    "Bay Leaf": "4 tablets",
    Garlic: "3 petals",
    Aniseed: "4 whole grains",
    "Olive Oil": "1 tbsp",
    "White Wine": "325ml",
    "Chicken Stock": "500-750ml",
    "Wholegrain Mustard": "1 tbsp",
  },
  steps: [
    {
      stepNum: 1,
      img: "",
      desc: "Cut the pork skin into diamond shapes with a knife on the surface of the pork belly skin.",
    },
    {
      stepNum: 2,
      img: "",
      desc: "Spread salt and black pepper on the surface of the pork belly and rub the meat to make it more flavorful.",
    },
    {
      stepNum: 3,
      img: "",
      desc: "Chop the fennel heads, peel the garlic and flatten it.",
    },
    {
      stepNum: 4,
      img: "",
      desc: "Heat the pan/baking sheet and add olive oil. Put the cut fennel heads and battened garlic in a pan and stir-fry.",
    },
    {
      stepNum: 5,
      img: "",
      desc: "Add half the amount of fennel seeds to the pot.",
    },
    {
      stepNum: 6,
      img: "",
      desc: "Pat the cardamom flattened with a knife and add to the pot/baking dish. Then add bay leaf and star anise. Stir the ingredients in the wok for 2 minutes to release the aroma of various spices.",
    },
    {
      stepNum: 7,
      img: "",
      desc: "Push the ingredients from the pot to the side of the pot and place the marinated pork belly into the pot with the skin side down.",
    },
    {
      stepNum: 8,
      img: "",
      desc: "Fry the pork for 5 minutes until the skin gradually turns golden brown, turning over. Sprinkle the remaining fennel seeds and an appropriate amount of salt over the skin of the meat.",
    },
    {
      stepNum: 9,
      img: "",
      desc: "Add white wine to the pot and shovel the zoomed part of the bottom of the pot. Be careful not to dip the skin in the soup and make it soggy, as it will affect the crispy texture when baking.",
    },
    {
      stepNum: 10,
      img: "",
      desc: "Add the broth, and the amount of broth added is level with the pork fat layer.",
    },
    {
      stepNum: 11,
      img: "",
      desc: "Once the soup is boiling, put it in the oven. Preheat the oven to 180 degrees and bake for 2 and a half hours.",
    },
    {
      stepNum: 12,
      img: "",
      desc: "Remove the grilled pork belly and set aside. The soup in the pot needs to be reserved, use a spoon to skim off the floating oil in the soup, or you can use a slice of bread to absorb the oil in the soup.",
    },
    {
      stepNum: 13,
      img: "",
      desc: "Heat the broth again and add the mustard paste. Beat the mustard sauce and incorporate it into the soup. You can taste it and season it according to your taste.",
    },
    {
      stepNum: 14,
      img: "",
      desc: "Pick out star anise and cardamom from the sauce. Pour the sauce into a container and serve with the meal.",
    },
    {
      stepNum: 15,
      img: "",
      desc: "Cut the roasted pork and serve with the sauce from step 14.",
    },
  ],
};

const cabbageSoup = {
  coverImg: recipeList[4].coverImg,
  title: recipeList[4].title,
  creator: recipeList[4].creator,
  desc: "This boiling water cabbage soup is a classic dish from Sichuan cuisine. It was originally created by the famous Sichuan cuisine chef Huang Jinglin in the imperial dining room of the Qing Palace, and was later carried forward by Sichuan cuisine master Luo Guorong and became a fine dish for entertaining foreign guests at state banquets.",
  ingredients: {
    "Pork knuckle with skin": "1 piece",
    "Old hen": "1 piece",
    "Old mother duck": "1 piece",
    "Jinhua ham": "150g",
    "Spring onion": "1 stick",
    Ginger: "1 piece",
    Scallops: "6 pieces",
    "Chicken breast": "50g",
    "Duck breast": "50g",
    "Pork tenderloin": "50g",
    "Ice cube": "20g",
    Cabbage: "0.5 grain",
    "Chinese wolfberry": "1 piece",
  },
  steps: [
    {
      stepNum: 1,
      img: "",
      desc: "Cut 1 old hen (800g) and 1 old mother duck (800g) in half, remove heads and internal organs, trim excess fat, rinse well. Set aside chicken breast and duck breast separately.",
    },
    {
      stepNum: 2,
      img: "",
      desc: "Soak 1 piece of Jinhua ham (150g) in cold water for 40 minutes to remove excess salt. Set aside.",
    },
    {
      stepNum: 3,
      img: "",
      desc: "Blanch pork knuckle (800g, halved), old hen, old duck, and Jinhua ham with green onion (cut into sections) and flattened ginger. Bring to a boil, remove and rinse off foam. In a deep pot with bamboo mesh or gauze, add blanched meats, 6 scallops, onion, ginger, and 7200ml water. Simmer for 4 hours, skimming grease and foam regularly.",
    },
    {
      stepNum: 4,
      img: "",
      desc: "After simmering, remove soup ingredients. Strain soup through gauze to remove meat residues. Cool soup to below 60°C and set aside.",
    },
    {
      stepNum: 5,
      img: "",
      desc: "Prepare sweeping soup purée: finely mince 50g chicken breast, 50g duck breast, and 50g pork tenderloin with 80g water and 20g ice cubes (using wall breaker or manual chopping). Place in separate bowls.",
    },
    {
      stepNum: 6,
      img: "",
      desc: "Use 1000g cooled soup to sweep in order: duck breast purée, pork tenderloin purée, chicken breast purée. Keep heat low and stir constantly. After each sweep, filter soup with gauze and cool again to 60°C. Repeat sweeping process 3 times for clarity.",
    },
    {
      stepNum: 7,
      img: "",
      desc: "Cut cabbage in half, cook roots in boiling water for 10 minutes, then cool in ice water and set aside.",
    },
    {
      stepNum: 8,
      img: "",
      desc: "Trim cabbage leaves into lotus blossom shape.",
    },
    {
      stepNum: 9,
      img: "",
      desc: "Gently boil trimmed cabbage in clear swept broth for 2 minutes.",
    },
    {
      stepNum: 10,
      img: "",
      desc: "Arrange cabbage into a flower bud and place 1 Chinese wolfberry in the center.",
    },
    {
      stepNum: 11,
      img: "",
      desc: "Pour hot broth over the flower bud to let it bloom and serve.",
    },
  ],
};

const mapoTofu = {
  coverImg: recipeList[5].coverImg,
  title: recipeList[5].title,
  creator: recipeList[5].creator,
  desc: "The most delicious traditional Sichuan cuisine.",
  ingredients: {
    "Peppercorn powder": "1/2 tsp",
    "Bean curd": "1 block (approx. 400g)",
    "Pixian Douban": "1 tbsp",
    "Meat foam": "50g",
    "Sichuan peppercorns": "10 pieces",
    Paprika: "1 tsp",
    "Pepper powder": "1/4 tsp",
    "Water starch": "2 tbsp",
    Shallots: "2 stalks",
  },
  steps: [
    {
      stepNum: 1,
      img: "",
      desc: "Prepare the ingredients. Finely chop the shallots.",
    },
    {
      stepNum: 2,
      img: "",
      desc: "Heat oil in a pot, fry the minced meat until browned. Remove and set aside.",
    },
    {
      stepNum: 3,
      img: "",
      desc: "Add fresh oil to the pot. Stir-fry the doubanjiang (watercress paste) until aromatic.",
    },
    {
      stepNum: 4,
      img: "",
      desc: "Add water, followed by peppercorns, chili powder, and minced chili. Simmer over low heat for 7 minutes. Return the fried meat to the pot.",
    },
    {
      stepNum: 5,
      img: "",
      desc: "Dice the tofu into small cubes and gently add to the pot.",
    },
    {
      stepNum: 6,
      img: "",
      desc: "Let the tofu cook for a few minutes to absorb flavors.",
    },
    {
      stepNum: 7,
      img: "",
      desc: "Pour in water starch (cornstarch slurry) and bring the broth to a gentle boil to thicken.",
    },
    {
      stepNum: 8,
      img: "",
      desc: "Serve hot, garnished with minced peppercorns and chopped green onions.",
    },
  ],
};

export const fullRecipes = {
  100361496: japanesePorkCutlet,
  1000229: cocaColaWings,
  104641037: pizza,
  100027300: porkBelly,
  10660918: cabbageSoup,
  78140: mapoTofu,
};

export const testUser = {
  firstName: "Test",
  lastName: "User",
  userName: "testuser",
  avatar: null,
  bio: "This is a test user. Home cook. Recipe explorer. Sharing flavor experiments and kitchen wins, one dish at a time.",
  recipes: recipeList.slice(0, 3),
  post: [],
  totalFollowing: 100,
  totalFollowers: 100,
  totalLikes: recipeList.reduce((total, recipe) => total + recipe.likes, 0),
};
