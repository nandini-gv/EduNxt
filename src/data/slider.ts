import storySkills from '@/assets/img/story-skills.jpg'
import storyOpportunity from '@/assets/img/story-opportunity.jpg'
import storyTeam from '@/assets/img/story-team.jpg'
import storyTech from '@/assets/img/story-tech.jpg'

export type StorySlide = { id: string; image: string; heading: string; text: string; anchor: string }

export const storySlides: StorySlide[] = [
  { id: 'skills', image: storySkills, heading: 'Build Skills That Matter', text: 'Hands-on technology training designed around real-world work.', anchor: 'svc-training' },
  { id: 'opportunity', image: storyOpportunity, heading: 'Find Opportunities That Fit', text: 'Discover jobs, freelance projects and career paths built around your strengths.', anchor: 'svc-jobseeker' },
  { id: 'team', image: storyTeam, heading: 'Build Teams for What’s Next', text: 'Connect organizations with trained, job-ready talent.', anchor: 'svc-hiring' },
  { id: 'tech', image: storyTech, heading: 'Grow With Technology', text: 'Learn practical skills that keep you ready for what’s next.', anchor: 'svc-training' },
]
