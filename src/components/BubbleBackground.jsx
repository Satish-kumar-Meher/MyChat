// import React from 'react';
// import { motion } from 'framer-motion';

// export default function BubbleBackground() {
//   const bubbles = Array.from({ length: 15 });

//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
//       {bubbles.map((_, idx) => (
//         <motion.div
//           key={idx}
//           className="absolute bg-white/20 rounded-full backdrop-blur"
//           style={{
//             width: `${20 + Math.random() * 80}px`,
//             height: `${20 + Math.random() * 80}px`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -100],
//             opacity: [1, 0],
//           }}
//           transition={{
//             duration: 10 + Math.random() * 10,
//             repeat: Infinity,
//             repeatType: "reverse",
//             delay: Math.random() * 5,
//           }}
//         />
//       ))}
//     </div>
//   );
// }



// import React from 'react';
// import { motion } from 'framer-motion';

// export default function BubbleBackground() {
//   const bubbles = Array.from({ length: 20 });

//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
//       {bubbles.map((_, idx) => (
//         <motion.div
//           key={idx}
//           className="absolute rounded-full bg-cyan-300/20 backdrop-blur-lg"
//           style={{
//             width: `${20 + Math.random() * 100}px`,
//             height: `${20 + Math.random() * 100}px`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             filter: `blur(${Math.random() * 4}px)`
//           }}
//           animate={{
//             y: [0, -100],
//             opacity: [1, 0],
//           }}
//           transition={{
//             duration: 15 + Math.random() * 10,
//             repeat: Infinity,
//             repeatType: "reverse",
//             delay: Math.random() * 5,
//           }}
//         />
//       ))}
//     </div>
//   );
// }




import React from 'react';
import { motion } from 'framer-motion';

export default function BubbleBackground() {
  const bubbles = Array.from({ length: 25 });

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-hidden z-0">
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-400 opacity-20 rounded-full blur-2xl"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 20, 0],
            x: [0, 20, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      ))}
    </div>
  );
}
