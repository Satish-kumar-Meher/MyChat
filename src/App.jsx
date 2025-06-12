
// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import BubbleBackground from './components/BubbleBackground';
// import ChatMessage from './components/ChatMessage';
// import SearchBar from './components/SearchBar';
// import { groupByDate } from './utils/groupByDate';
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import { VariableSizeList as List } from 'react-window';
// import debounce from 'lodash.debounce';

// export default function App() {
//   const [chatData, setChatData] = useState([]);
//   const [groupedData, setGroupedData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [scrollTargetIndex, setScrollTargetIndex] = useState(null);
//   const listRef = useRef();

//   useEffect(() => {
//     fetch('/chat.json')
//       .then(res => res.json())
//       .then(data => {
//         const sortedData = data.sort((a, b) =>
//           new Date(a.date.split('/').reverse().join('-')) - new Date(b.date.split('/').reverse().join('-'))
//         );
//         setChatData(sortedData);
//         const grouped = groupByDate(sortedData);
//         setGroupedData(grouped);
//         setFilteredData(grouped);
//       });
//   }, []);

//   useEffect(() => {
//     if (scrollTargetIndex !== null && listRef.current) {
//       listRef.current.scrollToItem(scrollTargetIndex, 'start');
//     }
//   }, [scrollTargetIndex]);

//   const handleSearch = useCallback(
//     debounce((date, text) => {
//       let targetIndex = null;
//       if (!date && !text) {
//         setFilteredData(groupedData);
//         setScrollTargetIndex(null);
//         return;
//       }

//       const result = {};
//       let currentIndex = 0;

//       for (let [groupDate, messages] of Object.entries(groupedData)) {
//         const formattedDate = date ? date.split('-').reverse().join('/') : null;
//         let matchFound = false;

//         if (date && groupDate === formattedDate) {
//           result[groupDate] = messages;
//           if (targetIndex === null) targetIndex = currentIndex;
//           matchFound = true;
//         } else if (!date) {
//           const filteredMsgs = messages.filter(msg =>
//             msg.message.toLowerCase().includes(text.toLowerCase())
//           );
//           if (filteredMsgs.length > 0) {
//             result[groupDate] = filteredMsgs;
//             if (targetIndex === null) targetIndex = currentIndex + 1;
//             matchFound = true;
//           }
//         }

//         if (matchFound) {
//           currentIndex += 1 + messages.length;
//         } else {
//           currentIndex += 1 + messages.length;
//         }
//       }

//       setFilteredData(result);
//       setScrollTargetIndex(targetIndex);
//     }, 300),
//     [groupedData]
//   );

//   const allMessages = Object.entries(filteredData).flatMap(([date, msgs]) => [
//     { type: 'date', date },
//     ...msgs.map(msg => ({ type: 'msg', ...msg })),
//   ]);

//   const getItemSize = index => {
//     const item = allMessages[index];
//     if (item.type === 'date') return 60;
//     const messageLength = item.message.length;
//     if (messageLength < 50) return 120;
//     if (messageLength < 100) return 160;
//     if (messageLength < 200) return 200;
//     return 260;
//   };

//   const Row = ({ index, style }) => {
//     const item = allMessages[index];

//     if (item.type === 'date') {
//       return (
//         <div style={{ ...style, padding: '10px 0' }} className="flex justify-center">
//           <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs sm:text-sm text-white shadow-md">
//             {item.date}
//           </span>
//         </div>
//       );
//     }

//     return (
//       <div style={{ ...style, padding: '15px 10px' }}>
//         <ChatMessage msg={item} />
//       </div>
//     );
//   };

//   const scrollToTop = () => listRef.current.scrollToItem(0, 'start');
//   const scrollToBottom = () => listRef.current.scrollToItem(allMessages.length - 1, 'end');

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       <BubbleBackground />
//       <div className="absolute w-full p-2 sm:p-4 md:p-6 z-10">
//         <SearchBar onSearch={handleSearch} />

//         {/* Chat container */}
//         <div className="mt-6 p-2 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 h-[75vh] w-full max-w-7xl mx-auto overflow-hidden">
//           <div className="h-full overflow-y-auto pr-1">
//             <List
//               height={500}
//               itemCount={allMessages.length}
//               itemSize={getItemSize}
//               width={'100%'}
//               ref={listRef}
//             >
//               {Row}
//             </List>
//           </div>
//         </div>

//         {/* Arrow buttons */}
//         <div className="flex justify-center gap-4 mt-3 mb-2">
//           <button onClick={scrollToTop} className="p-3 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg hover:scale-110 transition">
//             <FaArrowUp className="text-white text-lg" />
//           </button>
//           <button onClick={scrollToBottom} className="p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-lg hover:scale-110 transition">
//             <FaArrowDown className="text-white text-lg" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import BubbleBackground from './components/BubbleBackground';
// import ChatMessage from './components/ChatMessage';
// import SearchBar from './components/SearchBar';
// import { groupByDate } from './utils/groupByDate';
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import { VariableSizeList as List } from 'react-window';
// import debounce from 'lodash.debounce';

// export default function App() {
//   const [chatData, setChatData] = useState([]);
//   const [filteredMessages, setFilteredMessages] = useState([]);
//   const listRef = useRef();

//   useEffect(() => {
//     fetch('/chat.json')
//       .then(res => res.json())
//       .then(data => {
//         const sortedData = data.sort((a, b) =>
//           new Date(a.date.split('/').reverse().join('-')) - new Date(b.date.split('/').reverse().join('-'))
//         );
//         setChatData(sortedData);
//       });
//   }, []);

//   // Convert flat chat data into flat list with date separators
//   const generateAllMessages = (data) => {
//     const grouped = groupByDate(data);
//     return Object.entries(grouped).flatMap(([date, msgs]) => [
//       { type: 'date', date },
//       ...msgs.map(msg => ({ type: 'msg', ...msg })),
//     ]);
//   };

//   const allMessages = generateAllMessages(chatData);
//   const messagesToRender = filteredMessages.length > 0 ? filteredMessages : allMessages;

//   const handleSearch = useCallback(
//     debounce((date, text) => {
//       let filtered = [];

//       if (!date && !text) {
//         setFilteredMessages([]);
//         return;
//       }

//       for (let i = 0; i < allMessages.length; i++) {
//         const item = allMessages[i];

//         if (item.type === 'date' && date) {
//           const formattedDate = date.split('-').reverse().join('/');
//           if (item.date === formattedDate) {
//             setFilteredMessages(allMessages);
//             listRef.current.scrollToItem(i, 'start');
//             return;
//           }
//         }

//         if (item.type === 'msg' && text) {
//           if (item.message.toLowerCase().includes(text.toLowerCase())) {
//             setFilteredMessages(allMessages);
//             listRef.current.scrollToItem(i, 'start');
//             return;
//           }
//         }
//       }

//       // If no match found
//       setFilteredMessages([]);
//     }, 300),
//     [allMessages]
//   );

//   const getItemSize = index => {
//     const item = messagesToRender[index];
//     if (item.type === 'date') return 60;
//     const messageLength = item.message.length;
//     if (messageLength < 50) return 120;
//     if (messageLength < 100) return 160;
//     if (messageLength < 200) return 200;
//     return 260;
//   };

//   const Row = ({ index, style }) => {
//     const item = messagesToRender[index];

//     if (item.type === 'date') {
//       return (
//         <div style={{ ...style, padding: '10px 0' }} className="flex justify-center">
//           <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs sm:text-sm text-white shadow-md">
//             {item.date}
//           </span>
//         </div>
//       );
//     }

//     return (
//       <div style={{ ...style, padding: '15px 10px' }}>
//         <ChatMessage msg={item} />
//       </div>
//     );
//   };

//   const scrollToTop = () => listRef.current.scrollToItem(0, 'start');
//   const scrollToBottom = () => listRef.current.scrollToItem(messagesToRender.length - 1, 'end');

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       <BubbleBackground />
//       <div className="absolute w-full p-2 sm:p-4 md:p-6 z-10">
//         <SearchBar onSearch={handleSearch} />

//         <div className="mt-6 p-2 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 h-[75vh] w-full max-w-7xl mx-auto overflow-hidden">
//           <div className="h-full overflow-y-auto pr-1">
//             <List
//               height={500}
//               itemCount={messagesToRender.length}
//               itemSize={getItemSize}
//               width={'100%'}
//               ref={listRef}
//             >
//               {Row}
//             </List>
//           </div>
//         </div>

//         <div className="flex justify-center gap-4 mt-3 mb-2">
//           <button onClick={scrollToTop} className="p-3 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg hover:scale-110 transition">
//             <FaArrowUp className="text-white text-lg" />
//           </button>
//           <button onClick={scrollToBottom} className="p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-lg hover:scale-110 transition">
//             <FaArrowDown className="text-white text-lg" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }








// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import BubbleBackground from './components/BubbleBackground';
// import ChatMessage from './components/ChatMessage';
// import SearchBar from './components/SearchBar';
// import { groupByDate } from './utils/groupByDate';
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import { VariableSizeList as List } from 'react-window';
// import debounce from 'lodash.debounce';

// export default function App() {
//   const [chatData, setChatData] = useState([]);
//   const [filteredMessages, setFilteredMessages] = useState([]);
//   const listRef = useRef();

//   // Convert input date to match chat.json format (DD/MM/YY)
//   const convertInputDateToDataFormat = (inputDate) => {
//     if (!inputDate) return null;
//     const [year, month, day] = inputDate.split("-");
//     return `${day}/${month}/${year.slice(-2)}`;
//   };

//   useEffect(() => {
//     fetch('/chat.json')
//       .then(res => res.json())
//       .then(data => {
//         const sortedData = data.sort((a, b) =>
//           new Date(a.date.split('/').reverse().join('-')) - new Date(b.date.split('/').reverse().join('-'))
//         );
//         setChatData(sortedData);
//       });
//   }, []);

//   const generateAllMessages = (data) => {
//     const grouped = groupByDate(data);
//     return Object.entries(grouped).flatMap(([date, msgs]) => [
//       { type: 'date', date },
//       ...msgs.map(msg => ({ type: 'msg', ...msg })),
//     ]);
//   };

//   const allMessages = generateAllMessages(chatData);
//   const messagesToRender = filteredMessages.length > 0 ? filteredMessages : allMessages;

//   const handleSearch = useCallback(
//     debounce((date, text) => {
//       const formattedDate = convertInputDateToDataFormat(date);
//       let foundIndex = -1;

//       for (let i = 0; i < allMessages.length; i++) {
//         const item = allMessages[i];

//         if (item.type === 'date' && formattedDate) {
//           if (item.date === formattedDate) {
//             foundIndex = i;
//             break;
//           }
//         }

//         if (item.type === 'msg' && text) {
//           if (item.message.toLowerCase().includes(text.toLowerCase())) {
//             foundIndex = i;
//             break;
//           }
//         }
//       }

//       if (foundIndex !== -1) {
//         setFilteredMessages(allMessages); // keep entire data for scrolling context
//         listRef.current.scrollToItem(foundIndex, 'start');
//       } else {
//         setFilteredMessages([]); // nothing matched
//       }
//     }, 300),
//     [allMessages]
//   );

//   const getItemSize = index => {
//     const item = messagesToRender[index];
//     if (item.type === 'date') return 60;
//     const messageLength = item.message.length;
//     if (messageLength < 50) return 120;
//     if (messageLength < 100) return 160;
//     if (messageLength < 200) return 200;
//     return 260;
//   };

//   const Row = ({ index, style }) => {
//     const item = messagesToRender[index];

//     if (item.type === 'date') {
//       return (
//         <div style={{ ...style, padding: '10px 0' }} className="flex justify-center">
//           <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs sm:text-sm text-white shadow-md">
//             {item.date}
//           </span>
//         </div>
//       );
//     }

//     return (
//       <div style={{ ...style, padding: '15px 10px' }}>
//         <ChatMessage msg={item} />
//       </div>
//     );
//   };

//   const scrollToTop = () => listRef.current.scrollToItem(0, 'start');
//   const scrollToBottom = () => listRef.current.scrollToItem(messagesToRender.length - 1, 'end');

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       <BubbleBackground />
//       <div className="absolute w-full p-2 sm:p-4 md:p-6 z-10">
//         <SearchBar onSearch={handleSearch} />

//         <div className="mt-6 p-2 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 h-[75vh] w-full max-w-7xl mx-auto overflow-hidden">
//           <div className="h-full overflow-y-auto pr-1">
//             <List
//               height={500}
//               itemCount={messagesToRender.length}
//               itemSize={getItemSize}
//               width={'100%'}
//               ref={listRef}
//             >
//               {Row}
//             </List>
//           </div>
//         </div>

//         <div className="flex justify-center gap-4 mt-3 mb-2">
//           <button onClick={scrollToTop} className="p-3 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg hover:scale-110 transition">
//             <FaArrowUp className="text-white text-lg" />
//           </button>
//           <button onClick={scrollToBottom} className="p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-lg hover:scale-110 transition">
//             <FaArrowDown className="text-white text-lg" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import BubbleBackground from './components/BubbleBackground';
// import ChatMessage from './components/ChatMessage';
// import SearchBar from './components/SearchBar';
// import { groupByDate } from './utils/groupByDate';
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import { VariableSizeList as List } from 'react-window';
// import debounce from 'lodash.debounce';

// export default function App() {
//   const [chatData, setChatData] = useState([]);
//   const [filteredMessages, setFilteredMessages] = useState([]);
//   const listRef = useRef();

//   const convertInputDateToDataFormat = (inputDate) => {
//     if (!inputDate) return null;
//     const [year, month, day] = inputDate.split("-");
//     return `${day}/${month}/${year.slice(-2)}`;
//   };

//   useEffect(() => {
//     fetch('/chat.json')
//       .then(res => res.json())
//       .then(data => {
//         const sortedData = data.sort((a, b) =>
//           new Date(a.date.split('/').reverse().join('-')) - new Date(b.date.split('/').reverse().join('-'))
//         );
//         setChatData(sortedData);
//       });
//   }, []);

//   const generateAllMessages = (data) => {
//     const grouped = groupByDate(data);
//     return Object.entries(grouped).flatMap(([date, msgs]) => [
//       { type: 'date', date },
//       ...msgs.map(msg => ({ type: 'msg', ...msg })),
//     ]);
//   };

//   const allMessages = generateAllMessages(chatData);
//   const messagesToRender = filteredMessages.length > 0 ? filteredMessages : allMessages;

//   const handleSearch = useCallback(
//     debounce((date, text) => {
//       const formattedDate = convertInputDateToDataFormat(date);
//       let foundIndex = -1;

//       for (let i = 0; i < allMessages.length; i++) {
//         const item = allMessages[i];

//         if (item.type === 'date' && formattedDate) {
//           if (item.date === formattedDate) {
//             foundIndex = i;
//             break;
//           }
//         }

//         if (item.type === 'msg' && text) {
//           if (item.message.toLowerCase().includes(text.toLowerCase())) {
//             foundIndex = i;
//             break;
//           }
//         }
//       }

//       if (foundIndex !== -1) {
//         setFilteredMessages(allMessages);
//         listRef.current.scrollToItem(foundIndex, 'start');
//       } else {
//         setFilteredMessages([]);
//       }
//     }, 300),
//     [allMessages]
//   );

//   // ✨ Improved dynamic height calculation
//   const getItemSize = index => {
//     const item = messagesToRender[index];
//     if (item.type === 'date') return 60;

//     const messageLength = item.message.length;
//     const lineHeight = 22; // approximate line height
//     const charPerLine = 40;
//     const estimatedLines = Math.ceil(messageLength / charPerLine);
//     const baseHeight = 50;
//     const padding = 40;

//     return baseHeight + estimatedLines * lineHeight + padding;
//   };

//   const Row = ({ index, style }) => {
//     const item = messagesToRender[index];

//     if (item.type === 'date') {
//       return (
//         <div style={{ ...style, padding: '10px 0' }} className="flex justify-center">
//           <span className="px-3 flex justify-center py-1 h-8 w-30 bg-white/20 backdrop-blur rounded-2xl text-[18px] sm:text-sm text-white shadow-md">
//             {item.date}
//           </span>
//         </div>
//       );
//     }

//     return (
//       <div style={{ ...style, padding: '20px 15px' }}>
//         <ChatMessage msg={item} />
//       </div>
//     );
//   };

//   const scrollToTop = () => listRef.current.scrollToItem(0, 'start');
//   const scrollToBottom = () => listRef.current.scrollToItem(messagesToRender.length - 1, 'end');

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       <BubbleBackground />

//       <div className="absolute w-full p-2 sm:p-4 md:p-6 z-10">
//         <SearchBar onSearch={handleSearch} />

//         <div className="mt-6 p-2 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 h-[75vh] w-full max-w-7xl mx-auto overflow-hidden">
//           <div className="h-full pr-1">
//             <List
//               height={window.innerHeight * 0.65}
//               itemCount={messagesToRender.length}
//               itemSize={getItemSize}
//               width={'100%'}
//               ref={listRef}
//             >
//               {Row}
//             </List>
//           </div>
//         </div>
// {/* 
//         <div className="flex justify-center gap-4 mt-3 mb-2">
//           <button onClick={scrollToTop} className="p-3 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg hover:scale-110 transition">
//             <FaArrowUp className="text-white text-lg" />
//           </button>
//           <button onClick={scrollToBottom} className="p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-lg hover:scale-110 transition">
//             <FaArrowDown className="text-white text-lg" />
//           </button>
//         </div> */}
//         <div className="flex justify-center gap-4  mb-6 sm:mb-4">
//           <button onClick={scrollToTop} className="p-3 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg hover:scale-110 transition">
//     <FaArrowUp className="text-white text-lg" />
//   </button>
//   <button onClick={scrollToBottom} className="p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-lg hover:scale-110 transition">
//     <FaArrowDown className="text-white text-lg" />
//   </button>
// </div>

//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState, useRef, useCallback } from 'react';
import BubbleBackground from './components/BubbleBackground';
import ChatMessage from './components/ChatMessage';
import SearchBar from './components/SearchBar';
import { groupByDate } from './utils/groupByDate';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { VariableSizeList as List } from 'react-window';
import debounce from 'lodash.debounce';

export default function App() {
  const [chatData, setChatData] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [listHeight, setListHeight] = useState(500);
  const listRef = useRef();

  // Calculate dynamic height safely for react-window
  useEffect(() => {
    const handleResize = () => {
      const calculatedHeight = window.innerHeight - 250; // Adjust as per your header and searchbar size
      setListHeight(calculatedHeight);
    };

    handleResize(); // initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const convertInputDateToDataFormat = (inputDate) => {
    if (!inputDate) return null;
    const [year, month, day] = inputDate.split("-");
    return `${day}/${month}/${year.slice(-2)}`;
  };

  useEffect(() => {
    fetch('/chat.json')
      .then(res => res.json())
      .then(data => {
        const sortedData = data.sort((a, b) =>
          new Date(a.date.split('/').reverse().join('-')) - new Date(b.date.split('/').reverse().join('-'))
        );
        setChatData(sortedData);
      });
  }, []);

  const generateAllMessages = (data) => {
    const grouped = groupByDate(data);
    return Object.entries(grouped).flatMap(([date, msgs]) => [
      { type: 'date', date },
      ...msgs.map(msg => ({ type: 'msg', ...msg })),
    ]);
  };

  const allMessages = generateAllMessages(chatData);
  const messagesToRender = filteredMessages.length > 0 ? filteredMessages : allMessages;

  const handleSearch = useCallback(
    debounce((date, text) => {
      const formattedDate = convertInputDateToDataFormat(date);
      let foundIndex = -1;

      for (let i = 0; i < allMessages.length; i++) {
        const item = allMessages[i];

        if (item.type === 'date' && formattedDate) {
          if (item.date === formattedDate) {
            foundIndex = i;
            break;
          }
        }

        if (item.type === 'msg' && text) {
          if (item.message.toLowerCase().includes(text.toLowerCase())) {
            foundIndex = i;
            break;
          }
        }
      }

      if (foundIndex !== -1) {
        setFilteredMessages(allMessages);
        listRef.current.scrollToItem(foundIndex, 'start');
      } else {
        setFilteredMessages([]);
      }
    }, 300),
    [allMessages]
  );

  const getItemSize = index => {
    const item = messagesToRender[index];
    if (item.type === 'date') return 60;

    const messageLength = item.message.length;
    const lineHeight = 22;
    const charPerLine = 40;
    const estimatedLines = Math.ceil(messageLength / charPerLine);
    const baseHeight = 50;
    const padding = 40;

    return baseHeight + estimatedLines * lineHeight + padding;
  };

  const Row = ({ index, style }) => {
    const item = messagesToRender[index];

    if (item.type === 'date') {
      return (
        <div style={{ ...style, padding: '10px 0' }} className="flex justify-center">
          <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs sm:text-sm text-white shadow-md">
            {item.date}
          </span>
        </div>
      );
    }

    return (
      <div style={{ ...style, padding: '20px 15px' }}>
        <ChatMessage msg={item} />
      </div>
    );
  };

  const scrollToTop = () => listRef.current.scrollToItem(0, 'start');
  const scrollToBottom = () => listRef.current.scrollToItem(messagesToRender.length - 1, 'end');

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BubbleBackground />

      <div className="absolute w-full p-2 sm:p-4 md:p-6 z-10">
        <SearchBar onSearch={handleSearch} />

        <div className="mt-6 p-2 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 h-[75vh] w-full max-w-7xl mx-auto overflow-hidden">
          <div className="h-full pr-1 overscroll-contain">
            <List
              height={listHeight}
              itemCount={messagesToRender.length}
              itemSize={getItemSize}
              width={'100%'}
              ref={listRef}
            >
              {Row}
            </List>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-3 mb-6 sm:mb-4">
          <button onClick={scrollToTop} className="p-3 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg hover:scale-110 transition">
            <FaArrowUp className="text-white text-lg" />
          </button>
          <button onClick={scrollToBottom} className="p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-lg hover:scale-110 transition">
            <FaArrowDown className="text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}



// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import BubbleBackground from './components/BubbleBackground';
// import ChatMessage from './components/ChatMessage';
// import SearchBar from './components/SearchBar';
// import { groupByDate } from './utils/groupByDate';
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import { VariableSizeList as List } from 'react-window';
// import debounce from 'lodash.debounce';
// import useIsMobile from './hooks/useIsMobile';  // 👈 import custom hook

// export default function App() {
//   const isMobile = useIsMobile();

//   const [chatData, setChatData] = useState([]);
//   const [filteredMessages, setFilteredMessages] = useState([]);
//   const [listHeight, setListHeight] = useState(500);
//   const listRef = useRef();
//   const containerRef = useRef();

//   useEffect(() => {
//     const handleResize = () => {
//       const calculatedHeight = window.innerHeight - 250;
//       setListHeight(calculatedHeight);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const convertInputDateToDataFormat = (inputDate) => {
//     if (!inputDate) return null;
//     const [year, month, day] = inputDate.split("-");
//     return `${day}/${month}/${year.slice(-2)}`;
//   };

//   useEffect(() => {
//     fetch('/chat.json')
//       .then(res => res.json())
//       .then(data => {
//         const sortedData = data.sort((a, b) =>
//           new Date(a.date.split('/').reverse().join('-')) - new Date(b.date.split('/').reverse().join('-'))
//         );
//         setChatData(sortedData);
//       });
//   }, []);

//   const generateAllMessages = (data) => {
//     const grouped = groupByDate(data);
//     return Object.entries(grouped).flatMap(([date, msgs]) => [
//       { type: 'date', date },
//       ...msgs.map(msg => ({ type: 'msg', ...msg })),
//     ]);
//   };

//   const allMessages = generateAllMessages(chatData);
//   const messagesToRender = filteredMessages.length > 0 ? filteredMessages : allMessages;

//   const handleSearch = useCallback(
//     debounce((date, text) => {
//       const formattedDate = convertInputDateToDataFormat(date);
//       let foundIndex = -1;

//       for (let i = 0; i < allMessages.length; i++) {
//         const item = allMessages[i];
//         if (item.type === 'date' && formattedDate) {
//           if (item.date === formattedDate) {
//             foundIndex = i;
//             break;
//           }
//         }
//         if (item.type === 'msg' && text) {
//           if (item.message.toLowerCase().includes(text.toLowerCase())) {
//             foundIndex = i;
//             break;
//           }
//         }
//       }

//       if (foundIndex !== -1) {
//         setFilteredMessages(allMessages);
//         if (!isMobile) {
//           listRef.current.scrollToItem(foundIndex, 'start');
//         } else {
//           const target = document.getElementById(`msg-${foundIndex}`);
//           if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//       } else {
//         setFilteredMessages([]);
//       }
//     }, 300),
//     [allMessages, isMobile]
//   );

//   const getItemSize = index => {
//     const item = messagesToRender[index];
//     if (item.type === 'date') return 60;
//     const messageLength = item.message.length;
//     const lineHeight = 22;
//     const charPerLine = 40;
//     const estimatedLines = Math.ceil(messageLength / charPerLine);
//     const baseHeight = 50;
//     const padding = 40;
//     return baseHeight + estimatedLines * lineHeight + padding;
//   };

//   const Row = ({ index, style }) => {
//     const item = messagesToRender[index];
//     if (item.type === 'date') {
//       return (
//         <div style={{ ...style, padding: '10px 0' }} className="flex justify-center">
//           <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs sm:text-sm text-white shadow-md">
//             {item.date}
//           </span>
//         </div>
//       );
//     }
//     return (
//       <div style={{ ...style, padding: '20px 15px' }}>
//         <ChatMessage msg={item} />
//       </div>
//     );
//   };

//   const scrollToTop = () => {
//     if (isMobile) {
//       containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       listRef.current.scrollToItem(0, 'start');
//     }
//   };

//   const scrollToBottom = () => {
//     if (isMobile) {
//       containerRef.current.scrollTo({ top: 999999, behavior: 'smooth' });
//     } else {
//       listRef.current.scrollToItem(messagesToRender.length - 1, 'end');
//     }
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       <BubbleBackground />

//       <div className="absolute w-full p-2 sm:p-4 md:p-6 z-10">
//         <SearchBar onSearch={handleSearch} />

//         <div className="mt-6 p-2 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 h-[75vh] w-full max-w-7xl mx-auto overflow-hidden">

//           {isMobile ? (
//             <div ref={containerRef} className="h-full overflow-y-auto">
//               {messagesToRender.map((item, index) => (
//                 <div key={index} id={`msg-${index}`}>
//                   {item.type === 'date' ? (
//                     <div className="flex justify-center my-4">
//                       <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs sm:text-sm text-white shadow-md">
//                         {item.date}
//                       </span>
//                     </div>
//                   ) : (
//                     <div className="p-4">
//                       <ChatMessage msg={item} />
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="h-full pr-1 overscroll-contain">
//               <List
//                 height={listHeight}
//                 itemCount={messagesToRender.length}
//                 itemSize={getItemSize}
//                 width={'100%'}
//                 ref={listRef}
//               >
//                 {Row}
//               </List>
//             </div>
//           )}

//         </div>

//         <div className="flex justify-center gap-4 mt-3 mb-6 sm:mb-4">
//           <button onClick={scrollToTop} className="p-3 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg hover:scale-110 transition">
//             <FaArrowUp className="text-white text-lg" />
//           </button>
//           <button onClick={scrollToBottom} className="p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-lg hover:scale-110 transition">
//             <FaArrowDown className="text-white text-lg" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
