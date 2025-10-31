"use client";
import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  link?: string;
  video?: string;
}

const projects: Project[] = [
  {
    id: 'project-1',
    name: 'Wireless Power Transfer Space Based Solar Power Research (In Progress)',
    description: 'I\'m really fascinated with clean energy. I think most problems humanity faces can be traced back to not having enough cheap, abundant clean energy. So I decided to do some research into Space Based Solar Power, specifically into adaptive beamforming and the algorithms that govern how efficiently we can transfer solar power from space to the ground via microwaves. Now I\'m experimenting with a crude tabletop analogue—however, the algorithms work just the same! Here\'s a video of my rig. Unfortunately, I couldn\'t get it working because I was unable to SSH into my Raspberry Pi!',
    video: '/project-videos/WPT-Coils.mp4'
  },
  {
    id: 'project-2',
    name: 'DeductionWorld: LLM Reinforcement Learning for Text-Based Games (In Progress)',
    description: 'I\'ve been contributing to some research in collaboration with MIT\'s Multisensory Lab to see if we can improve how LLMs perform in text-based social deduction games. I\'ve just started on this, so I don\'t have much more to share yet!'
  },
  {
    id: 'project-3',
    name: 'Topaz',
    description: 'Topaz is an AI filtering Chrome extension for your social media. It lets you specify with natural language what you see on your feeds across 4 websites: YouTube, Twitter, LinkedIn, and Reddit. I built this in a team of 3 at Founders Inc offseason 2025. We got around 50 users before moving on from the project. We had some nifty algorithms that could do filtering on every webpage; however, we did not continue the project long enough to realize this. This was the startup I left to come back to college!',
    video: '/project-videos/topaz-demo.mp4'
  },
  {
    id: 'project-4',
    name: 'EEG Headband to detect when you\'re focused',
    description: 'Built a prototype for a non-invasive BCI using EEG. It would detect whether you were focused or distracted while working. Achieved >85% accuracy training ML models on my data.'
  },
  {
    id: 'project-5',
    name: 'Zenith - AI productivity app',
    description: 'AI powered productivity app. Uses LLMs and scheduling algorithms to generate optimal schedules based on your previous work patterns.',
    link: 'https://usezenithfocus.com'
  },
  {
    id: 'project-6',
    name: 'SuperGAN',
    description: 'Created a GAN that could upsample images from 96x96 to 192x192. I would\'ve tried to do higher resolutions but I didn\'t have enough compute!'
  }
];

export default function Projects() {
  const [openProjects, setOpenProjects] = useState<Set<string>>(new Set());

  const toggleProject = (projectId: string) => {
    const newOpenProjects = new Set(openProjects);
    if (newOpenProjects.has(projectId)) {
      newOpenProjects.delete(projectId);
    } else {
      newOpenProjects.add(projectId);
    }
    setOpenProjects(newOpenProjects);
  };

  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Projects</h1>
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-md">
            <button
              onClick={() => toggleProject(project.id)}
              className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
            >
              <span className="font-semibold text-gray-900">• {project.name}</span>
              <span className="text-gray-500 text-lg leading-none">
                {openProjects.has(project.id) ? '−' : '+'}
              </span>
            </button>
            {openProjects.has(project.id) && (
              <div className="px-6 pb-4 border-t border-gray-100">
                <div className="pt-3">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  {project.video && (
                    <div className="mt-3 flex justify-center">
                      <video 
                        src={project.video} 
                        controls 
                        className="max-w-md rounded-md"
                        preload="metadata"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {project.link && (
                    <p className="mt-2 text-sm">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">{project.link.replace(/^https?:\/\//, '')}</a>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
