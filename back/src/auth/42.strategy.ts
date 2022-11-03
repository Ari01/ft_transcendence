import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, Profile } from 'passport-42';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy) {
    constructor() {        
        super({
            clientID: process.env.FT_ID,
            clientSecret: process.env.FT_SECRET,
            callbackURL: process.env.FT_CALLBACK_URL
        });
    }

    async validate(acessToken: string, refreshToken: string, profile: Profile) {
        console.log(profile);
        return profile;
    }
}