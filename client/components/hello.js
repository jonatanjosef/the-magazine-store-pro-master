const HelloComponent = {

  template: `
    <div class="card-body">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
    </div>
  `,
  data(){
    return{
      title: "Vinyls",
      description: "Spinn Around"
    }
  }

}