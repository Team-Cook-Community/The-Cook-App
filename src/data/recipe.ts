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
      avatar: null,
      firstName: "John",
      lastName: "Doe",
    },
    likes: 200,
  },
  {
    id: 1000229,
    title: "Coca Cola Chicken Wings",
    coverImg: CocaColaWings,
    tags: ["Chinese"],
    creator: {
      avatar: null,
      firstName: "Zheng",
      lastName: "Ying",
    },
    likes: 666,
  },
  {
    id: 104641037,
    title: "Pizza Diavola",
    coverImg: PizzaDiavola,
    tags: ["Italian"],
    creator: {
      avatar: null,
      firstName: "Judy",
      lastName: "Zhu",
    },
    likes: 123,
  },
  {
    id: 100027300,
    title: "Roasted Pork Belly",
    coverImg: RoastedPorkBelly,
    tags: ["Italian"],
    creator: {
      avatar: null,
      firstName: "Gordan",
      lastName: "Ramsay",
    },
    likes: 999,
  },
  {
    id: 10660918,
    title: "Steamed Chinese Cabbage in Supreme Soup",
    coverImg: SteamedChineseCabbageInSupremeSoup,
    tags: ["Chinese"],
    creator: {
      avatar: null,
      firstName: "Gang",
      lastName: "Wang",
    },
    likes: 1996,
  },
  {
    id: 78140,
    title: "Mapo Tofu",
    coverImg: MapoTofu,
    tags: ["Chinese"],
    creator: {
      avatar: null,
      firstName: "Gang",
      lastName: "Wang",
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

export const fullRecipes = {
  100361496: {
    coverImg: recipeList[0].coverImg,
    title: recipeList[0].title,
    creator: recipeList[0].creator,
    desc: "The preparation time is 10 minutes, the cooking time is 20 minutes, bringing the total time to 30 minutes. A friend on Weibo pointed out that the sauce at the end was incorrect; however, this is the image provided on Ms. Nami's blog. In fact, after three years in Japan, I have yet to distinguish between takoyaki, okonomiyaki, and Japanese yakisoba sauce; they all taste remarkably similar! Additionally, a friend expressed the curiosity of how to slice cabbage so finely. In Japanese, this cutting technique is called 'sengiri', meaning to cut into a thousand strips.",
    ingredients: {
      "Breadcrumb": "3/4 cup",
      "Olive Oil": "1 tbsp",
      "Pork Chop": "2 pieces",
      "Pepper": "1 tbsp",
      "Flour": "2 cups",
      "Egg": "1 ",
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
  },
};
