import { trigger, animate, transition, style, query, state, sequence } from '@angular/animations';

export const quickFadeAnimation =
    trigger('quickFadeAnimation', [
        transition('* => *', [
            sequence([
                animate('0s', style({
                    opacity: '0',
                })),
                animate('0.6s', style({
                    opacity: '1',
                })),
            ])
           
        ]),
       
        
    ]);