import { App, Directive } from 'vue';
// import testDirective from './testDirective.ts';


const directives: Readonly<{ name: string; instance: Directive }[]> = [
    // add directives to this array
    // {
    //     name: 'test-directive',
    //     instance: testDirective,
    // },
];

export default function (app: App) {
    directives.forEach(({ name, instance }) => {
        app.directive(name, instance);
    });
}
