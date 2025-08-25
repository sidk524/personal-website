"use client";
import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 'project-1',
    name: 'MIT Challenge - Physics (In Progress)',
    description: 'I was inspired by Scott Young\'s MIT challenge to self-teach MIT\'s 4-year computer science undergraduate course in 1 year. I\'m attempting a similar challenge in physics. Why am I doing this? Firstly, I\'m interested in physics - that in itself is enough of a reason. But I also want to become more interdisciplinary in what I learn. Physics is the backbone of all engineering fields, and since I\'ll be expanding my engineering horizons in the future, I want a solid foundation to understand underlying principles across engineering fields and push foundational breakthroughs in the future.'
  },
  {
    id: 'project-2',
    name: 'Topaz',
    description: 'Topaz is an AI filtering Chrome extension for your social media. It lets you specify with natural language what you see on your feeds across 4 websites: YouTube, Twitter, LinkedIn, and Reddit. I built this in a team of 3 at Founders Inc offseason 2025. We got around 50 users before moving on from the project. We had some nifty algorithms that could do filtering on every webpage; however, we did not continue the project long enough to realize this. This was the startup I left to come back to college!'
  },
  {
    id: 'project-3',
    name: 'EEG Headband to detect when you\'re focused',
    description: 'Built a prototype for a non-invasive BCI using EEG. It would detect whether you were focused or distracted while working. Achieved >85% accuracy training ML models on my data.'
  },
  {
    id: 'project-4',
    name: 'Zenith - AI productivity app',
    description: 'AI powered productivity app. Uses LLMs and scheduling algorithms to generate optimal schedules based on your previous work patterns.',
    link: 'https://usezenithfocus.com'
  },
  {
    id: 'project-5',
    name: 'SuperGAN',
    description: 'Created a GAN that could upsample images from 96x96 to 192x192. I would\'ve tried to do higher resolutions but I didn\'t have enough compute!'
  }
];

export default function Projects() {
  const [openProjects, setOpenProjects] = useState<Set<string>>(new Set(projects.map(p => p.id)));

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
