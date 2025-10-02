import React, { useRef, useEffect, useState, useCallback } from 'react';

// Original images array
const originalImages = [
  '/Group 26.png',
  '/Group 24 (1).png',
  '/Group 25 (1).png',
  '/Group 26.png',
  '/Group 24 (1).png',
  '/Group 25 (1).png',
  '/Group 26.png',
  '/Group 24 (1).png',
  '/Group 25 (1).png',
  
];

const ITEMS_VISIBLE = 3; 
const CLONE_COUNT = ITEMS_VISIBLE; // Number of items cloned on each side for seamless loop
const CENTER_OFFSET = 1; 

// Create the final list of slides: [clonedStart, ...originalImages, clonedEnd]
const clonedStart = originalImages.slice(-CLONE_COUNT); 
const clonedEnd = originalImages.slice(0, CLONE_COUNT);   
const allSlides = [...clonedStart, ...originalImages, ...clonedEnd];

const CarShowcase = () => {
  // Start at the first REAL image (index 3, after the 3 clones)
  const [currentIndex, setCurrentIndex] = useState(CLONE_COUNT); 
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslateX = useRef(0);
  const animationFrameId = useRef(null);
  const containerWidth = useRef(0);
  const DRAG_THRESHOLD = 50; 
  
  const getSlideWidth = () => containerWidth.current / ITEMS_VISIBLE;

  // Function to move to a specific index (index is the first item in the visible set)
  // 'smooth' controls whether the CSS transition is applied
const goToSlide = useCallback((index, smooth = true) => {
  currentTranslateX.current = -(index * getSlideWidth());
  
  if (trackRef.current) {
    trackRef.current.style.transition = smooth
      ? 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)' // smooth spring-like easing
      : 'none';
    trackRef.current.style.transform = `translateX(${currentTranslateX.current}px)`;
  }
}, []);

  const updateDimensions = useCallback(() => {
    if (trackRef.current && trackRef.current.parentElement) {
      containerWidth.current = trackRef.current.parentElement.clientWidth;
      // Initialize position based on the current index
      goToSlide(currentIndex, false); 
    }
  }, [currentIndex, goToSlide]);
    
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // --- LOOPER LOGIC ---
 useEffect(() => {
  const totalRealImages = originalImages.length;

  const handleTransitionEnd = () => {
    if (currentIndex === totalRealImages + CLONE_COUNT) {
      // Jump back to the start
      setCurrentIndex(CLONE_COUNT);
      goToSlide(CLONE_COUNT, false);
    }
    if (currentIndex === 0) {
      // Jump to the end
      const lastRealIndex = totalRealImages;
      setCurrentIndex(lastRealIndex);
      goToSlide(lastRealIndex, false);
    }
  };

  const track = trackRef.current;
  if (track) track.addEventListener("transitionend", handleTransitionEnd);

  goToSlide(currentIndex, true);

  return () => {
    if (track) track.removeEventListener("transitionend", handleTransitionEnd);
  };
}, [currentIndex, goToSlide]);
  // --- END LOOPER LOGIC ---


  const handlePointerDown = (clientX) => {
    isDragging.current = true;
    startX.current = clientX;
    if (trackRef.current) trackRef.current.style.transition = 'none';
    cancelAnimationFrame(animationFrameId.current);
  };

  const handlePointerMove = (clientX) => {
    if (!isDragging.current) return;
    const dragDistance = clientX - startX.current;
    const initialOffset = -(currentIndex * getSlideWidth());
    currentTranslateX.current = initialOffset + dragDistance;

    const renderDrag = () => {
        if (trackRef.current) trackRef.current.style.transform = `translateX(${currentTranslateX.current}px)`;
        if (isDragging.current) animationFrameId.current = requestAnimationFrame(renderDrag);
    };

    if (!animationFrameId.current) animationFrameId.current = requestAnimationFrame(renderDrag);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    cancelAnimationFrame(animationFrameId.current);
    animationFrameId.current = null;
    
    const initialOffset = -(currentIndex * getSlideWidth());
    const totalDragDistance = currentTranslateX.current - initialOffset;

    let newIndex = currentIndex;
    
    if (totalDragDistance > DRAG_THRESHOLD) {
      newIndex = currentIndex - 1; 
    } else if (totalDragDistance < -DRAG_THRESHOLD) {
      newIndex = currentIndex + 1; 
    }
    
    // Let the useEffect handle the transition and teleporting
    setCurrentIndex(newIndex);
  };
  
  const onMouseDown = (e) => handlePointerDown(e.clientX);
  const onMouseMove = (e) => handlePointerMove(e.clientX);
  const onMouseUp = handlePointerUp;

  const onTouchStart = (e) => handlePointerDown(e.touches[0].clientX);
  const onTouchMove = (e) => handlePointerMove(e.touches[0].clientX);
  const onTouchEnd = handlePointerUp;

  // Calculate the currently focused view index relative to the original images
  const focusedViewIndex = (currentIndex - CLONE_COUNT + originalImages.length) % originalImages.length;


  return (
    <div className=" bg-black flex flex-col items-center justify-center pt-20 pb-10 px-4  font-inter">
      <div className="w-full max-w-[1600px] ">
      
        <div 
          className="relative overflow-hidden rounded-xl shadow-2xl select-none cursor-grab active:cursor-grabbing"
 
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseUp} 
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
        >
          <div
            ref={trackRef}
            className="flex items-center" 
            style={{ width: `${(100 / ITEMS_VISIBLE) * allSlides.length}%` }} 
          >
            {allSlides.map((src, index) => {
                const isCenter = index === currentIndex + CENTER_OFFSET;
                
              const imageClass = `w-full h-auto object-cover transition-all duration-700 cubic-bezier(0.22, 1, 0.36, 1) ${
  isCenter
    ? 'scale-[1.15] opacity-100 drop-shadow-2xl'
    : 'scale-90 opacity-90'
}`;

                const zIndexClass = isCenter ? 'z-50 relative' : 'z-20 relative';

                return (
                    <div 
                        key={index} 
                        className={`flex-shrink-0 flex justify-center items-center py-8 ${zIndexClass}`} 
                        style={{ width: `${100 / allSlides.length}%` }} 
                    >
                        <img
                            src={src}
                            alt={`Car View ${index + 1}`}
                            className={imageClass}
                            draggable="false"
                            onLoad={index === 0 ? updateDimensions : undefined}
                        />
                    </div>
                );
            })}
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

const App = () => <CarShowcase />;
export default App;
