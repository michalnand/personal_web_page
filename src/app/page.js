import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-32">
      {/* About Me Section */}
      <section id="about" className="scroll-mt-24 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#002F6C]/30 text-[#104E8B] border border-[#002F6C]/50">
            <span className="w-2 h-2 rounded-full bg-[#104E8B] animate-pulse"></span> Available for collaboration
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Building <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#104E8B] to-blue-400">intelligent systems</span>, from algorithms to hardware.
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Hi, I am a researcher and engineer focusing on the intersection of deep learning, reinforcement learning, and advanced robotics. I develop robust models capable of solving hard exploration tasks and deploy high-performance control systems on custom-designed hardware.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="relative group w-64 h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#002F6C] to-blue-500 rounded-2xl transform rotate-3 scale-105 opacity-30 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative w-full h-full rounded-2xl bg-[#16161A] border border-[#1F2026] overflow-hidden">
              <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

{/* About Me Section */}
<section id="about" className="scroll-mt-24 space-y-8">
  <div className="space-y-2">
    <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
      <span className="text-amber-400 font-mono text-base font-normal">[01]</span> Engineering Philosophy
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
    {/* Left column: The Narrative Pitch */}
    <div className="md:col-span-3 space-y-4 text-gray-300 leading-relaxed">
      <p>
        I have a deep frustration with the "plug-and-play" mindset in modern engineering. When an RL agent flattens its learning curve, or a physical tracking loop oscillates, pulling a random library off the shelf rarely fixes the root issue. 
      </p>
      <p>
        My background is rooted in understanding the core mathematics first. During my **PhD in Q-Learning Function Approximation**, I focused on tearing apart algorithms to see where they fail when complexity scales. I look at problems through coordinates, entropy boundaries, and system dynamics.
      </p>
      <p>
        Because of that, my work skips the middleman. If a project needs an exploration breakthrough, I write a custom self-supervised model to maximize latent representation variance. If it needs real-time processing speed, I write raw C++ linear algebra templates running bare-metal at 2 kHz. I build the brains, compile the pipelines, and solder the chips.
      </p>
    </div>

    {/* Right column: Execution Specs */}
    <div className="md:col-span-2 space-y-4">
      <div className="p-5 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3">Theoretical Heavy Lifting</h3>
        <ul className="space-y-2 text-xs text-gray-400 font-mono">
          <li>• Reinforcement learning - Intrinsic motivation</li>
          <li>• Self-supervised representation</li>
          <li>• Nonlinear dictionary learning</li>
          <li>• System identification</li>
          <li>• Loss function engineering</li>
        </ul>
      </div>

      <div className="p-5 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors" />
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3">Physical Hardening</h3>
        <ul className="space-y-2 text-xs text-gray-400 font-mono">
          <li>• STM32 bare-metal development</li>
          <li>• 4-layer PCB design & BGA routing</li>
          <li>• MPC / LQR / Kalman filtering</li>
          <li>• Custom embedded C++ algebra libs</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Active Out-of-Office Note */}
  <div className="p-4 rounded-xl bg-[#16161A]/30 border border-[#1F2026]/60 text-xs text-gray-400 flex flex-wrap items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <span className="text-emerald-500 animate-pulse text-base">●</span>
      <span>Currently working as freelancer</span>
    </div>
  </div>
</section>

      {/* Featured Projects Section */}
      <section id="projects" className="scroll-mt-24 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white">Featured Projects</h2>
          <p className="text-gray-400">Click a card to read the full case study, architecture diagrams, and system performance.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1: Self-Supervised Driven Exploration */}
          <Link href="/projects/rl-exploration" className="group flex flex-col justify-between p-6 rounded-xl bg-[#16161A]/50 border border-[#1F2026] hover:border-[#104E8B]/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Neurocomputing Journal</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wider">
                  SOTA ACHIEVED
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                Self-Supervised Network Distillation (SND) - A Novel Intrinsic Motivation Algorithm for Sparse Reward Environments
              </h3>
              
              <div className="space-y-2">
                <p className="text-xs font-mono text-amber-400 bg-amber-500/5 border border-amber-500/10 rounded-lg px-2.5 py-1.5 inline-block">
                  <span className="font-bold">Challenge:</span> Reward Sparsity
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Eliminated the intrinsic-reward vanishing problem typical of frozen target frameworks. Developed a dynamic pipeline that continuously updates the target model via contrastive and non-contrastive representation learning, stabilizing agent novelty metrics across 128M interaction samples.
                </p>
              </div>
            </div>
            
            {/* Color-Coded Technology Badges */}
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#1F2026]/50 text-xs font-mono text-gray-400">
              <span className="px-2.5 py-1 rounded bg-[#1F2026] text-orange-400">PyTorch</span>
              <span className="px-2.5 py-1 rounded bg-[#1F2026] text-purple-400">Self-Supervised</span>
              <span className="px-2.5 py-1 rounded bg-[#1F2026] text-pink-500">Contrastive Learning</span>
              <span className="px-2.5 py-1 rounded bg-[#1F2026] text-cyan-400">Gym / ProcGen</span>
            </div>
          </Link>

          {/* Project 2 Link */}
          <Link href="/projects/line-follower" className="group flex flex-col justify-between p-6 rounded-xl bg-[#16161A]/50 border border-[#1F2026] hover:border-[#104E8B]/60 transition-all duration-300 relative overflow-hidden">
            {/* Championship Badge Accent */}
            <div className="absolute top-0 right-0 transform translate-x-8 translate-y-5 rotate-45 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[9px] font-mono font-bold px-8 py-1 uppercase tracking-wider hidden sm:block">
              3x Champion
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Robotics / Control Theory</span>
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                Motoko Ice Dragon 2: Autonomous Racing Platform
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                A 3-time consecutive gold medal winning vehicle built from scratch. Overthrows traditional PID limits using Sparse Regression (SR3) System ID, Steady-State Kalman filtering, Koopman Operator state lifting, and custom-wound BLDC FOC motors running on bare-metal C++ templates.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#1F2026]/50 text-xs font-mono text-gray-400">
              <span className="px-2.5 py-1 rounded bg-[#1F2026] text-blue-400">C++ Templates</span>
              <span className="px-2.5 py-1 rounded bg-[#1F2026] text-purple-400">Control Theory</span>
              <span className="px-2.5 py-1 rounded bg-[#1F2026] text-emerald-400">Bare-Metal STM32</span>
              <span className="px-2.5 py-1 rounded bg-[#1F2026] text-orange-400">4-Layer PCB</span>
            </div>
          </Link>

          
        </div>
      </section>

     {/* Publications Section */}
      <section id="publications" className="scroll-mt-24 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white">Publications</h2>
          <p className="text-gray-400">Peer-reviewed journal papers and conference proceedings.</p>
        </div>

        <div className="space-y-6">
          
          {/* Publication 1: Neurocomputing */}
          <div className="p-6 rounded-xl bg-[#16161A]/30 border border-[#1F2026]/70 flex flex-col justify-between gap-4 hover:bg-[#16161A]/60 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-400 tracking-wide uppercase">Neurocomputing Journal</span>
                <h3 className="text-xl font-semibold text-white">
                  Self-supervised network distillation: An effective approach to exploration in sparse reward environments
                </h3>
                <p className="text-sm text-gray-400 font-medium">
                  Matej Pecháč, <span className="text-gray-200">Michal Chovanec</span>, Igor Farkaš
                </p>
              </div>
              <a 
                href="https://www.sciencedirect.com/science/article/abs/pii/S092523122400804X" 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-semibold rounded-lg border border-[#104E8B]/40 text-blue-400 bg-[#104E8B]/5 hover:bg-[#104E8B] hover:text-white transition-all duration-200"
              >
                ScienceDirect →
              </a>
            </div>
            
            {/* Interactive Expandable Abstract */}
            <details className="group border-t border-[#1F2026]/50 pt-3 cursor-pointer">
              <summary className="text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors list-none flex items-center gap-1 select-none">
                <span className="inline-block transform group-open:rotate-90 transition-transform">▶</span> View Abstract
              </summary>
              <p className="text-sm text-gray-400 leading-relaxed mt-3 bg-[#0F0F11]/40 p-4 rounded-lg border border-[#1F2026]/40 cursor-default">
                Reinforcement learning can solve decision-making problems and train an agent to behave in an environment according to a predesigned reward function. However, such an approach becomes very problematic if the reward is too sparse and so the agent does not come across the reward during the environmental exploration. The solution to such a problem may be to equip the agent with an intrinsic motivation that will provide informed exploration during which the agent is likely to also encounter external reward. Novelty detection is one of the promising branches of intrinsic motivation research. We present Self-supervised Network Distillation (SND), a class of intrinsic motivation algorithms based on the distillation error as a novelty indicator, where the predictor model and the target model are both trained. We adapted three existing self-supervised methods for this purpose and experimentally tested them on a set of ten environments that are considered difficult to explore. The results show that our approach achieves faster growth and higher external reward for the same training time compared to the baseline models, which implies improved exploration in a very sparse reward environment. In addition, the analytical methods we applied provide valuable explanatory insights into our proposed models.
              </p>
            </details>
          </div>

          {/* Publication 2: IWBBIO */}
          <div className="p-6 rounded-xl bg-[#16161A]/30 border border-[#1F2026]/70 flex flex-col justify-between gap-4 hover:bg-[#16161A]/60 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
              <div className="space-y-1">
                <span className="text-xs font-bold text-purple-400 tracking-wide uppercase">Bioinformatics and Biomedical Engineering (IWBBIO)</span>
                <h3 className="text-xl font-semibold text-white">
                  Convolutional Neural Networks for Red Blood Cell Trajectory Prediction in Simulation of Blood Flow
                </h3>
                <p className="text-sm text-gray-400 font-medium">
                  <span className="text-gray-200">Michal Chovanec</span>, Hynek Bachratý, Katarína Jasenčáková, Katarína Bachratá
                </p>
              </div>
              <a 
                href="https://link.springer.com/chapter/10.1007/978-3-030-17935-9_26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-semibold rounded-lg border border-purple-500/30 text-purple-400 bg-purple-500/5 hover:bg-purple-600 hover:text-white transition-all duration-200"
              >
                SpringerLink →
              </a>
            </div>
            
            {/* Interactive Expandable Abstract */}
            <details className="group border-t border-[#1F2026]/50 pt-3 cursor-pointer">
              <summary className="text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors list-none flex items-center gap-1 select-none">
                <span className="inline-block transform group-open:rotate-90 transition-transform">▶</span> View Abstract
              </summary>
              <p className="text-sm text-gray-400 leading-relaxed mt-3 bg-[#0F0F11]/40 p-4 rounded-lg border border-[#1F2026]/40 cursor-default">
                Computer simulations of a blood flow in microfluidic devices are an important tool to make their development and optimization more efficient. These simulations quickly become limited by their computational complexity. Analysis of large output data by machine learning methods is a possible solution of this problem. We apply deep learning methods in this paper, namely we use convolutional neural networks (CNNs) for description and prediction of the red blood cells’ trajectory, which is crucial in modeling of a blood flow. We evaluated several types of CNN architectures, formats of theirs input data and the learning methods on simulation data inspired by a real experiment. The results we obtained establish a starting point for further use of deep learning methods in reducing computational demand of microfluid device simulations.
              </p>
            </details>
          </div>

        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="scroll-mt-24 space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-white">Landscape Photography</h2>
          <div className="text-gray-400 space-y-2 max-w-3xl leading-relaxed">
            <p>
              A look through my lens—captured moments away from the terminal. 
            </p>
            <p className="text-sm">
              Focusing primarily on the dramatic scale of <span className="text-white font-medium">Slovak mountain ranges</span> (High Tatras, Súľov Rocks) and the stunning, raw sceneries of <span className="text-white font-medium">Madeira</span>. Utilizing an ultra-wide <span className="text-blue-400 font-mono">12-24mm</span> setup, I specialize in trapping atmospheric mist, golden hour sunsets, and the magnificent, untamed geometries of nature.
            </p>
          </div>
        </div>

        {/* Structured Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { slug: 'DSC03259_DSC03274_lq', label: 'High Tatras - Teryho Chata', dynamic: 'Spring seasons in valley' },
            { slug: 'DSC02233_lq', label: 'High Tatras - Teryho Chata', dynamic: 'Spring seasons' },
            { slug: 'DSC00162', label: 'High Tatras - Teryho Chata', dynamic: 'Spring ice melting season' },
            
            { slug: 'DSC03501_DSC03516', label: 'Súľov Rocks', dynamic: 'Panoramic view' },
            { slug: 'DSC00434e_lq', label: 'Súľov Rocks', dynamic: 'Atmospheric autumn sunset with ultrawide 10mm lens' },
            { slug: 'DSC01956_lq', label: 'Súľov Rocks', dynamic: 'Beutiful rocks formation' },
            
            
            { slug: 'DSC03104_DSC03137_lq', label: 'Madeira Coastline', dynamic: 'Cabo Girão - 580m tall cliff' },
            { slug: 'DSC08914_lq', label: 'Madeira - Pico do Arieiro', dynamic: 'Stairway to Heaven' },
            { slug: 'DSC08242_lq', label: 'Lietava castle', dynamic: 'Dramatic sunsent with castle' },

          ].map((photo, idx) => (
            <div key={idx} className="aspect-video relative rounded-xl overflow-hidden bg-[#16161A] border border-[#1F2026] group cursor-pointer shadow-md">
              <img 
                src={`/photography/${photo.slug}.jpg`} 
                alt={photo.label} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              {/* Sleek Minimal Hover Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-[#0F0F11]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-semibold text-white tracking-wide">{photo.label}</span>
                <span className="text-[10px] text-gray-400 font-mono mt-0.5">{photo.dynamic}</span>
              </div>
            </div>
          ))}
        </div>


        {/* Zonerama Link Button */}
        <div className="flex justify-center pt-4">
          <a 
            href="https://eu.zonerama.com/Kenshin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold tracking-wide border border-[#104E8B]/60 bg-[#104E8B]/10 text-blue-400 hover:bg-[#104E8B] hover:text-white transition-all duration-200 shadow-sm group"
          >
            <span>📷</span> View Full High-Res Albums on Zonerama <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 border-t border-[#1F2026] pt-16 text-center space-y-6">
        <div className="max-w-md mx-auto space-y-3">
          <h2 className="text-2xl font-bold text-white">Get in touch</h2>
          <p className="text-sm text-gray-400">Feel free to drop a line regarding hardware design or algorithm development.</p>
        </div>
        
        {/* Swapped out Google Scholar for GitHub Code Rank Link */}
        <div className="flex justify-center items-center gap-6 text-sm text-gray-400 font-mono">
          <a href="mailto:your.email@example.com" className="hover:text-[#104E8B] transition-colors">Email</a>
          <span className="text-gray-700">•</span>
          <a href="https://github.com/michalnand" target="_blank" className="hover:text-[#104E8B] transition-colors">GitHub</a>
          <span class="text-gray-700">•</span>
          <a href="https://profile.codersrank.io/user/michalnand" target="_blank" className="hover:text-[#104E8B] transition-colors">Code Rank</a>
          <span className="text-gray-700">•</span>
          <a href="https://www.linkedin.com/in/michal-chovanec-803591a6/" target="_blank" className="hover:text-[#104E8B] transition-colors">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}