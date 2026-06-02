/* ============ REGENTA — i18n (es / en) ============ */
/* Autodetección por navigator.language, override manual persistido en localStorage.
   El HTML inline está en español = fallback si el JS falla o falta una clave. */
(() => {
  'use strict';

  const I18N = {
    es: {
      'meta.title': 'Regenta — La capa de control agentic. Gobierna tu flota de agentes de IA.',
      'meta.desc': 'Regenta es el command center para dirigir una flota de agentes de IA con la disciplina de un equipo de ingeniería: orquesta, audita y mantén control total. No es magia. Es control.',
      'og.title': 'Regenta — Gobierna tu flota de agentes de IA',
      'og.desc': 'El command center para dirigir agentes de IA con control total: orquesta, audita y delega sin perder el mando. No es magia. Es control.',

      'nav.producto': 'Producto', 'nav.casos': 'Casos', 'nav.agentes': 'Agentes', 'nav.arquitectura': 'Arquitectura', 'nav.seguridad': 'Seguridad',
      'nav.stack': 'Stack', 'nav.empezar': 'Empezar', 'nav.cta': 'Empezar', 'nav.github_mobile': 'Ver en GitHub',

      'hero.pill': 'v0.4 · 18 agentes persistentes · coste de inferencia <strong>$0</strong> <span class="pill__arrow">→</span>',
      'hero.title': 'Gobierna una <span class="grad">flota de agentes</span> que mantiene tus proyectos.',
      'hero.sub': 'Regenta no resuelve una tarea suelta: mantiene proyectos <strong>enteros</strong> vivos. Asignas objetivos, defines alcances y una flota —que tú diseñas— los lleva de la idea al código revisado, con <strong>control total</strong>.',
      'hero.cta_start': 'Empezar',
      'hero.cta_how': 'Cómo funciona',
      'hero.tag': '<em>No es magia. Es control.</em>',

      'mock.title': 'regenta — fleet', 'mock.live': '<span class="mock__livedot"></span> 4 live',
      'mock.l1': '<span class="c-mut">›</span> <span class="c-cy">CEO</span> crea proyecto <span class="c-vi">"checkout v2"</span>',
      'mock.l2': '<span class="c-am">◎ Coordinator</span> <span class="c-mut">asigna · ciclo 10s</span>',
      'mock.l3': '<span class="c-cy">🔍 Scout</span> analiza repo <span class="c-mut">(read-only)</span> <span class="ok">✓</span>',
      'mock.l4': '<span class="c-vi">🏛 Directors</span> planifican <span class="c-mut">· allowedFiles</span> <span class="ok">✓</span>',
      'mock.l5': '<span class="c-am">✋ Aprobación CEO</span> <span class="badge-ok">aprobado</span>',
      'mock.l6': '<span class="c-cy">🔨 Builder</span> ejecuta <span class="c-mut">· batch cap 3 · file-locks</span>',
      'mock.l7': '<span class="c-gr">✅ Reviewer + QA</span> <span class="c-mut">diff auditado</span> <span class="ok">✓</span>',
      'mock.l8': '<span class="c-mut">›</span> <span class="c-gr">done</span> <span class="c-mut">— cada run, diff y decisión registrado.</span><span class="cursor"></span>',

      'stat.agents': 'agentes persistentes', 'stat.tests': 'tests passing', 'stat.providers': 'providers LLM', 'stat.cost': 'coste de inferencia',

      'prod.kicker': 'Por qué existe',
      'prod.h2': 'Los agentes de IA son potentes. <br class="hide-sm" />Pero sin control, son un riesgo.',
      'prod.p': 'Cada problema clásico de los agentes autónomos tiene una respuesta de ingeniería en Regenta.',
      'prod.p1q': 'Son <strong>cajas negras</strong> — no sabes qué hacen ni qué archivos tocan.',
      'prod.p1t': 'Trazabilidad total', 'prod.p1d': 'Cada run, diff, log y decisión queda registrado, con streaming SSE en vivo.',
      'prod.p2q': 'Uno descontrolado puede <strong>borrar código o filtrar secretos</strong>.',
      'prod.p2t': 'Control Plane', 'prod.p2d': 'RBAC, file-locks, jaula de workspace y blocklist de comandos peligrosos.',
      'prod.p3q': 'Coordinar varios es <strong>caótico</strong> — se pisan los archivos.',
      'prod.p3t': 'Coordinator autónomo', 'prod.p3d': 'Desbloqueo de dependencias, locks exclusivos y retry automático.',
      'prod.p4q': 'No <strong>entienden</strong> tu proyecto entre sesiones.',
      'prod.p4t': 'Cerebros persistentes', 'prod.p4d': 'Memoria por agente (brain v3, TF-IDF) que recuerda el contexto entre runs.',
      'prod.p5q': 'Quieres <strong>delegar sin perder el control</strong>.',
      'prod.p5t': 'Human-in-the-loop', 'prod.p5d': 'Aprobación manual del CEO en cada fase crítica. Los deploys nunca son automáticos.',
      'prod.p6q': 'La inferencia <strong>cuesta dinero</strong> y escala mal.',
      'prod.p6t': 'Inferencia local', 'prod.p6d': 'Modelos locales vía llama.cpp bajo demanda → <b>coste $0</b>, sin enviar tu código fuera.',

      'uc.kicker': 'Casos de uso',
      'uc.h2': 'Mantén proyectos vivos, no scripts de una vez.',
      'uc.p': 'Le das objetivos y Regenta mantiene un backlog, reparte el trabajo entre la flota y lleva cada tarea de la idea al código revisado. Algunos de sus usos:',
      'uc.c1t': 'Construir features', 'uc.c1d': 'Del objetivo en lenguaje natural al código: el scout analiza, el builder implementa bajo scope y el reviewer + QA validan.',
      'uc.c2t': 'Refactors con red de seguridad', 'uc.c2d': '<code>allowedFiles</code> acota el cambio, cada diff queda auditado y el reviewer comprueba los criterios de aceptación.',
      'uc.c3t': 'Tests y QA', 'uc.c3d': 'El skill test-runner ejecuta la suite y captura fallos; el rol QA valida cobertura antes de aceptar.',
      'uc.c4t': 'Code review continuo', 'uc.c4d': 'El reviewer analiza diffs en busca de bugs, problemas de seguridad y criterios — con tu aprobación final.',
      'uc.c5t': 'Migraciones y bumps de deps', 'uc.c5d': 'El scout evalúa el estado, se genera un plan por pasos, el builder ejecuta acotado y el reviewer valida.',
      'uc.c6t': 'Fix de bugs y mantenimiento', 'uc.c6d': 'El scout localiza, el Coordinator asigna, el builder corrige y el reviewer aprueba — en bucle mientras el proyecto viva.',
      'uc.foot': '…y cualquier otra: si puedes describir la tarea y darle alcance, hay un agente para ello.',

      'cu.kicker': 'Personalización total',
      'cu.h2': 'Un agente para lo que sea.',
      'cu.p': 'No te quedas con la flota por defecto. Defines tus propios agentes —nombre, rol, persona, modelo y skills— y los colocas en tu cadena de mando.',
      'cu.b1t': 'Persona e instrucciones propias', 'cu.b1d': 'Dale a cada agente su system prompt, personalidad, avatar y mascota. Su carácter, sus reglas.',
      'cu.b2t': 'Modelo y provider por agente', 'cu.b2d': 'Asigna a cada uno su modelo y sus API keys entre 8 providers — o inferencia local a coste $0.',
      'cu.b3t': 'Rol y skills a medida', 'cu.b3d': 'Scout, builder, reviewer u orquestador, con los skills (análisis, build, review, tests, git) que necesites.',
      'cu.b4t': 'Tu organigrama', 'cu.b4d': 'Encadena agentes en jerarquía: directores que planifican, especialistas que ejecutan. Tú al mando.',
      'cu.card_role': 'builder · especialista', 'cu.card_badge': 'nuevo agente',
      'cu.f_model': 'Modelo', 'cu.f_persona': 'Persona', 'cu.persona_val': 'Conciso · TDD-first · explica diffs',
      'cu.f_scope': 'Scope', 'cu.f_skills': 'Skills',

      'feat.kicker': 'Capacidades',
      'feat.h2': 'Una sala de mando, no un chatbot.',
      'feat.p': 'Todo lo que necesitas para operar una flota de IA en producción, con disciplina de ingeniería.',
      'feat.f1t': 'Coordinator autónomo', 'feat.f1d': 'Supervisa el fleet completo en un ciclo de 10 s: desbloquea dependencias, reintenta, escala y dispara auto-reviews.',
      'feat.f2t': 'Fleet & cadena de mando', 'feat.f2d': '18 agentes en un organigrama de 4 niveles —orquestadores, scouts, builders y revisores— con identidad y cerebro propios.',
      'feat.f3t': 'Pipeline de 7 fases', 'feat.f3d': 'De un objetivo en lenguaje natural a código revisado: scout → plan → aprobación → build → review → QA → done.',
      'feat.f4t': 'Cerebros persistentes', 'feat.f4d': 'Grafo de memoria estilo Obsidian con búsqueda TF-IDF. Cada agente recuerda decisiones y contexto entre runs.',
      'feat.f5t': 'Router multi-provider', 'feat.f5d': 'Despacha por agente entre 8 providers (Anthropic, OpenAI, Groq, Gemini…) con failover, cuarentena y backoff 429.',
      'feat.f6t': 'Chat Fleet en vivo', 'feat.f6d': 'Canales por proyecto, DMs CEO↔agente con memoria, grupos multi-agente y comandos (<code>/task</code>, <code>/approve</code>).',

      'arch.kicker': 'Arquitectura',
      'arch.h2': 'Cinco capas. Separación estricta.',
      'arch.p': 'La UI nunca habla con el motor: todo pasa por la API. Cada capa tiene un contrato claro.',
      'arch.l1tag': '🖥️ Presentación', 'arch.l1desc': 'Desktop App · React 18 + Vite + Tailwind 4 — Fleet · Proyectos · Métricas · Cerebros · Ajustes',
      'arch.conn': 'fetch + SSE',
      'arch.l2tag': '🔌 API Gateway · Express + TS · :3000',
      'arch.l2c1': '🔐 JWT 4h · Helmet · rate-limit 500/min', 'arch.l2c2': '📡 SSE — task · lock · run · review · audit', 'arch.l2c3': '📂 REST — projects · tasks · runs · agents · chat',
      'arch.l3tag': '🧠 Core Engine',
      'arch.l3c1': '🎯 Coordinator · ciclo 10s', 'arch.l3c2': '📝 Task Engine', 'arch.l3c3': '🤖 Agent Runtime (in-process)', 'arch.l3c4': '🔀 LLM Router · 8 providers',
      'arch.l4tag': '🛡️ Control Plane',
      'arch.l5tag': '💾 Infraestructura', 'arch.l5c2': '📁 Workspace bajo path-guard',

      'shot.kicker': 'La consola',
      'shot.h2': 'Diseño neón oscuro. Información densa, no ruido.',
      'shot.p': 'Organigrama vivo, Kanban con pipeline de 7 fases y un dashboard de salud — todo en tiempo real por SSE.',
      'shot.tab1': '🗂️ Fleet', 'shot.tab2': '📋 Proyectos', 'shot.tab3': '📊 Métricas',
      'shot.alt0': 'Fleet — organigrama interactivo de la flota de agentes',
      'shot.alt1': 'Proyectos — Kanban con pipeline de 7 fases',
      'shot.alt2': 'Métricas — dashboard de salud del sistema',

      'tree.kicker': 'La flota',
      'tree.h2': 'Una cadena de mando, de verdad.',
      'tree.p': 'Tú das el proyecto. Los directores planifican. Los especialistas ejecutan. El Coordinator supervisa.',
      'tree.ceo': 'Tú · human-in-the-loop', 'tree.coord': 'supervisa el fleet · ciclo 10s',
      'tree.leads_name': 'Scout · Builder · Reviewer · Backend · Frontend · AI/ML · QA · Infra · UX',

      'sec.kicker': 'Control Plane',
      'sec.h2': 'Seguridad por diseño.',
      'sec.p': 'Delegar no significa perder el mando. Cada acción pasa por la guardia.',
      'sec.s1t': 'RBAC + Policies', 'sec.s1d': 'Permisos granulares por rol: orchestrator, scout, builder, reviewer.',
      'sec.s2t': 'Scope <code>allowedFiles</code>', 'sec.s2d': 'Cada tarea declara qué archivos puede tocar; el builder no se sale.',
      'sec.s3t': 'File Locks (TTL)', 'sec.s3d': 'Adquisición exclusiva por tarea con expiración automática.',
      'sec.s4t': 'Path-guard', 'sec.s4d': 'Jaula de workspace que resuelve symlinks con <code>realpath</code>, no solo léxico.',
      'sec.s5t': 'Terminal blocklist', 'sec.s5d': 'Bloquea <code>deploy</code>/<code>publish</code>/<code>login</code> y prompts interactivos.',
      'sec.s6t': 'Secret Vault', 'sec.s6d': 'AES-256-GCM, IV por fila, master key fuera del repo (modo <code>0600</code>).',
      'sec.s7t': 'Audit Trail', 'sec.s7d': 'Registro inmutable de cada acción, con stream SSE en <code>/api/audit/stream</code>.',
      'sec.s8t': 'Anti-loop + quarantine', 'sec.s8d': 'Skip de tareas con 3+ fallos; keys con error aisladas sin reintentos en bucle.',
      'sec.note': '🔐 <strong>Auth:</strong> JWT con expiración de 4h, bcrypt (cost 12), queries parametrizadas y rate-limiting. En producción la API <strong>exige</strong> <code>JWT_SECRET</code> — sin fallback inseguro.',

      'stack.kicker': 'Stack',
      'stack.h2': 'Construido con herramientas serias.',
      'stack.p': 'Monorepo <code>npm workspaces</code> · 13 paquetes <code>@regenta/*</code> + la app desktop.',

      'qs.kicker': 'Quick start',
      'qs.h2': 'De clone a flota corriendo en minutos.',
      'qs.p': 'API + Desktop a la vez. Inferencia local opcional para coste $0.',
      'qs.copy': 'Copiar', 'qs.copied': '¡Copiado!',
      'qs.code': '# Clona y arranca (dev)\ngit clone https://github.com/JoniMartin27/regenta.git\ncd regenta\nnpm install\n\n# API + Desktop a la vez\nnpm run dev\n#   → API   http://localhost:3000\n#   → Web   http://localhost:5173\n\n# Full-stack a coste $0 (inferencia local + observabilidad)\nnpm run start:all',
      'qs.note': '¿Producción? <code>JWT_SECRET</code> es obligatorio. <code>docker compose up -d --build</code> levanta <code>api</code> + <code>web</code>.',

      'cta.h2': 'Tú gobiernas. <span class="grad">La flota ejecuta.</span>',
      'cta.p': 'Dirige agentes de IA con la disciplina de un equipo de ingeniería — sin renunciar al control.',
      'cta.github': 'Ver en GitHub', 'cta.top': 'Volver arriba', 'cta.tag': '<em>No es magia. Es control.</em>',

      'foot.tagline': 'La capa de control agentic para desarrollo de software.',
      'foot.col1': 'Producto', 'foot.l_why': 'Por qué existe', 'foot.l_arch': 'Arquitectura', 'foot.l_sec': 'Seguridad', 'foot.l_stack': 'Stack',
      'foot.col2': 'Recursos', 'foot.l_qs': 'Quick start',
      'foot.base': '© 2026 Jonathan Martín · Licencia <strong>PolyForm Noncommercial 1.0.0</strong>',
      'foot.made': 'Hecho para gobernar flotas de agentes.',
    },

    en: {
      'meta.title': 'Regenta — The agentic control plane. Command your fleet of AI agents.',
      'meta.desc': 'Regenta is the command center to run a fleet of AI agents with the discipline of an engineering team: orchestrate, audit and keep full control. It\'s not magic. It\'s control.',
      'og.title': 'Regenta — Command your fleet of AI agents',
      'og.desc': 'The command center to run AI agents with full control: orchestrate, audit and delegate without losing command. It\'s not magic. It\'s control.',

      'nav.producto': 'Product', 'nav.casos': 'Use cases', 'nav.agentes': 'Agents', 'nav.arquitectura': 'Architecture', 'nav.seguridad': 'Security',
      'nav.stack': 'Stack', 'nav.empezar': 'Get started', 'nav.cta': 'Get started', 'nav.github_mobile': 'View on GitHub',

      'hero.pill': 'v0.4 · 18 persistent agents · inference cost <strong>$0</strong> <span class="pill__arrow">→</span>',
      'hero.title': 'Command a <span class="grad">fleet of agents</span> that maintains your projects.',
      'hero.sub': 'Regenta doesn\'t solve a one-off task: it keeps <strong>whole</strong> projects alive. You set goals, define scopes, and a fleet —that you design— takes them from idea to reviewed code, with <strong>full control</strong>.',
      'hero.cta_start': 'Get started',
      'hero.cta_how': 'How it works',
      'hero.tag': '<em>It\'s not magic. It\'s control.</em>',

      'mock.title': 'regenta — fleet', 'mock.live': '<span class="mock__livedot"></span> 4 live',
      'mock.l1': '<span class="c-mut">›</span> <span class="c-cy">CEO</span> creates project <span class="c-vi">"checkout v2"</span>',
      'mock.l2': '<span class="c-am">◎ Coordinator</span> <span class="c-mut">assigns · 10s cycle</span>',
      'mock.l3': '<span class="c-cy">🔍 Scout</span> analyzes repo <span class="c-mut">(read-only)</span> <span class="ok">✓</span>',
      'mock.l4': '<span class="c-vi">🏛 Directors</span> plan <span class="c-mut">· allowedFiles</span> <span class="ok">✓</span>',
      'mock.l5': '<span class="c-am">✋ CEO approval</span> <span class="badge-ok">approved</span>',
      'mock.l6': '<span class="c-cy">🔨 Builder</span> executes <span class="c-mut">· batch cap 3 · file-locks</span>',
      'mock.l7': '<span class="c-gr">✅ Reviewer + QA</span> <span class="c-mut">audited diff</span> <span class="ok">✓</span>',
      'mock.l8': '<span class="c-mut">›</span> <span class="c-gr">done</span> <span class="c-mut">— every run, diff and decision logged.</span><span class="cursor"></span>',

      'stat.agents': 'persistent agents', 'stat.tests': 'tests passing', 'stat.providers': 'LLM providers', 'stat.cost': 'inference cost',

      'prod.kicker': 'Why it exists',
      'prod.h2': 'AI agents are powerful. <br class="hide-sm" />But without control, they\'re a risk.',
      'prod.p': 'Every classic problem of autonomous agents has an engineering answer in Regenta.',
      'prod.p1q': 'They\'re <strong>black boxes</strong> — you don\'t know what they do or which files they touch.',
      'prod.p1t': 'Full traceability', 'prod.p1d': 'Every run, diff, log and decision is recorded, with live SSE streaming.',
      'prod.p2q': 'A rogue one can <strong>delete code or leak secrets</strong>.',
      'prod.p2t': 'Control Plane', 'prod.p2d': 'RBAC, file-locks, workspace jail and a blocklist of dangerous commands.',
      'prod.p3q': 'Coordinating several is <strong>chaotic</strong> — they step on each other\'s files.',
      'prod.p3t': 'Autonomous Coordinator', 'prod.p3d': 'Dependency unblocking, exclusive locks and automatic retry.',
      'prod.p4q': 'They <strong>don\'t understand</strong> your project across sessions.',
      'prod.p4t': 'Persistent brains', 'prod.p4d': 'Per-agent memory (brain v3, TF-IDF) that remembers context across runs.',
      'prod.p5q': 'You want to <strong>delegate without losing control</strong>.',
      'prod.p5t': 'Human-in-the-loop', 'prod.p5d': 'Manual CEO approval at every critical phase. Deploys are never automatic.',
      'prod.p6q': 'Inference <strong>costs money</strong> and scales poorly.',
      'prod.p6t': 'Local inference', 'prod.p6d': 'Local models via llama.cpp on demand → <b>$0 cost</b>, without sending your code out.',

      'uc.kicker': 'Use cases',
      'uc.h2': 'Keep projects alive, not one-off scripts.',
      'uc.p': 'You set goals and Regenta keeps a backlog, splits the work across the fleet and takes each task from idea to reviewed code. A few of its uses:',
      'uc.c1t': 'Build features', 'uc.c1d': 'From a natural-language goal to code: the scout analyzes, the builder implements within scope and the reviewer + QA validate.',
      'uc.c2t': 'Refactors with a safety net', 'uc.c2d': '<code>allowedFiles</code> scopes the change, every diff is audited and the reviewer checks the acceptance criteria.',
      'uc.c3t': 'Tests & QA', 'uc.c3d': 'The test-runner skill runs the suite and captures failures; the QA role validates coverage before accepting.',
      'uc.c4t': 'Continuous code review', 'uc.c4d': 'The reviewer scans diffs for bugs, security issues and criteria — with your final approval.',
      'uc.c5t': 'Migrations & dep bumps', 'uc.c5d': 'The scout assesses the state, a step-by-step plan is generated, the builder executes within scope and the reviewer validates.',
      'uc.c6t': 'Bug fixes & maintenance', 'uc.c6d': 'The scout locates it, the Coordinator assigns, the builder fixes and the reviewer approves — on a loop as long as the project lives.',
      'uc.foot': '…and any other: if you can describe the task and scope it, there\'s an agent for it.',

      'cu.kicker': 'Full customization',
      'cu.h2': 'An agent for anything.',
      'cu.p': 'You\'re not stuck with the default fleet. You define your own agents —name, role, persona, model and skills— and place them in your chain of command.',
      'cu.b1t': 'Custom persona & instructions', 'cu.b1d': 'Give each agent its own system prompt, personality, avatar and pet. Its character, its rules.',
      'cu.b2t': 'Per-agent model & provider', 'cu.b2d': 'Assign each its own model and API keys across 8 providers — or local inference at $0.',
      'cu.b3t': 'Role & skills to taste', 'cu.b3d': 'Scout, builder, reviewer or orchestrator, with the skills (analysis, build, review, tests, git) you need.',
      'cu.b4t': 'Your org chart', 'cu.b4d': 'Chain agents into a hierarchy: directors that plan, specialists that execute. You in command.',
      'cu.card_role': 'builder · specialist', 'cu.card_badge': 'new agent',
      'cu.f_model': 'Model', 'cu.f_persona': 'Persona', 'cu.persona_val': 'Concise · TDD-first · explains diffs',
      'cu.f_scope': 'Scope', 'cu.f_skills': 'Skills',

      'feat.kicker': 'Capabilities',
      'feat.h2': 'A command room, not a chatbot.',
      'feat.p': 'Everything you need to operate an AI fleet in production, with engineering discipline.',
      'feat.f1t': 'Autonomous Coordinator', 'feat.f1d': 'Supervises the whole fleet on a 10s cycle: unblocks dependencies, retries, escalates and triggers auto-reviews.',
      'feat.f2t': 'Fleet & chain of command', 'feat.f2d': '18 agents in a 4-level org chart —orchestrators, scouts, builders and reviewers— each with its own identity and brain.',
      'feat.f3t': '7-phase pipeline', 'feat.f3d': 'From a natural-language goal to reviewed code: scout → plan → approval → build → review → QA → done.',
      'feat.f4t': 'Persistent brains', 'feat.f4d': 'Obsidian-style memory graph with TF-IDF search. Each agent remembers decisions and context across runs.',
      'feat.f5t': 'Multi-provider router', 'feat.f5d': 'Dispatches per agent across 8 providers (Anthropic, OpenAI, Groq, Gemini…) with failover, quarantine and 429 backoff.',
      'feat.f6t': 'Live Fleet Chat', 'feat.f6d': 'Per-project channels, CEO↔agent DMs with memory, multi-agent groups and commands (<code>/task</code>, <code>/approve</code>).',

      'arch.kicker': 'Architecture',
      'arch.h2': 'Five layers. Strict separation.',
      'arch.p': 'The UI never talks to the engine: everything goes through the API. Each layer has a clear contract.',
      'arch.l1tag': '🖥️ Presentation', 'arch.l1desc': 'Desktop App · React 18 + Vite + Tailwind 4 — Fleet · Projects · Metrics · Brains · Settings',
      'arch.conn': 'fetch + SSE',
      'arch.l2tag': '🔌 API Gateway · Express + TS · :3000',
      'arch.l2c1': '🔐 JWT 4h · Helmet · rate-limit 500/min', 'arch.l2c2': '📡 SSE — task · lock · run · review · audit', 'arch.l2c3': '📂 REST — projects · tasks · runs · agents · chat',
      'arch.l3tag': '🧠 Core Engine',
      'arch.l3c1': '🎯 Coordinator · 10s cycle', 'arch.l3c2': '📝 Task Engine', 'arch.l3c3': '🤖 Agent Runtime (in-process)', 'arch.l3c4': '🔀 LLM Router · 8 providers',
      'arch.l4tag': '🛡️ Control Plane',
      'arch.l5tag': '💾 Infrastructure', 'arch.l5c2': '📁 Workspace under path-guard',

      'shot.kicker': 'The console',
      'shot.h2': 'Dark neon design. Dense information, no noise.',
      'shot.p': 'Live org chart, a Kanban with a 7-phase pipeline and a health dashboard — all real-time over SSE.',
      'shot.tab1': '🗂️ Fleet', 'shot.tab2': '📋 Projects', 'shot.tab3': '📊 Metrics',
      'shot.alt0': 'Fleet — interactive org chart of the agent fleet',
      'shot.alt1': 'Projects — Kanban with a 7-phase pipeline',
      'shot.alt2': 'Metrics — system health dashboard',

      'tree.kicker': 'The fleet',
      'tree.h2': 'A real chain of command.',
      'tree.p': 'You give the project. Directors plan. Specialists execute. The Coordinator supervises.',
      'tree.ceo': 'You · human-in-the-loop', 'tree.coord': 'supervises the fleet · 10s cycle',
      'tree.leads_name': 'Scout · Builder · Reviewer · Backend · Frontend · AI/ML · QA · Infra · UX',

      'sec.kicker': 'Control Plane',
      'sec.h2': 'Security by design.',
      'sec.p': 'Delegating doesn\'t mean losing command. Every action passes through the guard.',
      'sec.s1t': 'RBAC + Policies', 'sec.s1d': 'Granular per-role permissions: orchestrator, scout, builder, reviewer.',
      'sec.s2t': 'Scope <code>allowedFiles</code>', 'sec.s2d': 'Each task declares which files it can touch; the builder can\'t stray.',
      'sec.s3t': 'File Locks (TTL)', 'sec.s3d': 'Exclusive per-task acquisition with automatic expiry.',
      'sec.s4t': 'Path-guard', 'sec.s4d': 'Workspace jail that resolves symlinks with <code>realpath</code>, not just lexically.',
      'sec.s5t': 'Terminal blocklist', 'sec.s5d': 'Blocks <code>deploy</code>/<code>publish</code>/<code>login</code> and interactive prompts.',
      'sec.s6t': 'Secret Vault', 'sec.s6d': 'AES-256-GCM, per-row IV, master key outside the repo (<code>0600</code> mode).',
      'sec.s7t': 'Audit Trail', 'sec.s7d': 'Immutable record of every action, with an SSE stream at <code>/api/audit/stream</code>.',
      'sec.s8t': 'Anti-loop + quarantine', 'sec.s8d': 'Skips tasks with 3+ failures; failing keys isolated with no retry loops.',
      'sec.note': '🔐 <strong>Auth:</strong> JWT with 4h expiry, bcrypt (cost 12), parameterized queries and rate-limiting. In production the API <strong>requires</strong> <code>JWT_SECRET</code> — no insecure fallback.',

      'stack.kicker': 'Stack',
      'stack.h2': 'Built with serious tools.',
      'stack.p': '<code>npm workspaces</code> monorepo · 13 <code>@regenta/*</code> packages + the desktop app.',

      'qs.kicker': 'Quick start',
      'qs.h2': 'From clone to running fleet in minutes.',
      'qs.p': 'API + Desktop at once. Optional local inference for $0 cost.',
      'qs.copy': 'Copy', 'qs.copied': 'Copied!',
      'qs.code': '# Clone and run (dev)\ngit clone https://github.com/JoniMartin27/regenta.git\ncd regenta\nnpm install\n\n# API + Desktop at once\nnpm run dev\n#   → API   http://localhost:3000\n#   → Web   http://localhost:5173\n\n# Full-stack at $0 (local inference + observability)\nnpm run start:all',
      'qs.note': 'Production? <code>JWT_SECRET</code> is required. <code>docker compose up -d --build</code> brings up <code>api</code> + <code>web</code>.',

      'cta.h2': 'You command. <span class="grad">The fleet executes.</span>',
      'cta.p': 'Run AI agents with the discipline of an engineering team — without giving up control.',
      'cta.github': 'View on GitHub', 'cta.top': 'Back to top', 'cta.tag': '<em>It\'s not magic. It\'s control.</em>',

      'foot.tagline': 'The agentic control plane for software development.',
      'foot.col1': 'Product', 'foot.l_why': 'Why it exists', 'foot.l_arch': 'Architecture', 'foot.l_sec': 'Security', 'foot.l_stack': 'Stack',
      'foot.col2': 'Resources', 'foot.l_qs': 'Quick start',
      'foot.base': '© 2026 Jonathan Martín · <strong>PolyForm Noncommercial 1.0.0</strong> license',
      'foot.made': 'Built to command agent fleets.',
    },
  };

  const SUPPORTED = ['es', 'en'];
  const STORE_KEY = 'regenta-lang';

  const detect = () => {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return nav.toLowerCase().startsWith('es') ? 'es' : 'en';
  };

  const setMeta = (attr, key, val) => {
    if (val == null) return;
    const el = document.querySelector(`meta[${attr}="${key}"]`);
    if (el) el.setAttribute('content', val);
  };

  const apply = (lang) => {
    const dict = I18N[lang] || I18N.es;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const v = dict[el.getAttribute('data-i18n-alt')];
      if (v != null) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const v = dict[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v);
    });

    // <head> meta
    if (dict['meta.title']) document.title = dict['meta.title'];
    setMeta('name', 'description', dict['meta.desc']);
    setMeta('property', 'og:title', dict['og.title']);
    setMeta('property', 'og:description', dict['og.desc']);
    setMeta('name', 'twitter:title', dict['og.title']);
    setMeta('name', 'twitter:description', dict['og.desc']);

    // toggle buttons label = the OTHER language
    const other = lang === 'es' ? 'EN' : 'ES';
    document.querySelectorAll('.lang-toggle').forEach(b => {
      b.textContent = other;
      b.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    });
  };

  const setLang = (lang) => {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    localStorage.setItem(STORE_KEY, lang);
    apply(lang);
  };

  // expose
  window.RegentaI18n = {
    current: detect(),
    toggle() { this.current = this.current === 'es' ? 'en' : 'es'; setLang(this.current); },
    set: setLang,
    t(key) { return (I18N[this.current] || I18N.es)[key]; },
  };

  // apply ASAP (DOM is parsed: this script is loaded right before </body>)
  apply(window.RegentaI18n.current);

  // wire toggles
  document.querySelectorAll('.lang-toggle').forEach(b =>
    b.addEventListener('click', () => window.RegentaI18n.toggle())
  );
})();
