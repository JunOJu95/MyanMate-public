import heroCall from '../assets/learning/hero-call.jpg';
import heroStudy from '../assets/learning/hero-study.jpg';
import hangul from '../assets/learning/hangul.jpg';
import topik from '../assets/learning/topik.jpg';
import topik2 from '../assets/learning/topik2.jpg';
import speaking from '../assets/learning/speaking.jpg';
import practice from '../assets/learning/practice.jpg';
import conversation from '../assets/learning/conversation.jpg';
import enrollment from '../assets/learning/enrollment.jpg';
import about from '../assets/learning/about.jpg';

// Illustrative stock photography; never portraits of our teachers or students.
export const learningMedia = { heroCall, heroStudy, hangul, topik, topik2, speaking, kiip: enrollment, practice, conversation, enrollment, about };
export type LearningScene = keyof typeof learningMedia;
