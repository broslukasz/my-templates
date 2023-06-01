import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %> } from './<%= dasherize(name)%>.component';

describe(<%= classify(name) %>.name, () => {
  let component: <%= classify(name) %>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [<%= classify(name) %>],
    }).compileComponents();

    component = TestBed.inject(<%= classify(name) %>);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

