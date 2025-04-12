class User{
    protected name: string;
    protected email: string;
    protected password: string;
    protected birthDate: Date;
    protected profile: Profile;
  
    constructor(name: string, email: string, password: string, birthDate: Date, profile: Profile) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.birthDate = birthDate;
      this.profile = profile;
    }
  
    public login(email: string, password: string): boolean {
      return this.email === email && this.password === password;
    }
  
    public signIn(email: string, password: string): boolean {
      return true;
    }
  
    public editProfile(profile: Profile): void {
      this.profile = profile;
    }
  
}