//This is the calculator for how many calories is in maintainance
//We are using the Mifflin- St Jeor Equation for this
//This information was found on https://www.calculator.net/calorie-calculator.html
function CalorieCalculator(height, weight, intensity, gender, age){
  var main_calories = 0;
  var bmr = 0; //This is the Basal Metabolic rate. It calculates the amount of calories needed to have basic human functions
  if(gender == 'm'){
    main_calories = (10 * weight) + (6.25 * height) - (5* age) + 5
  }else{
    main_calories = (10 * weight) + (6.25 * height) - (5* age) - 161
  }
  if(intensity == 0){
     return main_calories * 1.2
  }
  if(intensity == 1){
    return main_calories * 1.375
  }
  if(intensity == 2){
    return main_calories * 1.465
  }
  if(intensity == 3){
    return main_calories * 1.55
  }
  if(intensity == 4){
    return main_calories * 1.725
  }
  if(intensity == 5){
    return main_calories * 1.9
  }
}
