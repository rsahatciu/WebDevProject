// Recipe data
const recipes = {
    gingerbread: {
        title: "Classic Gingerbread Cookies",
        description: "Traditional spiced cookies perfect for decorating with the family.",
        ingredients: [
            "3 cups all-purpose flour",
            "1 tsp baking soda",
            "1/2 tsp salt",
            "2 tsp ground ginger",
            "1 tsp ground cinnamon",
            "1/4 tsp ground cloves",
            "3/4 cup butter, softened",
            "3/4 cup brown sugar",
            "1 large egg",
            "1/2 cup molasses",
            "1 tsp vanilla extract"
        ],
        instructions: [
            "In a medium bowl, whisk together flour, baking soda, salt, ginger, cinnamon, and cloves.",
            "In a large bowl, cream together butter and brown sugar until light and fluffy.",
            "Beat in egg, molasses, and vanilla extract.",
            "Gradually mix in the dry ingredients until well combined.",
            "Divide dough in half, wrap in plastic, and refrigerate for at least 2 hours.",
            "Preheat oven to 350°F (175°C).",
            "Roll out dough on a floured surface to 1/4 inch thickness.",
            "Cut into desired shapes with cookie cutters.",
            "Place on baking sheets and bake for 8-10 minutes.",
            "Cool on wire racks before decorating."
        ]
    },
    hotchocolate: {
        title: "Peppermint Hot Chocolate",
        description: "Rich and creamy hot chocolate with a refreshing peppermint twist.",
        ingredients: [
            "4 cups whole milk",
            "1/2 cup heavy cream",
            "1/2 cup semisweet chocolate chips",
            "1/4 cup cocoa powder",
            "1/4 cup sugar",
            "1/2 tsp vanilla extract",
            "1/4 tsp peppermint extract",
            "Whipped cream for topping",
            "Crushed peppermint candies for garnish"
        ],
        instructions: [
            "In a medium saucepan, heat milk and cream over medium heat until warm.",
            "Whisk in chocolate chips, cocoa powder, and sugar until smooth.",
            "Continue heating until hot but not boiling, stirring frequently.",
            "Remove from heat and stir in vanilla and peppermint extracts.",
            "Pour into mugs and top with whipped cream.",
            "Garnish with crushed peppermint candies and serve immediately."
        ]
    },
    turkey: {
        title: "Roasted Turkey with Herbs",
        description: "Juicy turkey roasted to perfection with aromatic herbs and spices.",
        ingredients: [
            "1 whole turkey (12-14 lbs)",
            "1/2 cup butter, softened",
            "2 tbsp fresh rosemary, chopped",
            "2 tbsp fresh thyme, chopped",
            "2 tbsp fresh sage, chopped",
            "4 cloves garlic, minced",
            "Salt and pepper to taste",
            "1 onion, quartered",
            "2 carrots, chopped",
            "2 celery stalks, chopped"
        ],
        instructions: [
            "Preheat oven to 325°F (165°C).",
            "Rinse turkey and pat dry with paper towels.",
            "Mix butter with herbs, garlic, salt, and pepper.",
            "Loosen skin on turkey breast and spread herb butter underneath.",
            "Rub remaining butter mixture over the entire turkey.",
            "Place onion, carrots, and celery in the cavity.",
            "Place turkey breast-side up on a rack in a roasting pan.",
            "Roast for 3-4 hours, basting every 30 minutes, until internal temperature reaches 165°F.",
            "Let rest for 20 minutes before carving.",
            "Serve with pan juices."
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
            "3 cups all-purpose flour",
            "1 tsp baking powder",
            "1/2 tsp salt",
            "1 cup butter, softened",
            "1 cup granulated sugar",
            "1 large egg",
            "2 tsp vanilla extract",
            "Royal icing for decorating",
            "Food coloring (optional)"
        ],
        instructions: [
            "Whisk together flour, baking powder, and salt in a medium bowl.",
            "In a large bowl, cream butter and sugar until light and fluffy.",
            "Beat in egg and vanilla extract.",
            "Gradually mix in flour mixture until dough forms.",
            "Divide dough in half, wrap in plastic, and refrigerate for 1 hour.",
            "Preheat oven to 375°F (190°C).",
            "Roll out dough on floured surface to 1/4 inch thickness.",
            "Cut into Christmas shapes with cookie cutters.",
            "Place on baking sheets and bake for 8-10 minutes until edges are golden.",
            "Cool completely before decorating with royal icing."
        ]
    },
      mincepies: {
        title: "Mince pies",
        description: "A delicious British Christmas tradition",
        ingredients: [
            "1 ¾ cups all-purpose flour",
            "1/2 cup confectioners' sugar, divided",
            "2 teaspoons ground cinnamon",
            "2/3 cup butter, softened",
            "2 tablespoons grated orange zest",
            "1/4 cup ice water",
            "3/4 cup prepared mincemeat pie filling",
            "1 large egg, beaten"
        ],
        instructions: [
            "Preheat the oven to 400 degrees F (200 degrees C).",
            "Sift flour, 1/4 cup confectioners' sugar, and cinnamon together in a large bowl. Use a pastry cutter or two forks to mix in butter until mixture resembles fine crumbs. Stir in orange zest. Sprinkle with ice water and gather dough into a ball. Roll out on a lightly floured surface to 1/4 inch thick. Cut out approximately 18 (3-inch) diameter circles, and 18 (2-inch) circles, re-rolling dough as needed.",
            "Line muffin cups or mini tart tins using the 3-inch pastry circles. Fill each pastry cup with about 1 tablespoon of mincemeat filling. Top with 2-inch pastry circles, sealing edges firmly together or crimping lightly with a fork to prevent the filling from leaking as they cook. Brush the top of each pie with egg.",
            "Bake mince pies in preheated oven until tops are golden brown, 15 to 20 minutes. Cool slightly on wire racks. Dust with remaining 1/4 cup confectioners' sugar just before serving."
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

