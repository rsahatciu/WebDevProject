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
            "Add the flour mixture to the wet ingredients, and beat on low speed until combined. The cookie dough will be quite thick and slightly sticky. Divide dough in half and place each onto a large piece of plastic wrap. Wrap each up tightly and pat down to create a disc shape. Chill discs for at least 3 hours and up to 3 days. Chilling is mandatory for this cookie dough. I always chill mine overnight.",
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
            "2 cups graham cracker crumbs",
            "1/4 cup butter, melted",
            "3 (8 oz) packages cream cheese, softened",
            "1 cup sugar",
            "3 large eggs",
            "1 cup eggnog",
            "1/4 cup all-purpose flour",
            "1 tsp vanilla extract",
            "1/2 tsp ground nutmeg",
            "1/4 tsp ground cinnamon"
        ],
        instructions: [
            "Preheat oven to 325°F (165°C).",
            "Mix graham cracker crumbs with melted butter and press into a 9-inch springform pan.",
            "Bake crust for 10 minutes, then cool.",
            "Beat cream cheese and sugar until smooth.",
            "Add eggs one at a time, beating well after each addition.",
            "Stir in eggnog, flour, vanilla, nutmeg, and cinnamon.",
            "Pour mixture over crust.",
            "Bake for 50-60 minutes until center is almost set.",
            "Cool on wire rack, then refrigerate for at least 4 hours.",
            "Serve chilled with a sprinkle of nutmeg."
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

            "Icing: ",
            "3 cups (360g) confectioners’ sugar",
            "1/2 teaspoon pure vanilla extract (omit and replace with water for stark white icing)",
            "2 teaspoons light corn syrup",
            "4.5–5 Tablespoons (67–75ml) room temperature water",
            "pinch salt",
            "optional: gel food coloring & sprinkles for decorating"
        ],
        instructions: [
            "For the cookies: ",
            "Make sure you have allotted enough time (and enough counter space!) to make these cookies. The cookie dough needs to chill, the cookies need to cool completely, and the icing needs 24 hours to completely set. If enjoying right away and hardened icing isn’t a concern, you’ll only need about 3–4 hours to make these.",
            "Make the cookie dough: Whisk the flour, baking powder, and salt together in a medium bowl. Set aside.",
            "In a large bowl using a handheld or a stand mixer fitted with a paddle attachment, beat the butter and sugar together on high speed until completely smooth and creamy, about 3 minutes. (Here’s a helpful tutorial if you need guidance on how to cream butter and sugar.) Add the egg, vanilla, and almond extract (if using), and beat on high speed until combined, about 1 minute. Scrape down the sides and up the bottom of the bowl and beat again as needed to combine.",
            "Add the dry ingredients to the wet ingredients and mix on low until combined. Dough will be a bit soft. If the dough seems too soft and sticky for rolling, add 1 more Tablespoon of flour.",
            "Divide the dough into 2 equal parts. Place each portion onto a piece of lightly floured parchment paper or a lightly floured silicone baking mat. With a lightly floured rolling pin, roll the dough out to about 1/4-inch thickness. Use more flour if the dough seems too sticky. The rolled-out dough can be any shape, as long as it is evenly 1/4-inch thick.",
            "Lightly dust one of the rolled-out doughs with flour. Place a piece of parchment on top. (This prevents sticking.) Place the second rolled-out dough on top. Cover with plastic wrap or aluminum foil, then refrigerate for at least 1–2 hours and up to 2 days.",
            "Once chilled, preheat oven to 350°F (177°C). Line 2–3 large baking sheets with parchment paper or silicone baking mats. Carefully remove the top dough piece from the refrigerator. If it’s sticking to the bottom, run your hand under it to help remove it. Using a cookie cutter, cut the dough into shapes. Re-roll the remaining dough and continue cutting until all is used. Repeat with second piece of dough. (Note: It doesn’t seem like a lot of dough, but you get a lot of cookies from the dough scraps you re-roll.)",
            "Arrange cookies on baking sheets about 3 inches apart. Bake for 11–12 minutes or until lightly browned around the edges. If your oven has hot spots, rotate the baking sheet halfway through bake time. Allow cookies to cool on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely before decorating. No need to cover the cookies as they cool.",

            "For the icing: ",
            " Using a fork, stir the confectioners’ sugar, vanilla, corn syrup, and 4.5 Tablespoons (67ml) of water, and optional salt together in a medium bowl. It will be very thick and almost impossible to stir. Switch to a whisk and whisk in 1/2 Tablespoon (8ml) more of water. If you lift the whisk and let the icing drizzle back into the bowl, the ribbon of icing will hold shape for a few seconds before melting back into the icing. That is when you know it’s the right consistency and is ready to use. If it’s too thick (sometimes it is), whisk in another 1/2 Tablespoon (8ml) of water or a little more until you reach the proper consistency.",
            "If you’re tinting the icing another color, stir in the food coloring. You can pour some icing into different bowls if using multiple colors. When tinting icing, use only 1–2 drops at first, stir it in, then add more as needed to reach your desired color. Remember, color darkens as icing dries.",

            "Decoratiion: ",
            "You can dip the cookies into the icing or use squeeze bottles or piping bags (reusable or disposable) fitted with piping tips (I usually use Wilton Piping Tip #4). Decorate your cookies as desired. If using the squeeze bottles or piping tips, I usually outline cookies with icing first, then fill in the middle. If adding sprinkles on top of the icing, add them right after applying icing on your cookie.",
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
            "Serve with your choice of brandy butter, cream or ice cream"
            
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

