"use strict";
class User {
    constructor(name, email, password, birthDate, profile) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.profile = profile;
    }
    login(email, password) {
        // A DEFINIR FUNÇÃO AINDA, DEPOIS TIRA UNDEFINED
        return undefined;
    }
    signIn(email, password) {
        // A DEFINIR FUNÇÃO AINDA, DEPOIS TIRA UNDEFINED
        return undefined;
    }
    editProfile(profile) { }
}
class Host extends User {
    constructor(name, email, password, birthDate, profile, address, calendar, houseRules) {
        super(name, email, password, birthDate, profile);
        this.address = address;
        this.calendar = calendar;
        this.houseRules = houseRules;
    }
}
class ExchangeStudent extends User {
    constructor(name, email, password, birthDate, profile, nationality, speakingLanguages) {
        super(name, email, password, birthDate, profile);
        this.nationality = nationality;
        this.speakingLanguages = speakingLanguages;
    }
}
class Profile {
    constructor(biography, userRating, suggestions, user) {
        this.user = user;
        this.biography = biography;
        this.userRating = userRating;
        this.suggestions = suggestions;
    }
    editProfile(biography, suggestions) { }
}
class Rating {
    constructor(grade, comment, evaluator, evaluated) {
        this.evaluator = evaluator;
        this.evaluated = evaluated;
        this.grade = grade;
        this.comment = comment;
    }
    newRating() { }
}
class Accommodation {
    constructor(description, capacity, host) {
        this.host = host;
        this.description = description;
        this.capacity = capacity;
    }
    editDescription(description) { }
}
class Reservation {
    constructor(beginDate, endDate, status, host, exchangeStudent, calendar) {
        this.calendar = calendar;
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.status = status;
        this.host = host;
        this.exchangeStudent = exchangeStudent;
    }
    changeStatus(newStatus) { }
}
class Message {
    constructor(body, issueDate, sender, receiver) {
        this.sender = sender;
        this.receiver = receiver;
        this.body = body;
        this.issueDate = issueDate;
    }
    sendMessage() { }
    deleteMessage() { }
}
class Address {
    constructor(zipCode, country, city, street, number, host, accommodation) {
        this.host = host;
        this.accommodation = accommodation;
        this.zipCode = zipCode;
        this.country = country;
        this.city = city;
        this.street = street;
        this.number = number;
    }
    updateAddress(country, city, street, number) { }
}
class Calendar {
    constructor(availability, host, reservation) {
        this.host = host;
        this.reservation = reservation;
        this.availability = availability;
    }
    isAvailable(beginDate, endDate) {
        // A DEFINIR FUNÇÃO AINDA, DEPOIS TIRA UNDEFINED
        return undefined;
    }
}
