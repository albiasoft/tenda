import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LogInComponent implements OnInit {
  reactiveForm: FormGroup;
  showFormPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.reactiveForm = fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      showPassword: false,
      rememberMe: [false]
    });
  }

  ngOnInit() {
    this.subscribeOnFormChanges(this.reactiveForm);

    this.reactiveForm.get("showPassword").valueChanges.subscribe(val => {
      this.showFormPassword = val;
    });
  }

  subscribeOnFormChanges(formName): void {
    formName.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  onSubmit(formName) {
    this.router.navigate(["/"]);
  }
}
