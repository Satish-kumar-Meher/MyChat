// import React from 'react';
// import { motion } from 'framer-motion';

// export default function ChatMessage({ msg }) {
//   let align = 'text-center';
//   let bubble = 'bg-white/20 backdrop-blur-lg p-4 rounded-3xl shadow-inner text-white max-w-[70%] mx-auto';

//   if (msg.sender === 'Satish') {
//     align = 'text-right';
//     bubble = 'ml-auto bg-gradient-to-tr from-blue-500 to-purple-600 p-4 rounded-3xl shadow-lg text-white max-w-[60%]';
//   } else if (msg.sender === 'Qin') {
//     align = 'text-left';
//     bubble = 'mr-auto bg-gradient-to-tr from-pink-400 to-purple-500 p-4 rounded-3xl shadow-lg text-white max-w-[60%]';
//   }

//   return (
//     <motion.div className={`my-2 ${align}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//       <div className={`${bubble}`}>
//         <div className="text-sm mb-1 font-semibold">{msg.sender}</div>
//         <div>{msg.message}</div>
//         <div className="text-xs text-gray-200 mt-1">{msg.time}</div>
//       </div>
//     </motion.div>
//   );
// }



// import React from 'react';
// import { motion } from 'framer-motion';

// export default function ChatMessage({ msg }) {
//   let containerStyle = 'flex w-full my-2';
//   let bubbleStyle = 'bg-white/10 backdrop-blur-md p-3 rounded-3xl max-w-[80%] mx-auto';

//   if (msg.sender === 'Satish') {
//     containerStyle = 'flex justify-end w-full my-3';
//     bubbleStyle = `
//       bg-gradient-to-br from-cyan-400/30 to-cyan-600/20 
//       backdrop-blur-md 
//       p-4 
//       rounded-3xl 
//       max-w-[45%] 
//       shadow-[0_4px_30px_rgba(0,255,255,0.3)] 
//       border border-cyan-300/30 
//       text-white 
//       neon-inner-glow`;
//   } else if (msg.sender === 'Qin') {
//     containerStyle = 'flex justify-start w-full my-3';
//     bubbleStyle = `
//       bg-gradient-to-bl from-cyan-400/30 to-blue-600/20 
//       backdrop-blur-md 
//       p-4 
//       rounded-3xl 
//       max-w-[45%] 
//       shadow-[0_4px_30px_rgba(0,255,255,0.3)] 
//       border border-cyan-300/30 
//       text-white 
//       neon-inner-glow`;
//   }

//   return (
//     <motion.div
//       className={containerStyle}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className={bubbleStyle}>
//         <div className="text-sm font-semibold mb-1">{msg.sender}</div>
//         <div className="text-base">{msg.message}</div>
//         <div className="text-xs text-cyan-200 mt-1 text-right">{msg.time}</div>
//       </div>
//     </motion.div>
//   );
// }



// import React from 'react';
// import { motion } from 'framer-motion';

// export default function ChatMessage({ msg }) {
//   let containerStyle = 'flex w-full my-2';
//   let bubbleStyle = 'p-4 ml-3 mr-3 rounded-2xl max-w-[70%] shadow-lg text-white neon-inner-glow';

//   if (msg.sender === 'Satish') {
//     containerStyle = 'flex justify-end';
//     bubbleStyle += ' bg-gradient-to-br from-cyan-400/30 to-cyan-600/20 mr-2';
//   } else if (msg.sender === 'Qin') {
//     containerStyle = 'flex justify-start';
//     bubbleStyle += ' bg-gradient-to-bl from-cyan-400/30 to-blue-600/20 ml-2';
//   }

//   return (
//     <motion.div
//       className={containerStyle}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       <div className={bubbleStyle}>
//         <div className="text-sm font-semibold mb-1">{msg.sender}</div>
//         <div className="text-base">{msg.message}</div>
//         <div className="text-xs text-cyan-200 mt-1 text-right">{msg.time}</div>
//       </div>
//     </motion.div>
//   );
// }




import React from 'react';
import { motion } from 'framer-motion';

export default function ChatMessage({ msg }) {
  let containerStyle = 'flex w-full my-2 px-2';
  let bubbleStyle = 'p-3 md:p-4 rounded-2xl shadow-lg text-white neon-inner-glow';

  if (msg.sender === 'Satish') {
    containerStyle = 'flex justify-end w-full px-2';
    bubbleStyle += ' bg-gradient-to-br from-cyan-400/30 to-cyan-600/20 mr-1 sm:mr-4 md:mr-6 lg:mr-12 max-w-[85%] md:max-w-[70%] lg:max-w-[60%]';
  } else if (msg.sender === 'Qin') {
    containerStyle = 'flex justify-start w-full px-2';
    bubbleStyle += ' bg-gradient-to-bl from-cyan-400/30 to-blue-600/20 ml-1 sm:ml-4 md:ml-6 lg:ml-12 max-w-[85%] md:max-w-[70%] lg:max-w-[60%]';
  }

  return (
    <motion.div
      className={containerStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={bubbleStyle}>
        <div className="text-xs md:text-sm font-semibold mb-1">{msg.sender}</div>
        <div className="text-sm md:text-base">{msg.message}</div>
        <div className="text-[10px] md:text-xs text-cyan-200 mt-1 text-right">{msg.time}</div>
      </div>
    </motion.div>
  );
}
