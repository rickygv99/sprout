import * as React from "react";
import { Router, Link } from "wouter";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function Post_LogisticRegression() {

  return (
    <div className="page">
      <div class="post">
        <h1>Logistic Regression</h1>
        To review, <b>regressions</b> map input features to a continuous function. Different types of regressions map input features to different types of functions. For example, <Link className="link" href="/posts/linear-regression">linear regressions</Link> map input features to a line. In this unit, we will learn about another type of regression called <b>logistic regression</b>.<br /><br />
        In many machine learning applications, we wish to predict the <b>probability</b> that an event occurs. For example, we may wish to predict the probability that a Facebook post violates Facebook's Terms of Service. Or we may wish to predict the probability that a self-driving car should stop. There are countless applications where we may wish to predict a probability.<br/><br/>
        Probabilities are decimal numbers between 0 and 1. Therefore, to predict a probability, our regression model should predict a value in <InlineMath math="[0, 1]"/>. So we need a function which maps input features to the range <InlineMath math="[0, 1]"/>.<br/><br/>
        One such great function is the <b>sigmoid function</b>:
        <BlockMath math="\sigma(z) = \frac{1}{1+e^{-z}}"/>
        The sigmoid function takes in any number as input and outputs a number in the range <InlineMath math="[0, 1]"/>. A graph of the sigmoid function is shown below:<br/><br/>
        <img className="post-image" src="https://cdn.glitch.global/38b66a85-61fb-4fd9-aece-1abd8978751c/sigmoid.png?v=1656487344196" alt="Graph of sigmoid function"/><br/><br/>
        As you can see, the sigmoid function is an S-shaped curve which maps values to the range <InlineMath math="[0, 1]"/>. As the input grows larger, the output gets closer and closer to 1 (but never reaches it!). And as the input grows smaller, the output gets closer and closer to 0 (but, again, never reaches it!).<br/><br/>
        So how do we use the sigmoid function to predict probabilities? Suppose we want to predict the probability that some event <InlineMath math="E"/> is true. First, just as with a linear regression, we must scale the importance of each input feature <InlineMath math="x_i"/> with its impact on predicting <InlineMath math="E"/> is true, which is accomplished by multiplying it by its weight <InlineMath math="\theta_i"/>. Each product <InlineMath math="x_i\theta_i"/> represents how much our prediction changes as a result of the feature <InlineMath math="x_i"/>. Then, to calculate the total change in prediction because of our features we add up all the products: <InlineMath math="z = \sum_{i}x_i\theta_i"/>. Change in prediction from what? We need a "default" prediction. Just as with linear regression, we use a <b>bias term</b> <InlineMath math="b"/>. We add our bias term to our sum to complete our prediction:
        <BlockMath math="z = \sum_ix_i\theta_i + b"/>
        This value <InlineMath math="z"/> is our prediction ... but it's not a probability yet! As we stated earlier, to be a probability it must be between 0 and 1. Time to use our sigmoid function! We input <InlineMath math="z"/> into our sigmoid function <InlineMath math="\sigma"/> in order to constrain our prediction between 0 and 1. Our final equation is:
        <BlockMath math="probability = \sigma(z) = \sigma(\sum_ix_i\theta_i + b)"/>
        You can use a logistic regression model to predict whether an event <InlineMath math="E"/> is true by writing an <tt>if</tt> statement to predict that <InlineMath math="E"/> is <tt>True</tt> if <InlineMath math="\sigma(z) \geq 0.5"/> and <tt>False</tt> otherwise.
        <h2>Exercises</h2>
        <ol>
        </ol>
        <h2>Solutions</h2>
        <ol>
        </ol>
      </div>
    </div>
  );
}
