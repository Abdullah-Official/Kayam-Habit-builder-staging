

const categories = [
    {
        categoryName: 'Eating Habits',
        
    },
    {
        categoryName: 'Drinking Habits',
        
    },
    {
        categoryName: 'Emotional Eating',
        
    },
    {
        categoryName: 'Mindful Eating',
        
    },
    {
        categoryName: 'Sugar Cravings',
        
    },
]


const challenges = [
    {
        categoryId: 1,
        name: "Eat more protein",
        description: `Protein plays a number of roles in our body. Our skin, nails, bone, and even the cells that protect our immune system are made up of protein.

        Between the ages of 25-65 years, we lose 2kgs of muscle per year…2kgs! That’s a lot of muscle. Muscle is made up of protein and we need protein to avoid muscle loss and breakdown.
        
        Whatever your health goal is, increasing your protein intake is important for 3 reasons:
        
        1. The more protein you eat, the fuller you’ll feel throughout the day, which will help you control how many calories you consume.
        2. If you exercise, you need protein to maintain your muscle mass, and allow for muscle growth, strength and repair to occur effectively. 
        3. If you want to lose weight, you need to be on a calorie deficit, meaning burning more calories than you consume. There is a downside to this though - being in a calorie deficit will make you lose weight from fat and muscle. To lose more weight from fat rather than muscle, protein is important at every meal. 
        
        Aim to eat a protein source at every main meal or snack.
        
        Main meal protein sources: chicken, beef, fish, dairy, lentils, chickpeas, beans, quinoa
        
        Snack protein sources: chia seeds, peanut butter, hummus, labneh, cheese
        
        Take a photo of your main meal or snack track your progress and show your coach how much protein you're eating throughout the day:) `
    },
    {
        categoryId: 1,
        name: "Eat 1 fruit a day",
        description: `Fruits are a key component when trying to live a healthy lifestyle. They provide you with vitamins, minerals and antioxidants that help keep your body and mind at top shape. When it comes to exercise, fruits can help reduce muscle inflammation and boost your immune system, both of which can enhance your muscle recovery. 

        If you're one who doesn't eat fruits at all, don't worry about eating so much in one given day. Start slow and then gradually increase your intake with time. For this habit, focus only on consuming 1 piece of fruit per day. Choose any fruit you like and try to eat a different fruit everyday for more variety.
        
        Remember to take pictures of the fruits you eat so that your coach can see the great progress you're showing!`
    },
    {
        categoryId: 1,
        name: "Eat 2 fruits a day",
        description: `Now that you've developed the habit of eating 1 fruit per day, it's time to take it to the next level. Next up, 2 fruits per day!

        Remember to eat the rainbow, meaning eat as many different colors of fruits as you can. This way you can get a variety of different vitamins and minerals!
        
        How can you stay on track? Remember to take photos every time you eat a fruit and track your habit progress:) `,

    },
    {
        categoryId: 1,
        name: "Eat 3 fruits a day",
        description: `You're on a roll! By now you successfully created the habit of eating 2 fruits per day. Why not challenge yourself and aim for 3 pieces of fruit?

        The more fruits you eat, the more fiber, vitamins and minerals you will consume, which will make you feel so good emotionally, mentallly and physically. You'll also improve your gut health as fiber from fruits helps create more good bacteria in the gut. 
        
        Adding that 3rd piece of fruit should be easy for you now. Aim to include it as part of your breakfast meal, as a dessert after your lunch or dinner, or even just as a snack. 
        
        Share photos of all 3 fruits you eat to hold yourself accountable and use our habit tracker to stay on track. `,
        
    },
    {
        categoryId: 1,
        name: "Eat 1 veggie a day",
        description: `Vegetables provide nutrients which are vital for the health and maintenance of your body. The fiber, vitamins and minerals found in vegetables can:
        - Improve cholesterol levels
        - Strengthen gut health
        - Lower the risk of heart disease 
        - Protect the body from certain types of cancers
        
        If you're one who doesn't eat vegetables at all, don't worry about eating so much in one given day. Start slow and then gradually increase your intake with time. For this habit, focus only on consuming 1 piece of vegetable per day. Choose any vegetable you like and perhaps try to eat different vegetables on a daily basis to get as much variety as possible.
        
        Track your progress using the habit traker in our app!`
    },
    {
        categoryId: 1,
        name: "Eat 2 veggies a day",
        description: `Now that you've developed the habit of eating 1 vegetable per day, it's time to take it to the next level. Next up, 2 vegetables per day! Remember to eat the rainbow, meaning eat as many different colors of vegetables as you can. Here are ways to eat more vegetables:

        - Add vegetables to sauces
        - Try zuchinni noodles
        - Make a cauliflower crust pizza
        - Try a lettuce wrap or veggie bun
         
        Use our habit tracker to stay on track:)`
    },
    {
        categoryId: 1,
        name: "Eat 3 veggies a day",
        description: `You're on a roll! By now you successfully created the habit of eating 2 vegetables per day. Why not challenge yourself and aim for 3 pieces of vegetables?

        Think of vegetables as functions. For example, eating sweet potato and carrot can improve your eye function. Kale, avocado and tomotoes can improve skin health. When you think of food as functions, it will motivate you to eat more of the good stuff, like vegetables:) 
        
        Adding that 3rd piece of vegetables should be easy for you now. Here are more ways to include more vegetables with your meals:
        
        - Drink vegetable based soups
        - Add vegetables to your smoothie
        - Have a side of salad with your main meal
        - Add vegetables to eggs, pastas or even rice
        
        Share photos of all 3 vegetables you eat to hold yourself accountable and help you stay on track! `
    },
    {
        categoryId: 2,
        name: "Drink sugar-free bevarages",
        description: `Craving a Caramel Frappuccino? Perhaps a Red Bull? Sorry to burst your bubble, but this habit is all about drinking sugar-free beverages!

        Sports drinks, sodas, juices, certain coffees and teas all add to our overall calorie and sugar intake for the day. We can avoid these added sugar and calories by simply finding other alternatives which have much less sugar. Water (still or sparkling), flavored water, sugar-free tea and black coffee all contain no sugar and minimal calories. Eat your calories, don't drink them!
        
        Track your beverage intake to be more aware of the types you are drinking:) You can always ask your coach for some suggestions on alternative sugar-free beverages:D
        `
    },
    {
        categoryId: 2,
        name: "Drink more water",
        description: `Sugar cravings affect everyone. The key to dealing with them is knowing why you’re getting them in the first place and making necessary changes to lessen them in the future, and then having a healthy plan in place to deal with them in a conscious manner when you have cravings again. 

        One cause of sugar cravings is dehydration. Your body isn't necessarily lacking sugar, it's lacking water!
        
        So for this habit, focus on increasing your water intake. Here's how to determine how much you need per day:
        
        Water intake (L) = Body weight x 0.033
        
        Track your daily water intake to allow your coach to see your progress. We know you'll do a great job hitting your daily target!`
    },
    {
        categoryId: 3,
        name: "Identify what makes you eat",
        description: `What makes you eat? 

        Each of us has different eating triggers, and some might be more obvious than others. Learning to recognize your own eating triggers will help you figure out how to manage them better. These are food triggers:
        
        - Certain places and actions, like sitting down in front of the TV or watching videos on Youtube/ Snapchat / Instagram.
        - Dehydration
        - Emotions, like stress, boredom or sadness.
        - Feeling hungry all the time
        - A lack of sleep 
        
        By planning ahead and bringing awareness to trigger situations, you can successfully understand why you are eating which will help you eat healthier and make better food decisions. 
        
        Use the different trackers in the app to help you identify what is making you eat. Your coach will also help you with this, so that you can start being more aware of these triggers and make healthier food choices.`
    },
    {
        categoryId: 3,
        name: "Step 1: Take five!",
        description: `Emotional eating is something we all suffer from. Our mood impacts our food, and our food impacts our mood.

        The first step to fighting emotional eating is to be aware of how you are feeling and be present in the moment. To help you do this, we recommend you "Take Five" before using food as a way to comfort yourself and suppress the emotion you are going through. 
        
        Taking Five can be done in different ways:
        
        - Take 5 deep breaths
        - Count up to 5 (or count down to 5)
        - Take 5 minutes off
        - Take 5 seconds off
        
        The point is that when you "Take Five", you're allowing yourself to absorb what's going around you rather than making a quick decision of reaching out to a chocolate bar or bag of chips. 
        
        Taking Five will help you understand how you are feeling, and make you realize that you actually aren't necessarily hungry for that snack you're about to grab. It's just a mental craving that will pass, so long as you "Take Five".
        
        So, the next time you get emotional, remember to "Take Five". Use any tactic that works best with you. As you are logging your meal, write down the tactic you did in the description box so that your coach knows how you are fighting the first step in emotional eating.`
    },
    {
        categoryId: 3,
        name: "Step 2: Identify food triggers",
        description: `The second step to fighting emotional eating is to identify what is making you eat (food trigger). Emotions are a food trigger, and in order for you to understand this, Taking Five is really important which is why it's the first step. Once you Take Five, it will allow you to understand how you're feeling and what is causing you to reach for food to begin with. 

        There are other triggers that can make you eat emotionally. Perhaps you're sitting at home, feeling bored while you watch a TV show. Boredom can be a trigger, but also watching TV can be a trigger too. 
        
        In all cases, for this step of fighting emotional eating, understand what is making you eat. 
        
        Track your emotions as you log your meals to see if there is a trend between your mood and your food choices. Write anything else in the description box to help your coach better understand your situation and provide you with personalized recommendations to help you identify your food trigger and overcome emotional eating:)
        
        `
    },
    {
        categoryId: 3,
        name: "Step 3: Create a healthy behavior",
        description: `You've now been able to Take Five, which has allowed you to be present in the moment and understand how you are feeling. Once you've identified your food trigger, the next step is to create a healthy behavior around that trigger, and repeat it consistently until you've finally overcome emotional eating. Otherwise known as developing a good eating habit:)

        Let's say stress from work causes you to eat unhealthy food options. By now, you are in the habit of Taking Five which will help you understand how you are feeling. This will allow you to identify what is making you eat - in this case it's the stress. The third step after this is to create a healthy eating behavior around the trigger. 
        
        Rather than you reaching out for comfort food (which is usually unhealthy food), try and replace this behavior with something like:
        
        - Taking a walk
        - Calling a friend or family member
        - Listening to music
        - Reading
        - Breathing
        - Exercising
        
        We invite you not to use food as a way to suppress your emotions. Instead, choose a healthier behavior similar to those mentioned above. That way, you can spare yourself the added sugar and calories that you would otherwise consume if you were not mindful of what is making you eat.
        
        Send a message to your coach and let them know the behavior you have chosen other than using food as a way to comfort yourself. Then, continue to repeat this behavior whenever you face the same situation until it's become a habit! Keep your coach posted to get personalized support and encouragement!
        `
    },
    {
        categoryId: 4,
        name: "Share photos of what you eat",
        description: `Food tracking is a powerful and insightful tool you can use to improve the quality and quantity of the food you’re eating. It’s excellent for creating a starting point in your nutrition journey, showing areas of improvement, and documenting your progress overtime. Tracking your meals helps you:

        - Increase mindfulness
        - Improve your eating habits
        - Stay accountable
        - Be more flexible with your food
        - Achieve your health goals
        
        For this habit, get into the routine of taking photos of your meals to hold yourself accountable but also allow your coach to get an idea of what and how much you eat. That way, we can provide you with personalized feedback and recommendations.`
    },
    {
        categoryId: 4,
        name: "Eat regularly",
        description: `Do you ever feel like you eat a lot and make worse food decisions when you start your meal feeling really hungry or starving? 

        It’s true. Whenever you start your meal feeling this way, you are more likely to overeat and make bad food choices and decisions. 
        
        Part of mindful eating is to start your meal feeling hungry (or neutral) and not starving or really hungry. By doing so, you’ll:
        
        - Control your hunger levels
        - Have more energy throughout the day
        - Reduce sugar cravings 
        - Control your portions
        
        Use the hunger scales when tracking your meals as a way to help you feel more in tune with your hunger levels. Aim to start your meal feeling hungry. To do that, eat regularly throughout the day. Idealy, you want to be eating a snack or main meal every 3-4 hours:) `
    },
    {
        categoryId: 4,
        name: "Portion control",
        description: `Portion control is an excellent way to control your calorie intake during the day, improve digestion and reduce the feeling of being bloated. Regardless of your health goal, portion control can help you eat in a balanced way without needing to restrict yourself. An ideal way to control your portions while making sure you get in all the nutrients you need per meal is to follow our ideal plate guide. Fill half your plate with vegetables and/or salad, a quarter of your plate with protein and a quarter of your plate with good quality carbohydrates. 

        When preparing your breakfast, lunch or dinner, use our plate guide to help you manage how much food you put onto your plate. Take a picture of your portioned plate so your coach can see how well you're doing with this habit:) `
    },
    {
        categoryId: 4,
        name: "Healthy Swapping",
        description: `Nutrition is not about limiting or removing foods from your diet. It is about healthy swapping.

        When you completely remove foods from your ‘diet’ and start placing limitations on yourself, you will only live a healthy lifestyle for a short period of time. Eventually you will go back to your old ways and eating habits. But, once you start swapping these cravings you have with healthier options, it will make your life much easier, mentally, emotinally and physically!
        
        Focus on finding healthier swaps for your cravings. This can be done in a few ways:
        - Protein bars for chocolate bars,
        - Vegetable chips (beetroot, sweet potato, etc.) for regular chips
        - Dark chocolate (higher percentage) for milk chocolate,
        - Flavored-water or sugar-free beverages for juices
        - Fruits for sweets.
        
        Track your progress by sharing photos of your meals, especially when you make a healthy swap! Your coach will be proud:D`
    },
    {
        categoryId: 4,
        name: "Eat till satisfied",
        description: `Paying attention to your hunger levels before eating is as important as paying attention to your hunger levels after eating. Eating to satisfied allows you to control your portions, reduce your calorie intake, improve your digestion. This will help you feel nice and light after your meal, rather than feeling heavy and bloated!

        Use the hunger scales when tracking your meals as a way to help you feel more in tune with how you feel after eating. Aim to eat to satisfied, and not stuffed. `
    },
    {
        categoryId: 5,
        name: "Replace sugar with protein",
        description: `Do you experience a lot of sugar cravings?

        Even though we know sugar is not a nutritious choice, our body can frequently crave it. Often times, it can be hard to resist the sugar cravings. We can crave sugar for several reasons, with one reason being a lack of protein. Indeed, protein does not raise blood sugar levels like refined carbs and sugars do. A high protein intake allows you to control your blood sugar levels and hence your sugar cravings. 
        
        Aim to eat a protein source at every main meal or snack you eat. 
        
        Main meal protein sources: chicken, beef, fish, dairy, lentils, chickpeas, beans, quinoa
        
        Snack protein sources: chia seeds, peanut butter, hummus, labneh, cheese
        
        Take a photo of your main meal or snack track your progress and show your coach the good work your doing with this habit!
        `
    },
    {
        categoryId: 5,
        name: "Replace sugar with fibre",
        description: `"Do you experience a lot of sugar cravings?

        Even though we know sugar is not a nutritious choice, our body can frequently crave it. Often times, it can be hard to resist the sugar cravings. We can crave sugar for several reasons, with one reason being a lack of fiber. Fiber can come from many sources, including fruits and vegetables. Similar to protein, fiber can help you maintain your blood sugar levels which in turn will help you manage your sugar cravings.
        
        Aim to eat 4-6 servings of fruits and/or vegetables per day.
        
        1 serving of fruit = 1 piece
        1 serving of vegetables = 1/2 cup of cooked vegetables OR 1 cup of raw vegetables. 
        
        Take a photo of your meals in order to track your progress with this habit. Your coach will be proud:) `
    },
    {
        categoryId: 5,
        name: "Train your taste buds",
        description: `Do you need as much sugar as you think? Not really! Actually, something you can do is train your taste buds to enjoy foods that are not too sweet and slowly cut sugary foods out so that you don’t feel the need to eat something sweet all the time. Here’s what you can do:

        - If you are having tea or coffee, slowly cut down the added sugar and syrups that are often added to such drinks (if you already drink black coffee, or tea without any sugar, then well done!). 
        - Limit your intake of cereals and cereal bars, especially in the morning. 
        - Cut out one sweet food from your nutrition plan each week. 
        - If you are the type to eat something sweet after main meals, perhaps choose 1 meal a day to avoid having something sweet after finishing this meal. 
        
        Track your meals by sharing photos of what you eat, and write your strategy in the notes section so your coach knows which tactic you chose to help train your taste buds! `
    }
]

module.exports = {categories, challenges}