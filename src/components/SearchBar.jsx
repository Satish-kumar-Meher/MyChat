// import React, { useState } from 'react';

// export default function SearchBar({ onSearch }) {
//   const [date, setDate] = useState('');
//   const [text, setText] = useState('');

//   return (
//     <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
//       <input type="text" placeholder="Enter date (dd/mm/yy)" className="p-2 rounded-lg bg-white/20 backdrop-blur text-white" value={date} onChange={e => setDate(e.target.value)} />
//       <input type="text" placeholder="Search text" className="p-2 rounded-lg bg-white/20 backdrop-blur text-white" value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={() => onSearch(date, text)} className="px-4 py-2 bg-gradient-to-tr from-green-400 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition">
//         Search
//       </button>
//     </div>
//   );
// }


// import React, { useState } from 'react';

// export default function SearchBar({ onSearch }) {
//   const [date, setDate] = useState('');
//   const [text, setText] = useState('');

//   return (
//     <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
//       <input
//         type="text"
//         placeholder="Enter date (dd/mm/yy)"
//         className="p-2 rounded-lg bg-white/10 border border-cyan-300/30 backdrop-blur text-white placeholder-cyan-300"
//         value={date}
//         onChange={e => setDate(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Search text"
//         className="p-2 rounded-lg bg-white/10 border border-cyan-300/30 backdrop-blur text-white placeholder-cyan-300"
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button
//         onClick={() => onSearch(date, text)}
//         className="px-4 py-2 bg-gradient-to-tr from-cyan-400 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition"
//       >
//         Search
//       </button>
//     </div>
//   );
// }



// import React, { useState } from 'react';

// export default function SearchBar({ onSearch }) {
//   const [date, setDate] = useState('');
//   const [text, setText] = useState('');

//   return (
//     <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
//       <input
//         type="date"
//         className="p-2 rounded-lg bg-white/10 border border-cyan-300/30 backdrop-blur text-white"
//         value={date}
//         onChange={e => setDate(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Search text"
//         className="p-2 rounded-lg bg-white/10 border border-cyan-300/30 backdrop-blur text-white"
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button
//         onClick={() => onSearch(date, text)}
//         className="px-4 py-2 bg-gradient-to-tr from-cyan-400 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition"
//       >
//         Search
//       </button>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [date, setDate] = useState('');
  const [text, setText] = useState('');

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full">
      <input
        type="date"
        className="p-2 rounded-lg bg-white/10 border border-cyan-300/30 backdrop-blur text-white w-[90%] sm:w-[200px]"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search text"
        className="p-2 rounded-lg bg-white/10 border border-cyan-300/30 backdrop-blur text-white w-[90%] sm:w-[200px]"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() => onSearch(date, text)}
        className="px-4 py-2 bg-gradient-to-tr from-cyan-400 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition w-[90%] sm:w-auto"
      >
        Search
      </button>
    </div>
  );
}
