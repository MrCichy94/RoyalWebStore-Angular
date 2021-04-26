interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  {name: 'TimelineMax', src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js'},
  {name: 'TweenMax', src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js'},
  {name: 'fullPage', src: 'http://yourjavascript.com/832734112/fullpage-min.js'},
  {name: 'app', src: 'http://yourjavascript.com/123643151/app.js'}
];

/* after injection use it like this:
this.script.load('filepicker', 'rangeSlider').then(data => {
  console.log('script loaded ', data);
}).catch(error => console.log(error));
*/
