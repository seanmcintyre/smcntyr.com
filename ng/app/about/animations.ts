import { trigger, state, style, animate, transition, query, stagger, keyframes } from '@angular/animations';

export const slideFade = trigger('slideFade', [
    transition('void => *', [
      query(':scope > *', [
        style({
          opacity: 0,
          transform: 'translateX(-30px)'
        }),
        stagger(55, [
          animate('300ms 800ms ease-in-out', keyframes([
            style({opacity: 0, transform: 'translateX(-21px)', offset: 0}),
            style({opacity: 1, transform: 'translateX(8px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ])
      ], { optional: true })
    ]),
    // transition('* => void', [
    //   query(':scope > *', [
    //     stagger(34, [
    //       animate('210ms 13ms', keyframes([
    //         style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
    //         style({opacity: 0, transform: 'translateX(55px)',  offset: 1.0})
    //       ]))
    //     ])
    //   ], { optional: true }),
    // ])
  ]);
