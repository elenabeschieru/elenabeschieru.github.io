document.getElementById("id_logic_version").innerHTML = "Logic Version = 2019.10.14.1";

document.getElementById('id_button').addEventListener("click", solve_eq2);

function read_coef()
{
  //citire
  var a = document.getElementById('id_a').value;
  var b = document.getElementById('id_b').value;
  var c = document.getElementById('id_c').value;

  var coef = {};
    coef.a = a;
    coef.b = b;
    coef.c = c;

    return coef;

}

function compute_sol(coef)
{
  var delta = coef.b*coef.b - (4 * coef.a * coef.c);
  var x1_re, x1_im, x2_re, x2_im;
  if(delta >= 0)
  {
    x1_re= (-coef.b - Math.sqrt(delta)) /(2 * coef.a);
    x1_re= (-coef.b + Math.sqrt(delta)) /(2 * coef.a);
    x1_im = 0;
    x2_im = 0;
  } else{
    x1_im= - Math.sqrt(-delta) /(2 * coef.a);
    x2_im= Math.sqrt(-delta) /(2 * coef.a);
    x1_re = -coef.b /(2 * coef.a);
    x2_re = -coef.b /(2 * coef.a);
  }

  var solutions ={};
    solutions.x1_re = x1_re;
    solutions.x1_im = x1_im;
    solutions.x2_im = x2_im;
    solutions.x2_re = x2_re;

    return solutions;


}

function print_sol(solutions)
{
  document.getElementById("id_x1").innerHTML = " x1 = "+ solutions.x1_re + " x1_im" + solutions.x1_im + "i";
  document.getElementById("id_x2").innerHTML = " x2 = "+ solutions.x2_re + " x1_im" + solutions.x2_im + "i";
}

function solve_eq2()
{
 var coef = read_coef();
 var solutions = compute_sol(coef);
 print_sol(solutions);
}
