import Link from 'next/link';

export default function VehicleDetectionProject() {
  return (
    <article className="max-w-4xl mx-auto space-y-12 py-6 text-gray-300">
      
      {/* Navigation & Context */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1F2026] pb-6">
        <Link href="/#" className="inline-flex items-center text-sm font-mono text-[#104E8B] hover:text-blue-400 transition-colors">
          ← Back to Overview
        </Link>
        <div className="text-xs font-mono text-gray-500">
          Source Repository: <a href="https://github.com/michalnand/vehicles_detection" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 underline">github.com/michalnand/vehicles_detection</a>
        </div>
      </div>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Real-Time Vehicle Detection & Classification via 3-Axis MEMS Magnetometers
        </h1>
        
    

        <p className="text-lg text-gray-400 italic pt-2">
          "A decoupled edge-computing architecture deploying an ultra-lightweight RNN stream detector combined with an on-demand deep 1D-CNN classifier to overcome severe hardware latency and data imbalance."
        </p>
      </header>

      {/* Quick Metrics Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#16161A] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase">Core Challenge</div>
          <div className="text-sm font-semibold text-amber-400 mt-1">Extreme Imbalance & MCU Latency</div>
        </div>
        <div className="p-4 rounded-xl bg-[#16161A] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase">Hardware Target</div>
          <div className="text-sm font-semibold text-blue-400 mt-1">120MHz ARM Cortex-M4 (STM32)</div>
        </div>
        <div className="p-4 rounded-xl bg-[#16161A] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase">Inference Footprint</div>
          <div className="text-sm font-semibold text-emerald-400 mt-1">RNN Stream Check &lt; 116 µs</div>
        </div>
      </section>

      {/* THE BACKSTORY & CORE CHALLENGES */}
      <section className="space-y-4 border-l-2 border-[#1F2026] pl-4 md:pl-6">
        <h2 className="text-xl font-bold text-white font-mono text-xs tracking-wide uppercase text-blue-400">
          🔬 The Backstory: Balancing Edge Constraints with High Context
        </h2>
        <div className="text-sm leading-relaxed space-y-3 text-gray-400">
          <p>
            Deploying neural networks to process continuous streaming sensor feeds at the edge introduces severe physical limits. When sampling a 3-axis magnetometer field at <strong>100 Hz</strong> on a strict <strong>120MHz ARM Cortex-M4 MCU</strong>, running a multi-layer deep learning model directly on every raw clock step will completely stall the execution loop. We needed an asymmetric architectural divide to maintain low-power continuous polling without losing analytical context.
          </p>
          <p>
            The engineering response was a decoupled pipeline. A micro-scale <strong>RNN Detector (a GRU utilizing only 32 hidden units)</strong> evaluates raw step metrics in real time. It monitors the magnetic flux variances on a minuscule execution profile, triggering an alert event strictly upon positive vehicle signature matches. 
          </p>
          <p>
            Once a signal matches, a fixed <strong>512-sample event frame window</strong> is captured, centered exactly around the detector's maximum absolute deviation point. Because a classification run happens strictly per vehicle pass, the remaining operational overhead can safely be handed off to a computationally heavier, wide-context <strong>4-layer 1D-CNN Classifier</strong> which can accurately isolate the target vehicle class.
          </p>
        </div>
      </section>

      {/* WORKING PRINCIPLE VISUALIZATION */}
      <section className="space-y-3">
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4">
          <img 
            src="/vehicle_detector/vd-working_principle.png" 
            alt="Decoupled Pipeline Working Principle" 
            className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-lg"
          />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 1: Decoupled Dual-Stage Pipeline — Step-by-step real-time RNN streaming triggers an isolated 512-sample window capture for heavy 1D-CNN inference.
          </p>
        </div>
      </section>

      {/* DEEP DIVE: CRITICAL ARCHITECTURAL CHALLENGES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Overcoming Critical Data Obstacles</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-[#16161A]/40 border border-[#1F2026] space-y-3">
            <h3 className="text-lg font-semibold text-amber-400 flex items-center gap-2">
              ⚠️ 1. Severe Skewed Class Imbalance
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              The project utilizes real-world sensor profiles validated from open-source highway monitoring nodes [<a href="https://www.mdpi.com/1424-8220/25/24/7407" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-mono">MDPI Sensors Dataset</a>]. The raw dataset is massively skewed, heavily favoring standard passenger cars. 
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              To force multi-class stability across heavily underrepresented modes (such as <code>Class 0: Motorcycles</code> or <code>Class 3: Off-Road Vehicles</code>), a custom runtime software <strong>Data Balancer</strong> was engineered, recalculating class weights dynamically to stabilize backpropagation vectors.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#16161A]/40 border border-[#1F2026] space-y-3">
            <h3 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
              🔄 2. Geometric Data Augmentation
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Magnetic signals are inherently vulnerable to physical alignment variances, variable traffic speeds, and environmental electromagnetic interference. To safeguard generalization bounds, a specialized multi-tier augmentation engine was constructed:
            </p>
            <ul className="text-xs font-mono space-y-1 text-gray-400 list-disc list-inside">
              <li><strong>Noise Profiling:</strong> Blending point-wise Gaussian noise with constant offset shifts.</li>
              <li><strong>Spatial Permutations:</strong> Randomized 3-axis channel swapping and axis inversion.</li>
              <li><strong>Kinematic Scaling:</strong> Amplitude stretching and shifts to simulate dynamic traffic velocity parameters.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE DIAGRAMS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4 flex flex-col justify-between">
          <img 
            src="/vehicle_detector/vd-rnn_detector_architecture.png" 
            alt="Tiny RNN Detector Architecture" 
            className="w-full h-auto max-h-[250px] object-contain mx-auto rounded-lg bg-[#0F0F11]"
          />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 2: Micro Detector Architecture — Fast-polling GRU configuration using 32 hidden units with a single unit linear layer for rapid edge triggering.
          </p>
        </div>

        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4 flex flex-col justify-between">
          <img 
            src="/vehicle_detector/vd-cnn_classifier_architecture.png" 
            alt="1D-CNN Classifier Architecture" 
            className="w-full h-auto max-h-[250px] object-contain mx-auto rounded-lg bg-[#0F0F11]"
          />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 3: Deep Classifier Topology — 4-layer 1D Convolutional Neural Network designed to extract broad cross-axis contextual spatial maps from a 512-sample frame window.
          </p>
        </div>
      </section>

      {/* STREAMLIT DEMO PRESENTATION APPLICATION */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white font-mono text-sm tracking-wide uppercase text-gray-400">
          Interactive Evaluation & Waveform Analysis
        </h2>
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4">
          <img 
            src="/vehicle_detector/demo_streamlit_app.png" 
            alt="Streamlit Application Architecture Interface" 
            className="w-full h-auto rounded-lg shadow-2xl border border-[#1F2026]"
          />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 4: Streamlit Demo Interface — Validating real-time continuous classification streams and analyzing specific 3-axis waveforms (<span className="font-mono text-gray-400">wave_detail.png</span>) extracted from magnetic field events.
          </p>
        </div>
      </section>

      {/* EMPIRICAL RESULTS & PROVEN METRICS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Empirical Pipeline Performance</h2>
        
        <div className="space-y-4 text-sm">
          <p className="leading-relaxed">
            The multi-stage network approach achieves top-tier tracking scores across deep edge testbeds. The micro-scale binary GRU detector clocks an inference delay profile averaging exactly <strong>116 µs</strong> on target cortex lines, guaranteeing full compliance within a 100Hz processing frame window (10ms budget), leaving 98.8% of system clock cycles idle for lower power dissipation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            {/* Detector Performance Summary Card */}
            <div className="p-4 rounded-xl bg-[#16161A] border border-[#1F2026] space-y-2">
              <div className="text-sm font-bold text-emerald-400">📊 Stage 1: Detector Metrics Summary</div>
              <div className="h-px bg-[#1F2026] my-1" />
              <div className="flex justify-between"><span>Binary Operational Accuracy:</span> <span className="text-white">95.53%</span></div>
              <div className="flex justify-between"><span>Target F1-Score Vector:</span> <span className="text-white">0.8536</span></div>
              <div className="flex justify-between"><span>Intersection over Union (IoU):</span> <span className="text-white">0.7446</span></div>
              <div className="flex justify-between"><span>Hardware P95 Delay Limit:</span> <span className="text-white">124 µs</span></div>
            </div>

            {/* Classifier Performance Summary Card */}
            <div className="p-4 rounded-xl bg-[#16161A] border border-[#1F2026] space-y-2">
              <div className="text-sm font-bold text-blue-400">📊 Stage 2: Classifier Performance Summary</div>
              <div className="h-px bg-[#1F2026] my-1" />
              <div className="flex justify-between"><span>Overall Micro Accuracy:</span> <span className="text-white">86.04%</span></div>
              <div className="flex justify-between"><span>Macro Balanced Accuracy:</span> <span className="text-white">82.45%</span></div>
              <div className="flex justify-between"><span>Macro Recall Sensitivity:</span> <span className="text-white">67.14%</span></div>
              <div className="flex justify-between"><span>Mean Inference Latency:</span> <span className="text-white">137 µs</span></div>
            </div>
          </div>
          
          <p className="leading-relaxed text-sm">
            Evaluating the per-class metrics demonstrates the effectiveness of our data augmentation strategies. High-density categorical domains like cars (<span className="font-mono text-amber-400">Class 1</span>) and complex miscellaneous signatures (<span className="font-mono text-amber-400">Class 6</span>) achieved isolated classification accuracy metrics scoring <strong>88.51%</strong> and <strong>97.98%</strong> respectively, asserting high operational confidence parameters across unpredictable physical vehicle tracking boundaries.
          </p>
        </div>
      </section>

      {/* Summary Milestones Section */}
      <section className="p-6 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026] space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-[#104E8B]">✔</span> Engineering Milestones & Edge Implementation Deliverables
        </h2>
        <ul className="space-y-3 font-mono text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">[⚡ Asymmetric Processing]</span>
            <span>Decoupled the live streaming architecture to maintain constant 100Hz polling constraints on low-tier Cortex M4 hardware.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">[📦 Targeted Data Augmentation]</span>
            <span>Engineered custom noise injection, coordinate axis permutation, and dynamic amplitude scaling steps to enforce rotational and scale invariance.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">[🏆 SOTA Adaptation]</span>
            <span>Successfully implemented state-of-the-art open highway telemetry tracking datasets to confirm robust architectural validation.</span>
          </li>
        </ul>
      </section>

    {/* CODE SOURCE & DEPLOYMENT INFRASTRUCTURE FOOTER */}
      <section className="p-6 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026] flex flex-col sm:flex-row items-center justify-between gap-6">
        <a 
          href="https://github.com/michalnand/vehicles_detection" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold border border-[#104E8B]/60 bg-[#104E8B]/10 text-blue-400 hover:bg-[#104E8B] hover:text-white transition-all duration-200 shadow-sm"
        >
          Browse vehicles_detection
        </a>
      </section>

    </article>
  );
}