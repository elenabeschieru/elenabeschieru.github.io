class t_eq2_view{
  events;
  
  constructor()
  {
    document.getElementById("id_solve").addEventListener("click", this.on_solve_click);
  }
  set_events_list(events)
  {
     this.events = events;
  }
  on_solve_click()
  {
    //ar tebui sa apelam metoda on solve din controller...dar nu putem direect
    //generam un eveniment care generaza metoda on_solve stocata in lista
    events.call_event("solve_cliked_uab");

  }
    get_a()
    {
      document.getElementById("id_a").value;
    }
    get_b()
    {
      document.getElementById("id_b").value;
    }
    get_c()
    {
       document.getElementById("id_c").value;
    }


    set_solutions_para(solutions)
   {
    document.getElementById("id_x1").innerHTML = solutions.x1_re + "+" + solutions.x1_im + "i";
    document.getElementById("id_x2").innerHTML = solutions.x2_re + "+" + solutions.x2_im + "i";
   }

}
