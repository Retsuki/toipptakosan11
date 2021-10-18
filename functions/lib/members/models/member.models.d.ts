import { Sns } from './sns.models';
import { ProfileImage } from './profile-image.models';
import { Experience } from './experience.models';
export declare class Member {
    id: string;
    name: string;
    occupation: string[];
    experience_year: number;
    profile_image: ProfileImage;
    sns: Sns;
    experience: Experience[];
    skills: string[];
}
