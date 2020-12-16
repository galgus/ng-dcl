import { DclModule } from './dcl.module';

describe('DclModule', () => {
  let dclModule: DclModule;

  beforeEach(() => {
    dclModule = new DclModule();
  });

  it('should create an instance', () => {
    expect(dclModule).toBeTruthy();
  });
});
