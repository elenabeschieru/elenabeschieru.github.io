class t_eq2_controller{
  view;
  model;

  constructor(view, model)
  {
   this.view = view;
   this.model = model;
   //construim o lista de evenimente care au atasate functii ascultatoare
   var events = new t_events();
   //adaugam on_solve (met constrollerului) in lista
   events.add_event("solve_cliked_uab", this.on_solve);
   // transmitem lista in view
   this.view.set_events_list(events);
  }
  on_solve()
  {
    var a = this.view.get_a();
    var b = this.view.get_b();
    var c = this.view.get_c();

    this.model.set_coef(a,b,c);
    this.model.solve();
    var solutions = this.model.get_solutions();

    this.view.set_solutions_para(solutions);
  }
}
const app = new t_eq2_controller(new t_eq2_view(), new t_eq2_model());
