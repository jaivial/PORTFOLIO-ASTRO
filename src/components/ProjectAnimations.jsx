import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '../utils/translations';

// 1:1 animated scenes for a project (framer-motion / Motion). Each project
// lists the scenes it wants in `project.animations`; a scene is a component
// registered in SCENES below. Every scene loops on its own and respects
// prefers-reduced-motion through framer-motion's MotionConfig default.

const WA_GREEN = '#25d366';

function Square({ children, label }) {
  return (
    <figure className="m-0" data-testid={`project-animation-${label}`}>
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gray-700 bg-[#08090b]">
        {children}
      </div>
    </figure>
  );
}

// WhatsApp chat: the customer asks, the bot types, the reply arrives with a button.
function WhatsAppTypingScene({ text }) {
  const cycle = { duration: 7, repeat: Infinity, ease: 'easeOut' };
  return (
    <Square label="whatsapp-typing">
      <div className="absolute inset-0 flex flex-col justify-center gap-3 p-[8%] text-[clamp(11px,2.6vw,18px)]">
        <motion.div
          className="max-w-[78%] self-start rounded-2xl rounded-bl-md bg-[#1d232c] px-4 py-3 text-gray-100"
          animate={{ opacity: [0, 1, 1, 1, 0], y: [16, 0, 0, 0, 0] }}
          transition={{ ...cycle, times: [0, 0.06, 0.5, 0.92, 1] }}
        >
          {text.question}
        </motion.div>
        <motion.div
          className="flex gap-2 self-start rounded-2xl bg-[#1d232c] px-4 py-4"
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{ ...cycle, times: [0, 0.12, 0.16, 0.36, 0.4, 1] }}
          aria-label={text.typing}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-2.5 w-2.5 rounded-full bg-gray-400"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </motion.div>
        <motion.div
          className="max-w-[82%] self-end overflow-hidden rounded-2xl rounded-br-md bg-[#005c4b] text-gray-50"
          animate={{ opacity: [0, 0, 1, 1, 0], y: [16, 16, 0, 0, 0] }}
          transition={{ ...cycle, times: [0, 0.4, 0.46, 0.92, 1] }}
        >
          <div className="px-4 pt-3 pb-2">{text.answer}</div>
          <div className="border-t border-white/15 py-2 text-center font-semibold text-[#53bdeb]">{text.button}</div>
        </motion.div>
      </div>
    </Square>
  );
}

// The same client, another server: the URL swaps and every route answers.
function DropInScene({ text }) {
  const rows = [
    ['POST /message/sendText', '201'],
    ['POST /message/sendButtons', '201'],
    ['POST /webhook/set', '201'],
    ['GET  /socket', '101'],
  ];
  return (
    <Square label="drop-in">
      <div className="absolute inset-0 flex flex-col justify-center gap-4 p-[8%] font-mono text-[clamp(10px,2.3vw,16px)] text-gray-200">
        <div className="text-gray-500"># {text.caption}</div>
        <div className="flex items-center gap-2">
          <span>EVOLUTION_URL=</span>
          <span className="relative inline-block h-[1.4em] w-[5ch] overflow-hidden">
            <motion.span
              className="absolute left-0 text-amber-400"
              animate={{ y: ['0%', '0%', '-110%', '-110%', '0%'] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.3, 0.9, 1] }}
            >
              :8111
            </motion.span>
            <motion.span
              className="absolute left-0"
              style={{ color: WA_GREEN }}
              animate={{ y: ['110%', '110%', '0%', '0%', '110%'] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.3, 0.9, 1] }}
            >
              :8113
            </motion.span>
          </span>
        </div>
        {rows.map(([route, code], i) => (
          <motion.div
            key={route}
            className="flex justify-between rounded-lg border border-gray-800 bg-[#0f1216] px-3 py-2"
            animate={{ opacity: [0, 0, 1, 1, 0], x: [-12, -12, 0, 0, 0] }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.32 + i * 0.06, 0.38 + i * 0.06, 0.9, 1] }}
          >
            <span>{route}</span>
            <span style={{ color: WA_GREEN }}>{code}</span>
          </motion.div>
        ))}
      </div>
    </Square>
  );
}

// One event, every transport: a message fans out to the sinks.
function EventFanoutScene({ text }) {
  const sinks = ['Webhook', 'WebSocket', 'RabbitMQ', 'SQS', 'NATS', 'Kafka', 'Pusher'];
  return (
    <Square label="event-fanout">
      <div className="absolute inset-0 flex items-center justify-between gap-4 p-[8%] text-[clamp(10px,2.3vw,16px)]">
        <motion.div
          className="rounded-xl border px-3 py-4 text-center font-semibold text-gray-100"
          style={{ borderColor: WA_GREEN }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          messages
          <br />
          .upsert
        </motion.div>
        <div className="relative flex h-full flex-1 flex-col justify-center gap-2">
          {sinks.map((s, i) => (
            <div key={s} className="relative flex items-center gap-2">
              <div className="relative h-px flex-1 bg-gray-800">
                <motion.span
                  className="absolute -top-1 h-2 w-2 rounded-full"
                  style={{ background: WA_GREEN }}
                  animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
                />
              </div>
              <span className="w-[7.5em] rounded-md border border-gray-800 bg-[#0f1216] px-2 py-1 text-gray-300">{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[5%] left-0 right-0 text-center text-[clamp(10px,2vw,14px)] text-gray-500">{text.caption}</div>
    </Square>
  );
}

const SCENES = {
  'whatsapp-typing': WhatsAppTypingScene,
  'drop-in': DropInScene,
  'event-fanout': EventFanoutScene,
};

export default function ProjectAnimations({ project }) {
  const t = useTranslations();
  const items = (project.animations || []).filter((a) => SCENES[a.scene]);
  if (items.length === 0) return null;
  const key = project.slug;
  const tr = (path, fallback) => {
    const v = t(`projects.${key}.animations.${path}`);
    return v && !v.startsWith('projects.') ? v : fallback;
  };
  return (
    <div className="rounded-xl border border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800 p-6 shadow-xl lg:p-8">
      <h2 className="mb-6 text-xl font-bold text-white lg:text-2xl">{tr('title', 'Animations')}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((a) => {
          const Scene = SCENES[a.scene];
          const text = Object.fromEntries(Object.entries(a.text || {}).map(([k, v]) => [k, tr(`${a.scene}.${k}`, v)]));
          return <Scene key={a.scene} text={text} />;
        })}
      </div>
    </div>
  );
}
