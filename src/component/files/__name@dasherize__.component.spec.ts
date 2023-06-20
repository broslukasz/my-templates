import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Component } from './<%= dasherize(name)%>.component';

describe(<%= classify(name) %>Component.name, () => {
  let component: <%= classify(name) %>Component;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [<%= classify(name) %>Component],
    }).compileComponents();

    component = TestBed.inject(<%= classify(name) %>Component);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

