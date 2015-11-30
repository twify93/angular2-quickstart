//noinspection TypeScriptCheckImport
import {bootstrap, Component} from 'angular2/angular2';
class Hero {
    id:number;
    name:string;
}

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>Name: </label>
        <input value="{{hero.name}}" placeholder="name">
      </div>
    `
})

class AppComponent {
    public title = 'Tour of Heroes';
    public hero:Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
bootstrap(AppComponent);
