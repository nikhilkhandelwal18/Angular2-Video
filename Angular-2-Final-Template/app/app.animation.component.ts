import { Component } from '@angular/core';
import { trigger,
         state,
         style,
         transition,
         animate,
         keyframes,
         group
        } from '@angular/core';

@Component({
  selector: 'my-animation',
  template: `<h1>{{title}}</h1>
            <button (click) = "toggleLights()">ToggleLights</button>

             <div 
             (@lightsOnOff.start)="onAnimationStart($event)"
             (@lightsOnOff.done)="onAnimationDone($event)"
             
             [@lightsOnOff] = "roomState"
             class="room">
             Rotate
             </div>
              `,
  animations: [
      trigger('lightsOnOff',
      [
      state('off', style({ backgroundColor: 'black'})),
      state('on', style({ backgroundColor: 'white'})),
      transition('off => on', [animate('3s 2s ease-in', 
                                        style({transform:'rotate(90deg)'})
                                    )]),

      transition('on => off', [animate('2s ease-out',
                                        style({transform:'rotate(-90deg)'})
                                    )])  
    
    /* if transition have same type of style */
    // transition('off => on, on => off', [animate('2s', 
    //                                     style({transform:'rotate(90deg)'})
    //                                 )]),

    /*
        ||
        V
    */
    // transition('off <=> on', [animate('2s', 
    //                                     style({transform:'rotate(90deg)'})
    //                                 )]),

                    
      ])
  ]
})  
export class AnimationComponent { 
    title = 'Angular Animations';
    roomState: string = "off";
    toggleLights(){
        this.roomState = (this.roomState === "off") ? "on" : "off";
    }

    onAnimationStart(event:any){
        console.log('animation start');
        console.log(event.fromState);        
        console.log(event.toState);        
        console.log(event.totalTime);        
    }
    onAnimationDone(event:any){
        console.log(event.fromState);        
        console.log(event.toState);        
        console.log(event.totalTime);        
        console.log('animation done');
    }
}
