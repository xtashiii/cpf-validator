<h1>CPF Validator</h1>

<br>

<h2>How to use:</h2> 

<h3>1. Paste your cpf on 'cpf' class instance</h3>

<span>path:</span> ```src/cpf.js```

<hr>

<h3>2. Run the follow commands:</h3>    
 
     cd src
     
<br>
     
     npm run dev

<hr>

<h1>But, how does it actually works?</h1>

<h2>First, i took this random CPF (Brazilian identification number) from a generator: </h2>

 * <h3><strong>251.014.990-30</strong></h3>

<h2>How to calculate</h2>

<div align=center>
 <h3>The first 9 digits of the CPF are used to determine the last 2 digits, separated by a hyphen.</h3>
 <h3>Basically, you perform a multiplication in descending order with the numbers, and then add up all the results. The multiplication starts with the number 10 to find the first digit:</h3>
</div>

<br>

 * <h3><strong>remembering that we only use the first nine digits to perform the calculation</strong></h3>

<br>

<div align=center>
 <h1><strong>2 5 1 0 1 4 9 9 0</strong></h1>
 <h1><strong>x10 9x x8 x7 x6 x5 x4 x3 x2</strong></h1>
</div>

<br>

<div align=center>
  <h3>So, doing this, we will get: <strong>20 45 8 0 6 20 36 27 0</strong> </h3>
  <h3>Adding these results, we get = 162.</h3>
</div>

<br>

<div align=center>
 <h2>So now, with this number in hand, we use the following formula:</h2>
 <h1><strong>11 - (162 % 11)</strong></h1>
 <br>
 <h2>This will result in, guess what, <strong>3</strong>.</h2>
</div>

<br>

<h2>With this, we repeat the same multiplication calculation, but now including the 3 at the end and also starting to multiply by 11.</h2>

<div align=center>
 <h1><strong>2 5 1 0 1 4 9 9 0 3</strong></h1>
 <h1><strong>x11 x10 x9 x8 x7 x6 x5 x4 x3 x2</strong></h1>
</div>

<br>

<div align=center>
  <h3>So, doing this again, we will get: <strong>22 20 9 0 7 24 45 0 6</strong></h3>
  <h3>Now, adding everything again, we have a total of = 133</h3>
</div>

<br>

<div align=center>
 <h2>So, we do the same calc as we did before</h2>
 <h1><strong>11 - (133 % 11)</strong></h1>
 <br>
 <h2>Applying our calculation again, we will see that it results in 10.</h2> 
</div>

<br>

<h2>However, there is a detail to be noted: a CPF can only have 2 digits after the hyphen, so there is a rule that if the result of this formula is greater than 9, it becomes zero.</h2>

<br>

 * <h2>therefore in second digit we get 3</h2>

<br>

<h2>So we have the number 3, and 0, lets add it to our 9 digits, and we will get the same cpf from the beginning, confirming the accuracy of the calculation</h2>

<div align=center>
 <h1><strong>251.014.990-30</strong></h1>
</div>


<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=200&size=22&pause=1000&color=BAA7F7&width=435&lines=by+xtashiii" alt="Typing SVG" /></a>
