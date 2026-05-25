import Link from 'next/link';

export default function RLExplorationProject() {
  return (
    <article className="max-w-4xl mx-auto space-y-12 py-6 text-gray-300">
      
      {/* Navigation & Context */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1F2026] pb-6">
        <Link href="/#" className="inline-flex items-center text-sm font-mono text-[#104E8B] hover:text-blue-400 transition-colors">
          ← Back to Overview
        </Link>
        <div className="text-xs font-mono text-gray-500">
          Published: <span className="text-gray-400">Neurocomputing Journal</span>
        </div>
      </div>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Self-Supervised Network Distillation: An effective approach to exploration in sparse reward environments
        </h1>
        <p className="text-lg text-gray-400 italic">
          "Generalizing Random Network Distillation (RND) by leveraging contrastive and non-contrastive self-supervised learning algorithms to stabilize novelty metrics."
        </p>
      </header>

      {/* Quick Metrics Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#16161A] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase">Core Challenge</div>
          <div className="text-sm font-semibold text-amber-400 mt-1">Reward Sparsity (1:1000)</div>
        </div>
        <div className="p-4 rounded-xl bg-[#16161A] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase">Sample Efficiency</div>
          <div className="text-sm font-semibold text-blue-400 mt-1">128M Samples Max Horizon</div>
        </div>
        <div className="p-4 rounded-xl bg-[#16161A] border border-[#1F2026]">
          <div className="text-xs font-mono text-gray-500 uppercase">Benchmark Achievement</div>
          <div className="text-sm font-semibold text-emerald-400 mt-1">SOTA Montezuma's Revenge</div>
        </div>
      </section>

      {/* THE BACKSTORY, RIGOROUS BASELINES, & LESSONS */}
      <section className="space-y-4 border-l-2 border-[#1F2026] pl-4 md:pl-6">
        <h2 className="text-xl font-bold text-white font-mono text-xs tracking-wide uppercase text-blue-400">
          🔬 The Backstory: Moving Past Brute Force
        </h2>
        <div className="text-sm leading-relaxed space-y-3 text-gray-400">
          <p>
            Modern Reinforcement Learning literature suffers from a publication problem. State-of-the-art frameworks like Never Give Up (NGU) regularly claim to solve hard exploration tasks, but they require <strong>billions of interaction samples</strong> to get there. Throwing massive compute fields at a seed isn't solving exploration—it is simply a brute-force victory. RND is similarly sample-hungry. Our goal was to work cleverer, targeting strict constraint efficiency bounds.
          </p>
          <p>
            To establish valid claims, we spent nearly <strong>two years building and testing a completely custom code pipeline</strong> from scratch. Naive baselines relying on basic noise exploration score absolute zeros on hard Atari beds. We spent weeks tightly tuning our own baseline PPO implementation, mirroring the exact network topology and structural constraints used in our advanced modules. By making the playing field completely objective, our custom baseline PPO actually surpassed official open-source baselines before we introduced our primary mechanisms.
          </p>
          <p>
            When studying why RND eventually plateaus, we observed a distinct pattern of <strong>intrinsic motivation burnout (vanishing reward variance)</strong>. Our earliest, naive attempts to fix this involved tracking the novelty signal; when the metrics flattened, we aggressively re-initialized the target network weights. This backfired: resetting the weights completely wiped the structural maps, forcing the agent to waste sample steps re-exploring the start configurations from scratch. This realization forced us to seek a continuous mathematical constraint: leveraging <strong>self-supervised loss bounds</strong> to gracefully regulate representation decay without catastrophic forgetting.
          </p>
        </div>
      </section>

      {/* YOUTUBE EMBED SECTION */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white font-mono text-sm tracking-wide uppercase text-gray-400">
          Project Demonstration & Gameplay
        </h2>
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4">
          <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-2xl">
            <iframe 
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/-vDg_r2ZetI" 
              title="Exploration by self supervised exploitation - reinforcement learning playing Atari and Procgen"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-xs text-gray-500 italic mt-3 mb-4">
            Video Showcase: Autonomous agent exploration across challenging Atari and Procgen environments.
          </p>
          
          {/* ScienceDirect Paper Link Button */}
          <div className="border-t border-[#1F2026] pt-4 flex justify-center">
            <a 
              href="https://www.sciencedirect.com/science/article/abs/pii/S092523122400804X" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold tracking-wide border border-[#104E8B]/60 bg-[#104E8B]/10 text-blue-400 hover:bg-[#104E8B] hover:text-white transition-all duration-200 shadow-sm"
            >
              <span>📄</span> Read Full Paper on ScienceDirect
            </a>
          </div>
        </div>
      </section>
      
      {/* DIAGRAM 1: EYE CATCHER */}
      <section className="space-y-3">
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4">
          <img 
            src="/diagrams/snd-pipeline.png" 
            alt="SND Functional Pipeline Overview" 
            className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-lg"
          />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 1: SND Functional Pipeline Overview - A visual representation of the self supervised network distillation process.
          </p>
        </div>
      </section>

      {/* NEW DIAGRAM LAYER: RESULTS & METRIC IMAGES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Table Summary Screenshot */}
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4 flex flex-col justify-between">
          <img 
            src="/diagrams/benchmark-scores-table.png" 
            alt="Empirical Comparison Scores Table" 
            className="w-full h-auto max-h-[250px] object-contain mx-auto rounded-lg bg-[#0F0F11]"
          />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 2: Empirical Evaluation Summary - Final scores showing our pipeline outperforming heavily tuned RND configurations and native baselines.
          </p>
        </div>

        {/* t-SNE Feature Space Projection */}
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4 flex flex-col justify-between">
          <img 
            src="/diagrams/tsne-feature-space.png" 
            alt="t-SNE Latent Space Projections RND vs SND" 
            className="w-full h-auto max-h-[250px] object-contain mx-auto rounded-lg bg-[#0F0F11]"
          />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 3: t-SNE Latent Spaces (RND vs SND). Colored nodes represent specific Room IDs in Montezuma's Revenge. SND exhibits richer structure, random model cant capture fine details.
          </p>
        </div>
      </section>

      {/* Core Concept / Engineering Pitch */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Core Innovation</h2>
        <p className="leading-relaxed">
          Standard Intrinsic Motivation frameworks like <strong>Random Network Distillation (RND)</strong> rely on a static, fixed target network initialized orthogonally. While this provides a baseline exploration signal, it suffers from severe feature limitations. RND maps structurally distinct zones well, but cannot differentiate subtle, critical environmental shifts. This forces the predictor's learning curves to flatten prematurely, introducing the dreaded <strong>IM-based reward vanishing problem</strong>.
        </p>
        <p className="leading-relaxed">
          Our framework, <strong>Self-Supervised Network Distillation (SND)</strong>, treats RND as a narrow, constrained subset of a more comprehensive architectural theme. Instead of fixing a frozen, unoptimized target model, we continuously train the target model via contrastive and non-contrastive <strong>Self-Supervised Learning (SSL)</strong>. This forces the feature space to preserve dynamic environmental variances, outputting higher target entropy and a robust exploration signal throughout long optimization bounds.
        </p>
      </section>

      {/* DIAGRAM 2: PPO AGENT */}
      <section className="space-y-3">
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4">
          <img 
            src="/diagrams/cnd-ppo_model.png" 
            alt="Model Architecture & PPO" 
            className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-lg"
          />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 4: Diagram: Model Architecture & PPO Configuration
          </p>
        </div>
      </section>

      {/* Deep Technical Discussion Breakdown */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Deep Dive & Analytical Validation</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-[#16161A]/40 border border-[#1F2026] space-y-3">
            <h3 className="text-lg font-semibold text-white">Geometric Feature Spaces</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              By monitoring latent distributions via t-SNE projections, we discovered that regularized self-supervised target networks yield significantly higher variance. While baseline RND placed similar local configurations too close together (making prediction trivially easy), SND explicitly maps structural state mutations, stabilizing the reward signal variance across deep game depths.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#16161A]/40 border border-[#1F2026] space-y-3">
            <h3 className="text-lg font-semibold text-white">Hyperparameter Optimization</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Rigorous testing demonstrated clear sensitivities to state constraints. The optimal network geometry leveraged a minimalist <strong>ELU activation layer</strong> backed by a unified fully connected target topology, balanced by a triple hidden-layer predictor architecture. Intrinsic motivation reward factors demonstrated optimal state behavior scaled at exactly <code>0.5</code>.
            </p>
          </div>
        </div>
      </section>

      {/* DIAGRAM 3: EVOLVING EPISODE */}
      <section className="space-y-3">
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4">
          <img 
            src="/diagrams/cnd_vicreg_result_summary.png" 
            alt="Intrinsic motivation evolution during episode" 
            className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-lg"
          />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 5: Intrinsic motivation evolution during episode
          </p>
        </div>
      </section>

      {/* Stabilization and Edge Discoveries */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Handling Non-Stationary Environments</h2>
        <p className="leading-relaxed">
          Evaluating advanced self-supervised frameworks like ST-DIM inside evolving, open-loop training datasets revealed severe internal instability trends. When introduced to completely unmapped environmental states, exponential activity spikes occurred within the feature coordinates due to unbound cross-entropy logits. To counter this, we integrated strict <strong>{"$L_2$-norm minimization over target logits"}</strong>, achieving smooth algorithmic stabilization even during aggressive contextual changes.
        </p>
        <p className="leading-relaxed">
          For augmentations, we discovered that simple structural augmentations performed best: a structured combination of <strong>uniform sample noise coupled with random tile spatial masking</strong> effectively guarded the models against overfitting to static asset styles.
        </p>
      </section>

      {/* DIAGRAM 4: SCORE RESULTS */}
      <section className="space-y-3">
        <div className="w-full rounded-xl bg-[#16161A] border border-[#1F2026] overflow-hidden p-2 md:p-4">
          <img 
            src="/diagrams/cnd_scaling.png" 
            alt="Score results for different scaling factors" 
            className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-lg"
          />
          <p className="text-center text-xs text-gray-500 italic mt-3">
            Figure 6: Score results for different scaling factors
          </p>
        </div>
      </section>

      {/* Engineering Milestones & Key Takeaways */}
      <section className="p-6 rounded-xl bg-gradient-to-br from-[#16161A] to-[#0F0F11] border border-[#1F2026] space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-[#104E8B]">✔</span> Proven Project Benchmarks
        </h2>
        <ul className="space-y-3 font-mono text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">[⚡ Efficiency]</span>
            <span>Required only 128M interaction samples total (leveraging 1M environmental base steps distributed over 128 parallel workers).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">[🏆 SOTA Performance]</span>
            <span>Achieved State-Of-The-Art empirical rewards on the historic exploratory testbed: Montezuma's Revenge.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">[🚀 Generalization]</span>
            <span>Successfully crossed evaluation barriers to solve notoriously difficult, procedurally generated ProcGen exploration seeds with minimal fine-tuning.</span>
          </li>
        </ul>
      </section>

    </article>
  );
}