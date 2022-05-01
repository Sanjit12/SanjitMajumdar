import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ProfileModel } from 'src/app/models/profile-model.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private dbPath = '/user-profiles';
  profileRef!: AngularFireList<ProfileModel>;

  constructor(private db: AngularFireDatabase) {
    this.profileRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<ProfileModel> {
    return this.profileRef;
  }

  create(profile: ProfileModel): any {
    return this.profileRef.push(profile);
  }

  update(key: string, value: any): Promise<void> {
    return this.profileRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.profileRef.remove(key);
  }
  
  deleteAll(): Promise<void> {
    return this.profileRef.remove();
  }
}
