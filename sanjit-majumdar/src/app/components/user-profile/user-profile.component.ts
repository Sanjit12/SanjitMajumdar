import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileModel } from 'src/app/models/profile-model.model';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() profile?: ProfileModel;
  @Output() outProfile?: EventEmitter<any> = new EventEmitter();
  currentProfile: ProfileModel = {
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    age: 0,
    gender: 'Male',
    about: ''
  };
  message = '';
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void{
    this.message = '';
    this.currentProfile = { ...this.currentProfile };
  }

  updateProfile(): void{
    const data = {
      firstName: this.currentProfile.firstName,
      about: this.currentProfile.about
    };
    if(this.currentProfile.firstName){
      
    }
  }

}
