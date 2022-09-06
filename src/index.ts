class Person {
  
    private _name: string;
    private _email: string;
    private _active: string;
    private _gender: string;

    public get name(): string
 {
        return this._name;
    }

    public set name(name: string
) {
        this._name = name;
    }

    public get email(): string
 {
        return this._email;
    }

    public set email(email: string
) {
        this._email = email;
    }

    public get active(): string
 {
        return this._active;
    }

    public set active(active: string
) {
        this._active = active;
    }

    public get gender(): string {
        return this._gender;
    }

    public set gender(gender: string) {
        this._gender = gender;
    }

  
console.log(name);
