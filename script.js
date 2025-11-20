const restaurants = {
    pune: ["Vaishali", "SP Biryani", "Burger King", "Chitale Bandhu"],
    pcmc: ["Sai Sagar", "Malhar", "Barbeque Nation"],
};

const city = document.getElementById("city");
const restaurant = document.getElementById("restaurant");

city.addEventListener("change", () => {
    restaurant.innerHTML = `<option>Select restaurant</option>`;
    let value = city.value;

    if (restaurants[value]) {
        restaurants[value].forEach((rest) => {
            restaurant.innerHTML += `<option>${rest}</option>`;
        });
    }
});
