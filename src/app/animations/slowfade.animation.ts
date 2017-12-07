import { trigger, animate, transition, style, query, state, sequence } from '@angular/animations';

export const slowFadeAnimation =
    trigger('slowFadeAnimation', [
        transition('* => *', [
            sequence([
                animate('0.3s', style({
                    opacity: '0',
                })),
                animate('1s', style({
                    opacity: '1',
                })),
            ])
           
        ]),
       
        
    ]);