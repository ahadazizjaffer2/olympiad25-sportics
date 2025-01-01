// import { useRef, useEffect, useState } from 'react';

// const Squares = ({
//   direction = 'right',
//   speed = 1,
//   borderColor = '#66D6FF',
//   hoverFillColor = '#00a8ff',  
// }) => {
//   const canvasRef = useRef(null);
//   const requestRef = useRef(null);
//   const squareSize = 50; // Square size set to 50px
//   const numSquaresX = useRef();
//   const numSquaresY = useRef();
//   const gridOffset = useRef({ x: 0, y: 0 });
//   const [hoveredSquare, setHoveredSquare] = useState(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     const resizeCanvas = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//       numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
//       numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
//     };

//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();

//     const drawGrid = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       for (let x = 0; x < numSquaresX.current; x++) {
//         for (let y = 0; y < numSquaresY.current; y++) {
//           const squareX = (x * squareSize) + (gridOffset.current.x % squareSize);
//           const squareY = (y * squareSize) + (gridOffset.current.y % squareSize);

//           // Fill square if hovered
//           if (hoveredSquare && hoveredSquare.x === x && hoveredSquare.y === y) {
//             ctx.fillStyle = hoverFillColor;
//             ctx.fillRect(squareX, squareY, squareSize, squareSize);
//           }

//           // Set the border color
//           ctx.strokeStyle = borderColor;
//           ctx.strokeRect(squareX, squareY, squareSize, squareSize);
//         }
//       }

//       // Draw radial gradient overlay
//       const gradient = ctx.createRadialGradient(
//         canvas.width / 2,
//         canvas.height / 2,
//         0,
//         canvas.width / 2,
//         canvas.height / 2,
//         Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
//       );
//       gradient.addColorStop(0, 'rgba(f, f, f, 0.5)'); 
//       gradient.addColorStop(1, 'rgba(f, f, f, 0.9)'); 

//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     };

//     const updateAnimation = () => {
//       switch (direction) {
//         case 'right':
//           gridOffset.current.x -= speed;
//           break;
//         case 'left':
//           gridOffset.current.x += speed;
//           break;
//         case 'down':
//           gridOffset.current.y += speed;
//           break;
//         case 'up':
//           gridOffset.current.y -= speed;
//           break;
//         case 'diagonal':
//           gridOffset.current.x -= speed;
//           gridOffset.current.y -= speed;
//           break;
//         default:
//           break;
//       }

//       if (Math.abs(gridOffset.current.x) > squareSize) gridOffset.current.x = 0;
//       if (Math.abs(gridOffset.current.y) > squareSize) gridOffset.current.y = 0;

//       drawGrid();
//       requestRef.current = requestAnimationFrame(updateAnimation);
//     };

//     // Track mouse hover
//     const handleMouseMove = (event) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouseX = event.clientX - rect.left;
//       const mouseY = event.clientY - rect.top;

//       // Calculate which square is being hovered over
//       const hoveredSquareX = Math.floor(
//         (mouseX - (gridOffset.current.x % squareSize)) / squareSize
//       );
//       const hoveredSquareY = Math.floor(
//         (mouseY - (gridOffset.current.y % squareSize)) / squareSize
//       );

//       setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY });
//     };

//     // Clear hover state when mouse leaves the canvas
//     const handleMouseLeave = () => {
//       setHoveredSquare(null);
//     };

//     canvas.addEventListener('mousemove', handleMouseMove);
//     canvas.addEventListener('mouseleave', handleMouseLeave);

//     requestRef.current = requestAnimationFrame(updateAnimation);

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       cancelAnimationFrame(requestRef.current);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       canvas.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, [direction, speed, borderColor, hoverFillColor, hoveredSquare]);

//   return <canvas ref={canvasRef} className=" w-full h-full border-none block"></canvas>;
// };

// export default Squares;

import { useRef, useEffect, useState } from 'react';

const Squares = ({
  direction = 'right',
  speed = 0.2,
  borderColor = '#66D6FF'
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const squareSize = 100; // Square size set to 50px
  const numSquaresX = useRef();
  const numSquaresY = useRef();
  const gridOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < numSquaresX.current; x++) {
        for (let y = 0; y < numSquaresY.current; y++) {
          const squareX = (x * squareSize) + (gridOffset.current.x % squareSize);
          const squareY = (y * squareSize) + (gridOffset.current.y % squareSize);

          // Draw the square border
          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }
    };

    const updateAnimation = () => {
      // Animate based on the direction
      switch (direction) {
        case 'right':
          gridOffset.current.x -= speed;
          break;
        case 'left':
          gridOffset.current.x += speed;
          break;
        case 'down':
          gridOffset.current.y += speed;
          break;
        case 'up':
          gridOffset.current.y -= speed;
          break;
        case 'diagonal':
          gridOffset.current.x -= speed;
          gridOffset.current.y -= speed;
          break;
        default:
          break;
      }

      // Reset grid offset if it goes beyond the size of one square
      if (Math.abs(gridOffset.current.x) > squareSize) gridOffset.current.x = 0;
      if (Math.abs(gridOffset.current.y) > squareSize) gridOffset.current.y = 0;

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
    };
  }, [direction, speed, borderColor]);

  return <canvas ref={canvasRef} className="w-full h-full border-none block"></canvas>;
};

export default Squares;
