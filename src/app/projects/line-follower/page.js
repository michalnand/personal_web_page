import Link from 'next/link';

export default function AutonomousRoboticsProject() {
  return (
    <article className="max-w-4xl mx-auto space-y-12 py-6 text-gray-300">
      
      {/* Navigation & Context */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1F2026] pb-6">
        <Link href="/#" className="inline-flex items-center text-sm font-mono text-[#104E8B] hover:text-blue-400 transition-colors">
          ← Back to Overview
        </Link>
        <div className="text-xs font-mono text-gray-500">
          Project Codename: <span className="text-gray-400 font-bold">Motoko Ice Dragon 2</span>
        </div>
      </div>

      {/* Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
          🏆 3x Consecutive Gold Medal Winner (2024, 2025, 2026)
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Autonomous Line-Following Racing Platform: An Exercise in Custom FOC Hardware & Koopman Control Theory
        </h1>
        <p className="text-lg text-gray-400 italic">
          "Overcoming physical non-linearities and sensor noise at high velocities by moving past empirical PID tuning into Sparse Regression System ID and Lifted State Space modeling."
        </p>
      </header>

      {/* Engineering Metrics Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {/* Hardware Computing */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wide">Core Compute</div>
          <div className="text-sm font-semibold text-cyan-400 mt-1 font-mono">STM32F722 (ARM M7)</div>
        </div>

        {/* High-Freq Control */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wide">FOC Core Loop</div>
          <div className="text-sm font-semibold text-emerald-400 mt-1 font-mono">2 kHz Synchronous</div>
        </div>

        {/* Mid-Freq Kinematics */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wide">Kinematics Loop</div>
          <div className="text-sm font-semibold text-indigo-400 mt-1 font-mono">250 - 500 Hz MPC</div>
        </div>

        {/* High-Resolution Feedback */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wide">Feedback Sensing</div>
          <div className="text-sm font-semibold text-orange-400 mt-1 font-mono">4096-Step Absolute</div>
        </div>

        {/* Optimal Control */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wide">Optimal Control</div>
          <div className="text-sm font-semibold text-rose-400 mt-1 font-mono">Analytical MPC / LQR</div>
        </div>

        {/* State Estimation */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wide">State Estimation</div>
          <div className="text-sm font-semibold text-violet-400 mt-1 font-mono">Steady State Kalman</div>
        </div>

        {/* System ID Optimization */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wide">System Identification</div>
          <div className="text-sm font-semibold text-pink-500 mt-1 font-mono">Sparse Regression (SR3)</div>
        </div>

        {/* Track Record */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026]/80 bg-amber-500/5 relative overflow-hidden">
          <div className="text-xs font-mono text-amber-500/70 uppercase tracking-wide flex items-center gap-1">Track Record</div>
          <div className="text-sm font-semibold text-amber-400 mt-1 font-mono">3x Istrobot Champion</div>
        </div>
      </section>

      {/* VIDEOS: THE RESULTS */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white font-mono text-xs tracking-wide uppercase text-gray-400">
          🎬 Video Proof: High-Velocity Runs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Lab Testing Video */}
          <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] p-3 space-y-2">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
              <iframe 
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/hcxD9Y4t8Dc" 
                title="Lab testing ride video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-xs text-gray-400 font-mono text-center">Development Lab Step Response & Calibration</p>
          </div>

          {/* Final Ride Video */}
          <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] p-3 space-y-2">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
              <iframe 
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/Lgqwz2uLnyI" 
                title="Final competition ride video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-xs text-gray-400 font-mono text-center">Istrobot 2026 Competition Championship Winning Run</p>
          </div>

        </div>
      </section>

      {/* PHYSICAL SYSTEM COMPONENT: HARDWARE LEVEL BREAKTHROUGH */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Solving the Hardware Bottleneck: Redesigning Actuation</h2>
        <p className="leading-relaxed">
          Standard micro-motors traditionally used in line-following platforms (such as the Pololu N20 series) present a massive barrier to precise control. Their low magnetic encoder resolution, combined with gearbox backlash and limited core torque, makes highly aggressive trajectories mathematically uncontrollable at high speeds. 
        </p>
        <p className="leading-relaxed">
          To build a platform capable of handling intense lateral acceleration, I completely abandoned off-the-shelf DC assemblies. Instead, I stripped down high-performance brushless drone motors, <strong>manually re-wound the stators</strong> to scale down the kV ratings for lower speeds, and coupled them with high-resolution <strong>4096-step absolute magnetic encoders</strong>. Backed by custom-poured, ultra-high-traction silicone tires, this shifted the mechanical resolution limitations out of the equations entirely.
        </p>

        {/* PHYSICAL PHOTOS CAROUSEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2">
            <img src="/robotics/DSC05550.jpg" alt="Completed physical robot top view" className="w-full h-90 object-cover rounded-lg" />
            <p className="text-center text-[11px] text-gray-500 font-mono mt-2">Physical Assembly: Note custom rewound BLDC actuators and silicone tires.</p>
          </div>
          <div className="rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2">
            <img src="/robotics/DSC03551.jpg" alt="New version with turbine" className="w-full h-90 object-cover rounded-lg" />
            <p className="text-center text-[11px] text-gray-500 font-mono mt-2">New version with turbine integration.</p>
          </div>
        </div>
      </section>

      {/* CUSTOM PCB DESIGN SECTION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Custom Electronics & Real-Time Compute Infrastructure</h2>
        <p className="leading-relaxed">
          Managing low-inductance BLDC motors requires highly deterministic processing. I designed a custom **4-layer PCB layout** built around an **STM32F722** microcontroller executing a bare-metal architecture. To handle the high thermal density of the motor drives, I used clean ground plane isolation, and dedicated DSP filtering stages to eliminate back-EMF noise. 
        </p>
        <p className="leading-relaxed">
          The low-level hardware layer operates a highly optimized **Field-Oriented Control (FOC) loop running synchronously at 2 kHz**, giving the platform flawless, real-time current vector tracking.
        </p>

        {/* PCB ARTWORK DISPLAY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2">
            <img src="/robotics/pcb.png" alt="Custom 4-layer PCB layout" className="w-full h-80 object-contain bg-[#0F0F11] rounded-lg" />
            <p className="text-center text-[11px] text-gray-500 font-mono mt-2">PCB design, 4-Layer board</p>
          </div>
          <div className="rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2">
            <img src="/robotics/board_3d.png" alt="Populated PCB 3D Render" className="w-full h-80 object-contain bg-[#0F0F11] rounded-lg" />
            <p className="text-center text-[11px] text-gray-500 font-mono mt-2">PCB board 3D Render</p>
          </div>
        </div>
      </section>

      {/* CONTROL THEORY SYSTEM DYNAMICS DEEP DIVE */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">3. Moving Past PID: Sparse Regression System Identification & MPC</h2>
        
        <div className="space-y-4">
          <p className="leading-relaxed">
            Standard empirical PID loops break down at high speeds due to their inability to predict cross-axis coupling. To scale past these bounds, I built a predictive state-space model. Instead of relying on naive Least Squares estimation—which absorbs noise and produces dense, unphysical matrices—I formulated my system identification using **SR3 (Sparse Relaxed Regularized Regression)**, a sparse optimization strategy pioneered by Professor Steven L. Brunton. This cleanly isolated the structural dynamics of the vehicle while ignoring noise.
          </p>
          <p className="leading-relaxed">
            With a physically accurate state space framework secured, I synthesized a real-time tracking topology using a **Steady-State Kalman Filter** paired with an **Analytical Model Predictive Controller (MPC)** running between 250 Hz and 500 Hz.
          </p>
        </div>

        {/* CONTROL LOOP VISUAL INTERLUDE */}
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-4">
          <img src="/robotics/control_diagram.png" alt="Control loop block architecture diagram" className="w-full h-auto max-h-[300px] object-contain mx-auto rounded-lg" />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 1: Hierarchical Cascaded Control Topology - From Koopman State Lifting down to 2 kHz FOC Core vectors.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Linearized Scaling Boundaries via Koopman Operator Theory</h3>
          <p className="leading-relaxed">
            {"Differential drive robots present harsh non-linearities at peak velocity. While linear forward commands ($u_{\\text{forward}}$) and rotational steering commands ($u_{\\text{turn}}$) are mathematically decoupled at low speeds, high-velocity translation changes turning dynamics drastically due to momentum and tire deformation. Put simply: "}<em>the faster the machine travels forward, the harder it is to execute a sharp rotational yaw step.</em>
          </p>
          <p className="leading-relaxed">
            To linearize this behavior without losing critical system data, I incorporated **Koopman Operator Theory**. I crafted custom feature embeddings to project the non-linear states into a higher-dimensional "lifted" space. Mapping raw forward velocity ($v$) and line-following quality metrics ($q$, bounded $[0, 1]$), I engineered continuous lifted features:
          </p>
        </div>
        <div className="p-4 bg-[#0F0F11] border border-[#1F2026] rounded-xl font-mono text-xs text-center text-blue-400">
          {"z = [ v, q, v·q, v·(1-q), (1-v), dq/dt, d(1-q)/dt ]ᵀ"}
        </div>
      </section>

      {/* COMPUTER ARCHITECTURE SIM TO C++ TEMPLATE TRANSITION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Software Implementation: Bridging Simulation and Bare Metal</h2>
        <p className="leading-relaxed">
          Development began in Python, constructing high-fidelity kinematic simulations to isolate the state matrices. However, porting dense linear algebra solvers onto a micro-controller usually creates unacceptable floating-point latency. 
        </p>
        <p className="leading-relaxed">
          To match my strict execution constraints, I developed a **custom compile-time template-based C++ matrix math library**. Because matrix dimensions are statically defined at compilation, the compiler explicitly unrolls nested loops and completely avoids dynamic heap allocations. This optimized pipeline processes complex Kalman updates and matrix algebraic inversions in fractions of a millisecond.
        </p>
        <p className="leading-relaxed text-sm">
          💡 <strong>Future Roadmap:</strong> I plan to replace the hand-crafted Koopman supervisory lifting layer with an on-board deep reinforcement learning network trained in simulation to dynamically optimize the maximum safe execution velocity ($v$) based on raw sensor noise matrices.
        </p>
      </section>

      {/* CODE SOURCE & DEPLOYMENT INFRASTRUCTURE FOOTER */}
      <section className="p-6 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-white font-mono">Open Source Core Codebase</h4>
          <p className="text-xs text-gray-400">Review complete firmware pipelines, PCB constraints, and model weights.</p>
        </div>
        <a 
          href="https://github.com/michalnand/motoko_ice_dragon_2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold border border-[#104E8B]/60 bg-[#104E8B]/10 text-blue-400 hover:bg-[#104E8B] hover:text-white transition-all duration-200 shadow-sm"
        >
          Browse motoko_ice_dragon_2
        </a>
      </section>

    </article>
  );
}