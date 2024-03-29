import * as React from "react";
import { Router, Link } from "wouter";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function Post_LinearRegression() {

  return (
    <div className="page">
      <div class="post">
        <h1>Linear Regression</h1>
        Suppose we are in the market for a new car. If you are interested in a car, the salesperson will suggest a price, which is likely much more than the car is worth. In order to negotiate, you wish to know what a fair price is. How can you predict the fair price of a car from its attributes: make and model, color, mileage, transmission, age, etc.?<br /><br />
        A reasonable approach is to look at past sales of similar cars. If the saleperson suggests a price much higher than that of similar cars, you probably have a lot of room to negotiate. But manually comparing the car you are interested in to lots of past cars is pretty time-consuming. Add in the fact that you might likely be deciding between several car options, and the time required to individually compare each option to lots of past cars is pretty prohibitive.<br /><br />
        It would be much better if we could automatically calculate the fair price of a car from its attributes. In this unit, we will learn about a method for doing so called <b>linear regression</b>.<br /><br />
        We might notice that the price of a car can go up or down if its attributes change. For example, if a car is a Ferrari it will lead to a higher price than if a car is a Toyota. The more miles a car has, the less it will sell for. Cars of certain colors might sell better than cars of other colors. And so on.
        <h2>Creating our Equation</h2>
        It would be great if we could write an equation to calculate a car's price based on its attributes, which we call <b>input features</b>. To write an equation involving these input features, we need some way to represent each input feature as a number. Two of our input features -- age and mileage -- are already numbers so we can use them as-is. We call these input features <b>quantitative features</b>. The others -- make and model, color, and transmission -- are categories instead of numbers. For example, there might be several options in the 'color' category ('white', 'red', 'blue', 'black', etc.), two options in the 'transmission' category ('manual' and 'automatic'), and so on. We call these input features <b>qualitative features</b> (also sometimes called <b>categorical features</b>). Since these input features are not numbers, we need to somehow transform them into numerical representations in order to include them in our price equation.<br /><br />
        Different options within each category should have different numerical representations to differentiate them. The easiest way we can do this is by assigning each option a unique <b>numerical ID</b> within each category. For example, we might represent the color 'white' with the number 0, the color 'red' with the number 1, and so on. This way, we can easily represent each option within each category with a unique number, and we can easily add new numerical IDs if new options are added.<br /><br />
        Once we have transformed all of our qualitative features to quantitative features in this way, we can begin to write our equation. We will represent the first feature with the variable <InlineMath math="x_0"/>, the second feature with the variable <InlineMath math="x_1"/>, and so on. Now, we want to take into account how much each input feature affects the predicted price. We multiply each input feature <InlineMath math="x_i"/> by a corresponding <b>weight</b> <InlineMath math="\theta_i"/> which scales the importance of <InlineMath math="x_i"/> in our price prediction equation appropriately. Each product <InlineMath math="x_i\theta_i"/> represents how much the car price changes as a result of the feature <InlineMath math="x_i"/>. We'll come back to how we calculate each weight <InlineMath math="\theta_i"/> in a bit.<br /><br />
        To calculate the total change in car price from all of our input features, we add up all the changes in car price <InlineMath math="x_i\theta_i"/> from each individual input feature <InlineMath math="x_i"/>:
        <BlockMath math="total\ change\ in\ price = \sum_ix_i\theta_i"/>
        Now we've calculated how much the price changes as a result of our input features <InlineMath math="x"/>. But a change in price from what? We need an initial price point <InlineMath math="b"/>, which we call the <b>bias term</b>. Adding in our initial price point, our complete equation is:
        <BlockMath math="price = \sum_ix_i\theta_i + b"/>
        And there we have it! We can use this equation to predict the fair price of a car based on its attributes <InlineMath math="x"/>. Essentially, we have found a <b>linear equation</b> with <b>slope</b> <InlineMath math="\theta"/> and <b>y-intercept</b> <InlineMath math="b"/> for quickly predicting a car's price based on its attributes <InlineMath math="x"/>. Now one last question remains -- how do we find <InlineMath math="\theta"/> and <InlineMath math="b"/>?
        <h2>Learning the Weight Values</h2>
        Here is where the 'learning' in 'machine learning' comes to play. We first must get a <b>dataset</b> of past car sales. We initialize our weights <InlineMath math="\theta"/> and bias <InlineMath math="b"/> (we will discuss how to choose good initial values later -- for now, you can just set them to 0). We then write a program which does the following: It first selects one past car sale from our dataset. It then looks only at the input features <InlineMath math="x"/> for that car sale and, using the current weights <InlineMath math="\theta"/> and bias <InlineMath math="b"/>, it uses the linear equation to predict a price. Next it compares the predicted price with the price the car actually sold at and adjusts the weights <InlineMath math="\theta"/> and the bias <InlineMath math="b"/> based on how far the predicted price is from the actual price the car sold at. Then it repeats with another car sale example from the dataset.<br /><br />
        How are the weights adjusted? The program either increases or decreases the weights and then, on the next iteration, checks if the predicted price got closer to the true price. If it did, then the program continues increasing / decreasing the weights as it previously did. If, on the other hand, the predicted price became farther from the true price, then the program switches course and adjusts the weights in the other direction. The program continues doing this until the weights and bias stabilize around the (hopefully) optimal values.
        <h2>Exercises</h2>
        <ol>
          <li>(True/False) Is linear regression sensitive to outliers?</li>
        </ol>
        <h2>Solutions</h2>
        <ol>
          <li>True</li>
        </ol>
      </div>
    </div>
  );
}
