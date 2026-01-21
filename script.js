// Recipe data
const recipes = {
    gingerbread: {
        title: "Classic Gingerbread Cookies",
        description: "Traditional spiced cookies perfect for decorating with the family.",
        ingredients: [
          "3 and 1/2 cups (440g) all-purpose flour (spooned & leveled)",
          "1 teaspoon baking soda",
          "1/2 teaspoon salt",
          "1 Tablespoon ground ginger",
          "1 Tablespoon ground cinnamon",
          "1/2 teaspoon ground allspice",
          "1/2 teaspoon ground cloves",
          "10 Tablespoons (142g) unsalted butter, softened to room temperature",
          "3/4 cup (150g) packed light or dark brown sugar",
          "2/3 cup (160ml; about 200g) unsulphured or dark molasses",
          "1 large egg, at room temperature",
          "1 teaspoon pure vanilla extract",
          "optional: easy cookie icing, royal icing, or cookie buttercream"
        ],
        instructions: [
            "In a large bowl, whisk together the flour, baking soda, salt, ginger, cinnamon, allspice, and cloves. Set aside.",
            "In a large bowl using a handheld mixer or stand mixer fitted with a paddle attachment, beat the butter for 1 minute on medium speed until completely smooth and creamy. Add the brown sugar and molasses and beat on medium high speed until combined and creamy. Scrape down the sides and bottom of the bowl as needed. Next, beat in egg and vanilla on high speed for 2 full minutes. Scrape down the sides and bottom of the bowl as needed. The butter may separate; that’s ok.",
            "Add the flour mixture to the wet ingredients, and beat on low speed until combined. The cookie dough will be quite thick and slightly sticky. Divide dough in half and place each onto a large piece of plastic wrap. Wrap each up tightly and pat down to create a disc shape. Chill discs for at least 3 hours and up to 3 days. Chilling is mandatory for this cookie dough. I always chill mine overnight",
            "Preheat oven to 350°F (177°C). Line 2-3 large baking sheets with parchment paper or silicone baking mats. (Always recommended for cookies.) Set aside.",
            "Remove 1 disc of chilled cookie dough from the refrigerator. Generously flour a work surface, as well as your hands and the rolling pin. Roll out disc until 1/4-inch thick. Tips for rolling—the dough may crack and be crumbly as you roll. What’s helpful is picking it up and rotating it as you go. Additionally, you can use your fingers to help meld the cracking edges back together. The first few rolls are always the hardest since the dough is so stiff, but re-rolling the scraps is much easier. Cut into shapes. Place shapes 1 inch apart on prepared baking sheets. Re-roll dough scraps until all the dough is shaped. Repeat with remaining disc of dough.",
            "Bake cookies for about 9-10 minutes. If your cookie cutters are smaller than 4 inches, bake for about 8 minutes. If your cookie cutters are larger than 4 inches, bake for about 11 minutes. My oven has hot spots and yours may too—so be sure to rotate the pan once during bake time. Keep in mind that the longer the cookies bake, the harder and crunchier they’ll be. For soft gingerbread cookies, follow my suggested bake times.",
            "Allow cookies to cool for 5 minutes on the cookie sheet. Transfer to cooling rack to cool completely. Once completely cool, decorate as desired.",
            "Cookies stay fresh covered at room temperature for up to 1 week."
        ]
    },
    hotchocolate: {
        title: "Peppermint Hot Chocolate",
        description: "Rich and creamy hot chocolate with a refreshing peppermint twist.",
        ingredients: [
            "1 cup milk (whole or 2% are best)",
            "¼ cup heavy cream",
            "1 to 2 tablespoons granulated sugar (depending on how sweet you like it)",
            "pinch kosher salt",
            "3 ounces finely chopped semisweet chocolate or chocolate chips (about 1/2 cup)",
            "¼ teaspoon vanilla extract",
            "⅛ teaspoon peppermint extract",
            "whipped cream, marshmallows, and crushed candy canes , for garnish (optional)"
        ],
        instructions: [
            "In a pot, whisk together milk, heavy cream, sugar, vanilla and peppermint extracts, and salt. Heat on the stove on medium-low until bubbles start to form around the side of the pan.",
            "Reduce heat to low, add chocolate and extracts, and whisk until melted, glossy, and thickened slightly, 1-2 minutes.",
            "Pour into a mug and top with lightly-sweetened whipped cream or marshmallows and a sprinkling of crushed candy canes."
        ]
    },
    turkey: {
        title: "Roasted Turkey with Herbs",
        description: "Juicy turkey roasted to perfection with aromatic herbs and spices.",
        ingredients: [
            "15 lb turkey",
            "10 tablespoons butter softened",
            "2 teaspoons minced garlic",
            "2 tablespoons finely chopped fresh sage leaves",
            "1 tablespoon finely chopped fresh rosemary",
            "2 tablespoons finely chopped fresh thyme leaves",
            "1/4 cup finely chopped fresh parsley leaves",
            "salt and pepper to taste",
            "1 onion peeled and quartered",
            "1 lemon quartered",
            "1 cup assorted herbs whole sprigs to stuff inside the turkey",
            "3 cups chicken or turkey broth",
            "optional garnishes: assorted herbs, fresh cranberries, seckel pears"
        ],
        instructions: [
            "Preheat the oven to 450 degrees F.",
            "Remove the turkey from the refrigerator; let stand at room temperature for 30 minutes. Tuck the turkey wings under the body.",
            "Place the butter, garlic, sage, rosemary, thyme, parsley and salt and pepper to taste in the bowl of a food processor. Blend until smooth.",
            "Season the cavity of the turkey with salt and pepper, then stuff with the onion, lemon and assorted herbs. Tie the turkey legs together with kitchen twine.",
            "Rub the herb butter all over the outside of the turkey and under the skin of the breast. Season to taste with salt and pepper.",
            "Place the chicken broth in a medium saucepan on the stove and keep warm over low heat.",
            "Place the turkey in a roasting pan and bake for 45 minutes. Reduce the oven temperature to 350 degrees F and continue roasting, basting the turkey every 30 minutes with the chicken broth, until the turkey is done. This will take approximately 3 hours and you'll know that the turkey is done when a meat thermometer inserted into the thickest part of the turkey thigh registers 165 degrees F.",
            "If the turkey seems like it's getting overly browned during the cooking process, cover it with foil.",
            "Remove the turkey from the oven and tent loosely with foil. Let the turkey rest for 25 minutes. Slice, then serve."
        ]
    },
    cheesecake: {
        title: "Eggnog Cheesecake",
        description: "Creamy cheesecake infused with the classic flavors of eggnog.",
        ingredients: [
            "Crust: ",
            "1 cup graham cracker crumbs",
            "3 tablespoons melted butter",
            "2 tablespoons white sugar",

            "Filling: ",
            "3 (8 ounce) packages cream cheese, softened",
            "1 cup white sugar",
            "3/4 cup eggnog",
            "3 tablespoons all-purpose flour",
            "2 large eggs",
            "2 tablespoons rum",
            "1 pinch ground nutmeg"
        ],
        instructions: [
            "Preheat the oven to 325 degrees F (165 degrees C).",
            "To make the crust: Mix graham cracker crumbs, melted butter, and sugar together in a medium bowl until well combined.",
            "Press graham mixture into the bottom of a 9-inch springform pan.",
            "Bake in the preheated oven for 10 minutes; transfer the pan to a wire rack and allow crust to cool. Increase the oven temperature to 425 degrees F (220 degrees C).",
            "While the crust is cooling, make the filling: Combine cream cheese, sugar, eggnog, and flour in a food processor; process until smooth. Blend in eggs, rum, and nutmeg.",
            "Pour eggnog mixture into cooled crust.",
            "Bake in the preheated oven for 10 minutes. Reduce the heat to 250 degrees F (120 degrees C) and continue to bake until edges are puffed and surface is firm except for a small spot in the center that will jiggle when the pan is gently shaken, about 45 minutes. Loosen the sides of the springform pan; let cheesecake cool before removing the rim completely.",
            "Enjoy!"
        ]
    },
    ham: {
        title: "Honey Glazed Ham",
        description: "Succulent ham glazed with honey and brown sugar, perfect for the holiday table.",
        ingredients: [
            "1 (8-10 lb) fully cooked spiral-cut ham",
            "1/2 cup honey",
            "1/2 cup brown sugar",
            "1/4 cup Dijon mustard",
            "2 tbsp apple cider vinegar",
            "1 tsp ground cloves",
            "1/2 tsp ground cinnamon"
        ],
        instructions: [
            "Preheat oven to 325°F (165°C).",
            "Place ham cut-side down in a roasting pan.",
            "Cover with foil and bake for 1.5 hours.",
            "Meanwhile, mix honey, brown sugar, mustard, vinegar, cloves, and cinnamon for glaze.",
            "Remove ham from oven and brush with half the glaze.",
            "Return to oven uncovered and bake for 30 more minutes.",
            "Brush with remaining glaze and bake 15 more minutes.",
            "Let rest for 10 minutes before slicing.",
            "Serve warm with pan juices."
        ]
    },
    sugarcookies: {
        title: "Christmas Sugar Cookies",
        description: "Buttery sugar cookies cut into festive shapes and decorated with icing.",
        ingredients: [
            "Cookies: ",
            "2 and 1/4 cups (281g) all-purpose flour (spooned and leveled), plus more as needed for rolling and work surface",
            "1/2 teaspoon baking powder",
            "1/4 teaspoon salt",
            "3/4 cup (12 Tbsp; 170g) unsalted butter, softened to room temperature",
            "3/4 cup (150g) granulated sugar",
            "1 large egg, at room temperature",
            "2 teaspoons pure vanilla extract",
            "1/4 or 1/2 teaspoon almond extract (optional, but makes the flavor outstanding)",

            "Easy Icing: ",
            "3 cups (360g) confectioners’ sugar",
            "1/2 teaspoon pure vanilla extract (omit and replace with water for stark white icing)",
            "2 teaspoons light corn syrup",
            "4.5–5 Tablespoons (67–75ml) room temperature water",
            "pinch salt",
            "optional: gel food coloring & sprinkles for decorating"

     ],
        instructions: [
            "Make sure you have allotted enough time (and enough counter space!) to make these cookies. The cookie dough needs to chill, the cookies need to cool completely, and the icing needs 24 hours to completely set. If enjoying right away and hardened icing isn’t a concern, you’ll only need about 3–4 hours to make these.",
            "Make the cookie dough: Whisk the flour, baking powder, and salt together in a medium bowl. Set aside.",
            "In a large bowl using a handheld or a stand mixer fitted with a paddle attachment, beat the butter and sugar together on high speed until completely smooth and creamy, about 3 minutes. (Here’s a helpful tutorial if you need guidance on how to cream butter and sugar.) Add the egg, vanilla, and almond extract (if using), and beat on high speed until combined, about 1 minute. Scrape down the sides and up the bottom of the bowl and beat again as needed to combine.",
            "Add the dry ingredients to the wet ingredients and mix on low until combined. Dough will be a bit soft. If the dough seems too soft and sticky for rolling, add 1 more Tablespoon of flour.",
            "Divide the dough into 2 equal parts. Place each portion onto a piece of lightly floured parchment paper or a lightly floured silicone baking mat. With a lightly floured rolling pin, roll the dough out to about 1/4-inch thickness. Use more flour if the dough seems too sticky. The rolled-out dough can be any shape, as long as it is evenly 1/4-inch thick.",
            "Lightly dust one of the rolled-out doughs with flour. Place a piece of parchment on top. (This prevents sticking.) Place the second rolled-out dough on top. Cover with plastic wrap or aluminum foil, then refrigerate for at least 1–2 hours and up to 2 days.",
            "Once chilled, preheat oven to 350°F (177°C). Line 2–3 large baking sheets with parchment paper or silicone baking mats. Carefully remove the top dough piece from the refrigerator. If it’s sticking to the bottom, run your hand under it to help remove it. Using a cookie cutter, cut the dough into shapes. Re-roll the remaining dough and continue cutting until all is used. Repeat with second piece of dough. (Note: It doesn’t seem like a lot of dough, but you get a lot of cookies from the dough scraps you re-roll.)",
            "Arrange cookies on baking sheets about 3 inches apart. Bake for 11–12 minutes or until lightly browned around the edges. If your oven has hot spots, rotate the baking sheet halfway through bake time. Allow cookies to cool on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely before decorating. No need to cover the cookies as they cool.",
            "Make the icing: Using a fork, stir the confectioners’ sugar, vanilla, corn syrup, and 4.5 Tablespoons (67ml) of water, and optional salt together in a medium bowl. It will be very thick and almost impossible to stir. Switch to a whisk and whisk in 1/2 Tablespoon (8ml) more of water. If you lift the whisk and let the icing drizzle back into the bowl, the ribbon of icing will hold shape for a few seconds before melting back into the icing. That is when you know it’s the right consistency and is ready to use. If it’s too thick (sometimes it is), whisk in another 1/2 Tablespoon (8ml) of water or a little more until you reach the proper consistency.",
            "If you’re tinting the icing another color, stir in the food coloring. You can pour some icing into different bowls if using multiple colors. When tinting icing, use only 1–2 drops at first, stir it in, then add more as needed to reach your desired color. Remember, color darkens as icing dries.",
            "Decorate the cookies: You can dip the cookies into the icing or use squeeze bottles or piping bags (reusable or disposable) fitted with piping tips (I usually use Wilton Piping Tip #4). Decorate your cookies as desired. If using the squeeze bottles or piping tips, I usually outline cookies with icing first, then fill in the middle. If adding sprinkles on top of the icing, add them right after applying icing on your cookie.",
            "Let icing dry/set: Feel free to enjoy cookies before icing completely dries. Icing dries in 24 hours. No need to cover the decorated cookies as you wait for the icing to set. If it’s helpful, decorate the cookies directly on a baking sheet so you can place the entire baking sheet in the refrigerator to help slightly speed up the icing setting. Once the icing has dried, these cookies are great for gifting or for sending.",
            "Cover and store decorated cookies for up to 5 days at room temperature or up to 10 days in the refrigerator."
        ]
    },
      mincepies: {
        title: "Mince pies",
        description: "A delicious British Christmas tradition",
        ingredients: [
            "300g/10oz plain flour, plus extra for dusting",
            "pinch salt",
            "150g/5oz fridge-cold butter, cut into 1cm/½in dice",
            "3 tbsp icing sugar",
            "1 large free-range egg, beaten with 1 tbsp very cold water",
            "300g/10½oz mincemeat",
            
            "To finish: ",
            "1 medium free-range egg, beaten",
            "1 tbsp caster sugar"
        ],
        instructions: [
            "To make the pastry, put the flour and salt in a food processor and add the butter (see the recipe tips, below, if making the pastry by hand). Using the pulse function, whizz until it resembles coarse breadcrumbs. Add the icing sugar and pulse again to mix. Add the beaten egg mixture and pulse briefly to mix to a rough dough.",
"Tip the pastry out onto the work surface, and using your hands, lightly bring the dough together into a ball. Wrap in cling film or place in a plastic sealable box to chill for about 20–30 minutes (this prevents pastry shrinkage later on).",
"Brush a 12-hole bun tin with melted butter and set aside in the fridge.",
"After chilling, turn the dough out onto a lightly floured work surface. Roll out until the pastry is about 4mm/⅛in thick. Use a round cutter to cut out 12 discs of pastry that are about 6mm/¼in bigger than the size of the bun tin holes. Bring the scraps of pastry together lightly and re-roll as necessary.",
"Press a round of pastry into the bottom of each hole. Fill each pastry case with a level tablespoon of mincemeat. Don't overfill them as they will leak and make your mince pies stick to the tray.",
"Cut out 12 lids with a smaller pastry cutter, re-rolling the pastry as needed. These can be fluted or straight-edged, as you like. Brush a little beaten egg around the base of the lid and stick it down onto the pie edge, pressing gently to seal. (Try to avoid getting egg wash between the pastry and the tin, as this can also lead to sticking.)",
"Brush the tops of the mince pies with egg wash and sprinkle lightly with caster sugar. (You can use any pastry scraps and tiny cutters to cut out shapes like holly leaves and stars to stick on the tops of your pies.) Use a sharp knife to make a small incision in the middle of the pie, or several decorative incisions, to let out the steam as they bake.",
"Return the pies to the fridge while you preheat the oven to 190C/170C Fan/Gas 5.",
"Bake the mince pies for 20–25 minutes, or until golden-brown and crisp. Set the tray on a wire rack to cool for 5 minutes, and then turn the mince pies out.",
"Serve with your choice of brandy butter, cream or ice cream."
        ]
    },
      cinnamonrolls: {
        title: "Cinnamon rolls",
        description: "Soft and fluffy with a sweet, gooey glaze on top",
        ingredients: [
            "250 g whole milk, room temperature",
            "10 g dry yeast",
            "150 g granulated sugar",
            "180 g butter, room temperature + extra for the pan",
            "700 g bread flour + extra for the bowl and dough opening",
            "1 pinch of salt",
            "2 medium sized eggs",
            "lemon zest",
            "150 g brown sugar",
            "20 g cinnamon",
            "100 g powdered sugar",
            "5-10 g lemon juice"

             ],
             instructions: [
               "For the dough: ",
                "Pour the milk, yeast and sugar into the mixer bowl, and mix with a hand whisk. ",
                "Add the butter, flour, salt, eggs and lemon zest, and beat with the hook on high speed for 8-10 minutes until a sticky dough is created",
                "Pour some flour into a bowl and into our hands, shape the dough into a round shape and put it in the bowl. ",
                "Cover with transparent film and leave at room temperature to rise for about 1 hour or until doubled in volume. (The final waiting time depends on how hot the space is.) ",
                "Sprinkle the workbench with flour and transfer the dough on top. ",
                "Sprinkle the dough with flour and roll it out with a rolling pin in a rectangular shape measuring 40x60 cm. ",
               
                "For the filling: ",
                "Pour the sugar, cinnamon and butter into a bowl, and mix well with a spoon until it becomes a paste. ",
                
                "For the composition: ",
                "Preheat the oven to 180°C in the air. ",
                "Brush a 30 cm diameter round with butter and set aside. ",
                "Spread the paste with the back of the spoon over the entire surface of the dough and roll starting from the long side. ",
                "Cut the roll into 16 equal pieces and transfer them to the pan with the cut side down. ",
                "We gently press with your hands so that they are all the same height. ",
                "Cover with a towel and leave for about 30 minutes or until they double in volume. ",
                "Transfer the pan to the oven and bake for 30 minutes. ",
                "Remove from the oven and set aside to cool. ",

                "For the icing: ",
                "Pour the powdered sugar into a bowl and add a few drops of the lemon juice. ",
                "Mix with a spoon and add lemon juice until you have a thick glaze. ",
                "Pour over the cinnamon rolls with the glaze and serve."
     
             ]
    },
// Karatapani Stamatia
               raspchoctart: {
                   title: "Raspberry chocolate mouse tart",
                   description: "A vegan dessert, filled with a layer of tart raspberry gel and topped with luscious chocolate and tofu mousse",
                   ingredients: [
                     "For the pastry case: ",
                   "250 g flour (standard or all purpose)",
                    "75 g solid coconut oil (+ extra)",
                    "30 g icing sugar (powdered sugar)",
                     "¼ teaspoon salt",
                     "4-6 tablespoon ice cold water",

                       "Raspberry gel layer: ",
                       "250 g raspberries (fresh or frozen, about 2 cups)",
                       "½ cup water",
                        "2 tablespoon maple syrup or sweetener of your choice",
                        "1 teaspoon agar agar powder",

                       "Chocolate mousse layer: ",
                       "400 g soft tofu",
                       "200 g dark chocolate (at least 50% cocoa solids)",
                       "1 pinch salt",

                       "To serve: ",
                       "Fresh berries to garnish"
                   ],
                   instructions: [
                       "To make the pastry case, pulse flour, 75 g coconut oil, icing sugar and salt together in a food processor, until it has a crumbly texture. Add ice cold water a little at a time until the mixture starts to come together. I find 5 tablespoon to be about right, but this may vary a little.",
                       "Tip the pastry out onto a clean benchtop and use your hands to bring the mixture together into a ball, without kneading. Flour the surface and roll out to about 5 mm thick. Line the bottom of a 22 cm springform tart tin. Gently press pastry into the tart tin and trim the edges. Refrigerate for 20 minutes until firm. While the pastry is chilling, preheat oven to 200°C fan bake (or 220°C/430°F conventional oven). ",
                       "Line the pastry case with baking paper and blind baking weights. Bake for 20 minutes, then remove the weights and baking paper and bake for another 10 minutes, or until golden brown. Set aside to cool. Melt a little extra coconut oil (about 1 tbsp) and brush to coat the inside of the pastry case, to form a waterproof coating. ",
                       "To make the raspberry gel, combine raspberries, water and sweetener in a pot and bring to a simmer, stirring often. Simmer for 5 minutes, then add agar agar powder and simmer for another 5 minutes (this is essential to activate the agar agar). Strain through a fine sieve, pushing the solids around to extract as much liquid as possible. Allow to cool until it’s warm (but not cool, it sets fast). Pour into the pastry case and refrigerate until set (about 30 minutes). ",
                       "Meanwhile, make the chocolate mousse layer by blending tofu until smooth. Melt dark chocolate over a double boiler, or in short bursts in a microwave, until liquid. Add chocolate to the blender, along with a pinch of salt, and blend until combined. Pour into the pastry case, covering the raspberry gel layer, and smooth the surface. Refrigerate until set (2+ hours). ",
                       "Garnish with fresh berries of your choice to serve, and add a scoop of vanilla ice cream, if you like. "
                       
                        
               ]
               },

                 tiramisu: {
                     title: "Vegan Christmas tiramisu with kirsch and cherries",
                     description: "A non-traditional boozy vegan tiramisu made with coffee-soaked vanilla cake, kirsch and cherries, layered with a luscious vanilla filling.",
                     ingredients: [
                         "For the cake layers: ",
                         "Basic vanilla cake",
                         "1 cup strong brewed coffee (cooled)",
                         "¼ cup kahlua (or other coffee liqueur)",
                         "1 tablespoon maple syrup (or sweetener of your choice)",
                        
                         "For the cherries: ",
                         "1 heaped cup fresh cherries pitted (around 200-250g/7-9oz)",
                         "1 tablespoon kirsch",
                         "1 teaspoon raw sugar",

                         "For the vanilla cheesecake filling layers: ",
                         "½ cup cashews (soaked for 2-4 hours)",
                         "500 g soft tofu drained (approx. 1.1lb)",
                         "½ cup coconut oil (melted if solid)",
                         "¼ cup maple syrup",
                         "¼ cup lemon juice freshly squeezed",
                         "3-4 tablespoon kirsch to taste",
                         "1 teaspoon vanilla paste (or natural vanilla extract)",

                         "To garnish: ",
                         "Fresh cherries",
                         "¼ cup cocoa for dusting (approx.)" ],
                     instructions: [
                         "Start by making the cake, using Sam Turnbull's recipe for basic vanilla cake. Make the cake in a single cake tin, and check for doneness from about 20 minutes onwards. The cake is done when golden and a toothpick comes out clean. Cool on a cake rack, then cut into 2-3cm/1in thick chunks or slices. ",
                         "While the cake is cooking, brew some strong coffee and set aside a cup of it to cool in a shallow mixing bowl. Add the kahlua and maple syrup to taste",
                         "Pit the cherries by slicing them in half and removing their stone. Toss with 1 tablespoon of kirsch and 1 teaspoon of raw sugar, then set aside. Give them a stir every now and then while you're getting everything else ready.",
                         "Make the cheesecake filling by blending everything except the coconut oil until smooth. Adjust flavour with a little more kirsch if desired. Then pour the coconut oil in while the blender is running, and blend until combined. ",
                         "To assemble the tiramisu, very briefly dip the cake chunks/slices into the coffee syrup (or drizzle it over the cake if you're using larger slices), then arrange them in the bottom of serving glasses or a larger serving dish. You want the cake to be moist but not soaked. Sprinkle about half of the cherries over the cake, followed by a generous layer of vanilla cheesecake filling. Repeat the layers, finishing with a layer of vanilla cheesecake filling. ",
                         "Dust the top of the tiramisu with cocoa, using a sieve to sprinkle it evenly. Wipe the edges clean if necessary, then chill for at least six hours or overnight until set. ",
                         "Garnish with fresh cherries and serve. " ]
                 },
                  appetizerboard: {
                      title: "Vegan Holiday Appetizer Board with Roasted Nuts",
                      description:"A holiday staple and easy to make",
                      ingredients: [
                          "Rosemary Almonds: ",
                          "1 cup (112g) raw almonds",
                          "1 ½ tablespoons (22ml) olive oil, light preferred",
                          "1 teaspoon garlic powder",
                          "¼ teaspoon red pepper flakes",
                          "2 sprigs fresh rosemary",
                          "¼ teaspoon salt",

                          "Maple Cashews: ",
                          "1 cup (120g) raw cashews",
                          "1 tablespoon (15ml) olive oil, light preferred",
                          "2 tablespoons (30ml) maple syrup",
                          "¼ teaspoon nutmeg",
                          "½ teaspoon cinnamon",
                          "¼ teaspoon salt",
                          "Sea salt for garnish on both"
                          ],
                      instructions: [
                          "Preheat oven to 325°F (162°C).",
                          "Prepare Rosemary Almonds: in a small bowl combine the oil and spices for the rosemary almonds, mix together well then add almonds and toss to coat. Place on a small baking sheet and set aside.",
                          "Prepare Maple Cashews: in a small bowl combine the oil and spices for the maple cashews, mix together well then add the cashews and toss to coat. Place on a small baking sheet.",
                          "Be sure to scrape the oil and spices from both bowls really well so everything is coated and nothing is left in the bowl.",
                          "Roast in the oven for 15 minutes, until the nuts are a richer color.",
                          "Let them cool before serving. Only let the cashews cool for about 1 minute then use a spatula to break them up once they harden. Do this very quickly after they come out the oven otherwise they will stick to the pan.",
                          "Place on the holiday board and enjoy."
                          ]
                  },
                          sausageroll: {
                              title:"Vegan sausage roll",
                              description:"A sausage roll filled with a beautiful mixture of earthy mushrooms and smoky tofu",
                              ingredients: [
                                  "250 g / 9 oz chestnut / baby bella mushrooms",
                                  "225 g / 8 oz smoked firm cotton tofu OR 175 g / 1 packed cup cooked brown rice",
                                  "250 g / 9 oz chestnut / baby bella mushrooms",
                                  "2 large shallots, finely diced",
                                  "3 garlic cloves, finely diced",
                                  "8 fresh sage leaves, finely chopped",
                                  "4 thyme springs, leaves picked",
                                  "4 tsp vegan Worcester sauce",
                                  "1 tbsp soy sauce / tamari",
                                  "¼-1/3 tsp salt, adjust to taste",
                                  "generous grind of black pepper",
                                  "2 tbsp nutritional yeast",
                                  "2 tsp tomato paste",
                                  "1½ tsp wholegrain mustard, more to taste",
                                  "1 tsp smoked sweet paprika (if using rice), more to taste",
                                  "¼ cup flour (I tested tapioca starch and rice flour)",
                                  "1 sheet vegan puff pastry",
                                  "vegan egg wash: 2 tsp plant milk, 1 tsp olive oil + 1 tsp maple syrup or sugar",
                                  "2 tsp sesame or / and poppy seeds, to decorate",

                                  "Mushroom Miso Gravy(optional) : ",

                                  "20 g / 0.7 oz dry mushrooms (I used a mixture of porcini and shiitake), well rinsed",
                                  "2 tbsp olive oil",
                                  "2 large shallots (I used scallion type), roughly diced",
                                  "6 garlic cloves, unpeeled and crushed",
                                  "2 small carrots, scrubbed clean and roughly diced",
                                  "2 celery sticks, roughly diced",
                                  "2 tsp tomato paste",
                                  "1 sprig of fresh rosemary, whole",
                                  "6 sprigs of fresh thyme, whole",
                                  "4 sage leaves, roughly chopped",
                                  "120 ml / ½ cup vegan white wine",
                                  "1 fresh or dried bay leaf",
                                  "10 black peppercorns",
                                  "1 tbsp white / shiro miso",
                                  "1 tbsp nutritional yeast",
                                  "2 tsp vegan Worcester sauce",
                                  "1 tbsp soy sauce",
                                  "1 tbsp balsamic vinegar",
                                  "1 tsp maple syrup or sugar",
                                  "salt, to taste (if needed)",
                                  "2 tsp cornstarch / cornflour" ],

                              instructions: [
                                  "Chop mushrooms into very small dice and mash well drained tofu with a fork. You can use a food processor for both, but I prefer chopping the mushrooms by hand as it is too easy to overprocess them and lose all the texture.",
                                  "Heat up olive oil in a large frying pan. Add shallots and fry until translucent, stirring from time to time.",
                                  "Add garlic, chopped up sage and picked thyme leaves. Fry until garlic softens and becomes fragrant, stirring often.",
                                  "Add chopped up mushrooms and let them sauté until they are cooked and all the excess water cooks out.",
                                  "Add in mashed up tofu (or cooked, cooled-down rice), vegan Worcester sauce, soy sauce, salt, pepper, nutritional yeast, tomato paste, mustard and smoked sweet paprika (if using rice). Mix everything really well. Taste and adjust the seasoning to your liking. If there is still some moisture in the pan, make sure you allow it to cook out before cooling the filling.",
                                  "Once the filling is cool, add the flour, stir it well and then form a compact log out of the mixture. Compact the filling well with your hands so that it forms a nicely shaped log that fits the size of your pastry sheet. My log was 20 cm / 8″ long. Optionally, brush the outside of the log with a bit of olive oil.",
                                  "Heat up the oven to 180° C / 355° F (160° C / 320° F if using fan function) and line a baking tray with a piece of baking paper",
                                  "Place the log on the baking tray and bake for about 35-40 minutes so that it firms up before being wrapped up in pastry. Allow it to cool down before wrapping in pastry.",
                                  "Take the puff pastry out of the fridge for about 10 minutes before assembling the rolls so that it’s more pliable.",
                                  "Once you are ready to assemble the roll, heat the oven up to 200° C / 390° F (180° C / 355° F if using fan function).",
                                  "Unravel the puff pastry sheet so that the long edge runs parallel to the edge of the workbench",
                                  "Gently place the pre-baked log, top side down, in the middle of the pastry sheet, alongside the shorter edge of the pastry.",
                                  "Wrap the log in the pastry, seal well and then very gently (rope some spatulas and someone else in to help), flip the log so that the seam is at the bottom.",
                                  "Using a sharp pairing knife, make small incisions in the pastry at regular intervals.",
                                  "Glaze the roll with vegan egg wash and sprinkle with sesame and / or poppy seeds.",
                                  "Place the roll on a paper-lined baking tray and bake for about 40 minutes, until the pastry has puffed up and become golden brown.",

                                  "Mushroom niso gravy: ",
                                  "Ahead of time bring a kettle of water to a boil and pour about 500 ml / 2 cups of boiling water over cleaned dry mushrooms to create a mushroom stock. Allow the mushrooms to infuse for as long as you can.",
                                  "Heat up 2 tbsp of olive oil in a heavy bottomed pan. Once the oil comes to temperature, add shallots, garlic, carrot and celery. Sauté gently on a medium heat until lightly caramelised, stirring often.",
                                  "Next add in tomato paste and fresh herbs, stir well and allow it to cook until caramelised (not burnt) – stirring from time to time.",
                                  "Next add in wine (it will deglaze the pot incorporating all the beautiful, stuck-to-the-pan bits into the gravy), bay leaf, peppercorns, miso, nutritional yeast and porcini stock (save rehydrated mushrooms for another dish like risotto).",
                                  "Allow the mixture to simmer gently until it reduces by about half (30-45 minutes).",
                                  "Season with vegan Worcester sauce, soy sauce, balsamic vinegar, maple syrup / sugar and a little bit of salt (if needed). Set aside for the flavours to infuse (ideally overnight if you have time).",
                                  "Strain the mixture and squeeze all of the juice out of the veggies",
                                  "Return the liquid to a small pot. Taste and season to taste",
                                  "Bring the gravy to a gentle simmer. Thicken it a little by whisking the cornflour slurry (cornflour mixed in with 2-3 tsp of water) in slowly while it simmers."
                                  ]
                          },
                             chistmaspudding: {
                                 title: "Vegan Christmas pudding",
                                 description:"A plump and fruity vegan Christmas pudding, with a Riverford twist",
                                 ingredients: [
                                     "100g sultanas",
                                     "100g currants",
                                     "100g dried figs, roughly chopped",
                                     "50g prunes, roughly chopped",
                                     "50g dried apricots, roughly chopped",
                                     "50g glacé cherries (not the bright red ones), sliced",
                                     "50g candied peel",
                                     "100ml dark stout",
                                     "100ml brandy or Calvados",
                                     "150g vegan suet",
                                     "150g light muscovado sugar",
                                     "100g ground almonds",
                                     "1 apple, grated",
                                     "juice and zest of 1 orange",
                                     "1 tsp mixed spice",
                                     "120g self-raising flour",
                                     "vegetable oil for greasing"
                                     ],
                                 instructions: [
                                     "Put the sultanas, currants, figs, prunes, apricots, cherries, and candied peel into a mixing bowl with the stout and brandy. Stir together and leave somewhere cool overnight.",
                                     "The next day, add the suet, sugar, almonds, apples, orange zest & juice, and mixed spice. Mix well, until thoroughly combined. Now sieve in the flour, and fold it in firmly, but without overmixing; stop once there are no more visible signs of dry flour.",
                                     "Grease the inside of a 1 litre pudding basin with a little oil. Add the mixture and level it with the back of a spoon. Top with a pleated circle of baking parchment and pop on the lid; if you’re using a ceramic basin, create the lid with a double layer of pleated foil, tied tightly to the basin rim with string.",
                                     "Steam for 4 hours. Cool completely. Cover with a fresh circle of baking parchment and a clean lid. Store in an airtight container, somewhere dark and cool, until Christmas. To reheat on Christmas Day, steam for 3 hours."

]
                             },
    chocpeppermintcupcakes: {
        title:"Vegan Chocolate Peppermint Cupcakes",
        description:"These Chocolate Peppermint Cupcakes are the best vegan holiday dessert. They’re topped with vegan chocolate frosting sweetened with dates!",
        ingredients: [
            "Non-dairy milk.",
            "Apple cider vinegar.", 
            "Oat flour.",  
            "Cocoa powder.",  
            "Baking soda.",
            "Salt.",
            "Coconut sugar.",  
            "Nut butter.",
            "Applesauce.", 
            "Peppermint.",
            "Vanilla extract.", 
            "Dates." ],
        instructions: [
            "Preheat oven to 350F and prep a muffin tip with liners.",
            "Make vegan buttermilk by combining milk and vinegar and letting it sit for 5-10 minutes.",
            "Mix the dry ingredients in a large bowl, including the flour, oat flour, cocoa powder, baking soda, and salt.",
            "Combine the wet ingredients in a separate bowl, including the vegan buttermilk mixture, coconut sugar, almond butter, applesauce, peppermint extract, and vanilla.",
            "Slowly pour the wet ingredients into the dry ingredients and stir to combine until ingredients are just mixed together.",
            "Fill each cup with batter, a little over 2/3 of the way full.",
            "Bake for 20-22 minutes, until a toothpick inserted into the center of a cupcake comes out clean. Remove the cupcakes and let them cool in the pan for 10 minutes.",
            "Prepare the frosting. Drain dates, add them to a food processor or blender with cocoa powder, peppermint extract, and vanilla extract. Blend until smooth, adding a tablespoon at a time of milk as needed.",
            "Spoon frosting onto each cupcake. Sprinkle with crushed peppermints and serve!"
            ]
    },
        
wreathcakes: {
    title: "Vegan Mini Wreath Cakes",
    description: "a fabulous addition to any holiday party or cookie exchange.",
    ingredients: [
        "2 cups unbleached flour",
        "⅔ cup cocoa powder",
        "1 tablespoon baking powder",
        "½ teaspoon salt",
        "½ teaspoon nutmeg",
        "¼ teaspoon cinnamon",
        "1 ⅓ cups organic or raw sugar",
        "1 ¼ cups vanilla or chocolate non-dairy milk (or both)",
        "½ tablespoon vanilla extract",
        "egg replacer for 2 eggs",
        "⅔ cup coconut oil (or substitute any vegetable oil)"
],
    instructions:[
        "Mix the wet ingredients in a saucepan over low-med heat until the coconut oil melts and sugar dissolves (the wet ingredients are the last 5 in the list).",
        "Preheat the oven to 350°.",
        "Mix the dry ingredients together in a bowl: 2 cups flour, ⅔ cup cocoa powder , 1 tablespoon baking powder, ½ teaspoon salt, ½ teaspoon nutmeg, and ¼ teaspoon cinnamon.",
        "Mix the dry and wet ingredients together just until incorporated",
        "Pipe or spoon the batter into 12 ungreased donut-shaped molds.",
        "Bake for 10-12 minutes.",
        "Remove from oven and place pans on cooling racks.",
        "Remove donuts from the pans using a flexible silicone spatula , by shimmying the spatula down the sides of the pan so far that it curls all the way underneath each donut (start this step only when completely cooled).",

        "Fore the decoration: ",
        "Bow: 6 marshmallows and pink gel color Ornaments: mini jawbreakers",
        "Break each marshmallow in half.",
        "Knead the half a marshmallow with pink food coloring. If you don’t want colored hands you can wear gloves while you do this part.",
        "Shape each marshmallow piece into a bow using your hands. Set each one aside as you finish."
        ]
},
    yulelog: {
        title: "Vegan Yule Log",
        description: "This chocolate vegan yule log is a real show-stopping Christmas dessert! It consists of a rolled chocolate sponge cake filled with vanilla buttercream and coated with creamy chocolate ganache.",
        ingredients: [
            "200 g Self-raising flour", 
            "1 Tablespoon Unsweetened cocoa powder", 
            "¼ Teaspoon Baking soda (bicarbonate of soda)", 
            "⅛ Teaspoon Xanthan gum (it's very important to measure this accurately so I recommend using a measuring spoon if you can)", 
            "115 g Caster/superfine sugar",
            "75 g Dairy-free margarine, melted after weighing", 
            "250 ml Unsweetened soy milk", 
            "2 Teaspoons Vanilla extract",

            "For the vanilla buttercream filling: ",
            "80 g Vegan margarine or butter",
            "200 g Icing/powdered sugar", 
            "1 Tablespoon Soy milk",
            "2 Teaspoons Vanilla extract", 

            "For the chocolate ganache: ",
            "300 g Semi-sweet chocolate** (use one with ~45% cocoa content)",
            "120 ml Unsweetened soy milk" 
],
        instructions: [
            "Preheat your oven to 180°C (or 160°C if you’re using a fan oven). Line a swiss roll tin (or 10 x 14 inch baking tray that’s at least 1-inch deep) with baking paper.",
            "In a large bowl, mix together 200g of self-raising flour*, 1 tablespoon of unsweetened cocoa powder, 1/4 teaspoon of baking soda and 1/8 teaspoon of xanthan gum. Xanthan gum will help the sponge become more flexible, which will prevent it from cracking, but be aware that it is very potent stuff. I strongly recommend using a 1/8 teaspoon measuring spoon instead of eyeballing it with a regular teaspoon because if you add too much, the batter will be too thick to spread and the cake will be very dense. *If you can’t find self-raising flour, just use plain all-purpose flour and add 2 teaspoons of baking powder to the recipe.",
            "Stir in 115g of caster/superfine sugar.",
            "Next, measure out 75g of dairy-free margarine and gently melt it over the stove or in the microwave. Add the melted butter into the bowl with the dry mixture, along with 250ml of soy milk and 2 teaspoons of vanilla extract. Mix it all together until you have a smooth cake batter.",
            "Transfer the batter into your lined tray and use a spoon or spatula to spread it out to the edges. he batter will be thicker than a usual cake mix but try to make sure it’s spread out very evenly. I go along the tin vertically then horizontally to make sure there are no spots that are too thick or thin.",
            "Tap the tray on the counter a few times to get rid of any large air bubbles. Bake for 12 minutes then remove from the oven. Leave the cake in the tin to cool for 5 minutes",
            "Dust a clean dishcloth / tea towel with unsweetened cocoa powder. Be generous with it but don’t go crazy or the cake will become bitter. Tip the warm cake onto the dishcloth and gently remove the baking paper. Cut off any rough or uneven edges using a knife.",
            "Sprinkle a small amount of cocoa powder over the cake and gently roll it up with the dishcloth, while the cake is still warm. Once rolled, leave the cake at room temperature to cool for 90 minutes.",
            "Just before the 90 minutes are up, prepare the buttercream filling. Gently mix 80g of vegan margarine or butter in a large bowl until soft. Add 200g of icing/powdered sugar, a little bit at a time until smooth. Add 1 tablespoon of soy milk to help loosen it up. Finally, add 2 teaspoons of vanilla extract and mix it in.",
            "When the 90 minutes are up, gently unroll the cake. If you’re careful, there shouldn’t be any cracks but don’t worry if you get some small ones as they can be covered later. Spread an even layer of the vanilla buttercream over the cake. Gently roll it back up, this time without the dishcloth.",
            "Cover the cake in plastic wrap and place it in the fridge for 1 hour. This will help it to hold its shape.",

            "For the chocolate ganache: ",
            "Very finely chop 300g of dairy-free semi-sweet chocolate. Add it to a glass bowl with 120ml of soy milk. It’s important that you chop the chocolate finely otherwise it will burn.",
            "Place the bowl over a small saucepan of boiling water, so that the bottom of the bowl sits nicely over it without touching the water. Turn the heat to low and gently mix until the chocolate has completely melted. Use gloves or a dishcloth to remove the bowl from the pan and leave it to sit at room temperature for exactly 1 hour.",
            "After 1 hour, use an electric whisk to whisk the chocolate for around 10 seconds. This will add some air into it and make it fluffy. Be careful not to overdo it or it will become too firm to pipe.",
            "Transfer the ganache to a piping bag with a large star nozzle. Pipe the ganache in lines over the yule log until it’s completely covered."
            ]
    }, //Athanasiadou Eleni Anna
    chocgingerbreadcakes: {
        title: "Chocolate Gingerbread Mini Cakes (vegan & gluten-free)",
        description: "Chocolate Gingerbread Mini Cakes Recipe. Beautiful festive gluten-free vegan moist gingerbread chocolate mini cakes with luscious chocolate ganache.",
        ingredients: [
            "3/4 cup brown rice flour (95 grams)",
            "1/2 cup buckwheat flour (70 grams)", 
            "1/2 cup sunflower seeds (70 grams), ground into flour consistency", 
            "1/4 cup tapioca flour (30 grams) ",
            "1/4 cup cacao or cocoa powder (30 grams)", 
            "3/4 cup rapadura sugar (100 grams)",
            "1 1/2 teaspoons baking powder",
            "1 teaspoon bicarbonate of soda", 
            "2 teaspoons ginger", 
            "1 teaspoon cinnamon", 
            "1/8 teaspoon nutmeg", 
            "1/8 teaspoon cloves", 
            "pinch sea salt", 
            "3 tablespoons ground flaxseed + 9 tablespoons water", 
            "1/3 cup apple sauce (80 ml)", 
            "1/3 cup olive oil (80 ml)", 
            "1/4 cup molasses (60 ml)",
            "2 teaspoons apple cider vinegar",  
            "1/4 cup hot water (60ml) + more as needed",

            "Chocolate ganache: ",
            "8-ounces dark vegan chocolate (220 grams)",
            "1 cup oat cream (240 ml)",
            "1 tablespoon maple syrup (optional)",

            "Decoration: ",
            "fresh cranberries",
            "rosemary sprigs",
            "blended desiccated coconut for snow"

  
            ],
        instructions: [
            "Preheat the oven to 350 °F (180 °C).",
            "Grease and line a 10x14 inches (25 x 35cm) Swiss roll tin with baking paper.",
            "Mix 3 tablespoons ground flaxseed with 9 tablespoons water and set aside to thicken.",
            "In a large bowl whisk together brown rice flour, buckwheat flour, ground sunflower seeds, tapioca flour, cacao powder, sugar, baking powder, bicarbonate of soda, ginger, cinnamon, nutmeg, cloves and salt.",
            "In a small bowl whisk together flax eggs, apple sauce, olive oil, molasses, apple cider vinegar and water.",
            "Add the wet mix to the dry mix and mix until well combined. Add extra water 1 tablespoon at the time to achieve pourable muffin consistency. I've used 2 tablespoons more in my mix",
            "Pour the mixture onto the lined tin and smooth out the surface.",
            "Bake for about 20 minutes or until a cocktail stick comes out clean. Try not to overbake it.",
            "Remove from the oven and leave to cool down.",
            "Once cooled using 2 round cookie cutter cut out 25 shapes.",
            "Spoon ganache into a piping bag fitted with large star nozzle, pipe on top of the cakes and layer them on top of each other. You can create two- or three-layer cakes or a mix of both.",

            "For the chocolate Ganache: ",
            "Roughly chop the chocolate for the chocolate ganache and place into a medium bowl. Place the oat cream and maple syrup into a small pot and gently heat until boiling point. Pour over the chopped chocolate and stir until completely melted and smooth. Leave to cool down before placing into a fridge to set overnight into a pipeable consistency. It should be perfect consistency for piping but if it's too hard leave it at room temperature for a little while to soften.",
            "Decorate with cranberries and rosemary sprigs.",
            "Blend some desiccated coconut and sprinkle on top and around the mini cakes to resemble snow."
            ]
    },

    gingcake: {
        title: "Vegan Gingerbread cake",
        description: "This vegan gingerbread cake is moist, fluffy, packed with warm spices with a hint of molasses. The cake is easy to prepare and is the perfect dessert for any Christmas table this holiday season!",
        ingredients: [
            "Dry ingredients: ",
            "3 ½ cups (440g) all-purpose plain flour, spoon and leveled", 
            "1 ¼ cups (240g) packed brown sugar or coconut sugar",
            "2 tablespoons ground cinnamon",  
            "2 tablespoons ground ginger", 
            "1 teaspoon ground nutmeg", 
            "3 teaspoons baking powder", 
            "½ teaspoon baking soda", 
            "Pinch of salt",

            "Wet ingredients: ",
            "½ cup (170g) molasses, not blackstrap molasses",
            "1 ½ cups (375g) dairy-free milk, room temperature",
            "⅔ cup (165g) neutral flavored oil",
            "1 tablespoon apple cider vinegar, or white vinegar",
            "1 tablespoon vanilla extract",

            "Frosting: ",
            "1 ½ cups (340g) vegan block butter, room temperature",
            "4 – 6 cups (400g-600g) powdered sugar / icing sugar, (start with less and add more to taste)",
            "1 tablespoon vanilla extract",
            "Dash of dairy-free milk, as needed",

            "To decorate(optional) : ",
            "gingerbread cookies",
            "Sugared cherries, or cranberries",
            "Sugared rosemary"

            
            ],
        instructions: [
            "Make the gingerbread cake: ",
            "Preheat your oven to 160°C (320°F). Line 3 x 8-inch (20 cm) round cake pans with parchment paper.",
            "Add all the dry ingredients to a large mixing bowl or stand mixer. Mix until there are no lumps. Add all the wet ingredients to the bowl. Loosen the molasses with your whisk then mix until just combined",
            "Evenly divide the cake batter into your 3 prepared pans. Bake for 20-25 minutes or you can insert a toothpick in the center of each cake and it comes out clean. Allow the cakes to cool in the tins for 20 minutes then carefully place them on a cooling rack.",

            "Make the frosting: ",
            "Add the vegan butter to a stand mixer with the whisk attachment or to a large bowl (if using a hand mixer). Beat on high speed for 3-5 minutes until the butter is pale in color.",
            "Add 4 cups (400g) of powdered sugar and vanilla to your mixer or bowl. Beat on low for 30 seconds or until the sugar is fully incorporated. Increase to high speed and beat the frosting for another 5 to 10 minutes or until it's light and fluffy.",
            "Taste test the frosting. For a sweeter frosting, add more sugar as desired. Beat the frosting until it's fluffy.",
            
            "Assemble and store the cake: ",
            "If the cake layers have domes, use a serrated knife to carefully slice off the domes. Flat cakes are easier to stack!",
            "Place one cake layer on a serving plate and spread around 3/4 cup buttercream on top. Place another cake layer on the frosting making sure it is level. Repeat until you've layered all 3 cake layers.", 
            "Spread a thin layer of frosting on the sides and top of the cake. Use a spatula or cake scraper to smooth the surface, as desired.",
            "1-2 hours before serving, decorate your cake with gingerbread cookies or as desired. If you have any leftover buttercream, use it to keep your decorations in place.",
            "Store leftover cake in an airtight container at room temperature for 1 day, in the fridge for up to 3 days, or in the freezer for up to 1 month. Allow the cake to come to room temperature before serving"
            ]
    },//Xanthopoulos Konstantinos
     porkleg: {
         title: "Pierna mechada (Mexican roast pork leg)",
         description: "In Mexico, Navidad (Christmas) is celebrated with a big dinner at home. This pork dish is super popular during Christmas celebrations.",
         ingredients: [
             "2.5kg pork leg, skinless and bone-in",
             "12 black peppercorns",
             "3 tbsp sea salt",
             "6 garlic cloves, roughly chopped",
             "175ml orange juice",
             "175ml white wine",
             "25g toasted almonds",
            "10 pitted prunes, halved",
            "3 streaky bacon rashers, cut into 2cm slices",
            "Thyme sprigs to decorate (optional)",

             "For the adobo: ",
             "6 guajillo chillies, deseeded",
             "1 ancho chilli, deseeded",
             "4 morita chillies, deseeded",
             "4 garlic cloves",
             "2 tbsp sea salt",
             "Pinch cumin seeds",
             "1 tbsp Mexican oregano (sold dried)",
             "6 allspice berries",
             "2 pinches dried thyme",
             "2 tbsp cider vinegar",
             "2 bay leaves",
             "1 tbsp dark brown sugar"
],
         instructions: [
             "Use a small sharp knife to cut holes/slits all over the pork leg – aim for holes roughly 5cm deep and around 5cm apart. If the meat is already trussed with butcher’s string, leave it on as it’ll save you a job later. Put the peppercorns, salt and garlic in a pestle and mortar or spice grinder and crush into a paste. Use your fingers to push a little of the paste into each hole.",
             "Put the flavoured pork leg in a large resealable plastic bag, then pour in the orange juice and white wine. Seal and give it a good shake, then leave it in the fridge overnight, giving it a shake and turning the bag over every hour or so.",
             "The next day, make the adobo sauce. Put the 3 types of dried chilli in a large heatproof bowl and cover with 1 litre hot water, then set aside for 10 minutes to rehydrate. Put the rest of the adobo ingredients in a blender or food processor. Pulse a few times to combine, then add the soaked chillies (without the liquid) and whizz, scraping down the sides as needed, and adding enough chilli-soaking liquid (about 600-750ml) to create a purée-like texture.",
             "Take the pork leg out of the bag, pat it dry and put it on a chopping board. Heat the oven to 200°C fan/gas 7. Take the toasted almonds, prunes and bacon and start stuffing them into the holes in the pork – aim to get a piece of each in every hole if possible. Tie about 6 loops of butcher’s string around the meat to keep it in shape (if the meat isn’t already trussed), then transfer it to a deep roasting tray. Pour over the adobo sauce, then cover the tray tightly with foil.",
             "Roast the pork in the oven for 50 minutes, then turn the heat down to 180°C fan/gas 6 and roast for 1 hour 15 minutes more (or 30 minutes per kg, if your pork leg is slightly larger or smaller). Set aside to rest for 10 minutes before decorating with thyme sprigs, slicing and serving with the adobo sauce from the tray."
             ]
     },
     melomakarona: {
         title: "Melomakarona",
         description: "A sweet Greek Christmas recipe",
         ingredients: [
             "475g plain flour",
             "1 tsp baking powder",
             "175ml extra-virgin olive oil",
             "100g caster sugar",
             "25ml brandy",
             "Finely grated zest 2 oranges, plus 75ml juice",
             "½ tsp ground cinnamon",
             "½ tsp ground ginger",
             "½ tsp ground cloves",
             "½ tsp bicarbonate of soda",
             "3 pieces stem ginger, finely chopped",
             "10g sesame seeds, toasted",
             "20g walnuts, toasted and finely chopped",

             "For the syrup: ",
             "50g caster sugar",
             "100g good-quality honey",
             "1 tbsp lemon juice"
],
         instructions: [
             "Heat the oven to 160°C fan/gas 4. Sift the flour and baking powder into a bowl. In another larger mixing bowl, beat the olive oil and sugar with an electric whisk until the sugar has dissolved. Stir in the brandy, orange zest and dry spices.",
             "Pour the orange juice into a glass, stir in the bicarbonate of soda, then tip this into the olive oil mixture. Stir in the stem ginger. Gradually start adding the flour mix to the liquid, at first stirring with a spoon, then using your hands. Mix to the point where you have a soft dough, but try not to overmix as the oil will start separating out.",
             "Line a large baking tray (or 2 smaller ones) with baking paper and put a wire rack next to it. Take about 15g of the dough in your hands, shape into a circle or oval, then roll gently on the rack to create ridges all over (this helps the biscuit absorb the syrup). Put on the tray, then repeat until all the dough is used up – you should get 50-ish biscuits. Bake for 30-35 minutes until golden.",
             "Meanwhile, make the syrup. Put a saucepan over a medium heat and add the sugar with 100ml water. Bring to the boil, wait 3 minutes, then add the honey and lemon juice. Skim off any scum that rises to the top, then boil for another few minutes. Remove from the heat.",
             "Leave the melomakarona to cool for 5 minutes, then dip, one by one, into the still-hot syrup with a spoon. Drain on the cooling rack, then arrange on a platter drizzling over any leftover syrup and sprinkling over the sesame seeds and walnuts."
             ]
     },
       janssonstemptation: {
           title: "Jansson’s temptation",
           description: "Jansson’s temptation (Jansson’s frestelse), a classic Swedish potato dish traditionally made with cream and ansjovis (cured sprats). The perfect festive side dish.",
           ingredients: [
               "1kg potatoes",
               "75g unsalted butter",
               "2 large onions, halved and sliced",
               "125g tin ansjovis (or 2 tins if you like a stronger flavour)",
               "300ml whole milk",
               "300ml double cream",
               "50g dried breadcrumbs"
               ],
           instructions: [
               "Heat the oven to 160°C fan/gas 4. Peel the potatoes, cut into batons roughly the size of chips and put them in the ovenproof dish (don’t soak them in water as this will remove the starch, which helps to bind the dish together). Put the dish of raw potatoes in the oven for 15 minutes to pre-cook a little.",
               "Meanwhile, melt 50g of the butter in a saucepan and add the sliced onions. Cook over a low-medium heat until very soft and translucent, but without colour (about 15 minutes).",
               "Gently mix the onions into the par-cooked potatoes, trying not to break up any of the batons. Set aside half the veg mixture in a bowl, then scatter half the ansjovis into the ovenproof dish. Add a good splash of the pickle juice from the tin, too. Mix the milk and cream, then pour half of it into the dish. Season well with salt and pepper.",
               "Repeat the layers with the remaining potatoes/onions and ansjovis, then pour over enough of the cream mixture to just cover the potato mixture (reserve any leftover cream). Sprinkle with the breadcrumbs, then dot the remaining butter over the top. Season again with salt and pepper.",
               "Put the dish in the oven, reduce the heat to 140°C fan/ gas 3, then bake for 30 40 minutes or until the potatoes are cooked through. Depending on the type of potatoes you use, you may want to pour in any remaining cream halfway through cooking; the end result should be super creamy, so you’re not aiming for something dry. You can also give it a final blast under the grill to brown the top if needed."
               ]
       },
    millwheels: {
        title: "Romanian mill wheels",
        description: "traditional Romanian mill wheels, little meringues sandwiched with chocolate cream.",
        ingredients: [
            "2 medium free-range egg whites",
            "145g caster sugar",
            "1 tsp lemon juice",
            "50ml double cream",
            "50g dark chocolate, 70-85% cocoa solids",
            "20g chopped roasted hazelnuts"

        ],
        instructions: [
            "Heat the oven to 120°C fan/gas ½ and line a baking sheet with baking paper. In a large bowl, whisk the egg whites to soft peaks, then gradually add the sugar and lemon juice until the meringue forms very stiff peaks and the sugar has dissolved. Transfer to a piping bag and pipe 24 meringues of equal size onto the lined sheet. When piping, keep the nozzle very close (around 2mm) to the baking paper, without swirling, lifting slightly to create height. Make them about 3.5cm in diameter. Dip a finger in cold water and gently tuck in any peaks that are sticking out.",
            "Bake for 40 minutes, then turn off the oven and allow the meringues to cool in it for a few minutes with the door left ajar. Transfer to a cooling rack.",
            "Make the filling by heating the cream in a small saucepan. Chop the chocolate finely, place in a heatproof bowl and pour the hot cream on top. Stir well until it looks glossy.",
            "Sandwich together 2 meringues with a little chocolate, then sprinkle some hazelnuts on the outside of the filling. Put on a pretty plate and serve."
            ]
    },
    pakhlava: {
        title: "Armenian pakhlava with pomegranate syrup",
        description: "A pakhlava lies at the heart of Armenian baking, from a dish to bring a little joy on Lent days to one carried in large trays to the table at weddings and festive gatherings. The fragrant cloves are believed to symbolise the gifts the Three Wise Men brought to baby Jesus.",
        ingredients: [
            "200g caster sugar",
            "60ml pomegranate molasses",
            "300g walnuts",
            "2 tsp ground cinnamon",
            "2 tsp ground cloves",
            "120g unsalted butter, melted, plus extra to grease",
            "24 sheets (2 packets) filo pastry",
            "16 cloves (optional)"

],
        instructions: [
            "First, make a syrup by bringing the sugar, pomegranate molasses and 300ml water to the boil in a pan. Reduce the heat to medium and simmer for 15 minutes. Leave to cool.",
            "Next, make the filling. By hand or in a food processor, chop the walnuts with a pinch of salt to obtain a coarse consistency. Combine with the ground cinnamon and cloves.",
            "Heat the oven to 150°C/gas 3. Grease the baking tray with butter. Lay the first 12 sheets of filo in the tray, generously brushing each sheet with the melted butter before adding the next. Evenly spread the filling mixture on top, then lay the other 12 sheets of filo on top in the same way, brushing with butter as before. Brush the top generously with butter. With a sharp knife, cut the pakhlava in half lengthways, all the way through the layers, then cut it widthways into quarters. Cut each resulting rectangle on the diagonal, alternating the direction to create a pattern.",
            "Bake for 30 minutes, then remove from the oven. Using a tablespoon, carefully pour the syrup on top, distributing it evenly. Decorate with whole cloves on top for a more intense flavour, if wished. Allow to cool in the tray, then serve."
            ]
    },
    kolach: {
        title: "Kolach (Ukrainian Christmas bread)",
        description: "A traditional Ukrainian braided loaf enjoyed on Christmas Day, studded with citrussy mixed peel, sprinkled with poppy seeds and baked with love.",
        ingredients: [
            "For the poolish: ",
            "7g fast-action dried yeast",
            "150g strong bread flour or plain flour, plus extra to dust",

            "For the dough: ",
            "150ml kefir, whole milk or water",
            "2 medium free-range egg yolks",
            "5g fine sea salt",
            "1 tbsp honey or sugar",
            "420g strong bread flour or plain flour",
            "100g mixed peel (try to find quality candied citrus)",

            "To finish: ",
            "1 medium free-range egg yolk, beaten with a splash of whole milk",
            "Poppy seeds to sprinkle"
            ],
        instructions: [
            "Make the poolish the night before. Mix the yeast and 150ml water in a large bowl, then stir in the flour to create a paste. Cover and leave in the fridge overnight.",
            "The next day, add the kefir (or milk or water), egg yolks, salt and honey (or sugar) to the poolish (which should have risen and turned a little spongy). Mix well with a whisk, then tip in the flour and mix roughly with a spoon. Wet your hand with water and continue to mix by hand. The mixture will look rough and ragged, but there shouldn’t be any dry patches of flour. Cover and leave to hydrate for 30 minutes to an hour at room temperature.",
            "While you wait for the dough to hydrate, finely chop your mixed peel (if it’s in large pieces), dried fruit and/or nuts.",
            "Fill a small bowl with water. Wet your hand and take a handful of mixed peel, fruit or nuts and sprinkle it on top of the dough. Stretch one of the sides up and flip it over. Keep wetting your hand (this stops the dough from sticking to it so much), then keep sprinkling, stretching and folding until the filling is used up. Cover and leave to rest for another 30 minutes to an hour until the dough has nearly doubled in size.",
            "Sprinkle your work surface with flour and pull the dough out of the bowl. Lightly knead it, moving it around the dusted flour – you don’t need to knead too intensely; you just want to bring it together into a smooth dough. Shape it into a tight ball and cut into 4 equal pieces. Shape each piece into a tight ball and cover, then leave to rest for at least 15 minutes to allow the gluten to relax.",
            "You’ll need quite a large clear space on your work surface, so make sure there’s enough room. Very lightly dust your surface with flour, then begin rolling each ball into a cylinder, elongating it into a 30cm rope from the middle outwards. If it starts to stick too much, add a tiny sprinkling of flour where it sticks, then continue.",
            "Pinch the 4 ropes together at one end. Now it’s time to being plaiting them. Take the rope nearest to you and thread it over the second rope, under the third rope and over the final rope. Take the new rope nearest to you and again thread it over the second, under the third and over the final one. Repeat this over-under-over process again and again, gently stretching and rearranging the ropes to keep them an even length as you work until the ropes are fully plaited together. Pinch the 4 ends together to create a neat finish.",
            "Line a baking tray with baking paper and give it a light dusting of flour. Put an ovenproof dariole mould or small bowl in the centre. Shape the plaited loaf around it, pinching the two ends together to create a circle. Lightly cover the kolach and leave to prove for a final 30 minutes. Meanwhile, heat the oven to 180°C fan/gas 6.",
            "Gently glaze the kolach with the beaten yolk and milk mixture, ensuring it’s thoroughly covered, then sprinkle liberally with poppy seeds. Put the kolach on the middle shelf of the oven and bake for 30 minutes, then turn the tray around 180 degrees to ensure an even bake and cook for another 10 minutes. The poppy seeds will make the kolach look quite dark but don’t worry – it will be delicious.",
            "Remove the tray and let the kolach rest for at least 15 minutes to 1 hour. Lift the mould out from the centre and transfer the kolach to a serving plate. Serve sliced with salted butter and a cup of coffee or tea. It’s also amazing toasted for breakfast the next morning or served with cheese."
            ]
    }, //Sideri Aikaterini
     roastedchicken: {
        title: "Honey-Glazed Roasted Chicken",
         description: " A classic delicious festive recipe",
        ingredients: [
            "4 pound (1.8kg) whole chicken",
            "1 cup (236ml) lemon juice",
            "1 tablespoon extra virgin olive oil",
            "Kosher salt",
            "Freshly ground black pepper",
            "Few sprigs fresh thyme",
            "1/2 fresh lemon, cut into wedges",
            "1/4 cup (60ml) honey, heated to make it easier to brush",
        ],
        instructions: [
          "Marinate the chicken: ",
"Rub the chicken with about 2 teaspoons of kosher salt, all around the surface of the chicken. Place the lemon juice and the whole chicken in a resealable plastic bag (like a large freezer bag). Seal the bag and move the lemon juice around so that it coats the chicken.",
            "Place the bagged chicken in a bowl, so that if the bag leaks, it won't leak all over your fridge, and chill for 2 hours or overnight. Turn the chicken occasionally so that all sides stay coated with the lemon juice.",
            "Preheat the oven 400°F (205°C). Set the oven rack in the bottom third of the oven.",
            "Pat the chicken dry, rub with oil, and add seasonings and lemon wedges: Remove the chicken from the refrigerator and take it out of the marinade bag (discard the marinade).",
            "Pat the chicken dry with paper towels. Rub olive oil all over the exterior of the chicken. Sprinkle all over with salt and pepper, including the cavity. Place thyme sprigs and lemon wedges into the cavity.",
            "Roast the chicken and baste with honey: Place the chicken on a rack over a shallow roasting pan (we recommend a rack to help the heat circulation around the chicken). Roast for 20 minutes at 400°F (205°C), then lower the heat to 350°F (175°C). Roast for another 45 minutes.",
            "While the chicken is roasting, heat the honey in a bowl in the microwave or in a small saucepan to make it easier to brush",
            "After the chicken has roasted at 350°F (175°C) for 45 minutes, use a pastry brush to generously brush the top and sides of the chicken all over with honey.",
            "Roast for another 10 to 15 minutes at 350°F (175°C) until an instant read thermometer reads 160°F (71°C) for the breast and 170°F (77°C) for the thigh, or when a sharp knife inserted into the breast and thigh releases juices that run clear, not pink.",
            "Honey will burn if it gets too hot, so watch the chicken at this stage. If the skin is getting too dark and the chicken still isn't done, loosely tent the chicken with a piece of aluminum foil. Brush the chicken with honey one more time before taking it out of the oven.",
            "Tent with foil and let rest: Remove chicken from the oven and transfer to a cutting board. Tent with foil to rest for 15 minutes.",

            "Make the gravy: ",
            "Scrape up the drippings from the roasting pan with a metal spatula. Pour the pan juices and drippings into a small saucepan. If there are blackened bits from burnt honey, remove them. Spoon off all but a tablespoon of fat.",
            "If you want to thicken the juices for gravy, create a slurry with a teaspoon of cornstarch or flour and a tablespoon of water. Add the slurry to the drippings, heat, and stir until thickened. Season to taste with salt and pepper.",
            "Serve the chicken with pan juices or thickened gravy."
        ]
    },

     mashedpotatoes: {
        title: "Mashed potatoes",
         description: "Rich mashed potatoes with heavy cream",
        ingredients: [
            "5 pounds red potatoes, peeled and quartered",
            "½ cup butter",
            "1 cup heavy cream",
            "salt and pepper to taste"
        ],
        instructions: [
            "Place potatoes into a large pot with enough water to cover; bring to a boil. Cook until fork tender, about 20 minutes. Drain.",
            "Add butter to potatoes in the pot. Mash using a potato masher, ricer, or mixer until smooth. Gradually beat in heavy cream until well combined. Season with salt and pepper.",
            "Serve hot"
            
        ]
    },

    snowballcookies: {
        title: "Chocolate Snowball Cookies",
        description: "Soft, buttery treats that melt in your mouth.",
        ingredients: [
            "1 cup unsalted butter, softened",
            "½ cup confectioners' sugar",
            "1 teaspoon vanilla extract",
            "2 ¼ cups all-purpose flour",
            "1 cup very finely chopped pecans",
            "¼ teaspoon salt",
            "⅓ cup confectioners' sugar, or more as needed"
        ],
        instructions: [
            "Preheat the oven to 350 degrees F (175 degrees C).",
            "Beat butter, 1/2 cup confectioners' sugar, and vanilla with an electric mixer in a large bowl until smooth.",
            "Gradually mix in flour, pecans, and salt until completely incorporated.",
            "Roll dough into walnut-sized balls and place 2 inches apart onto ungreased baking sheets.",
            "Bake in the preheated oven until bottoms are light golden brown but tops are still pale, 12 to 15 minutes. (Try not to let cookies get too brown: it's better to undercook them than to overcook them.)",
            "Remove cookies from the oven and let sit on the baking sheets briefly before removing to wire racks.",
            "Place 1/3 cup confectioners' sugar in a shallow bowl; roll hot cookies in sugar to coat, then return to the wire racks to cool.",
            "Once cooled, roll cookies in the confectioners' sugar once more."


        ]  //Xanthopoulos Konstantinos
    }



};

// Show recipe modal
function showRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    if (!recipe) return;

    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3>${recipe.title}</h3>
        <p style="color: #666; margin-bottom: 1.5rem;">${recipe.description}</p>
        
        <h4>Ingredients</h4>
        <ul>
            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        
        <h4>Instructions</h4>
        <ol>
            ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
        </ol>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

//Sahatciu Robert
