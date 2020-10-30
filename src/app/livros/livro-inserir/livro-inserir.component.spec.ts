import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroInserirComponent } from './livro-inserir.component';

describe('LivroInserirComponent', () => {
  let component: LivroInserirComponent;
  let fixture: ComponentFixture<LivroInserirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroInserirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
