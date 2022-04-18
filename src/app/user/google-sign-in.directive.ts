import { Directive } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { auth } from 'firebase';

@Directive({
  selector: '[appGoogleSignIn]'
})
export class GoogleSignInDirective {

  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click')
  onclick() {
	  this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
