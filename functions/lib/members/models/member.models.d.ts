import { ProfileImage } from './profile-image.models';
import { Sns } from './sns.models';
import { Experience } from './experience.models';
export declare class Member {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    occupation: string[];
    company: string;
    experience_year: number;
    profile_image: ProfileImage;
    sns: Sns;
    experience: Experience[];
    skills: string[];
}
