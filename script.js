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

