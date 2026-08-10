"use client";
import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  link?: string;
  videos?: string[];
}

const experience: Project[] = [
  {
    id: 'experience-1',
    name: 'Aerial Robotics Lab, Imperial College London (June 2026 - Present)',
    description: 'I\'m currently an undergraduate researcher (UROP) working on an under-canopy insect-monitoring drone that will operate in the Amazon rainforest - a platform that has to fly above and below forest canopy, identify a viable landing site on its own, land, and collect insect-related data. My slice of the project is the autonomy problem at the heart of it: GPS denied navigation and landing site identification, since under a canopy there\'s no reliable GPS and the drone has to find a suitable place to land. Working with C++, ROS2, PX4, Gazebo. The usual stuff'
  }
];

const projects: Project[] = [
  {
    id: 'project-1',
    name: 'GPS Denied Navigation and Obstacle Avoidance on a Drone (In Progress)',
    description: 'I\'m really interested in aerial robotics, it\'s one of the pieces to the puzzle in long term automation for humanity. So I thought I\'d do this project to learn more about different autonomy algorithms for drones. I\'m building a GPS denied drone that navigates entirely by what it sees: it builds a live 3D map of its surroundings using an RGB-D camera and visual SLAM (RTAB-Map fused with PX4), avoids obstacles as it explores, and can find its own way back to base and precision land back at home base, all without ever knowing its GPS coordinates. The core algorithm works in simulation right now, and I\'ve built the physical drone and done a test flight with it. If my Nvidia Jetson ever decides to arrive (4 weeks and counting) then I\'ll test the final autonomy algorithm on the real drone! Here\'s some pictures and videos.',
    videos: [
      '/project-videos/drone-test-flight.mp4',
      '/project-videos/VID-20260620-WA0007.mp4',
      '/project-videos/drone-flight-2.mp4'
    ]
  },
  {
    id: 'project-2',
    name: 'DeductionWorld: LLM Reinforcement Learning for Text-Based Games',
    description: 'I contributed to DeductionWorld, a research project in collaboration with MIT\'s Multisensory Intelligence Lab on training LLMs with multi-agent reinforcement learning in social deduction games. Today\'s LLMs are trained almost entirely in isolated, single-agent settings, so they struggle in social environments that require teamwork, negotiation, and reasoning about others\' hidden intentions - and they\'re easily fooled by deliberate deception. DeductionWorld tackles this by training and evaluating LLM agents in team-based hidden-role games where those skills are exactly what it takes to win. My part was building the environments for multi-agent LLMs to play against each other in the text games Avalon and Werewolf.'
  },
  {
    id: 'project-3',
    name: 'Topaz',
    description: 'Topaz is an AI filtering Chrome extension for your social media. It lets you specify with natural language what you see on your feeds across 4 websites: YouTube, Twitter, LinkedIn, and Reddit. I built this in a team of 3 at Founders Inc offseason 2025. We got around 50 users before moving on from the project. We had some nifty algorithms that could do filtering on every webpage; however, we did not continue the project long enough to realize this. This was the startup I left to come back to college!',
    videos: ['/project-videos/topaz-demo.mp4']
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

  const renderItems = (items: Project[]) => (
      <div className="divide-y divide-gray-200">
        {items.map((project) => (
          <div key={project.id}>
            <button
              onClick={() => toggleProject(project.id)}
              className="w-full py-3 text-left flex justify-between items-baseline gap-4 group"
            >
              <span className="font-medium text-gray-900 text-sm group-hover:text-gray-600">{project.name}</span>
              <span className="text-gray-400 text-lg leading-none flex-shrink-0">
                {openProjects.has(project.id) ? '−' : '+'}
              </span>
            </button>
            {openProjects.has(project.id) && (
              <div className="pb-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                {project.videos && (
                  <div className="mt-3 flex flex-wrap items-start gap-3">
                    {project.videos.map((video) => (
                      <div key={video} className="relative">
                        <video
                          src={video}
                          controls
                          className="h-64 rounded"
                          preload="metadata"
                        >
                          Your browser does not support the video tag.
                        </video>
                        <button
                          onClick={(e) => {
                            (e.currentTarget.previousElementSibling as HTMLVideoElement)?.requestFullscreen();
                          }}
                          aria-label="Fullscreen"
                          className="absolute top-2 right-2 rounded bg-black/50 p-1.5 text-white hover:bg-black/70"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {project.link && (
                  <p className="mt-2 text-sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline text-gray-700">{project.link.replace(/^https?:\/\//, '')}</a>
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
  );

  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Experience</h1>
      {renderItems(experience)}
      <h1 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Projects</h1>
      {renderItems(projects)}
    </div>
  );
}
