import 'jest-preset-angular';
import './jest-mock';

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (_) => {
      return '';
    },
  }),
});
