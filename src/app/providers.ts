import { InjectionToken } from '@angular/core';

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
  preprocess: ['FFT', 'variance', 'kurtosis', 'average']
};
