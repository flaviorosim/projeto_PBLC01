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
  
    public login(email: string, password: string): boolean | undefined{
      // A DEFINIR FUNÇÃO AINDA, DEPOIS TIRA UNDEFINED
      return undefined;
    }
  
    public signIn(email: string, password: string): boolean | undefined {
      // A DEFINIR FUNÇÃO AINDA, DEPOIS TIRA UNDEFINED
      return undefined;
    }
  
    public editProfile(profile: Profile): void {} // Arrumar depois pra ser um change password(no .dia tb)
  
}

class Host extends User {
    private address: Address;
    private calendar: Calendar;
    private houseRules: string;
  
    constructor(
      name: string, email: string, password: string, birthDate: Date, profile: Profile,
      address: Address, calendar: Calendar, houseRules: string
    ) {
      super(name, email, password, birthDate, profile);
      this.address = address;
      this.calendar = calendar;
      this.houseRules = houseRules;
    }
}
  
class ExchangeStudent extends User {
    private nationality: string;
    private speakingLanguages: string;
  
    constructor(
      name: string, email: string, password: string, birthDate: Date, profile: Profile,
      nationality: string, speakingLanguages: string
    ) {
      super(name, email, password, birthDate, profile);
      this.nationality = nationality;
      this.speakingLanguages = speakingLanguages;
    }
}
  

class Profile {
    private biography: string;
    private userRating: number;
    private suggestions: string;
    private user: User;
  
    constructor(biography: string, userRating: number, suggestions: string, user: User) {
      this.user = user;
      this.biography = biography;
      this.userRating = userRating;
      this.suggestions = suggestions;
    }
  
    public editProfile(biography: string, suggestions: string): void {}
}

class Rating {
    private grade: number;
    private comment: string;
    private evaluator: User;
    private evaluated: User;
  
    constructor(grade: number, comment: string, evaluator: User, evaluated: User) {
      this.evaluator = evaluator;
      this.evaluated = evaluated;
      this.grade = grade;
      this.comment = comment;
    }
  
    public newRating(): void {}
}

class Accommodation {
    private description: string;
    private capacity: number;
    private host: User;
  
    constructor(description: string, capacity: number, host: User) {
      this.host = host;
      this.description = description;
      this.capacity = capacity;
    }
  
    public editDescription(description: string): void {}
}
  
class Reservation {
    private beginDate: Date;
    private endDate: Date;
    private status: string;
    private host: Host;
    private exchangeStudent: ExchangeStudent;
    private calendar: Calendar;
  
    constructor(beginDate: Date, endDate: Date, status: string, host: Host, exchangeStudent: ExchangeStudent, calendar: Calendar) {
      this.calendar = calendar;
      this.beginDate = beginDate;
      this.endDate = endDate;
      this.status = status;
      this.host = host;
      this.exchangeStudent = exchangeStudent;
    }
  
    public changeStatus(newStatus: string): void {}
}
  

class Message {
    private body: string;
    private issueDate: Date;
    private sender: User;
    private receiver: User;
  
    constructor(body: string, issueDate: Date, sender: User, receiver: User) {
      this.sender = sender;
      this.receiver = receiver;
      this.body = body;
      this.issueDate = issueDate;
    }
  
    public sendMessage(): void {}
  
    public deleteMessage(): void {}
}
  
class Address {
    private zipCode: string;
    private country: string;
    private city: string;
    private street: string;
    private number: number;
    private host: Host;
    private accommodation: Accommodation;
  
    constructor(zipCode: string, country: string, city: string, street: string, number: number, host: Host, accommodation: Accommodation) {
      this.host = host;
      this.accommodation = accommodation;
      this.zipCode = zipCode;
      this.country = country;
      this.city = city;
      this.street = street;
      this.number = number;
    }
  
    public updateAddress(country: string, city: string, street: string, number: number): void {}
}
 
class Calendar {
    private availability: Date[];
    private host: Host;
    private reservation: Reservation;
  
    constructor(availability: Date[], host: Host, reservation: Reservation) {
      this.host = host;
      this.reservation = reservation;
      this.availability = availability;
    }
  
    public isAvailable(beginDate: Date, endDate: Date): boolean | undefined{
      // A DEFINIR FUNÇÃO AINDA, DEPOIS TIRA UNDEFINED
      return undefined;
    }
}
  