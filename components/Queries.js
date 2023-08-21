import Parse from "parse/react-native.js";

export const getDayData = async ({user}) => {
    const DayClass = Parse.Object.extend('Day');
    const daysQuery = new Parse.Query(DayClass);
    daysQuery.equalTo('user', user);
    try {
        const userDays = await daysQuery.find();
        return userDays();
    } catch(e) {
        alert(e);
    }
};

export const getMealData = async ({user}) => {
    const MealClass = Parse.Object.extend('Meal');
    const mealsQuery = new Parse.Query(MealClass);
    mealsQuery.equalTo('user', user);
    try {
        const userMeals = await mealsQuery.find();
        return userMeals;
    } catch(e) {
        alert(e);
    }
};

export const getItemData = async ({user}) => {
    const ItemClass = Parse.Object.extend('Item');
    const itemsQuery = new Parse.Query(ItemClass);
    itemsQuery.equalTo('user', user);
    try {
        const userItems = await itemsQuery.find();
        return userItems;
    } catch(e) {
        alert(e);
    }
};

export const getSelectedDayData = async ({user, date}) => {
    const userDays = getDayData(user);

    const MealClass = Parse.Object.extend('Meal');
    const ItemClass = Parse.Object.extend('Item');
    const UserData= []

    for(const day of userDays){
        const mealsRelation = day.relation('meals');
        const mealsQuery = mealsRelation.query();

        try {
            const dayMeals = await mealsQuery.find();
            console.log(`Meals for Day ${day.id}:`, dayMeals);

            for (const meal of dayMeals) {
                // Get the relation to "items" from the meal
                const itemsRelation = meal.relation('items');
                const itemsQuery = itemsRelation.query();

                try {
                    const mealItems = await itemsQuery.find();
                    let dayData = {
                        'date':day.get('date'),
                        'id': day.get('id'),
                        'userId': day.get('user'),
                        'day': day,
                        'meals': dayMeals,
                        'items' : mealItems,
                    }
                    UserData.push(dayData);
                } catch (error) {
                    console.error(`Error fetching items for Meal ${meal.id}:`, error);
                }
            }
        } catch (error) {
            console.error(`Error fetching meals for Day ${day.id}:`, error);
        }
    }
    return UserData
}